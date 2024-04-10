import Sidebar from '../components/sidebar.components'
import Dashboard from '../components/dashboard.components'

const MainPage = () => {
    return (
         <section className='mainPage'>
        
        <Sidebar />

        <Dashboard />
      
      </section> 
    )
}

export default MainPage;