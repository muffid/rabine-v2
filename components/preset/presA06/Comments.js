'use client'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { FaReply,FaComment, FaUserAlt } from 'react-icons/fa'
import axios from 'axios'
import { poppins } from '../../globals/Fonts'

export default function Comments({slug,url,tamu,bgColor}) {

    const [comments, setComments] = useState([])
    const [commentToPost, setCommentToPost] = useState('')
    const [replyToPost, setReplyToPost ] = useState('')
    const [replyingTo, setReplyingTo] = useState(null)
    const [namaTamu, setNamaTamu] = useState(tamu)
    const inputReplyRef = useRef(null)
  
   
   
    const fetchDataComments = useCallback(async () => {
        try {
          const data = await fetch(url + 'comment/' + slug);
          const dataJson = await data.json();
          const topLevelComments = dataJson.comments.filter(
            (comment) => !comment.parent_Id
          );
          setComments(topLevelComments);
        } catch (error) {
          console.error('Error fetching comments:', error);
        }
      }, [url, slug]); // Tambahkan url dan slug ke dalam dependency array
    
      useEffect(() => {
        fetchDataComments();
      }, [fetchDataComments]);
 
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



    useEffect(() => {
      
        if (replyingTo !== null && inputReplyRef.current) {
          inputReplyRef.current.focus()
        }
      }, [replyingTo])
    return (
        <div id="doa" className={poppins.className+' w-full mt-6 bg-white p-4 flex flex-col items-center gap-y-2 px-8 text-slate-800'}>
            <h1 className='text-2xl  fadeUp'>KIRIM UCAPAN</h1>
            <h1 className='text-sm text-center fadeUp'>Sebanyak {comments.length} orang telah memberi ucapan</h1>
            <input type="text" 
                value={namaTamu}
                onChange={handleChangeTamu}
                className='border-[1px] rounded-xl border-slate-400 fadeUp text-slate-800 bg-transparent outline-none focus:border-slate-600 text-sm mt-2 w-full p-2' />
            <textarea
                    onChange={handleChange}
                    value={commentToPost}
                    className="border-[1px] rounded-xl border-slate-400 border-slate-700 bg-transparent outline-none fadeUp focus:border-slate-700 text-sm mt-2 w-full p-6 rounded" // Menambahkan border rounded
                    placeholder={'Kirim Ucapan Dan Doa Terbaik Anda'}
                    rows={3} // Menentukan jumlah baris
                    />
                    <button onClick={()=>postComment()} className={bgColor+' text-white fadeUp flex flex-row items-center justify-center text-sm rounded-full gap-2 border border-white px-4 py-2 mt-8 hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'}>
                            <FaComment/> Kirim
                    </button>
            <div className='w-full flex flex-col items-center justify-start space-y-3 fadeUp rounded-xl mt-4 text-black text-sm max-h-[600px] lg:max-h-[700px] overflow-y-scroll'>
                {comments.map(comment => (
                    <div key={comment.Comment_Id} className='w-full flex flex-col items-start justify-start space-y-4 bg-slate-900/90 text-slate-400 rounded-lg py-4 px-8'>
                        <div className='flex flex-row items-start gap-x-3'>
                          
                            <div className='flex-col items-start justify-start'>
                                <div className='flex flex-row items-start  '><p className='font-bold  text-yellow-200'>{comment.Comment_User}</p></div>
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
                            className="border-b-[1px] border-slate-700 text-slate-200 bg-transparent outline-none focus:border-slate-600 text-sm w-4/5 p-2 ml-10"
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
                          
                             <div className='flex-col items-start '>
                             <div  className='flex flex-col items-start justify-start '>
                                <p className='font-bold font-Batusa text-yellow-200'>{reply.Comment_User}</p>
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
