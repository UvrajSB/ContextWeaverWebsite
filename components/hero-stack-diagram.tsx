"use client"

import { motion } from "framer-motion"
import { Cpu, Factory, Building2 } from "lucide-react"

const EASE = [0.22, 1, 0.36, 1] as const

type Tier = {
  key: string
  tierNum: string
  tierName: string
  tierSub: string
  system: string
  systemSub: string
  icon: typeof Cpu
  agentChips: string[]
  sysFill: string
  sysTop: string
  sysSide: string
  sysY: number
  blockX: number
}

const VIEW_W = 740
const VIEW_H = 620
const BLOCK_W = 280
const SYS_H = 78
const DEPTH = 14
const BASE_X = 200

// Semantic graph band occupies the space between system-top and chips
const GRAPH_TOP_OFFSET = 48     // band top = sysY - 48
const GRAPH_BOTTOM_OFFSET = 16  // band bottom = sysY - 16
const CHIPS_OFFSET = 74         // chips center = sysY - 74
const CHIP_H = 20
const CHIP_GAP = 5
const CHIP_INSET = 10

const tiers: Tier[] = [
  {
    key: "erp",
    tierNum: "01",
    tierName: "Strategic",
    tierSub: "Planning · business goals",
    system: "ERP / CRM",
    systemSub: "Supply chain · Planning",
    icon: Building2,
    agentChips: ["Demand", "Margin", "Inventory"],
    sysFill: "oklch(0.62 0.21 35)",
    sysTop: "oklch(0.72 0.19 37)",
    sysSide: "oklch(0.48 0.2 32)",
    sysY: 150,
    blockX: 40,
  },
  {
    key: "mes",
    tierNum: "02",
    tierName: "Operational",
    tierSub: "Workflows · coordination",
    system: "MES",
    systemSub: "Quality · Workflows · Coordination",
    icon: Factory,
    agentChips: ["OEE", "Quality", "Scheduling"],
    sysFill: "oklch(0.3 0.008 60)",
    sysTop: "oklch(0.4 0.008 60)",
    sysSide: "oklch(0.22 0.006 60)",
    sysY: 320,
    blockX: 20,
  },
  {
    key: "scada",
    tierNum: "03",
    tierName: "Execution",
    tierSub: "Machines · shopfloor",
    system: "SCADA",
    systemSub: "PLCs · Sensors · Control Systems",
    icon: Cpu,
    agentChips: ["Sensor Cleanse", "Alarm", "Health"],
    sysFill: "var(--foreground)",
    sysTop: "oklch(0.3 0.008 60)",
    sysSide: "oklch(0.1 0.006 60)",
    sysY: 490,
    blockX: 0,
  },
]

// Normalized (0–1) graph layout — same shape used for every tier
// x spans the system block width, y spans the graph band height
const semanticNodes: { x: number; y: number; accent?: boolean }[] = [
  { x: 0.04, y: 0.55 },
  { x: 0.14, y: 0.15 },
  { x: 0.22, y: 0.80 },
  { x: 0.34, y: 0.40 },
  { x: 0.44, y: 0.75, accent: true },
  { x: 0.54, y: 0.20 },
  { x: 0.64, y: 0.55 },
  { x: 0.74, y: 0.25, accent: true },
  { x: 0.82, y: 0.75 },
  { x: 0.92, y: 0.40 },
]

const semanticEdges: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [2, 3], [2, 4],
  [3, 4], [3, 5], [4, 5], [4, 6], [5, 6],
  [5, 7], [6, 7], [6, 8], [7, 8], [7, 9],
  [8, 9],
]

// Indices of nodes that have a tick descending to the system block
const groundingTicks = [2, 4, 6, 8]

function systemBlock(xOff: number, y: number, h: number) {
  const x = BASE_X + xOff
  const front = `M ${x} ${y} L ${x + BLOCK_W} ${y} L ${x + BLOCK_W} ${y + h} L ${x} ${y + h} Z`
  const top = `M ${x} ${y} L ${x + DEPTH} ${y - DEPTH} L ${x + BLOCK_W + DEPTH} ${y - DEPTH} L ${x + BLOCK_W} ${y} Z`
  const side = `M ${x + BLOCK_W} ${y} L ${x + BLOCK_W + DEPTH} ${y - DEPTH} L ${x + BLOCK_W + DEPTH} ${y + h - DEPTH} L ${x + BLOCK_W} ${y + h} Z`
  return { front, top, side, x, y }
}

export function HeroStackDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
      className="relative w-full max-w-[740px] mx-auto"
    >
      <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="w-full h-auto">
        <defs>
          <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.2 0.005 60 / 0.18)" />
            <stop offset="100%" stopColor="oklch(0.2 0.005 60 / 0)" />
          </radialGradient>
        </defs>

        {/* ── Context layer rail (left) ── */}
        <motion.g
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          <rect x="10" y="60" width="22" height="490" rx="2" fill="var(--foreground)" />
          <text
            x="21"
            y="305"
            textAnchor="middle"
            fill="var(--background)"
            fontSize="10"
            fontWeight="600"
            letterSpacing="2.5"
            transform="rotate(-90 21 305)"
          >
            CONTEXT LAYER
          </text>
        </motion.g>

        {/* ── Left tier labels ── */}
        {tiers.map((tier, i) => {
          const labelY = tier.sysY + SYS_H / 2
          return (
            <motion.g
              key={`label-${tier.key}`}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + i * 0.1, ease: EASE }}
            >
              <circle cx="32" cy={labelY} r="3.5" fill="var(--orange)" />
              <line x1="36" y1={labelY} x2="50" y2={labelY} stroke="var(--border)" strokeWidth="1" />
              <text
                x="58"
                y={labelY - 12}
                fill="var(--muted-foreground)"
                fontSize="9"
                fontWeight="500"
                fontFamily="ui-monospace, monospace"
                letterSpacing="1.5"
              >
                {tier.tierNum}
              </text>
              <text
                x="58"
                y={labelY + 2}
                fill="var(--foreground)"
                fontSize="14"
                fontWeight="700"
                letterSpacing="-0.3"
              >
                {tier.tierName}
              </text>
              <text
                x="58"
                y={labelY + 16}
                fill="var(--muted-foreground)"
                fontSize="10"
                fontWeight="400"
              >
                {tier.tierSub}
              </text>
            </motion.g>
          )
        })}

        {/* ── Tiers rendered bottom-up ── */}
        {tiers
          .slice()
          .reverse()
          .map((tier, revealOrder) => {
            const sys = systemBlock(tier.blockX, tier.sysY, SYS_H)
            const graphTop = tier.sysY - GRAPH_TOP_OFFSET
            const graphBottom = tier.sysY - GRAPH_BOTTOM_OFFSET
            const graphH = graphBottom - graphTop
            const graphLeft = sys.x + 14
            const graphRight = sys.x + BLOCK_W - 14
            const graphW = graphRight - graphLeft

            // Resolve node absolute positions for this tier
            const nodes = semanticNodes.map((n) => ({
              x: graphLeft + n.x * graphW,
              y: graphTop + n.y * graphH,
              accent: n.accent,
            }))

            const chipsRowCenterY = tier.sysY - CHIPS_OFFSET
            const chipCount = tier.agentChips.length
            const chipAvailW = BLOCK_W - CHIP_INSET * 2
            const chipW = (chipAvailW - CHIP_GAP * (chipCount - 1)) / chipCount

            return (
              <motion.g
                key={tier.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 + revealOrder * 0.18, ease: EASE }}
              >
                {/* ── SYSTEM BLOCK (isometric 3D) ── */}
                <path d={sys.side} fill={tier.sysSide} />
                <path d={sys.top} fill={tier.sysTop} />
                <path d={sys.front} fill={tier.sysFill} />

                <text
                  x={sys.x + 18}
                  y={sys.y + SYS_H / 2 + 4}
                  fill="oklch(0.95 0.004 80 / 0.55)"
                  fontSize="11"
                  fontWeight="500"
                  fontFamily="ui-monospace, monospace"
                  letterSpacing="1.5"
                >
                  {tier.tierNum}
                </text>
                <text
                  x={sys.x + BLOCK_W / 2 + 16}
                  y={sys.y + SYS_H / 2 - 1}
                  textAnchor="middle"
                  fill="var(--background)"
                  fontSize="22"
                  fontWeight="800"
                  letterSpacing="1"
                >
                  {tier.system}
                </text>
                <text
                  x={sys.x + BLOCK_W / 2 + 16}
                  y={sys.y + SYS_H / 2 + 17}
                  textAnchor="middle"
                  fill="oklch(0.95 0.004 80 / 0.75)"
                  fontSize="9.5"
                  fontWeight="500"
                  letterSpacing="0.8"
                >
                  {tier.systemSub}
                </text>

                {/* ── SEMANTIC CONTEXT GRAPH ── */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + revealOrder * 0.18, ease: EASE }}
                >
                  {/* Eyebrow label on the left */}
                  <text
                    x={sys.x - 6}
                    y={graphTop + graphH / 2 + 3}
                    textAnchor="end"
                    fill="var(--muted-foreground)"
                    fontSize="7.5"
                    fontWeight="700"
                    fontFamily="ui-monospace, monospace"
                    letterSpacing="2"
                  >
                    CONTEXT
                  </text>
                  <text
                    x={sys.x - 6}
                    y={graphTop + graphH / 2 + 13}
                    textAnchor="end"
                    fill="var(--muted-foreground)"
                    fontSize="7.5"
                    fontWeight="700"
                    fontFamily="ui-monospace, monospace"
                    letterSpacing="2"
                  >
                    GRAPH
                  </text>

                  {/* Grounding ticks: descending dashes from specific nodes down to system top */}
                  {groundingTicks.map((nodeIdx, ti) => {
                    const n = nodes[nodeIdx]
                    return (
                      <motion.line
                        key={`tick-${revealOrder}-${ti}`}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: 1.1 + revealOrder * 0.18 + ti * 0.04,
                          ease: EASE,
                        }}
                        x1={n.x}
                        y1={n.y + 3}
                        x2={n.x}
                        y2={tier.sysY - 2}
                        stroke="var(--muted-foreground)"
                        strokeWidth="0.7"
                        strokeDasharray="1.5 2"
                        opacity="0.5"
                      />
                    )
                  })}

                  {/* Edges */}
                  {semanticEdges.map(([a, b], ei) => {
                    const nA = nodes[a]
                    const nB = nodes[b]
                    return (
                      <motion.line
                        key={`edge-${revealOrder}-${ei}`}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.45 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.75 + revealOrder * 0.18 + ei * 0.02,
                          ease: EASE,
                        }}
                        x1={nA.x}
                        y1={nA.y}
                        x2={nB.x}
                        y2={nB.y}
                        stroke="var(--foreground)"
                        strokeWidth="0.8"
                      />
                    )
                  })}

                  {/* Nodes */}
                  {nodes.map((n, i) => (
                    <motion.g
                      key={`node-${revealOrder}-${i}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 1.0 + revealOrder * 0.18 + i * 0.03,
                        ease: EASE,
                      }}
                    >
                      {n.accent && (
                        <motion.circle
                          cx={n.x}
                          cy={n.y}
                          r="5"
                          fill="var(--orange)"
                          opacity="0.25"
                          animate={{ opacity: [0.15, 0.45, 0.15] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: revealOrder * 0.3 + i * 0.2,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                      <circle
                        cx={n.x}
                        cy={n.y}
                        r={n.accent ? 2.8 : 2}
                        fill={n.accent ? "var(--orange)" : "var(--foreground)"}
                      />
                    </motion.g>
                  ))}
                </motion.g>

                {/* ── AGENT CHIPS (floating pills) ── */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 + revealOrder * 0.18, ease: EASE }}
                >
                  <text
                    x={sys.x - 6}
                    y={chipsRowCenterY + 3}
                    textAnchor="end"
                    fill="var(--muted-foreground)"
                    fontSize="7.5"
                    fontWeight="700"
                    fontFamily="ui-monospace, monospace"
                    letterSpacing="2"
                  >
                    AGENTS
                  </text>

                  {tier.agentChips.map((chip, k) => {
                    const chipX = sys.x + CHIP_INSET + k * (chipW + CHIP_GAP)
                    const chipY = chipsRowCenterY - CHIP_H / 2
                    const chipCenterX = chipX + chipW / 2
                    // Target: one of the top-row graph nodes closest to this chip's x
                    const topNodes = nodes
                      .map((n, idx) => ({ n, idx }))
                      .filter(({ n }) => n.y < graphTop + graphH * 0.45)
                    const nearest = topNodes.reduce((a, b) =>
                      Math.abs(b.n.x - chipCenterX) < Math.abs(a.n.x - chipCenterX) ? b : a
                    , topNodes[0])

                    return (
                      <motion.g
                        key={`chip-${revealOrder}-${k}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 1.15 + revealOrder * 0.18 + k * 0.08,
                          ease: EASE,
                        }}
                      >
                        {/* Dashed connector from chip down to nearest top-row graph node */}
                        <motion.line
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.5 }}
                          transition={{
                            duration: 0.5,
                            delay: 1.3 + revealOrder * 0.18 + k * 0.08,
                            ease: EASE,
                          }}
                          x1={chipCenterX}
                          y1={chipY + CHIP_H + 1}
                          x2={nearest.n.x}
                          y2={nearest.n.y - 3}
                          stroke="var(--muted-foreground)"
                          strokeWidth="0.8"
                          strokeDasharray="2 2.5"
                        />

                        <rect
                          x={chipX}
                          y={chipY}
                          width={chipW}
                          height={CHIP_H}
                          rx={CHIP_H / 2}
                          fill="var(--card)"
                          stroke="var(--border)"
                          strokeWidth="0.9"
                        />
                        <motion.circle
                          cx={chipX + 9}
                          cy={chipY + CHIP_H / 2}
                          r="2"
                          fill="var(--orange)"
                          animate={{ opacity: [0.35, 1, 0.35] }}
                          transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            delay: revealOrder * 0.2 + k * 0.25,
                            ease: "easeInOut",
                          }}
                        />
                        <text
                          x={chipX + chipW / 2 + 4}
                          y={chipY + CHIP_H / 2 + 3.5}
                          textAnchor="middle"
                          fill="var(--foreground)"
                          fontSize="9.5"
                          fontWeight="600"
                        >
                          {chip}
                        </text>
                      </motion.g>
                    )
                  })}
                </motion.g>
              </motion.g>
            )
          })}

        {/* Ground shadow */}
        <motion.ellipse
          initial={{ opacity: 0, scaleX: 0.8 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.3, ease: EASE }}
          cx="350"
          cy="590"
          rx="160"
          ry="10"
          fill="url(#groundShadow)"
        />
      </svg>
    </motion.div>
  )
}
