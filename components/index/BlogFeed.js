import React from 'react'
import SingleBlog from '../globals/SingleBlog'
import SingleBlogGrid from '../globals/SingleBlogGrid'
import articleGrid from '../../source/ArtikelGrid.json'

function BlogFeed() {
  
  return (
    <div className='mt-16 flex flex-col items-center gap-y-4 py-6 bg-gradient-to-br from-cyan-50/60 to bg-purple-100/60 self-start'>
        <div className='flex flex-col items-center gap-y-2'>
            <h1 className='text-4xl text-center bold'>Blog</h1>
            <p className='text-sm text-slate-700'>Artikel yang sangat bermanfaat menjelang pernikahan</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 p-8 gap-8'>
            <div className='flex self-start'>
                <SingleBlog/>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 '>
                {articleGrid.article.map((item,index)=>(
                    <div key={index}>
                         <SingleBlogGrid  judul={item.title} img={item.img} admin={item.author} date={item.date} time={item.mins_read} />
                    </div>
                )
                )}
            </div>
        </div>
        <button className='rounded-full text-sm bg-gradient-to-r from-pink-600 to-orange-600 text-white px-4 py-3'>Lihat Semua Blog</button>
    </div>
  )
}

export default BlogFeed