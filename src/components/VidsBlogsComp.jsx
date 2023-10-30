import React, {useState, useEffect} from 'react';
import BlueButton from './BlueButton';
import { FaCalendar } from 'react-icons/fa';
import ytThumbnail from '../assets/vids_page/yt_thumbnail.jpg'



function BlogCard({link, date, imgUrl, title, isBlog , desc}) {
    return(
      <>
        <div className='blogs-card mx-auto'>
          <a href={link} target={isBlog ? '' : '_blank'}>
            <div className='blog-graphic'>
              {isBlog ? <img src={imgUrl} alt={`Logo for the blog title ${title}`} /> : <img src={ytThumbnail} alt='Video Thumbnail' />}
            </div>
            <div className={`bg-black ${!isBlog ? 'no-blog' : ''}`}>
              <h4 className='text-[#03a9f4] font-[600]'>
                  {title}
              </h4>
              <div className='text-white'>
                <span className='flex items-center gap-2 py-4'>
                  {isBlog ? 
                    <>
                      <FaCalendar />
                      {date}
                    </> : <>{desc}</>
                  }
                </span>
              </div>
            </div>
            </a>
        </div>
      </>
    )
}




function VidsBlogsComp({blogDetails, isBlog}) {
    // blogs/pages used here refers to both vids/blogs not exclusively blogs

    const itemsPerPage = 6
    const [currentBlogs, setCurrentBlogs] = useState([])
    const [emptyBlog, setEmptyBlog] = useState(false)
    const [fetching, setFetching] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const [totalPages, setTotalPages] = useState(0)

    const handleNextPage = () => {
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      const handlePrevPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };

      useEffect(() => {
        setCurrentBlogs(blogDetails.slice(startIndex, endIndex));
        setTotalPages(Math.ceil(blogDetails.length / itemsPerPage));
      }, [currentPage, blogDetails, startIndex, endIndex]);

      console.log(totalPages)

    return (
        <div id='vid-content-grid' className='grid mx-auto items-center gap-6 relative'>
          {currentBlogs.map(({date, imgUrl, title, link, vidDesc}, i) => 
          <BlogCard desc={vidDesc} isBlog={isBlog} key={i} link={link} date={date} imgUrl={imgUrl} title={title}/>)}

    
          
              <div id='blogCtrlBtns' className='flex items-center gap-3'>
                <BlueButton text={'<< Back'} callback={handlePrevPage}/>
                <BlueButton text={'Next >>'} callback={handleNextPage}/> 
                <br />
                <div id='pages-details' className='text-white'>
                  {currentPage} / {totalPages}
                </div>
              </div>
        </div>
    );
}

VidsBlogsComp.defaultProps = {
  isBlog: true
};

export default VidsBlogsComp;