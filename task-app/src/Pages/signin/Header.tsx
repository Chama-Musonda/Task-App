import { MessageCircleQuestionMark } from "lucide-react"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f7f9fb] dark:bg-slate-950 font-headline antialiased">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tight text-[#2a3439] dark:text-slate-100">TaskFlow</div>
        <div className="flex items-center gap-4">
          <MessageCircleQuestionMark className="text-[#2a3439]/60 dark:text-slate-400 cursor-pointer active:scale-95 transition-transform" />
        </div>
      </div>
    </header>
  )
}

export default Header