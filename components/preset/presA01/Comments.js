'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FaCheckCircle,FaComment } from 'react-icons/fa'

export default function Comments({slug,url}) {
    async function fetchDataComments(){
        const data = await fetch(url+'comment/'+slug)
        const dataJson = await data.json()
        const topLevelComments = dataJson.comments.filter(comment => !comment.parent_Id)
        setComments(topLevelComments)
    }
    
    const [comments,setComments] = useState([])
    const [replyingTo, setReplyingTo] = useState(null)
    const inputRef = useRef(null)
    const [postData, setPostData] = useState({
        userName: '',
        page: '',
        parent:'',
        
      });

    const handleReplyClick = (commentId) => {
      setReplyingTo(commentId)
    }
    useEffect(()=>{
        fetchDataComments()
        console.log(comments);
    },[])

    useEffect(() => {
      
        if (replyingTo !== null && inputRef.current) {
          inputRef.current.focus()
        }
      }, [replyingTo]);
    return (
        <div className='w-full  bg-black p-6 flex flex-col items-center gap-y-2'>
            <h1 className='text-[2.5rem] font-Royal-Exq fadeUp'>Kirim Ucapan</h1>
            <h1 className='text-sm text-center '>Sebanyak {comments.length} orang telah memberi ucapan</h1>
            <textarea
                
                    className="border-[1px] border-slate-700 bg-transparent outline-none focus:border-slate-700 text-sm mt-2 w-full p-6 rounded-lg" // Menambahkan border rounded
                    placeholder={'Kirim Ucapan Dan Doa Terbaik Anda'}
                    rows={7} // Menentukan jumlah baris
                    />
                    <button className='flex flex-row items-center justify-center gap-2 border border-white px-5 py-2 my-6
                                        hover:bg-white hover:text-black hover:scale-105 transition-all ease-out text-sm'>
                            <FaComment/> Kirim
                    </button>
            <div className='w-full flex flex-col items-center justify-start space-y-3  rounded-xl p-4 text-black text-sm max-h-[600px] lg:max-h-[700px] overflow-y-scroll'>
                {comments.map(comment => (
                    <div key={comment.Comment_Id} className='w-full flex flex-col items-start justify-start  bg-slate-900/60 text-slate-400 rounded-lg p-4'>
                        <div className='flex flex-row items-start justify-center gap-x-1'><p className='font-bold font-Batusa text-slate-200'>{comment.Comment_User}</p><FaCheckCircle className='text-xs text-green-500'/></div>
                        <p>{comment.Comment_Content}</p>
                        <div className='flex flex-row items-start justify-center gap-x-1 text-xs text-slate-500'>
                            <h1 className=''>{comment.Comment_Time}</h1>
                            <h1>-</h1>
                            <h1 className='font-bold cursor-pointer' onClick={() => handleReplyClick(comment.Comment_Id)}>Balas</h1>
                        </div>
                        {replyingTo === comment.Comment_Id && ( 
                    <input
                        ref={inputRef}
                        className="border-b-[1px] border-slate-700 text-slate-500 bg-transparent outline-none focus:border-slate-600 text-xs mt-2 w-full p-2"
                        placeholder={'balas ucapan'}
                    />
                )}
                        {comment.replies && comment.replies.map(reply => (
                            <div key={reply.Comment_Id} className='flex flex-col items-start justify-start ml-8 mt-3'>
                                <p className='font-bold font-Batusa text-slate-200'>{reply.Comment_User}</p>
                                <div className='flex flex-row items-start justify-center gap-x-1 text-xs text-slate-500'>
                                    <h1 className=''>{reply.Comment_Time}</h1>
                                </div>
                                <p>{reply.Comment_Content}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
