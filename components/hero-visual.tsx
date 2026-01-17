"use client"

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main hero card with industrial image */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 aspect-[16/10] shadow-2xl">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Main content area with data streams visualization */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="relative w-full h-full">
            {/* Central context layer visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center w-full h-full">
                {/* Glowing center orb - Context Layer - Perfectly centered */}
                <div className="relative z-20">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/40 to-indigo-500/40 blur-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-300/60 to-indigo-400/60 backdrop-blur-sm border border-white/20 relative z-10 flex items-center justify-center">
                    <span className="text-xs font-semibold text-white/90">Context</span>
                  </div>
                </div>

                {/* Agent nodes around the center - positioned much closer */}
                {/* Top - SCADA */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60px] z-10">
                  <div className="w-16 h-16 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <span className="text-[10px] font-medium text-white/80 text-center px-2">SCADA</span>
                  </div>
                </div>
                {/* Right - ERP */}
                <div className="absolute top-1/2 left-1/2 translate-x-[60px] -translate-y-1/2 z-10">
                  <div className="w-16 h-16 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <span className="text-[10px] font-medium text-white/80 text-center px-2">ERP</span>
                  </div>
                </div>
                {/* Bottom - SOP */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[60px] z-10">
                  <div className="w-16 h-16 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <span className="text-[10px] font-medium text-white/80 text-center px-2">SOP</span>
                  </div>
                </div>
                {/* Left - CRM */}
                <div className="absolute top-1/2 left-1/2 -translate-x-[60px] -translate-y-1/2 z-10">
                  <div className="w-16 h-16 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <span className="text-[10px] font-medium text-white/80 text-center px-2">CRM</span>
                  </div>
                </div>

                {/* Connection lines from agents to center */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                      <stop offset="100%" stopColor="rgba(99, 102, 241, 0.1)" />
                    </linearGradient>
                  </defs>
                  {/* Lines from agents to center (50, 50) - closer positions */}
                  {/* Top to center */}
                  <line
                    x1="50"
                    y1="40"
                    x2="50"
                    y2="50"
                    stroke="url(#lineGradient)"
                    strokeWidth="0.3"
                    strokeDasharray="1 1"
                  />
                  {/* Right to center */}
                  <line
                    x1="60"
                    y1="50"
                    x2="50"
                    y2="50"
                    stroke="url(#lineGradient)"
                    strokeWidth="0.3"
                    strokeDasharray="1 1"
                  />
                  {/* Bottom to center */}
                  <line
                    x1="50"
                    y1="60"
                    x2="50"
                    y2="50"
                    stroke="url(#lineGradient)"
                    strokeWidth="0.3"
                    strokeDasharray="1 1"
                  />
                  {/* Left to center */}
                  <line
                    x1="40"
                    y1="50"
                    x2="50"
                    y2="50"
                    stroke="url(#lineGradient)"
                    strokeWidth="0.3"
                    strokeDasharray="1 1"
                  />
                  {/* Concentric circles centered at 50, 50 */}
                  <circle
                    cx="50"
                    cy="50"
                    r="12"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="0.2"
                    fill="none"
                    strokeDasharray="1 1"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="20"
                    stroke="rgba(255,255,255,0.04)"
                    strokeWidth="0.2"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* Floating glassmorphism cards */}
        {/* Top left - SCADA Agent Status */}
        <div className="absolute top-6 left-6 glass-dark rounded-2xl px-4 py-3 animate-float">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-300">
                <path
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">12</p>
              <p className="text-xs text-white/60">SCADA Agent</p>
              <p className="text-xs text-green-400">Active alarms</p>
            </div>
          </div>
        </div>

        {/* Top right - Production Throughput */}
        <div className="absolute top-6 right-6 glass-dark rounded-2xl px-4 py-3 animate-float-delayed">
          <div className="flex items-center gap-3">
            <div className="flex items-end gap-0.5 h-8">
              {[40, 60, 45, 80, 55, 70, 90, 65, 75, 85].map((h, i) => (
                <div key={i} className="w-1.5 bg-blue-400/60 rounded-full" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-blue-300">
                  <path
                    d="M3 3v18h18M7 16l4-4 4 4 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-xl font-bold text-white">94.2%</p>
              </div>
              <p className="text-xs text-white/60">OEE - Line 2</p>
            </div>
          </div>
        </div>

        {/* Left middle - Active Agents */}
        <div className="absolute top-1/2 -translate-y-1/2 left-6 glass-dark rounded-2xl px-4 py-3 animate-float-delayed-2">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex -space-x-1">
              <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-slate-700" />
              <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-slate-700" />
              <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-slate-700" />
              <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-slate-700" />
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-blue-300">
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-lg font-bold text-white">4 Active</p>
          </div>
          <p className="text-xs text-white/60">Operational Agents</p>
        </div>

        {/* Bottom left - Equipment Status */}
        <div className="absolute bottom-20 left-6 glass-dark rounded-2xl px-4 py-3 flex items-center gap-3 animate-float">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-emerald-200">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-emerald-300">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <p className="text-lg font-bold text-white">98.7%</p>
            </div>
            <p className="text-xs text-white/60">Uptime - Reactor A</p>
            <p className="text-xs text-white/60">ERP Agent monitoring</p>
          </div>
        </div>

        {/* Right middle - Production Metrics */}
        <div className="absolute top-1/2 -translate-y-1/2 right-6 glass-dark rounded-2xl px-4 py-3 animate-float-delayed">
          <div className="flex items-center gap-2 mb-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-purple-300">
              <path
                d="M3 3v18h18M7 16l4-4 4 4 6-6M7 12h10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="text-xl font-bold text-white">2,450</p>
            <p className="text-xs text-white/60">Units/hr</p>
            <p className="text-xs text-purple-400">Production Rate</p>
          </div>
        </div>

        {/* Bottom right - CTA button */}
        <div className="absolute bottom-6 right-6">
          <button className="flex items-center gap-3 bg-white rounded-full pl-5 pr-3 py-3 text-sm font-medium text-foreground hover:bg-white/90 transition-colors shadow-lg">
            Book a demo
            <span className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
