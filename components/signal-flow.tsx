"use client"

import { motion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as const

const stations = [
  { label: "Sensor", x: 40 },
  { label: "Historian", x: 240 },
  { label: "Semantic layer", x: 440 },
  { label: "Agent", x: 660 },
  { label: "Action", x: 860 },
]

export function SignalFlow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className="relative w-full"
    >
      <svg viewBox="0 0 920 100" className="w-full h-auto">
        {/* Track line */}
        <line
          x1="40"
          y1="50"
          x2="880"
          y2="50"
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />

        {/* Stations */}
        {stations.map((s, i) => (
          <g key={s.label}>
            <motion.circle
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1, ease: EASE }}
              cx={s.x}
              cy="50"
              r="8"
              fill="var(--card)"
              stroke="var(--foreground)"
              strokeWidth="1.5"
            />
            <motion.circle
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
              cx={s.x}
              cy="50"
              r="3"
              fill="var(--foreground)"
            />
            <motion.text
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              x={s.x}
              y="80"
              textAnchor="middle"
              fontSize="10"
              fontFamily="ui-monospace, monospace"
              fill="var(--muted-foreground)"
              letterSpacing="1"
            >
              {s.label.toUpperCase()}
            </motion.text>
          </g>
        ))}

        {/* Travelling pulse */}
        <motion.circle
          r="4"
          fill="var(--orange)"
          initial={{ cx: 40, cy: 50 }}
          animate={{ cx: [40, 240, 440, 660, 860] }}
          transition={{
            duration: 4,
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Trailing pulse */}
        <motion.circle
          r="4"
          fill="var(--orange)"
          opacity="0.4"
          initial={{ cx: 40, cy: 50 }}
          animate={{ cx: [40, 240, 440, 660, 860] }}
          transition={{
            duration: 4,
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
      </svg>
    </motion.div>
  )
}
