import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect,useRef } from 'react'
import { useRouter } from 'next/router'
import { useState} from 'react'
import Timer from '../../components/preset/cust-james/Timer'
import Comments from '../../components/preset/cust-james/Comments'
import { FaAngleDoubleDown,FaRegEnvelopeOpen, FaRegCopy, FaPause} from "react-icons/fa"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { LuClock10 } from "react-icons/lu";
import { FiCalendar } from "react-icons/fi";
import GalleryFade from '../../components/preset/presA05/GalleryFade'
import Watermark from '../../components/preset/globals/Watermark'
import {cinzel,inter} from '../../components/globals/Fonts'
import Navigasi from '../../components/preset/globals/Navigasi'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function PresA05({url}) {

    const gDrive = "https://drive.usercontent.google.com/download?id="
    const gDriveAuth ="&authuser=0"
    const dataWeding = {
        META : {
             slug : "melati-james",
             title : "rabine.id - The Wedding Of Melati and James",
             description : "rabine.id - The Wedding Of Melati and James",
             thumbnail : "http://contentmanagement.cendikabangsa.sch.id/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-23-at-17.04.06.jpeg"
         },
         content : {
             audio : "/audio/wedding-cinematic.mp3",
             song_title : "Romantic Love - Charles P",
             groom_name: "James",
             bride_name : "Melati", 
             groom_sure_name : "Muhammad Andrian",
             bride_sure_name : "Melati",
             groom_pic : gDrive+"1Q0W_QnNYsZUomLsWg6MC_icA-AX8E_PA"+gDriveAuth, 
             bride_pic : gDrive+'1JBIu7KJbXC4FrmIPinp20HUAOc4b6HQO'+gDriveAuth, 
             groom_father : "M. Adnan", // Hanya nama dan Gelar
             groom_mother : "Indriati", // Hanya nama dan Gelar
             bride_father : "Nano Sukana", // Hanya nama dan Gelar
             bride_mother : "Titi Sulasti",// Hanya nama dan Gelar
             groom_ig_account : "Andre_T",
             bride_ig_account : "Citra_T",
             groom_ig_url : "",
             bride_ig_url : "",
             couple : "Melati & James",
             day : "Sabtu",
             date : "31", // Gunakan 01, 02, 03 dst untuk tanggal kurang dari 10
             month : "05", // Gunakan 01, 02, 03 dst untuk bulan kurang dari 10
             month_name : "Mei",
             year : "2025",
             start_akad : "08:00 WIB", // format pemisah menggunakan tanda ":" harus diberi jarak spasi antara jam dan "WIB"
             end_akad : "10:00",
             start_resepsi : "10:00 WIB",// format pemisah menggunakan tanda ":" harus diberi jarak spasi antara jam dan "WIB"
             end_resepsi : "15:00",
             venue : "Desa Linggarjati",
             venue_address : "RT. 008 RW 002",
             gmap_frame : "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8405.240686875977!2d108.47155719304723!3d-6.879394065247565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTInNDcuNSJTIDEwOMKwMjgnMTQuNSJF!5e1!3m2!1sid!2sid!4v1747546348062!5m2!1sid!2sid",
             yt_frame : "https://www.youtube-nocookie.com/embed/kebq86BTZFA?si=9saOo4u4j5ry06DO",
             bg_opening : gDrive+'12MuA1xLOTzvUWlvxX06CYYkZpCcFJqpK'+gDriveAuth,
             bg_first_section :gDrive+'1STjweD8To86HXJ1sqDN5SU1Nuz1fC3rw'+gDriveAuth,
             bg_mempelai : gDrive+"1r5O0BYZwUwpTs-VMkCRQVljiSjPh3uIM"+gDriveAuth,
             bg_accent : gDrive+"1ww8ylxfitcTgM-0uX5GcVVOC_1-PoF1Q"+gDriveAuth,
             img_left :  gDrive+"12MuA1xLOTzvUWlvxX06CYYkZpCcFJqpK"+gDriveAuth,
             img_quote_1 : gDrive+'1HwkOSyxqYvB-PmRj9knkZgNkOG6Otej9'+gDriveAuth,
             img_quote_2 : gDrive+'18LI2te0XIeAz9d4ytqujpOJ7mEcoUTEq'+gDriveAuth,
             img_closing : gDrive+'18LI2te0XIeAz9d4ytqujpOJ7mEcoUTEq'+gDriveAuth,
             btn_couple : gDrive+'12MuA1xLOTzvUWlvxX06CYYkZpCcFJqpK'+gDriveAuth,
             bg_jadwal : gDrive+'1Wc16jJ5WEQEP9smx11jqAOMaG_v3ZeMj'+gDriveAuth
         }
     } 
 
    
    const dateCountDown = dataWeding.content.year+'-'+dataWeding.content.month+'-'+dataWeding.content.date+'T'+dataWeding.content.start_akad.substring(0, 5)+':00Z'
    const audioRef = useRef()
    const [isPlaying, setIsPlaying] = useState(false)


    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    };

    const router = useRouter()
    const { to } = router.query
    const [topPosition, setTopPosition] = useState(0)

    const moveUp = () => {
        setTopPosition(topPosition - 1000)
        togglePlay()
    }

    const imagesGallery = [

        { src: gDrive+'1azEEDcb6eXWlUt8UMVkJ3_mY8tlFhp75'+gDriveAuth, alt: 'presA02' },
        { src: gDrive+'1iGcdpL3UgnpRtkRPAMfS_lCCJYq_kGNq'+gDriveAuth, alt: 'presA02' },
        { src: gDrive+'18LI2te0XIeAz9d4ytqujpOJ7mEcoUTEq'+gDriveAuth, alt: 'presA02' },
        { src: gDrive+'1uxUXxp4aKYil5lJ6ks9mxEBzutte6C1z'+gDriveAuth, alt: 'presA02' },
     
        // tambhakan lagi kalau masih ada...
    ]


    useEffect(()=>{
        const fadeUpElements = document.querySelectorAll(".fadeUp")
        fadeUpElements.forEach((element) => {
            console.log("looped")

            gsap.set(element, {
                y: 80, 
                opacity: 0, 
            });

            ScrollTrigger.create({
                trigger: element,
                start: "top 90%", 
                toggleActions: "play", 
                animation: gsap.to(element, {
                y: 0, 
                opacity: 1,
                duration: 1, 
                ease: "power2.out",
                }),
            })
        })
    },[])

    return (
        <div className={'w-full box-content text-white '+inter.className}>

            {/* TO DO: BACKDOUND MP3*/}
            <audio  loop ref={audioRef} src="/audio/wedding-cinematic.mp3" />
            <Head>
                {/* TO DO: TITLE PERNIKAHAN*/}
                <title>{dataWeding.META.title}</title>

                <meta name="description" content={dataWeding.META.description} />
                <meta property="og:image" content="http://contentmanagement.cendikabangsa.sch.id/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-23-at-17.04.06.jpeg" />
                <meta property="og:image:width" content="400" />
                <meta property="og:image:height" content="300" />
                <link rel="icon" href="/rbn.ico" />
                <script async src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
                <script async src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
                <script async src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
                <style>{`
                        ::-webkit-scrollbar {
                            width: 8px; /* Lebar scrollbar */
                          }
                          ::-webkit-scrollbar-thumb {
                            background-color: #333333; /* Warna thumb scrollbar */
                            border-radius: 6px; /* Sudut melengkung */
                          }
                    `}
                </style>
            </Head>
            <div className='w-full flex flex-row items-start justify-between'>

                {/* COVER UNDANGAN */}
                <div className='w-full h-screen fixed z-30 moving-up flex flex-col items-start justify-start' style={{ top: `${topPosition}px` }}>
                    <div className='w-full h-screen relative flex items-center justify-center '>
                        
                        <div className='flex flex-col items-center justify-end absolute bg-gradient-to-t 
                                    from-[#3c3838]/50 to-transparent w-full h-screen top-0 pb-40'>
                            <h1 className='text-sm my-4'>THE WEDDING OF</h1>

                            {/* TO DO: NAMA KEDUA MEMPELAI*/}
                            <h1 className=' text-3xl pb-8 font-Andrew uppercase'>{dataWeding.content.couple}</h1>

                            <p className='text-sm'>Kepada Yth. Bapak/Ibu/Saudara(i)</p>
                            <h1 className='py-8 font-bold'>{to}</h1>
                            <button className='flex flex-row items-center justify-center gap-2 blink bg-white rounded-lg 
                                            text-black px-5 py-2 hover:bg-yellow-100' onClick={moveUp}>
                               <FaRegEnvelopeOpen/> Buka Undangan
                            </button>
                        </div>

                        {/* TO DO: GAMBAR UNTUK BACKGROUND OPENING*/}
                        <Image
                            src={dataWeding.content.bg_opening}
                            width={1200}
                            height={1200}
                            className='w-full object-cover h-full'
                            alt='appstore'
                        />
                    </div>
                </div>

                {/* SISI KIRI (TAMPILAN PC) */}

                {/* TO DO: GAMBAR UNTUK SISI KIRI TAMPILAN PC*/}
                <div className="hidden lg:flex bg-cover bg-right md:w-1/2 lg:w-[60%] h-screen overflow-hidden sticky top-0">
                    
                    <div className='gap-y-4 w-full h-full flex flex-col justify-end items-end 
                                 relative'>
                        <Image
                                src={dataWeding.content.img_left}
                               
                                // style={{objectFit:"cover"}}
                                className='absolute w-full object-cover h-full'
                                width={1200}
                                height={2200}
                                alt='rabine.id'
                            />    
                        <div className='gap-y-4 p-8 w-full h-full flex flex-col justify-end items-end 
                                 relative'>
                                        
                            <FaAngleDoubleDown className='scroll-me font-bold text-xl '/>
                            <h1>scroll ke bawah</h1>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <div onClick={togglePlay} className='flex flex-row items-start cursor-pointer justify-between text-white gap-x-4'>
                                    {isPlaying ? <dotlottie-player src="https://lottie.host/33f853c2-3ac1-4ca2-a738-c642fbdf8f62/5MK6jbaDeb.json" 
                                        background="transparent" 
                                        speed="1" 
                                        style={{width: 40+'px', height: 40+'px'}} 
                                        loop 
                                        autoplay>
                                    </dotlottie-player> 
                                    : 
                                    <div className='w-[40px] h-[40px]  text-yellow-500 flex flex-col items-center justify-center'>
                                        <FaPause/>
                                    </div>}
                                    <div className='flex flex-col items-start justify-center text-xs '>
                                        <h1 className='font-bold'>{isPlaying ? 'Now Playing' : 'Paused'}</h1>

                                        {/* TO DO: JUDUL LAGU*/}
                                        <h1>Romantic Love - Alex P.</h1>
                                    </div>
                                </div>
                                {/* TO DO: NAMA MEMPELAI*/}
                                <h1 className='text-3xl font-bold text-right font-Batusa'>The Wedding Of {dataWeding.content.couple}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SISI KANAN */}
                <div className='w-full  lg:w-[40%] overflow-y-auto relative text-white bg-black'>
                    {/* NOW PLAYING*/}
                    <div className='lg:hidden flex flex-col items-center justify-between gap-x-4 fixed w-full
                                     top-4 z-20 '>
                         <div onClick={togglePlay} className='flex flex-row items-center justify-between bg-white/45 backdrop-blur-lg rounded-full py-1 px-6 gap-x-4'>
                            {isPlaying ? <dotlottie-player src="https://lottie.host/33f853c2-3ac1-4ca2-a738-c642fbdf8f62/5MK6jbaDeb.json" 
                                background="transparent" 
                                speed="1" 
                                style={{width: 40+'px', height: 40+'px'}} 
                                loop 
                                autoplay>
                            </dotlottie-player> 
                            : 
                            <div className='w-[40px] h-[40px]  text-yellow-500 flex flex-col items-center justify-center'>
                                <FaPause/>
                            </div>}
                            <div className='flex flex-col items-start justify-center text-xs text-black'>
                                <h1 className='font-bold'>{isPlaying ? 'Now Playing' : 'Paused'}</h1>

                                {/* TO DO: JUDUL LAGU*/}
                                <h1>{dataWeding.content.song_title}</h1>
                            </div>
                        </div>                    
                    </div>
                    {/* NAVIGASI MENU BAWAH */}
                   <Navigasi imgThumb={dataWeding.content.btn_couple}/>
                    
                    
                    {/* OPENING_PHOTO */}

                    <div id='opening' className='w-full h-screen relative'>
                        <div className='pb-32 pr-12 absolute text-white w-full h-full bg-gradient-to-t from-black to-slate-800/40 flex flex-col items-end justify-end '>
                            <p>THE WEDDING OF</p>
                            {/* TO DO: NAMA MEMPELAI*/}
                            <h1 className='text-5xl py-4  text-right font-Andrew uppercase tracking-wider'>{dataWeding.content.bride_name} &<br/>{dataWeding.content.groom_name}</h1>                        
                                {/* TO DO: TANGGAL NIKAH*/}
                                <p className='text-right'>{dataWeding.content.date} {dataWeding.content.month_name} {dataWeding.content.year}</p> 
                        </div>
                        {/* TO DO: GAMBAR OPENING*/}
                        <Image
                            src={dataWeding.content.bg_first_section}
                            width={1200}
                            height={1200}
                            className='w-full object-cover h-full'
                            alt='appstore'
                        />
                   </div>
                   <div className='w-full  flex flex-col items-center  relative '>
                        {/* AYAT ALQUR'AN */}
                        <div className='w-full relative text-sm flex flex-col items-center justify-center px-16 gap-y-4 pt-[80px]  
                                        overflow-hidden pb-[20px]'>
                            <div className='absolute bottom-0 w-full h-full opacity-[0.2]'>
                                <Image
                                    src={dataWeding.content.img_quote_1}
                                    width={1200}
                                    height={1200}
                                    className='h-full object-cover fadeUp'
                                    alt='appstore'
                                />
                            </div>
                            {/* <Image
                                src={gDrive+'1oh-k5jkDJ0dnIhEyccf4fb21h2tmO3bu'+gDriveAuth}
                                width={1200}
                                height={1200}
                                className='w-[16%] object-cover fadeUp'
                                alt='appstore'
                            /> */}
                            <p className='text-center fadeUp mt-10'>
                                “Aku takj pernah menunggumu.<br/> Kamu tak pernah sengaja datang. <br/> Tapi kita sengaja
                                dipertemukan Tuhan.“
                            </p>
                           
                            <Image
                                src={gDrive+'1EQPQD0Czn3L8boDuxLrm-Y4961WQwwEV'+gDriveAuth}
                                width={1200}
                                height={1200}
                                className='w-[16%] object-cover fadeUp my-8'
                                alt='appstore'
                            />
                            <div className='w-4/5 h-[200px]  overflow-hidden bg-cover rounded-xl fadeUp'>
                                <Image
                                    src={dataWeding.content.img_quote_2}
                                    width={1200}
                                    height={1200}
                                    className='w-full h-full object-cover'
                                    alt='appstore'
                                />
                            </div>
                          
                            <p className='text-center fadeUp text-sm my-8  lg:px-20 fadeUp'>
                               Entah untuk saling duduk berdampingan<br/> atau saling memberi pelajaran.<br/>
                               Entah untuk saling mengirim undangan pernikahan,<br/> atau duduk bersama di pelaminan.
                            </p>
                       
                        </div>
                        {/* MEMPELAI*/}
                        <div id='mempelai' className='w-full  p-8 pt-12 flex flex-col items-center gap-y-4 relative py-[80px]'>
                            <div className='absolute top-0 w-full h-full opacity-[0.1]'>
                                <Image
                                    src={gDrive+'1pq1EcVQECszcfhVmBgqmZ8W-zEV-lc5c'+gDriveAuth}
                                    width={1200}
                                    height={1200}
                                    className='h-full object-cover fadeUp'
                                    alt='appstore'
                                />
                            </div>
                          <h1 className='text-3xl fadeUp font-Coralis my-10'>Calon Mempelai</h1>
                          <div className='w-full pr-28'>
                            <div className='rounded pl-8 fadeUp  py-10 bg-[#EBDCD6] flex flex-col items-start  text-[#2B2929] w-full relative'>
                                <h1 className='text-3xl text-left pr-20 font-bold fadeUp mb-12 font-Coralis'>{dataWeding.content.bride_sure_name}</h1>
                                <h1 className='font-bold text-sm mt-4 my-2 fadeUp'>putri dari</h1>
                                <h1 className='fadeUp text-sm text-left leading-tight mb-4 w-1/2'>Bapak {dataWeding.content.bride_father} dan Ibu {dataWeding.content.bride_mother}</h1>
                               
                                <div className='absolute -right-20 w-[170px] h-[200px] rounded-3xl -bottom-4 flex'>
                                    <Image
                                        src={dataWeding.content.bride_pic}
                                        width={1200}
                                        height={1200}
                                        className='w-full object-cover rounded shadow-xl fadeUp'
                                        alt='appstore'
                                    />
                                </div>
                            </div>
                          </div>
                          <Image
                            src={gDrive+'18yWw-QqwG4yr7h3gKgGmOPE2XYTmJsfy'+gDriveAuth}
                            width={1200}
                            height={1200}
                            className='w-[20%] object-cover fadeUp py-8'
                            alt='appstore'
                        />
                          <div className='w-full pl-28'>
                            <div className='rounded pr-8 fadeUp py-10 bg-[#EBDCD6] flex flex-col items-end  text-[#2B2929] w-full relative'>
                                <h1 className='text-3xl text-right pl-20 mb-4 font-bold fadeUp font-Coralis'>{dataWeding.content.groom_sure_name}</h1>
                                <h1 className='font-bold text-sm mt-4 my-2 fadeUp'>putra dari</h1>
                                <h1 className='text-sm text-right w-1/2 mb-4 leading-tight fadeUp'>Alm. Bapak {dataWeding.content.groom_father} dan Ibu {dataWeding.content.groom_mother}</h1>
                                <div className='absolute -left-28 w-[170px] h-[200px] rounded -bottom-4 flex'>
                                    <Image
                                        src={dataWeding.content.groom_pic}
                                        width={1200}
                                        height={1200}
                                        className='fadeUp w-full object-cover rounded shadow-xl'
                                        alt='appstore'
                                    />
                                </div>
                            </div>
                          </div>
                        
                         
                        </div>
                        {/* INFO ACARA */}
                        <div id='jadwal' className='w-full  relative'>
                        <div className='absolute bottom-0 w-full h-full opacity-20'>
                                <Image
                                    src={dataWeding.content.bg_jadwal}
                                    width={1200}
                                    height={1200}
                                    className='h-full object-cover fadeUp'
                                    alt='appstore'
                                />
                            </div>
                        <div className='w-full  flex flex-col items-center justify-center space-y-6 '>
                            <div className='bg-[#1D1E18]/40  w-full gap-y-8 shadow-xl backdrop-blur-sm fadeUp flex flex-col py-12 items-center justify-between'>
                                <div className='w-full flex flex-col items-start justify-center text-center  '>
                                    <div className='w-4/5 flex flex-col items-start bg-[#2B2929]/50 rounded-lg p-8'>
                                        <h1 className='text-3xl fadeUp mb-6 fadeUp font-Coralis'>Akad Nikah</h1>
                                        <div className='flex flex-row items-center gap-4 fadeUp mb-2'>
                                            <FiCalendar className='text-sm'/>
                                            <h1 className='text-sm '>{dataWeding.content.day}, {dataWeding.content.date} {dataWeding.content.month_name} {dataWeding.content.year}</h1>
                                        </div>
                                        <div className='flex flex-row items-center gap-4 fadeUp'>
                                        <LuClock10 className='text-sm'/>
                                            <h1 className='text-sm fadeUp'>{dataWeding.content.start_akad} - {dataWeding.content.end_akad}</h1>
                                        </div>
                                        <h1 className=' text-left  fadeUp mt-4 fadeUp'>{dataWeding.content.venue} {dataWeding.content.venue_address}</h1>
                                        <h1 className='text-sm fadeUp'></h1>
                                        <button  onClick={()=>{ window.open("https://maps.app.goo.gl/1DFbPtKTbT1Efwm59", '_blank');}} className='fadeUp flex flex-row items-center justify-center text-sm rounded-lg  gap-2 border bg-white  px-3 py-2 mt-8
                                             text-black '>
                                            <HiOutlineLocationMarker/> Lihat Lokasi
                                        </button>
                                    </div>
                                </div>
                                <Image
                                src={gDrive+'1EQPQD0Czn3L8boDuxLrm-Y4961WQwwEV'+gDriveAuth}
                                width={1200}
                                height={1200}
                                className='w-[16%] object-cover fadeUp my-8'
                                alt='appstore'
                            />
                                <div className='w-full flex flex-col items-end justify-center text-center '>
                                    <div className='w-4/5 flex flex-col items-end bg-[#2B2929]/50 rounded-lg p-8'>
                                        <h1 className='text-3xl fadeUp mb-6 fadeUp font-Coralis'>Resepsi</h1>
                                        <div className='flex flex-row items-center gap-4 fadeUp mb-2'>
                                            <h1 className='text-sm fadeUp'>{dataWeding.content.day} {dataWeding.content.date} {dataWeding.content.month_name} {dataWeding.content.year}</h1>
                                            <FiCalendar className='text-sm'/>
                                        </div>
                                        <div className='flex flex-row items-center gap-4 fadeUp'>
                                            <h1 className='text-sm fadeUp'>{dataWeding.content.start_resepsi} - {dataWeding.content.end_resepsi}</h1>
                                            <LuClock10 className='text-sm'/>
                                        </div>
                                        <h1 className=' text-right  fadeUp mt-4 fadeUp'>{dataWeding.content.venue} {dataWeding.content.venue_address}</h1>
                                        <h1 className='text-sm fadeUp'></h1>
                                        <button  onClick={()=>{ window.open("https://maps.app.goo.gl/1DFbPtKTbT1Efwm59", '_blank');}} className='fadeUp flex flex-row items-center justify-center text-sm rounded-lg  gap-2 border bg-white  px-3 py-2 mt-8 text-black'>
                                            <HiOutlineLocationMarker/> Lihat Lokasi
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        {/* GOOGLE MAP */}
                        <div id='lokasi' className='w-full relative text-sm flex flex-col items-center justify-center px-8 py-[100px]  backdrop-blur-xl overflow-hidden'>
                            <Image
                                src={dataWeding.content.img_quote_1}
                                width={1200}
                                height={1200}
                                className='w-full  absolute h-full opacity-10 left-0 object-cover'
                                alt='appstore'
                            />

                            <iframe src={dataWeding.content.gmap_frame}
                                className='w-full h-[300px] rounded-xl fadeUp'
                                width="600" 
                                height="600" 
                                style={{border:0}} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                            <button  onClick={()=>{ window.open("https://maps.app.goo.gl/1DFbPtKTbT1Efwm59", '_blank');}} className='fadeUp my-16 flex flex-row items-center justify-center text-sm rounded-lg  gap-2 border bg-white  px-3 py-2 mt-8 text-black'>
                                            <HiOutlineLocationMarker/> Lihat Lokasi
                                        </button>
                             <Timer targetDate = {dateCountDown} anim = {{fadeUp :'fadeUp'}} bgImage={gDrive+'1y5p-ROyWz65Vk6lIc8_tk6NHLYDIMA9R'+gDriveAuth}/>
                        </div>
                {/* COUNTDOWN */}
               
                {/* <Gallery id={'gallery'} images={images} anim={{fadeUp:'fadeUp'}}/> */}
               
            

                <Comments slug={dataWeding.META.slug} url={url} tamu={to}/>

                <GalleryFade images={imagesGallery} anim={{fadeUp:'fadeUp'}} id="gallery"/>

                {/* GIFT */}
                <div id='gift' className='h-full w-full backdrop-blur-xl py-12 flex gap-y-8 text-white flex-col items-center justify-center'  >
                       <h1 className={'text-3xl font-Coralis tracking-wider'}>Gifts</h1>
                       <div className=' relative rounded-lg'>
                            <Image
                                src={gDrive+"1Yflvx20k1sJFZCLcNAoOMIA3lHs_FeED"+gDriveAuth}
                                fill
                                style={{objectFit:"cover"}}
                                className='absolute top-0 rounded-lg fadeUp'
                                sizes="100%"
                                alt='rabine.id'
                            />
                            <div className='w-[400px] flex  p-8  flex-col items-start justify-between fadeUp'>
                                <div className='flex flex-row items-center justify-between w-full'>
                            
                                    <h1>BNI</h1>
                                    <Image
                                        src={gDrive+'1h9fv-w1E974Sp24ec3DqB8fCg5e55OX6'+gDriveAuth}
                                        width={1000}
                                        height={1000}
                                        className='w-[28%] object-contain'
                                        alt='appstore'
                                    />
                            </div>
                            <Image
                                    src={gDrive+'1nNGXHHDge0MH1p8_9TO_8V6_ABWW4Ldk'+gDriveAuth}
                                    width={1000}
                                    height={1000}
                                    className='w-[12%] object-contain my-8'
                                    alt='appstore'
                                />
                                <h1 className=' text-[1rem] text-center tracking-wider font-GameCube mb-4'>1643687743</h1>
                                <h1>Melati</h1>
                            </div>  
                       </div>
                       <button onClick={()=>{
                                 navigator.clipboard.writeText("1643687743")
                                 toast.success('berhasil menyalin text', {
                                    position: "top-right",
                                    autoClose: 3000, // Durasi tampilan toast dalam milidetik
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme:'light'
                                 });
                            }}  className='text-white fadeUp flex flex-row items-center justify-center text-sm rounded-lg  gap-2 border bg-[#151313] border-white px-3 py-2 mt-8
                                    hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
                        <FaRegCopy/> copy no rek
                    </button>
                       <div className=' relative rounded-lg '>
                            <Image
                                src={gDrive+"1Yflvx20k1sJFZCLcNAoOMIA3lHs_FeED"+gDriveAuth}
                                fill
                                style={{objectFit:"cover"}}
                                className='absolute top-0 rounded-lg fadeUp'
                                sizes="100%"
                                alt='rabine.id'
                            />
                            <div className='w-[400px] flex  p-8  flex-col items-start justify-between fadeUp'>
                                <div className='flex flex-row items-center justify-between w-full'>
                            
                                    <h1>BCA</h1>
                                    <Image
                                        src={gDrive+'1P-fPHKz6OSn90aHFV1wNIaxF0vnxDbuw'+gDriveAuth}
                                        width={1000}
                                        height={1000}
                                        className='w-[28%] object-contain'
                                        alt='appstore'
                                    />
                            </div>
                            <Image
                                    src={gDrive+'1nNGXHHDge0MH1p8_9TO_8V6_ABWW4Ldk'+gDriveAuth}
                                    width={1000}
                                    height={1000}
                                    className='w-[12%] object-contain '
                                    alt='appstore'
                                />
                                <h1 className=' text-[1rem] text-center tracking-wider font-GameCube mb-4'>1341887327</h1>
                                <h1>Muhammad Andrian</h1>
                            </div>  
                       </div>
                       <button onClick={()=>{
                                 navigator.clipboard.writeText("1341887327")
                                 toast.success('berhasil menyalin text', {
                                    position: "top-right",
                                    autoClose: 3000, // Durasi tampilan toast dalam milidetik
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme:'light'
                                 });
                            }} className='text-white fadeUp flex flex-row items-center justify-center text-sm rounded-lg  gap-2 border bg-[#151313] border-white px-3 py-2 mt-8
                                    hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
                        <FaRegCopy/> copy no rek
                    </button>
                 
                </div>

                {/* CLOSING */}
                <div className='w-full  relative text-center h-[500px]'>
                    <div className='fadeUp p-12 absolute left-0 top-0 bg-black/40 w-1/2 h-full flex flex-col items-center justify-end text-white'>
                        <p className='text-sm fadeUp'>Two souls become one, two hearts beat as one</p>
                        <h1 className={' text-3xl py-4 my-8 fadeUp font-Andrew uppercase'}>{dataWeding.content.bride_name} & {dataWeding.content.groom_name}</h1>
                        <p className='w-full fadeUp text-xs'>Thank You</p>
                    </div>
                    <Image
                        src={dataWeding.content.img_closing}
                        width={1200}
                        height={1200}
                        className='w-full object-cover h-full'
                        alt='appstore'
                    />
               </div>
               {/* WATERMARK */}
                <Watermark/>
                   </div>
                </div>
            </div>
            <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    
                  />
        </div>
    )
}
export async function getServerSideProps() {
    const url = process.env.API_URL_PROD
    return { props: {url} }
}

export default PresA05
