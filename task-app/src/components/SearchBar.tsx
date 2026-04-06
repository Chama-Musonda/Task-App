import { Search } from "lucide-react"

const SearchBar = () => {
  return (
    <div className="bg-surface-low flex justify-center items-center rounded-full min-h-8 h-[80%] ml-8 p-2 max-w-[120px]">
        <Search className="text-gray-500 w-4 h-4 sm:w-5 sm:h-5"/>
        <input type="text" placeholder="Search task..."/>
    </div>
  )
}

export default SearchBar