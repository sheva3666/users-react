import { Route, Routes } from 'react-router'
import UsersPage from './components/UsersPage/UsersPage'
import './App.css'

const App = () => {

  return (
     <Routes>
        <Route path={"/"} element={<UsersPage/>} />
     </Routes>
  )
}

export default App
