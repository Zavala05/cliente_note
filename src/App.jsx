import { Route, Routes} from 'react-router-dom'
import Home from './pages/main'
import LoginPage from './pages/login'
import HomePage from './pages/home'
import RegisterPage from './pages/RegisterPage'
export default function App() {
return(
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<LoginPage />}/>
    <Route path="/HomePage" element={<HomePage />}/>
    <Route path="/register" element={<RegisterPage />} />
  </Routes>
)

}