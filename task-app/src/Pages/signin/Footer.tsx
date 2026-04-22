const Footer = () => {
  return (
    <footer className="w-full py-12 bg-[#f7f9fb] dark:bg-slate-950 font-body text-sm tracking-wide">
      {/* remember to add flex-col md:flex-row */}
      <div className="flex flex-row justify-between items-center px-8 max-w-7xl mx-auto space-y-4 md:space-y-0">
        <div className="text-lg font-bold text-[#2a3439]">TaskFlow</div>
        <div className="flex gap-8">
          <a className="text-[#2a3439]/40 dark:text-slate-500 hover:text-[#4d44e3] dark:hover:text-indigo-300 transition-all duration-200" href="#">Privacy</a>
          <a className="text-[#2a3439]/40 dark:text-slate-500 hover:text-[#4d44e3] dark:hover:text-indigo-300 transition-all duration-200" href="#">Terms</a>
          <a className="text-[#2a3439]/40 dark:text-slate-500 hover:text-[#4d44e3] dark:hover:text-indigo-300 transition-all duration-200" href="#">Support</a>
        </div>
        <div className="text-[#2a3439]/40 dark:text-slate-500">© 2026 TaskFlow. Designed for Intentional Calm.</div>
      </div>
    </footer>
  )
}

export default Footer