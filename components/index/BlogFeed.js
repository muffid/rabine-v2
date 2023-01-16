import React from 'react'
import SingleBlog from '../globals/SingleBlog'
import SingleBlogGrid from '../globals/SingleBlogGrid'
import articleGrid from '../../source/ArtikelGrid.json'

function BlogFeed() {
  
  return (
    <div className=' bg-slate-100 w-full '>
        <div className='mt-16 flex flex-col items-center max-w-[1200px] gap-y-4 py-8 mx-auto '>
            <div className='flex flex-col items-center gap-y-2'>
                <h1 className='text-4xl text-center bold'>Blog</h1>
                <p className='text-center font-semibold p-2 bg-yellow-200'>Artikel rabine.id</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 p-8 gap-8'>
                <div className='flex self-start'>
                    <SingleBlog/>
                </div>
                <div className='grid grid-cols-1  gap-5 '>
                    {articleGrid.article.map((item,index)=>(
                        <div key={index}>
                            <SingleBlogGrid  judul={item.title} img={item.img} admin={item.author} date={item.date} time={item.mins_read} />
                        </div>
                    )
                    )}
                </div>
            </div>
            <button className=' hover:scale-105 transition duration-100 rounded-full text-sm bg-gradient-to-r from-pink-600 to-orange-600 text-white px-4 mt-8 py-3'>Lihat Semua Blog</button>
        </div>
    </div>
  )
}

export default BlogFeed