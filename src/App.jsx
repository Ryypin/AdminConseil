/* import Navigation from './components/Navigation'; */
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Coaching } from './pages/coaching'
import { Location } from './pages/location'
import { LocationInfo } from './pages/location-infos'
import { Layout } from './Layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/location/:id" element={<LocationInfo />}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/coaching' element={<Coaching/>}/>
          <Route path='/locations' element={<Location/>}/>
        </Route>
      </Routes>
    </Router>
  )

}

export default App