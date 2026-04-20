"use client"

import { motion } from "framer-motion"
import { Lock, ShieldCheck } from "lucide-react"

const EASE = [0.22, 1, 0.36, 1] as const

const VIEW_W = 640
const VIEW_H = 440

// Column geometry
const INPUT_X = 30
const INPUT_W = 108
const MODEL_X = 200
const MODEL_W = 240
const AGENT_X = 500
const AGENT_W = 108

const INPUTS = [
  { label: "SCADA tags", sub: "24k tag schema" },
  { label: "MES batches", sub: "genealogy, specs" },
  { label: "SOP corpus", sub: "ops procedures" },
]

const AGENTS = [
  { label: "Demand", sub: "ERP · tier 01" },
  { label: "OEE", sub: "MES · tier 02" },
  { label: "Sensor", sub: "SCADA · tier 03" },
]

// Transformer stack: 6 layers visualized as horizontal bars
const LAYER_COUNT = 6

export function LLMModelDiagram() {
  const inputStep = 72
  const agentStep = 72
  const inputStartY = 110
  const agentStartY = 110

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className="relative w-full max-w-[640px] mx-auto"
    >
      <div className="rounded-2xl border border-border bg-card shadow-xl shadow-foreground/5 overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/50">
          <div className="flex items-center gap-2.5">
            <Lock className="w-3.5 h-3.5 text-foreground" />
            <span className="text-sm font-mono text-foreground">contextweaver-7b · mfg</span>
          </div>
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--orange)]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground">
              Local · Running
            </span>
          </motion.div>
        </div>

        <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="w-full h-auto bg-background/30">
          <defs>
            {/* Subtle gradient for model block */}
            <linearGradient id="modelGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.2 0.008 60)" />
              <stop offset="100%" stopColor="oklch(0.15 0.006 60)" />
            </linearGradient>
            {/* Glow filter for accent layer */}
            <filter id="accentGlow" x="-20%" y="-50%" width="140%" height="200%">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>

          {/* ── Column headers ── */}
          <motion.g
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <text
              x={INPUT_X + INPUT_W / 2}
              y="40"
              textAnchor="middle"
              fontSize="9"
              fontWeight="700"
              fontFamily="ui-monospace, monospace"
              letterSpacing="2.5"
              fill="var(--muted-foreground)"
            >
              YOUR DATA
            </text>
            <text
              x={MODEL_X + MODEL_W / 2}
              y="40"
              textAnchor="middle"
              fontSize="9"
              fontWeight="700"
              fontFamily="ui-monospace, monospace"
              letterSpacing="2.5"
              fill="var(--muted-foreground)"
            >
              SMALL LANGUAGE MODEL
            </text>
            <text
              x={AGENT_X + AGENT_W / 2}
              y="40"
              textAnchor="middle"
              fontSize="9"
              fontWeight="700"
              fontFamily="ui-monospace, monospace"
              letterSpacing="2.5"
              fill="var(--muted-foreground)"
            >
              AGENTS
            </text>
          </motion.g>

          {/* ── Input source chips ── */}
          {INPUTS.map((inp, i) => {
            const y = inputStartY + i * inputStep
            return (
              <motion.g
                key={`in-${i}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1, ease: EASE }}
              >
                <rect
                  x={INPUT_X}
                  y={y}
                  width={INPUT_W}
                  height="46"
                  rx="10"
                  fill="var(--card)"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                <circle cx={INPUT_X + 12} cy={y + 14} r="2" fill="var(--orange)" />
                <text
                  x={INPUT_X + 20}
                  y={y + 17}
                  fontSize="10"
                  fontWeight="700"
                  fill="var(--foreground)"
                >
                  {inp.label}
                </text>
                <text
                  x={INPUT_X + 12}
                  y={y + 34}
                  fontSize="8"
                  fill="var(--muted-foreground)"
                  fontFamily="ui-monospace, monospace"
                >
                  {inp.sub}
                </text>
              </motion.g>
            )
          })}

          {/* ── Input → Model arrows with flowing particles ── */}
          {INPUTS.map((_, i) => {
            const y = inputStartY + i * inputStep + 23
            const x1 = INPUT_X + INPUT_W
            const x2 = MODEL_X
            return (
              <g key={`in-arrow-${i}`}>
                <line
                  x1={x1}
                  y1={y}
                  x2={x2}
                  y2={y}
                  stroke="var(--border)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                {/* Flowing particle */}
                <motion.circle
                  r="2.5"
                  fill="var(--orange)"
                  initial={{ cx: x1, cy: y, opacity: 0 }}
                  animate={{
                    cx: [x1, x2],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay: 1.0 + i * 0.35,
                    times: [0, 0.1, 0.9, 1],
                    ease: "easeInOut",
                  }}
                />
              </g>
            )
          })}

          {/* ── SLM model block ── */}
          <motion.g
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
          >
            {/* Outer frame */}
            <rect
              x={MODEL_X}
              y="70"
              width={MODEL_W}
              height="310"
              rx="14"
              fill="url(#modelGrad)"
              stroke="var(--foreground)"
              strokeWidth="1"
            />

            {/* Model header band */}
            <rect
              x={MODEL_X}
              y="70"
              width={MODEL_W}
              height="36"
              rx="14"
              fill="oklch(0.12 0.006 60)"
            />
            <rect
              x={MODEL_X}
              y="92"
              width={MODEL_W}
              height="14"
              fill="oklch(0.12 0.006 60)"
            />

            <text
              x={MODEL_X + 14}
              y="92"
              fontSize="11"
              fontWeight="800"
              fill="var(--background)"
              letterSpacing="0.5"
            >
              contextweaver-7b
            </text>
            <text
              x={MODEL_X + MODEL_W - 14}
              y="92"
              textAnchor="end"
              fontSize="8"
              fontWeight="600"
              fontFamily="ui-monospace, monospace"
              fill="oklch(0.95 0.004 80 / 0.6)"
              letterSpacing="1.5"
            >
              base: llama-3-8b
            </text>

            {/* Transformer layer stack */}
            {Array.from({ length: LAYER_COUNT }).map((_, li) => {
              const layerY = 124 + li * 22
              const isAccent = li === 2 || li === 4
              return (
                <motion.g key={`layer-${li}`}>
                  <rect
                    x={MODEL_X + 18}
                    y={layerY}
                    width={MODEL_W - 36}
                    height="16"
                    rx="3"
                    fill="oklch(0.2 0.008 60)"
                    stroke="oklch(0.3 0.008 60)"
                    strokeWidth="0.6"
                  />
                  {/* Layer fill activity bar */}
                  <motion.rect
                    x={MODEL_X + 20}
                    y={layerY + 2}
                    height="12"
                    rx="2"
                    fill={isAccent ? "var(--orange)" : "oklch(0.7 0.008 60)"}
                    initial={{ width: 0 }}
                    whileInView={{ width: (MODEL_W - 40) * (0.5 + Math.random() * 0.45) }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 1.0 + li * 0.08,
                      ease: EASE,
                    }}
                  />
                  {/* Pulse overlay on accent layers */}
                  {isAccent && (
                    <motion.rect
                      x={MODEL_X + 18}
                      y={layerY}
                      width={MODEL_W - 36}
                      height="16"
                      rx="3"
                      fill="var(--orange)"
                      animate={{ opacity: [0, 0.18, 0] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: li * 0.5,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                  <text
                    x={MODEL_X + 24}
                    y={layerY + 11}
                    fontSize="7"
                    fontFamily="ui-monospace, monospace"
                    fill="oklch(0.98 0.003 80 / 0.7)"
                    letterSpacing="1.5"
                  >
                    L{li + 1}
                  </text>
                  <text
                    x={MODEL_X + MODEL_W - 22}
                    y={layerY + 11}
                    textAnchor="end"
                    fontSize="7"
                    fontFamily="ui-monospace, monospace"
                    fill="oklch(0.98 0.003 80 / 0.5)"
                    letterSpacing="0.5"
                  >
                    {isAccent ? "attn + ffn" : li % 2 === 0 ? "attn" : "ffn"}
                  </text>
                </motion.g>
              )
            })}

            {/* Fine-tuning indicator (LoRA adapters) */}
            <motion.g
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <rect
                x={MODEL_X + 18}
                y="268"
                width={MODEL_W - 36}
                height="24"
                rx="3"
                fill="oklch(0.62 0.21 35 / 0.15)"
                stroke="var(--orange)"
                strokeWidth="0.8"
                strokeDasharray="3 2"
              />
              <text
                x={MODEL_X + 26}
                y="283"
                fontSize="8"
                fontWeight="700"
                fontFamily="ui-monospace, monospace"
                fill="var(--orange)"
                letterSpacing="1.5"
              >
                LoRA · fine-tuned on your data
              </text>
            </motion.g>

            {/* Model stats row */}
            <motion.g
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              <line
                x1={MODEL_X + 18}
                y1="306"
                x2={MODEL_X + MODEL_W - 18}
                y2="306"
                stroke="oklch(0.3 0.008 60)"
                strokeWidth="0.6"
              />
              {[
                { k: "ctx", v: "32k" },
                { k: "params", v: "7B" },
                { k: "$/tok", v: "0" },
                { k: "eval", v: "94.6%" },
              ].map((stat, si) => {
                const sx = MODEL_X + 18 + si * ((MODEL_W - 36) / 4)
                return (
                  <g key={stat.k}>
                    <text
                      x={sx + (MODEL_W - 36) / 8}
                      y="322"
                      textAnchor="middle"
                      fontSize="8"
                      fontFamily="ui-monospace, monospace"
                      fill="oklch(0.98 0.003 80 / 0.5)"
                      letterSpacing="1"
                    >
                      {stat.k}
                    </text>
                    <text
                      x={sx + (MODEL_W - 36) / 8}
                      y="340"
                      textAnchor="middle"
                      fontSize="13"
                      fontWeight="800"
                      fill="var(--background)"
                    >
                      {stat.v}
                    </text>
                  </g>
                )
              })}
              {/* Privacy footer */}
              <rect
                x={MODEL_X + 18}
                y="352"
                width={MODEL_W - 36}
                height="20"
                rx="4"
                fill="oklch(0.1 0.006 60)"
                stroke="oklch(0.3 0.008 60)"
                strokeWidth="0.5"
              />
              <circle cx={MODEL_X + 28} cy="362" r="2" fill="oklch(0.6 0.18 145)" />
              <text
                x={MODEL_X + 36}
                y="366"
                fontSize="8"
                fontFamily="ui-monospace, monospace"
                fill="oklch(0.98 0.003 80 / 0.75)"
                letterSpacing="1"
              >
                egress: none · your VPC · air-gap ready
              </text>
            </motion.g>
          </motion.g>

          {/* ── Model → Agent arrows with flowing particles ── */}
          {AGENTS.map((_, i) => {
            const y = agentStartY + i * agentStep + 23
            const x1 = MODEL_X + MODEL_W
            const x2 = AGENT_X
            return (
              <g key={`out-arrow-${i}`}>
                <line
                  x1={x1}
                  y1={y}
                  x2={x2}
                  y2={y}
                  stroke="var(--border)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <motion.circle
                  r="2.5"
                  fill="var(--orange)"
                  initial={{ cx: x1, cy: y, opacity: 0 }}
                  animate={{
                    cx: [x1, x2],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay: 1.4 + i * 0.35,
                    times: [0, 0.1, 0.9, 1],
                    ease: "easeInOut",
                  }}
                />
              </g>
            )
          })}

          {/* ── Agent pills ── */}
          {AGENTS.map((a, i) => {
            const y = agentStartY + i * agentStep
            return (
              <motion.g
                key={`agent-${i}`}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.1 + i * 0.1, ease: EASE }}
              >
                <rect
                  x={AGENT_X}
                  y={y}
                  width={AGENT_W}
                  height="46"
                  rx="10"
                  fill="var(--card)"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                <motion.circle
                  cx={AGENT_X + 12}
                  cy={y + 14}
                  r="2"
                  fill="var(--orange)"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
                <text
                  x={AGENT_X + 20}
                  y={y + 17}
                  fontSize="10"
                  fontWeight="700"
                  fill="var(--foreground)"
                >
                  {a.label}
                </text>
                <text
                  x={AGENT_X + 12}
                  y={y + 34}
                  fontSize="8"
                  fill="var(--muted-foreground)"
                  fontFamily="ui-monospace, monospace"
                >
                  {a.sub}
                </text>
              </motion.g>
            )
          })}
        </svg>

        {/* Footer strip */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-border bg-background/40 text-[10px] font-mono text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3 h-3 text-foreground" />
            SOC 2 · HIPAA-ready
          </span>
          <span className="text-foreground/50">cw-inference.v2</span>
        </div>
      </div>
    </motion.div>
  )
}
