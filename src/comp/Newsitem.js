import React from 'react'

const Newsitem = (props) => {


  let { title, urlToImage, newsurl, time, author } = props;
  return (
    <div>

      <div className="card m-1 space-y-1 rounded-lg bg-blue-100 p-1">
        <img className='h-[15rem] w-full' src={!urlToImage ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.hV6MoBaE8NYeMCugmhd7_QHaEo%26pid%3DApi&f=1&ipt=db29126be2dfdd41dea677242c5ca4b6531e16342985cfb64172440cb28552e6&ipo=images" : urlToImage} alt="img" />
        <div className="cardbody w-[20rem] h-[9rem] space-y-2 ">
          <h1 className='cardtitile font-bold'>{title}...</h1>
          {/* <p className='mb-2'>{description}...</p> */}
          <button className='btn p-1 items-center text-blue-500 bg-white transition ease-in-out delay-1 hover:bg-blue-500 hover:text-white rounded-xl font-bold '>
            <a href={newsurl} target='_blank '> Read More</a></button>
          <p className=''>By : {author} on : {time}</p>


        </div>


      </div>



    </div>
  )
}

export default Newsitem