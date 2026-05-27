export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-background relative flex flex-col items-center overflow-x-hidden">
      <div className="bg-grid-spotlight pointer-events-none -z-30" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none -z-20" />

      <main className="flex-1 w-full max-w-[896px] border-l border-r border-border flex flex-col bg-[#0a0b10]/55 backdrop-blur-[1px] relative text-foreground">
        <div className="hidden md:block absolute top-0 bottom-0 left-[-56px] w-[56px] border-l border-r border-[#3b4b66] bg-blueprint-stripes opacity-70 pointer-events-none -z-10" />
        <div className="hidden md:block absolute top-0 bottom-0 right-[-56px] w-[56px] border-l border-r border-[#3b4b66] bg-blueprint-stripes opacity-70 pointer-events-none -z-10" />

        {/* Back link skeleton */}
        <div className="w-full px-6 md:px-8 pt-10 pb-4">
          <div className="h-4 w-32 rounded bg-card animate-pulse" />
        </div>

        {/* Hero skeleton */}
        <section className="w-full px-6 md:px-8 pt-6 pb-10 border-b border-border flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="h-3 w-24 rounded bg-card animate-pulse" />
            <div className="h-12 md:h-16 w-3/4 rounded-md bg-card animate-pulse" />
            <div className="h-4 w-2/3 rounded bg-card animate-pulse" />
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            <div className="h-8 w-24 rounded-full bg-card animate-pulse" />
            <div className="h-8 w-32 rounded-full bg-card animate-pulse" />
          </div>

          <div className="w-full aspect-video rounded-[10px] bg-card border border-border animate-pulse mt-2" />
        </section>

        {/* Content skeleton */}
        <section className="w-full px-6 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-border">
          <div className="md:col-span-2 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <div className="h-3 w-16 rounded bg-card animate-pulse" />
              <div className="h-4 w-full rounded bg-card animate-pulse" />
              <div className="h-4 w-11/12 rounded bg-card animate-pulse" />
              <div className="h-4 w-10/12 rounded bg-card animate-pulse" />
              <div className="h-4 w-9/12 rounded bg-card animate-pulse" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="h-3 w-24 rounded bg-card animate-pulse" />
              <div className="h-4 w-10/12 rounded bg-card animate-pulse" />
              <div className="h-4 w-9/12 rounded bg-card animate-pulse" />
              <div className="h-4 w-8/12 rounded bg-card animate-pulse" />
            </div>
          </div>

          <aside className="md:col-span-1 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <div className="h-3 w-20 rounded bg-card animate-pulse" />
              <div className="flex flex-wrap gap-2.5">
                <div className="h-8 w-16 rounded-full bg-card animate-pulse" />
                <div className="h-8 w-20 rounded-full bg-card animate-pulse" />
                <div className="h-8 w-14 rounded-full bg-card animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="h-3 w-12 rounded bg-card animate-pulse" />
              <div className="h-10 w-full rounded-[10px] bg-card animate-pulse" />
              <div className="h-10 w-full rounded-[10px] bg-card animate-pulse" />
            </div>
          </aside>
        </section>
      </main>
    </div>
  )
}
