import { Clipboard, Star, CheckCircle2Icon } from "lucide-react"

const SideBar = () => {
  return (
    <div className="flex flex-col text-gray-500 row-span-4 col-span-1">
      <span className="flex mb-2 text-primary-dim">
        <Clipboard className="mr-2"/>
        <a href="#"><span className="hidden sm:block">My Tasks</span></a>
      </span>

      <span className="flex mb-2">
        <Star className="mr-2"/>
        <a href="#"><span className="hidden sm:block">Important</span></a>
      </span>

      <span className="flex">
        <CheckCircle2Icon className="mr-2"/>
        <a href="#"><span className="hidden sm:block">completed</span></a>
      </span>
    </div>
  )
}

export default SideBar