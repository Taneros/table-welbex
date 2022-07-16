import React, { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Main } from './components/Main'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Main />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
