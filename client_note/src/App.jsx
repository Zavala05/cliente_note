import { Route, Routes} from 'react-router-dom'
import Home from './pages/main'
import Login from './pages/login'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import RegisterPage from './pages/RegisterPage'
export default function App() {
return(
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/HomePage" element={<HomePage />}/> 
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
  </Routes>
)

}