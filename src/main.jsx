import ReactDOM from 'react-dom/client'
import { NavBar } from './components/common/NavBar'
import { BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <NavBar />

  </BrowserRouter>
)
