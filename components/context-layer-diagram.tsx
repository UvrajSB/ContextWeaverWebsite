export function ContextLayerDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background card */}
      <rect x="20" y="20" width="360" height="260" rx="12" fill="currentColor" className="text-muted/50" />

      {/* Header */}
      <text x="40" y="50" className="text-foreground fill-current" fontSize="14" fontWeight="600">
        Context Layer
      </text>

      {/* Data sources - left */}
      <g>
        <rect
          x="40"
          y="80"
          width="70"
          height="32"
          rx="6"
          className="text-primary/10 fill-current"
          stroke="currentColor"
          strokeWidth="1"
          className="stroke-primary/30"
        />
        <text x="75" y="100" textAnchor="middle" className="text-foreground fill-current" fontSize="10">
          SCADA
        </text>

        <rect
          x="40"
          y="120"
          width="70"
          height="32"
          rx="6"
          className="text-primary/10 fill-current"
          stroke="currentColor"
          strokeWidth="1"
          className="stroke-primary/30"
        />
        <text x="75" y="140" textAnchor="middle" className="text-foreground fill-current" fontSize="10">
          Historian
        </text>

        <rect
          x="40"
          y="160"
          width="70"
          height="32"
          rx="6"
          className="text-primary/10 fill-current"
          stroke="currentColor"
          strokeWidth="1"
          className="stroke-primary/30"
        />
        <text x="75" y="180" textAnchor="middle" className="text-foreground fill-current" fontSize="10">
          ERP
        </text>

        <rect
          x="40"
          y="200"
          width="70"
          height="32"
          rx="6"
          className="text-primary/10 fill-current"
          stroke="currentColor"
          strokeWidth="1"
          className="stroke-primary/30"
        />
        <text x="75" y="220" textAnchor="middle" className="text-foreground fill-current" fontSize="10">
          CRM
        </text>
      </g>

      {/* Center - Context Layer */}
      <g>
        <rect
          x="150"
          y="100"
          width="100"
          height="120"
          rx="8"
          className="text-primary fill-current"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="2"
          className="stroke-primary"
        />
        <text x="200" y="130" textAnchor="middle" className="text-primary fill-current" fontSize="11" fontWeight="500">
          Shared
        </text>
        <text x="200" y="148" textAnchor="middle" className="text-primary fill-current" fontSize="11" fontWeight="500">
          Context
        </text>

        {/* Mini icons inside */}
        <circle cx="180" cy="175" r="8" className="text-primary/20 fill-current" />
        <circle cx="200" cy="175" r="8" className="text-primary/20 fill-current" />
        <circle cx="220" cy="175" r="8" className="text-primary/20 fill-current" />
        <text x="200" y="200" textAnchor="middle" className="text-muted-foreground fill-current" fontSize="8">
          Assets • Metrics • Memory
        </text>
      </g>

      {/* Right - Agents */}
      <g>
        <rect
          x="290"
          y="90"
          width="70"
          height="28"
          rx="6"
          className="text-primary/10 fill-current"
          stroke="currentColor"
          strokeWidth="1"
          className="stroke-primary/30"
        />
        <text x="325" y="108" textAnchor="middle" className="text-foreground fill-current" fontSize="9">
          Troubleshoot
        </text>

        <rect
          x="290"
          y="126"
          width="70"
          height="28"
          rx="6"
          className="text-primary/10 fill-current"
          stroke="currentColor"
          strokeWidth="1"
          className="stroke-primary/30"
        />
        <text x="325" y="144" textAnchor="middle" className="text-foreground fill-current" fontSize="9">
          Root Cause
        </text>

        <rect
          x="290"
          y="162"
          width="70"
          height="28"
          rx="6"
          className="text-primary/10 fill-current"
          stroke="currentColor"
          strokeWidth="1"
          className="stroke-primary/30"
        />
        <text x="325" y="180" textAnchor="middle" className="text-foreground fill-current" fontSize="9">
          Report
        </text>

        <rect
          x="290"
          y="198"
          width="70"
          height="28"
          rx="6"
          className="text-primary/10 fill-current"
          stroke="currentColor"
          strokeWidth="1"
          className="stroke-primary/30"
        />
        <text x="325" y="216" textAnchor="middle" className="text-foreground fill-current" fontSize="9">
          Guide
        </text>
      </g>

      {/* Connection lines */}
      <g className="stroke-muted-foreground" strokeWidth="1" strokeDasharray="4 2">
        <line x1="110" y1="96" x2="150" y2="120" />
        <line x1="110" y1="136" x2="150" y2="150" />
        <line x1="110" y1="176" x2="150" y2="170" />
        <line x1="110" y1="216" x2="150" y2="200" />

        <line x1="250" y1="130" x2="290" y2="104" />
        <line x1="250" y1="150" x2="290" y2="140" />
        <line x1="250" y1="170" x2="290" y2="176" />
        <line x1="250" y1="190" x2="290" y2="212" />
      </g>

      {/* Labels */}
      <text x="75" y="255" textAnchor="middle" className="text-muted-foreground fill-current" fontSize="9">
        Sources
      </text>
      <text x="200" y="255" textAnchor="middle" className="text-muted-foreground fill-current" fontSize="9">
        Context Layer
      </text>
      <text x="325" y="255" textAnchor="middle" className="text-muted-foreground fill-current" fontSize="9">
        Agents
      </text>
    </svg>
  )
}
