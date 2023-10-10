import React, { useEffect, useState } from 'react';
import Newsletter from '../components/Newsletter';
import { useOutletContext } from 'react-router-dom';
import fetchBlogsDetails from '../utils/fetchBlogsDetails';
import BlueButton from '../components/BlueButton';
import { FaCalendar } from 'react-icons/fa';
import '../styles/_blogs.scss'


function BlogCard({link, date, imgUrl, title}) {
      return(
        <>
          <div className='blogs-card mx-auto'>
              <div className='blog-graphic'>
                <img src={imgUrl} alt={`Logo for the blog title ${title}`} />
              </div>
              <div className='bg-black'>
                <h4 className='text-[#03a9f4] font-[600]'>
                  <a href={link}>
                    {title}
                  </a>
                </h4>
                <div className='text-white'>
                  <span className='flex items-center gap-2 py-4'>
                    <FaCalendar />
                    {date}
                  </span>
                </div>
              </div>
          </div>
        </>
      )
}


function Blogs(props) {
    const itemsPerPage = 6
    const {updatePage} = useOutletContext()

    const [totalPages, setTotalPages] = useState(0)
    const [currentBlogs, setCurrentBlogs] = useState([])
    const [blogDetails, setBlogDetails] = useState([])
    const [emptyBlog, setEmptyBlog] = useState(false)
    const [fetching, setFetching] = useState(true)

    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

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

    useEffect(()=>{
        updatePage("Blogs")
    }, [])

    useEffect(()=> {
         const dataUpdate = async () =>{
            const blogData = await fetchBlogsDetails()
            setBlogDetails(blogData)            
            setTotalPages(Math.ceil(blogData.length / itemsPerPage));
            setFetching(false)
        }

        dataUpdate()
    }, [])

    useEffect(() => {
        setCurrentBlogs(blogDetails.slice(startIndex, endIndex));
      }, [currentPage, blogDetails, startIndex, endIndex]);
      
    
    return (
        <>
            <main>
                <section id='blog-section' className='bg-[#212529] pt-[50px] pb-[100px]'>
                <div id='vid-content-grid' className='grid mx-auto items-center gap-6 relative'>
                    {currentBlogs.map(({date, imgUrl, title, link}, i) => <BlogCard key={i} link={link} date={date} imgUrl={imgUrl} title={title}/>)}
                    
                    <div id='blogCtrlBtns' className='flex items-center gap-3'>
                      <BlueButton text={'<< Back'} callback={handlePrevPage}/>
                      <BlueButton text={'Next >>'} callback={handleNextPage}/>
                    </div>
                </div>

                
                </section>
            </main>
            <Newsletter />
        </>
    );
}

export default Blogs;