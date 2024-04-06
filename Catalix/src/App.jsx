
import './App.css'
import Sidebar from './components/sidebar.components'
import Dashboard from './components/dashboard.components'

function App() {

  return (
    <section className='mainPage'>
      
      {/* Side Navigation Panel */}
      
      <Sidebar />

      {/* Dashboard Panel */}

      <Dashboard />
      
    </section>
  )
}

export default App;
