const Footer = () => {
  return (
    <footer className="bg-[#f0f4f7] dark:bg-slate-800/50 w-full py-12">
      {/* remember to add md:flex-row */}
      <div className="flex flex-col flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-4">
        {/*  remember to add md:items-start*/}
        <div className="flex flex-col gap-2 items-center items-start">
          <span className="font-headline font-semibold text-[#2a3439]">TaskFlow</span>
          <span className="font-label text-xs text-[#2a3439]/60 dark:text-slate-500">© 2024 TaskFlow. The Mindful Canvas.</span>
        </div>
        <div className="flex gap-8">
          <a className="font-label text-xs text-[#2a3439]/60 hover:text-[#4d44e3] transition-colors" href="#">Privacy Policy</a>
          <a className="font-label text-xs text-[#2a3439]/60 hover:text-[#4d44e3] transition-colors" href="#">Terms of Service</a>
          <a className="font-label text-xs text-[#2a3439]/60 hover:text-[#4d44e3] transition-colors" href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer