import {Routes, Route} from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Contacto from "./pages/Contacto"
import NotFound from "./pages/NotFound"


export default function App() {
  return(
    <div>
      <Navbar/>

      <main>
        <Routes>
          <Route
          path="/contacto"
          element={<Contacto/>}
          />
          <Route
          path="/"
          element={<Home/>}
          />
          <Route
          path="/*"
          element={<NotFound/>}
          />
        </Routes>
      </main>

    </div>
  )
}