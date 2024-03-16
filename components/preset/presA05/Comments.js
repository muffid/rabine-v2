'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FaReply,FaComment, FaUserAlt } from 'react-icons/fa'
import axios from 'axios'
import Image from 'next/image'

export default function Comments({slug,url,tamu}) {

    async function fetchDataComments(){
        const data = await fetch(url+'comment/'+slug)
        const dataJson = await data.json()
        const topLevelComments = dataJson.comments.filter(comment => !comment.parent_Id)
        setComments(topLevelComments)
    }

   
    
    const gDrive = "https://drive.usercontent.google.com/download?id="
    const gDriveAuth ="&authuser=0"
    const [comments, setComments] = useState([])
    const [commentToPost, setCommentToPost] = useState('')
    const [replyToPost, setReplyToPost ] = useState('')
    const [replyingTo, setReplyingTo] = useState(null)
    const [namaTamu, setNamaTamu] = useState(tamu)
    const inputReplyRef = useRef(null)
   
   
 
      const handleChangeTamu = (event) => {
        setNamaTamu(event.target.value)
      }

      const handleChange = (event) => {
        setCommentToPost(event.target.value);
      }

      const handleChangeReply = (event) => {
        setReplyToPost(event.target.value);
      }

      const handleBatalReply = () => {
        setReplyToPost('')
        setReplyingTo('')
      }

      function postComment() {
        let namaToPost
        namaTamu == '' ? namaToPost = 'Anonim' : namaToPost = namaTamu 
        console.log(namaToPost);
        const postData = {
            userName: namaToPost,
            page: slug,
            parent:'',
            content:commentToPost,
        }
        axios.post(url+'postComment', postData)
        .then(response => {
            if(response.status == 200){
                fetchDataComments()
                setCommentToPost('')
            }else{
                alert('gagal mengirim ucapan')
            }
        })
        .catch(error => {
            alert('fail')
        })

      }


      function postReply() {
        let namaToPost
        namaTamu == '' ? namaToPost = 'Anonim' : namaToPost = namaTamu 
        console.log(namaToPost);
        const postData = {
            userName: namaToPost,
            page: slug,
            parent:replyingTo,
            content:replyToPost,
        }
        axios.post(url+'postReply', postData)
        .then(response => {
            if(response.status == 200){
                fetchDataComments()
                setReplyToPost('')
                setReplyingTo('')
            }else{
                alert('gagal mengirim ucapan')
            }
        })
        .catch(error => {
            alert('fail')
        })

      }

    const handleReplyClick = (commentId) => {
      setReplyingTo(commentId)
      setReplyToPost('')
    }

    useEffect(()=>{
        fetchDataComments()
    },[])

    useEffect(() => {
      
        if (replyingTo !== null && inputReplyRef.current) {
          inputReplyRef.current.focus()
        }
      }, [replyingTo])
    return (
        <div id="doa" className='w-full text-[#A88C60] bg-[#1D1E18] p-6 flex flex-col items-center gap-y-2 px-8 relative'>
            <div className='absolute top-0 w-full h-full opacity-[0.1]'>
                                <Image
                                    src={gDrive+'1pq1EcVQECszcfhVmBgqmZ8W-zEV-lc5c'+gDriveAuth}
                                    width={1200}
                                    height={1200}
                                    className='h-full object-cover fadeUp'
                                    alt='appstore'
                                />
                            </div>
            <h1 className='text-3xl  fadeUp'>Kirim Ucapan</h1>
            <h1 className=' text-center '>Sebanyak {comments.length} orang telah memberi ucapan</h1>
            <input type="text" 
                value={namaTamu}
                onChange={handleChangeTamu}
                className='border-[1px] border-slate-700 text-slate-200 bg-transparent outline-none focus:border-slate-600  mt-2 w-full p-2' />
            <textarea
                    onChange={handleChange}
                    value={commentToPost}
                    className="border-[1px] border-slate-700 bg-transparent outline-none focus:border-slate-700  mt-2 w-full p-6 rounded" // Menambahkan border rounded
                    placeholder={'Kirim Ucapan Dan Doa Terbaik Anda'}
                    rows={3} // Menentukan jumlah baris
                    />
                    <button onClick={()=>postComment()} className='fadeUp flex flex-row items-center justify-center  rounded-lg  gap-2 border bg-[#151313] border-white px-3 py-2 mt-8
                                        hover:bg-white hover:text-black text-white hover:scale-105 transition-all ease-out'>
                            <FaComment/> Kirim
                    </button>
            <div className='w-full flex flex-col items-center justify-start space-y-3  rounded-xl p-4 text-black  max-h-[600px] lg:max-h-[700px] overflow-y-scroll'>
                {comments.map(comment => (
                    <div key={comment.Comment_Id} className='w-full flex flex-col items-start justify-start space-y-4 bg-black/30 text-slate-400 rounded-lg py-4 px-8'>
                        <div className='flex flex-row items-start gap-x-3'>
                            <FaUserAlt/>
                            <div className='flex-col items-start justify-start'>
                                <div className='flex flex-row items-start  '><p className='font-bold  text-[#A88C60]'>{comment.Comment_User}</p></div>
                                <p className='text-slate-200'>{comment.Comment_Content}</p>
                                <div className='flex flex-row items-start justify-start gap-x-2 text-xs text-slate-500'>
                                    <h1 className=''>{comment.Comment_Time}</h1>
                                    <h1>-</h1>
                                    <div className='flex flex-row space-x-1 font-bold cursor-pointer items-center' onClick={() => handleReplyClick(comment.Comment_Id)}><FaReply/> <h1>Balas</h1></div>
                                </div>
                            </div>
                        </div>
                      
                       
                        {replyingTo === comment.Comment_Id && ( 
                    <>
                        <input
                            ref={inputReplyRef}
                            onChange={handleChangeReply}
                            value={replyToPost}
                            className="border-b-[1px] border-slate-700 text-slate-200 bg-transparent outline-none focus:border-slate-600  w-4/5 p-2 ml-10"
                            placeholder={'balas ucapan'}
                        />
                        <div className='flex flex-row items-center justify-end w-full space-x-4'>
                            <h1 className='font-bold text-xs cursor-pointer' onClick={()=>postReply()}>Balas</h1>
                            <h1 className=' text-xs cursor-pointer' onClick={()=>handleBatalReply()}>Batal</h1>
                        </div>
                    </>
                )}
                        {comment.replies && comment.replies.map(reply => (
                             <div key={reply.Comment_Id} className='flex flex-row items-start gap-x-3 ml-10 mt-3'>
                             <FaUserAlt/>
                             <div className='flex-col items-start '>
                             <div  className='flex flex-col items-start justify-start '>
                                <p className='font-bold  text-[#A88C60]'>{reply.Comment_User}</p>
                                <div className='flex flex-row items-start justify-center gap-x-1 text-xs text-slate-500'>
                                    <h1 className=''>{reply.Comment_Time}</h1>
                                </div>
                                <p className='text-slate-200'>{reply.Comment_Content}</p>
                            </div>
                                 
                                 
                             </div>
                         </div>

                          
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
