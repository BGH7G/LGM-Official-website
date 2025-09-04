export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="animate-pulse">
          <div className="flex gap-8 mb-8">
            <div className="w-48 h-48 bg-slate-200 rounded-lg"></div>
            <div className="flex-1">
              <div className="h-8 bg-slate-200 rounded w-1/2 mb-4"></div>
              <div className="h-4 bg-slate-200 rounded w-1/3 mb-6"></div>
              <div className="space-y-2">
                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                <div className="h-4 bg-slate-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-32 bg-slate-200 rounded"></div>
            <div className="h-32 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
