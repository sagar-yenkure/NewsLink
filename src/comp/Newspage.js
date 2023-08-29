
import React, { useState } from "react"
import LoadingBar from 'react-top-loading-bar'
import News from "./News";

import {
  Route,
  Routes
}
  from "react-router-dom";

function Newspage(props) {
  let pageno = 12
  const apikey = process.env.REACT_APP_NEWS_API
  const [progress, setprogress] = useState()

  return (
    <>
      <LoadingBar
        height={3}
        shadow={true}
        color='#1e90ff'
        progress={progress}
      />


      <button onClick={props.ishide} className=" ml-4 font-semibold text-xl absolute top-[5rem] hover:text-blue-500">HOME</button>
      <Routes>

        <Route exact path="/movies" element={<News apikey={apikey} setprogress={setprogress} title={`MOVIES - "Lights, Camera, Action!"`} key="movies" pageno={pageno} category={"Entertainment"} />}></Route>

        <Route exact path="/bussiness" element={<News apikey={apikey} setprogress={setprogress} title={`BUSINESS - "Where Money and Chuckles Collide"`} key="bussiness" pageno={pageno} category={"business"} />}></Route>

        <Route exact path="/health" element={<News apikey={apikey} setprogress={setprogress} title={`HEALTH - "Laugh Your Way to Good Health"`} key="health" pageno={pageno} category={"health"} />}></Route>

        <Route exact path="/sports" element={<News apikey={apikey} setprogress={setprogress} title={`SPORTS - "Scoreboards and Smiles"`} key="sports" pageno={pageno} category={"sports"} />}></Route>

        <Route exact path="/science" element={<News apikey={apikey} setprogress={setprogress} title={`SCIENCE - "Exploring the Universe, One Chuckle at a Time"`} key="science" pageno={pageno} category={"science"} />}></Route>

        <Route exact path="/technology" element={<News apikey={apikey} setprogress={setprogress} title={`TECH - "Bytes of Fun and Innovation"`} key="technlogy" pageno={pageno} category={"technology"} />}></Route>

      </Routes>

    </>
  )
}

export default Newspage