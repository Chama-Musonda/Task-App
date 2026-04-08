import Header from "./Header"
import SideBar from "./SideBar"

interface LayoutComponentProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutComponentProps) => {
  return (
    <div className="grid grid-cols-4 grid-rows-4">
      
      <Header />
      <SideBar />
      <div className="col-span-3 row-span-3">
        {children}
      </div>   
    </div>
  )
}

export default Layout