import "./App.css";

import React, { useState } from "react"
import Landing from "./comp/Landing";
import Newspage from "./comp/Newspage";
import Navbar from "./comp/Navbar";
import Newsletter from "./comp/Newsletter";
import Footer from "./comp/Footer";


const App = () => {
  const [hide, sethide] = useState(true)
  const ishide = () => {
    if (hide === true) {
      sethide(false)
    }
    else {
      sethide(true)
    }
  }
  return (
    <>   <Navbar />
      {!hide && <Newspage ishide={ishide} />}
      {hide && <Landing ishide={ishide} />}
      {hide && <Newsletter/>}
      {hide && <Footer/>}

    </>
  )
}
export default App

