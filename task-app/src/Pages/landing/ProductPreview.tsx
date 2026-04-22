import { Check, Flower } from "lucide-react"

const ProductPreview = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 -mt-16 mb-32">
      {/* remember to add md:p-8*/}
      <div className="relative glass-sheet p-4 p-8 rounded-xl ghost-shadow overflow-hidden">
        <div className="bg-surface-container-low rounded-lg p-6 min-h-[400px]">
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-outline-variant/30"></div>
              <div className="w-3 h-3 rounded-full bg-outline-variant/30"></div>
              <div className="w-3 h-3 rounded-full bg-outline-variant/30"></div>
            </div>
            <div className="w-1/3 h-4 bg-outline-variant/10 rounded-full"></div>
          </div>
          {/* Bento-ish Task Preview remember to add md:grid-cols-3*/}
          <div className="grid grid-cols-1 grid-cols-3 gap-6">
            {/* remember to add md:col-span-2 */}
            <div className="col-span-2 space-y-6">
              <div className="bg-surface-container-lowest p-6 rounded-xl ghost-shadow flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
                    <Check className="text-primary text-sm" style={{fontVariationSettings: "'FILL' 1;"}} />
                  </div>
                  <span className="font-medium text-on-surface-variant line-through opacity-80">Finalize launch strategy for TaskFlow</span>
                </div>
                <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-semibold text-on-surface-variant">Today</span>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl ghost-shadow flex items-center justify-between group cursor-pointer hover:bg-surface-bright transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border-2 border-outline-variant"></div>
                  <span className="font-medium text-on-surface">Review design system accessibility</span>
                </div>
                <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-semibold">In Progress</span>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl ghost-shadow flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border-2 border-outline-variant"></div>
                  <span className="font-medium text-on-surface">Mindful meditation session</span>
                </div>
                <span className="bg-surface-container-high px-3 py-1 rounded-full text-xs font-semibold text-on-surface-variant">2:00 PM</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest/50 p-6 rounded-xl flex flex-col items-center justify-center text-center gap-4 border border-outline-variant/10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Flower className="icons-outlined text-primary text-3xl" />
              </div>
              <h4 className="font-headline font-bold text-on-surface">Calm Insight</h4>
              <p className="text-sm text-on-surface-variant">You've completed 4 focus blocks today. You are in flow.</p>
            </div>
          </div>
        </div>
        <img className="absolute top-0 right-0 w-full h-full object-cover -z-10 opacity-5" data-alt="minimalist overhead view of a clean workspace with a single laptop, a cup of coffee, and a green plant, soft natural morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM50_jdlBCEy0fE7nqRzWRSiZMU9ZwwAa1EFCmZ3JiGufSIu4V52cyBhvkIp4aTyeWVBZL6Qm2Mhng2y6DF3FXkGsCKZt0tdSykDSYGIbX_jaaFVvK-ERomMvIewjzgl52d3ApEN7svpE6JupIJKIIINWPhGr8Ro0npoeLeYuQ1od1ZPCJLsdV2oiNwh0EaMya-XBN5ChWk2XHPfO5fy_2SACTvAnw6sadEo8uVvmpyrNZ1wb9IB7u64lXSGKsUTgHte0NX2XOFpc" />
      </div>
    </section>
  )
}

export default ProductPreview