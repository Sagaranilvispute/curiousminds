export function Logo() {
  return (
    <div className="relative flex items-center gap-3">
      <div className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-teal to-coral text-sm font-bold text-white shadow-glow">
        <span className="relative z-10">CM</span>
        <span className="absolute inset-0 rounded-2xl border border-white/20" />
        <span className="absolute -right-2 -top-2 h-5 w-5 animate-pulseSlow rounded-full bg-saffron/70" />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold tracking-[0.18em] text-coralDeep">
          CuriousMinds
        </span>
        <span className="text-xs text-muted">Learn beyond the textbook</span>
      </div>
    </div>
  );
}
