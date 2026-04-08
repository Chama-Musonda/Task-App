import AddTask from './AddTask'

const Dashboard = () => {
  return (
    <div>
      <div>
        <h1 className="text-[2.5rem]">My Tasks</h1>
        <p className="text-gray-500">Focus on what matters most today</p>
      </div>

      <AddTask />
    </div>
  )
}

export default Dashboard