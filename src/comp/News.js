import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [pageindex, setpageindex] = useState(1)
  const [results, setresults] = useState(0)

  const newsupdate = async () => {
    props.setprogress(50)
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${pageindex}&pagesize=${props.pageno}`);
    setloading(true)

    let data = await res.json();

    setarticles(data.articles)
    setresults(data.totalResults)
    setloading(false)
    props.setprogress(100)
  }
  useEffect(() => {
    newsupdate();
    // eslint-disable-next-line
  }, [])


  const fetchMoreData = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${pageindex + 1}&pagesize=${props.pageno}`);
    setpageindex(pageindex + 1)

    setloading(true)
    const data = await res.json();
    setarticles(articles.concat(data.articles))
    setresults(data.totalResults)
    setloading(false)
  }

  // function to go Previous page

  // previousbtn = async () => {
  //   setState({ page: page - 1 })
  //   newsupdate()
  // };

  // function to go next page 

  // nxtbtn = async () => {  //the next button logic
  //   if (!(page + 1 > Math.ceil(results / props.pageno))) {
  //   setState({ page: page + 1 })
  //   newsupdate()
  //   }
  // }
  return (
    <>
      <div>
        <h1 className=' text-center font-bold mt-[1rem] md:mt-[4rem] ml-6 text-2xl mb-5 '>{props.title}</h1>
        {loading && < Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== results}
          loader={<Spinner />}
        >
          <div className='grid grid-cols-1 md:grid-cols-3 gap-1 aspect-square'>
            {articles.map((el) => {
              return <div className="row" key={el.url}>
                <Newsitem title={el.title ? el.title.slice(0, 90) : ""} description={el.description ? el.description.slice(0, 40) : ""} urlToImage={el.urlToImage} newsurl={el.url} time={el.publishedAt.slice(0, 10)} author={!el.author ? "Unknown" : el.author} />
              </div>
            }
            )
            }
          </div>
        </InfiniteScroll>
        <div className='h-0.5 w-auto bg-black'>
        </div>
        {/* buttons to go next and previous */}

        {/* <div className="btn flex justify-between mb-5"> */}
        {/* <button disabled={page <= 1} onClick={previousbtn} className=' previous_btn border-2 to-black p-2 mt-3 items-center text-black bg-blue-400 rounded-md '>&larr;previous page</button>
            <button disabled={(page + 1 > Math.ceil(results / page))} onClick={nxtbtn} className=' next btn_border-2 to-black p-2 mt-3 items-center text-black bg-blue-400 rounded-md ' >next page  &rarr;</button> */}
        {/* </div> */}

      </div>
    </>
  )
}


export default News