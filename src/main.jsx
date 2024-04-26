import ReactDOM from 'react-dom/client'
import { NavBar } from './components/common/NavBar'
import { BrowserRouter} from 'react-router-dom'
import {MainLayout} from './components/layout/MainLayout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <NavBar />
    <MainLayout />

  </BrowserRouter>
)
