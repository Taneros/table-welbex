import React, { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import Contacts from './pages/contacts'
import { HomePage } from './pages/homePage'
import TablePage from './pages/tablePage'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route exact path="/table" element={<TablePage />} />
        <Route exact path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
