import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar.jsx'

function App() {
  return (
    <div className="flex">
      <Sidebar />
      
      <main className="flex-1 px-8 pb-8 pt-0">
        <Topbar title="Dashboard" />
            
        <Routes>
          <Route path="/" element={
            <div>
              {/* Dashboard content goes here */}
            </div>
          } />
        </Routes>
      </main>
    </div>
  )
}

export default App;