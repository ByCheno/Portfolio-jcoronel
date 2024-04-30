import ReactDOM from 'react-dom/client'
import { NavBar } from './components/common/NavBar'
import { BrowserRouter } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { Footer } from './components/common/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <NavBar />
    
    <MainLayout />

    <Footer />

  </BrowserRouter>
)
