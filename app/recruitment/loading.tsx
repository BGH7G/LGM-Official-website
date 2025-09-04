export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-200 rounded w-1/2 mx-auto mb-6"></div>
          <div className="h-4 bg-slate-200 rounded w-1/3 mx-auto mb-12"></div>
          <div className="grid grid-cols-4 gap-6 mb-12">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="h-8 bg-slate-200 rounded w-16 mx-auto mb-2"></div>
                <div className="h-4 bg-slate-200 rounded w-20 mx-auto"></div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <div className="h-32 bg-slate-200 rounded"></div>
            <div className="h-32 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
