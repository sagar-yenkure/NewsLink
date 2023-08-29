import React from 'react'
import { Link } from 'react-router-dom'
import Cat from './Cat'

function Landing(props) {
  return (
    <>
      {/* the intro section */}
      <div className=" intro__ relative front_ flex mt-12 justify-center h-[40rem] ">
        <img className='h-[100%] w-[99%] rounded-lg contrast-50' src="images/pic1.jpg" alt="" />
        <div className='absolute top-[30%] left-[5%] space-y-5 '>
          <h1 className='text-7xl font-bold'>Stay informed with News_Link</h1>
          <p className=' text-2xl font-medium  mt-3'>get the latest news and updates around the world at your fingertips. </p>
          <button className='bg-white text-blue-500 transition ease-in-out delay-1 hover:bg-blue-500 hover:text-white  rounded-xl font-bold m-3 p-3'>Know more</button>
        </div>
      </div>
      {/* categories of news */}
      <h1 className='text-center text-xl m-5'>Our News Categories </h1>

      <div className="categorie grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1">
        <Cat pic={"/images/scie.jpg"} title={"SCIENCES"} desc={"Explore the wonders of discovery through articles on space, nature, and scientific advancements."} read={<Link to="/science">Read about </Link>} more={props.ishide} />

        <Cat pic={"/images/mov.jpg"} title={"MOVIES"} desc={"Cinematic insights, behind-the-scenes stories, and box office trends for movie enthusiasts."} read={<Link to="/movies">Read about</Link>} more={props.ishide} />

        <Cat pic={"/images/buss.jpg"} title={"BUSINESS"} desc={"Insights into entrepreneurship, corporate strategies, and economic analysis for business-minded readers."} read={<Link to="/bussiness">Read about </Link>} more={props.ishide} />

        <Cat pic={"/images/hel.jpg"} title={"HEALTH"} desc={"Expert advice, fitness routines, and updates on medical research to prioritize your well-being."} read={<Link to="/health">Read about  </Link>} more={props.ishide} />

        <Cat pic={"/images/spt.jpg"} title={"SPORTS"} desc={"Catch up on the latest scores, highlights, and in-depth analysis of your favorite sports."} read={<Link to="/sports">Read about</Link>} more={props.ishide} />

        <Cat pic={"/images/tech.jpg"} title={"TECH"} desc={"Innovations, trends, and guides to navigate the ever-evolving world of technology."} read={<Link to="/technology">Read about</Link>} more={props.ishide} />



      </div>


    </>
  )
}

export default Landing