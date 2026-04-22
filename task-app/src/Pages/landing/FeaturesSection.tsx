import { Focus, LayoutPanelLeft, Split } from "lucide-react"

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-32">
      <div className="text-center mb-20">
        {/* remember to add md:text-4xl */}
        <h2 className="font-headline text-3xl text-4xl font-bold text-on-surface mb-4">Crafted for Clarity</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
      </div>
      {/* remember to add md:grid-cols-3 */}
      <div className="grid grid-cols-1 grid-cols-3 gap-12">
        {/* Card 1 */}
        <div className="flex flex-col items-start text-left p-8 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors">
          <div className="w-14 h-14 rounded-full bg-surface-container-lowest flex items-center justify-center mb-6 ghost-shadow">
            <LayoutPanelLeft className="icons-outlined text-primary text-3xl" />
          </div>
          <h3 className="font-headline text-xl font-bold mb-3">Minimalist Design</h3>
          <p className="text-on-surface-variant leading-relaxed">
            An editorial approach to productivity. We eliminate the noise so you can focus on what truly matters.
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-start text-left p-8 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors">
          <div className="w-14 h-14 rounded-full bg-surface-container-lowest flex items-center justify-center mb-6 ghost-shadow">
            <Split className="icons-outlined text-primary text-3xl" />
          </div>
          <h3 className="font-headline text-xl font-bold mb-3">Smart Organization</h3>
          <p className="text-on-surface-variant leading-relaxed">
            Automatic prioritization and tonal hierarchy ensure your dashboard feels organized, never overwhelming.
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-start text-left p-8 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors">
          <div className="w-14 h-14 rounded-full bg-surface-container-lowest flex items-center justify-center mb-6 ghost-shadow">
            <Focus className="icons-outlined text-primary text-3xl" />
          </div>
          <h3 className="font-headline text-xl font-bold mb-3">Focused Deep Work</h3>
          <p className="text-on-surface-variant leading-relaxed">
            Integrated focus tools and mindful nudges help you maintain flow states throughout your workday.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection