export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-200 rounded w-3/4 mb-6"></div>
          <div className="h-4 bg-slate-200 rounded w-1/2 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
            <div className="h-4 bg-slate-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
