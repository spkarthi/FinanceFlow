import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<div>Dashboard placeholder</div>} />
        </Routes>
      </main>
    </div>
  )
}

export default App;