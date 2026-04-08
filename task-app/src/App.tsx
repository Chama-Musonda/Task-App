import Layout from "./components/Layout"
import Dashboard from "./Pages/dashboard/Dashboard"

function App() {
 
  return (
    <div className="bg-canvas p-2">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  )
}

export default App
