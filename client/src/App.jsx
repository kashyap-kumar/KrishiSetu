import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import ProtectedRoutes from './components/ProtectedRoutes'
import Home from './components/Home'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
