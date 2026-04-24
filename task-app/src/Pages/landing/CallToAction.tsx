import { Link } from "react-router-dom"

const CallToAction = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-32">
      <div className="bg-primary rounded-3xl p-12 md:p-20 relative overflow-hidden text-center text-on-primary">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">Ready to find your calm?</h2>
          <p className="text-lg opacity-90 mb-10">Join thousands of users who have traded chaos for clarity with TaskFlow.</p>
          <Link to="/signin/signup">
            <button className="bg-surface-container-lowest text-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all ghost-shadow cursor-pointer">
              Get Started for Free
            </button>
          </Link>
        </div>
        {/* Decorative Circle */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-black/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}

export default CallToAction