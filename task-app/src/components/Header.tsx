import SearchBar from "./SearchBar"

const Header = () => {
  return (
    <header className="flex justify-between font-display items-center">
      {/* Logo */}
      <div className="mr-4  min-w-[30%]">
        <h1 className="text-xl font-semibold text-primary">Task App</h1>
        <p className="text-gray-300 hidden sm:block">The Intentional Calm</p>
      </div>

      {/* Search Bar */}
      <SearchBar />

    </header>
  )
}

export default Header