import { Link } from "react-router-dom";

const TopNavBar = () => {
  return (
    <header className="w-full top-0 z-50 bg-[#f7f9fb] dark:bg-slate-900 sticky">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center gap-12">
          <span className="font-headline text-2xl font-bold text-[#2a3439] dark:text-slate-100 tracking-tight">TaskFlow</span>
          {/** hidden md:flex */}
          <div className="flex items-center gap-8 font-label text-sm font-medium tracking-tight">
            <a className="text-[#2a3439] dark:text-slate-400 opacity-80 hover:text-[#4d44e3] hover:opacity-100 transition-all duration-200" href="#">Features</a>
            <a className="text-[#2a3439] dark:text-slate-400 opacity-80 hover:text-[#4d44e3] hover:opacity-100 transition-all duration-200" href="#">Simplicity</a>
            <a className="text-[#2a3439] dark:text-slate-400 opacity-80 hover:text-[#4d44e3] hover:opacity-100 transition-all duration-200" href="#">Focus</a>
            <a className="text-[#2a3439] dark:text-slate-400 opacity-80 hover:text-[#4d44e3] hover:opacity-100 transition-all duration-200" href="#">Calm</a>
          </div>
        </div>
        <div className="flex items-center gap-6 font-label text-sm font-medium">
          <Link to="/signin/login">
            <button className="text-[#2a3439] dark:text-slate-400 opacity-80 hover:text-[#4d44e3] transition-all cursor-pointer">Login</button>
          </Link>
          
          <Link to="/signin/signup">
            <button className="action-gradient text-on-primary px-6 py-2.5 rounded-full font-semibold shadow-lg hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">Get Started</button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default TopNavBar