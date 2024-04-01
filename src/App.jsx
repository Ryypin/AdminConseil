/* import Navigation from './components/Navigation'; */
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Services } from './pages/services'
import { Coaching } from './pages/coaching'
import { Location } from './pages/location'
import { Tarifs } from './pages/tarifs'
import { Layout } from './Layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/coaching' element={<Coaching/>}/>
          <Route path='/locations' element={<Location/>}/>
          <Route path='/tarifs' element={<Tarifs/>}/>
        </Route>
      </Routes>
    </Router>
  )

}

export default App