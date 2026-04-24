import { ArrowDown, Lightbulb } from "lucide-react"
import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="max-w-3xl">
          {/* remember to add text-[2.75rem] md:text-[4rem] */}
          <h1 className="font-headline text-[2.75rem] md:text-[4rem] leading-[1.1] font-bold text-on-surface mb-8">
            The Mindful Canvas <br />
            <span className="text-primary italic">for Your Daily Tasks</span>
          </h1>
          {/* remember to add text-lg md:text-xl */}
          <p className="text-lg md:text-xl text-on-surface-variant font-body mb-10 leading-relaxed max-w-2xl">
            Experience the intentional calm of a productivity tool designed for focus and simplicity. No noise, just the path to your best work.
          </p>
          {/* remember to add flex-col sm:flex */}
          <div className="flex flex-row gap-4 items-start">
            <Link to="/signin/signup">
              <button className="action-gradient text-on-primary px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">
              Get Started for Free
              </button>
            </Link>
            
            <div className="flex items-center gap-3 px-6 py-4 rounded-full bg-surface-container-low text-on-surface-variant font-medium">
              <Lightbulb className="icons-outlined text-primary"/>
              <span className="text-sm">Start your journey with a single task.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full -z-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/4"></div>
      </div>
      <div className="absolute top-[72vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-default z-20">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary/80">Scroll</span>
        <div className="animate-scroll-bounce">
          <ArrowDown className="icons-outlined text-primary text-2xl font-light" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection