import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect,useRef } from 'react'
import { useRouter } from 'next/router'
import { useState} from 'react'
import Timer from '../../components/preset/presA04/Timer'
import Comments from '../../components/preset/presA04/Comments'
import { FaAngleDoubleDown,FaRegEnvelopeOpen, FaInstagram, 
        FaSearchLocation, FaRegCopy, FaPause} from "react-icons/fa"
import GalleryFade from '../../components/preset/presA04/GalleryFade'
import Watermark from '../../components/preset/globals/Watermark'
import {forum,cinzel} from '../../components/globals/Fonts'
import Navigasi from '../../components/preset/globals/Navigasi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function PresA04({url}) {

    const gDrive = "https://drive.usercontent.google.com/download?id="
    const gDriveAuth ="&authuser=0"
    const dataWeding = {
        META : {
             slug : "tony-melya",
             title : "The Wedding Of Tony & Melya",
             description : "The Wedding Of Tony & Melya",
             thumbnail : gDrive+"1ddqvisAIqhHRBgncMpBfOtIYNQ1iaTk9"+gDriveAuth
         },
         content : {
             audio : "/audio/wedding-cinematic.mp3",
             song_title : "Romantic Love - Charles P",
             groom_name: "Tony",
             bride_name : "Melya", 
             groom_sure_name : "Tony Tri Akhmadi",
             bride_sure_name : "Melya Sri Wahyuni",
             groom_pic : gDrive+"1gYCfNFThE7B9oiRZS3t_bp4oOn5hrTzG"+gDriveAuth, 
             bride_pic : gDrive+'1xrlQ112Pk859HxlnwQbBPOpFDsXz5ZYM'+gDriveAuth, 
             groom_father : "Gunawan", // Hanya nama dan Gelar
             groom_mother : "Saini", // Hanya nama dan Gelar
             bride_father : "Soeprapto", // Hanya nama dan Gelar
             bride_mother : "Sariatin",// Hanya nama dan Gelar
             groom_ig_account : "Andre_T",
             bride_ig_account : "Citra_T",
             groom_ig_url : "",
             bride_ig_url : "",
             couple : "Tony & Melya",
             day : "Rabu",
             date : "15", // Gunakan 01, 02, 03 dst untuk tanggal kurang dari 10
             month : "01", // Gunakan 01, 02, 03 dst untuk bulan kurang dari 10
             month_name : "Januari",
             year : "2025",
             start_akad : "08:00 WIB", // format pemisah menggunakan tanda ":" harus diberi jarak spasi antara jam dan "WIB"
             end_akad : "selesai",
             start_resepsi : "11:00 WIB",// format pemisah menggunakan tanda ":" harus diberi jarak spasi antara jam dan "WIB"
             end_resepsi : "16:00 WIB",
             venue : "Nikieco Mentok & Ayam pedas",
             venue_address : "Jln National III ,Rt 3 No.203, Slorok, Jatikerto, Kromengan, Malang Regency, East Java 65165",
             gmap_frame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15799.40307219353!2d112.5761332!3d-8.1166731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e789fe408c2880b%3A0x60b0af7bd09faf32!2snadhirdecal!5e0!3m2!1sid!2sid!4v1708078149410!5m2!1sid!2sid",
             yt_frame : "https://www.youtube-nocookie.com/embed/kebq86BTZFA?si=9saOo4u4j5ry06DO",
             rekening : "639201019634534",
             an : "Adinda Cahya Budiyanti",
             bg_opening : gDrive+'1AopmaDSkFGZk_Qqgm1FdQ0sRpSuWVVXP'+gDriveAuth,
             bg_first_section :gDrive+'160bwFrYamxO39-xcm_3LipTGW11Ln6DA'+gDriveAuth,
             bg_jadwal : gDrive+"1AopmaDSkFGZk_Qqgm1FdQ0sRpSuWVVXP"+gDriveAuth,
             img_left :  gDrive+"1AopmaDSkFGZk_Qqgm1FdQ0sRpSuWVVXP"+gDriveAuth,
             img_quote_1 : gDrive+'1Ashrm9adEFN5vtRks7eX4dERxw4bHUGO'+gDriveAuth,
             img_quote_2 : gDrive+'1PgDiDGdBXvrouzBWMyPfM7a8jR_jpOtz'+gDriveAuth,
             img_closing : gDrive+'1AopmaDSkFGZk_Qqgm1FdQ0sRpSuWVVXP'+gDriveAuth,
             btn_couple : gDrive+'1fMBLmfYcQScla9xh1RbzKN_1NyMO98tC'+gDriveAuth
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
        { src: gDrive+'1yl2NLtG52YRfgEPa5Ck4x6RXxO_O9Ywv'+gDriveAuth, alt: 'presA02' },
        { src: gDrive+'1F591xH3VnWFLkpAYPLe6pV4sqTddlLdi'+gDriveAuth, alt: 'presA02' },
        { src: gDrive+'1G-fXgITm8fpJ-7ysJAepbq83JU0LilMN'+gDriveAuth, alt: 'presA02' },
        { src: gDrive+'1LjnDmiZ0kfVftFEDIbxLQ-abXJyc7lgJ'+gDriveAuth, alt: 'presA02' },
     
        // tambhakan lagi kalau masih ada....
    ]


    useEffect(()=>{

        const fadeZoomIn = document.querySelectorAll(".fadeZoom")
        const fadeUpElements = document.querySelectorAll(".fadeUp")

        fadeZoomIn.forEach((element)=>{
            gsap.set(element,{
                scale : 0.5,
                y:80,
                opacity : 0
            })

            ScrollTrigger.create({
                trigger: element,
                start: "top 90%", 
                toggleActions: "play", 
                animation: gsap.to(element, {
                    y:0,
                    scale: 1,
                    opacity: 1,
                    duration: 1, 
                    ease: "power2.out",
                }),
            });
        })

        fadeUpElements.forEach((element) => {
          
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
        <div className={'w-full box-content text-white '+forum.className}>

            {/* TO DO: BACKDOUND MP3*/}
            <audio  loop ref={audioRef} src="/audio/wedding-cinematic.mp3" />
            <Head>
                {/* TO DO: TITLE PERNIKAHAN*/}
                <title>{dataWeding.META.title}</title>

                <meta name="description" content={dataWeding.META.description} />
                <meta property="og:image" content={dataWeding.META.thumbnail} />
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
                            <h1>THE WEDDING OF</h1>

                            {/* TO DO: NAMA KEDUA MEMPELAI*/}
                            <h1 className={' text-3xl pb-8 '+cinzel.className}>{dataWeding.content.couple}</h1>

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
                <div id='gallery' className="hidden lg:flex bg-cover bg-right md:w-1/2 lg:w-[60%] h-screen overflow-hidden sticky top-0">
                    
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
                <div className='w-full  lg:w-[40%] overflow-y-auto relative text-[#2a2112]'>


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
                   <div id='opening' className='w-full h-screen text-white relative'>
                        <div className=' absolute top-0  bg-gradient-to-t from-black/90 to-transparent w-full h-full flex flex-col items-center justify-end pb-20 fadeUp'>
                            <p className={forum.className+" text-lg" }>The Wedding Of</p>

                            {/* TO DO: NAMA MEMPELAI*/}
                            <h1 className={' text-5xl p-4  text-center px-12 '+cinzel.className}>{dataWeding.content.groom_name} & {dataWeding.content.bride_name}</h1>
                        
                                {/* TO DO: TANGGAL NIKAH*/}
                                <p className={'text-center text-lg '+forum.className}>{dataWeding.content.date} {dataWeding.content.month_name} {dataWeding.content.year}</p> 
                        </div>

                        {/* TO DO: GAMBAR OPENING*/}
                        <Image
                            src={dataWeding.content.bg_first_section}
                            width={1200}
                            height={1200}
                            className='w-full lg:object-right left-4 object-cover h-full inset-12'
                            alt='appstore'
                        />
                   </div>

                    {/* BACKGROUND IMAGE */}
                   <div className='w-full  flex flex-col items-center  relative '>
                    <Image
                        src={dataWeding.content.bg_first_section}
                        width={1200}
                        height={1200}
                        className='w-full lg:w-[40%] object-cover min-h-screen max-h-screen top-0 fixed -z-10'
                        alt='appstore'
                    />
                 
                 
                        {/* AYAT ALQUR'AN */}
                        <div className='w-full relative text-sm flex flex-col items-center justify-center px-16 gap-y-4 py-[80px] bg-white/75
                                        backdrop-blur-xl  overflow-hidden'>
                        

                        <Image
                            src={gDrive+'1y5p-ROyWz65Vk6lIc8_tk6NHLYDIMA9R'+gDriveAuth}
                            width={1200}
                            height={1200}
                            className='w-full  absolute -top-40 left-0 object-contain'
                            alt='appstore'
                        />
                        <Image
                            src={gDrive+'1R6BXggwE1GRqXKrcdM65MGL7OCi8hEwL'+gDriveAuth}
                            width={1200}
                            height={1200}
                            className='w-[10%] object-cover fadeUp'
                            alt='appstore'
                        />
                        <p className='text-center text-base fadeUp mt-10'>
                            “Dan diantara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, 
                            agar kamu cenderung dan merasa tenteram kepadanya dan Dia menjadikan diantaramu rasa kasih dan sayang. 
                            Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.“
                        </p>
                        <p className={'text-center text-lg pt-4 pb-20 font-bold fadeUp '+forum.className}>
                            (QS. Ar-Rum ayat 21)
                        </p>

                        {/* <Image
                            src={dataWeding.content.img_quote_1}
                            width={1200}
                            height={1200}
                            className='w-full object-cover fadeUp rounded-br-3xl rounded-tl-3xl rounded-bl rounded-tr'
                            alt='appstore'
                        /> */}
                        {/* <p className='text-center fadeUp text-sm px-8 lg:px-20 my-12 fadeUp'>
                            We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.
                        </p> */}
                        </div>
                        {/* MEMPELAI BRIDE*/}
                        <div id='mempelai' className='w-full relative text-sm flex flex-col items-center justify-center px-16 gap-y-4 py-[40px] bg-white/75
                                                backdrop-blur-xl overflow-hidden text-center '>
                 
                                <Image
                                    src={gDrive+'1y5p-ROyWz65Vk6lIc8_tk6NHLYDIMA9R'+gDriveAuth}
                                    width={1200}
                                    height={1200}
                                    className='w-1/2 absolute -top-20 right-0 object-contain transform rotate-90 scale-x-[-1]'
                                    alt='appstore'
                                />

                                <Image
                                    src = {dataWeding.content.bride_pic}
                                    width={1200}
                                    height={1200}
                                    className='w-[160px] h-[160px] object-cover rounded-full p-3 fadeZoom bg-gradient-to-br from-[#DFD4CC] to-white shadow-xl'
                                    alt='appstore'
                                />
                                <h1 className={'text-3xl px-[30px] py-6 fadeUp text-slate-700 '+cinzel.className}>{dataWeding.content.bride_sure_name}</h1>
                                <h1 className='text-lg my-2 fadeUp'>Putri dari Alm.<br/> Bapak {dataWeding.content.bride_father} <br/> Dan Almh. Ibu {dataWeding.content.bride_mother}</h1>
                                {/* <div className='cursor-pointer transform hover:scale-110 transition ease-out duration-300 flex gap-2 text-sm items-center justify-center fadeUp text-white px-4 py-2 bg-[#884D30] rounded-full'>
                                    <FaInstagram/>
                                    {dataWeding.content.bride_ig_account}
                                </div> */}
                            </div>
                        {/* MEMPELAI GROOM*/}
                        <div id='' className='w-full relative text-sm flex flex-col items-center justify-center px-16 gap-y-4 py-[40px] bg-white/75
                                                backdrop-blur-xl  overflow-hidden text-center bg'>
                                <Image
                                    src={gDrive+'1y5p-ROyWz65Vk6lIc8_tk6NHLYDIMA9R'+gDriveAuth}
                                    width={1200}
                                    height={1200}
                                    className='w-1/2 absolute -bottom-20 left-0 object-contain transform rotate-90 scale-y-[-1] '
                                    alt='appstore'
                                />
                                <Image
                                    src = {dataWeding.content.groom_pic}
                                    width={1200}
                                    height={1200}
                                    className='w-[160px] h-[160px] object-cover rounded-full fadeZoom  p-3 bg-gradient-to-br from-[#DFD4CC] to-white shadow-xl'
                                    alt='appstore'
                                />
                                <h1 className={'text-3xl px-[30px] py-6 fadeUp text-slate-700 '+cinzel.className}>{dataWeding.content.groom_sure_name}</h1>
                                <h1 className='my-2 text-lg fadeUp'>Putra dari <br/> Alm. Bapak {dataWeding.content.groom_father} <br/> Dan Ibu {dataWeding.content.groom_mother}</h1>
                                {/* <div className='cursor-pointer transform hover:scale-110 transition ease-out duration-300 flex gap-2 text-sm items-center justify-center fadeUp text-white px-4 py-2 bg-[#884D30] rounded-full'>
                                    <FaInstagram/>
                                    {dataWeding.content.groom_ig_account}
                                </div> */}
                            </div>

                        {/* INFO ACARA */}
                        <div id='jadwal' className='w-full  relative'>
                        <div className='w-full  flex flex-col items-center justify-center text-slate-700 p-8 space-y-6 '>
                            <div className='bg-white/70 rounded-xl p-8 space-y-4 shadow-xl backdrop-blur-sm fadeUp'>
                                <div className='flex flex-col items-center justify-center text-center gap-y-2'>
                                    <h1 className={'text-3xl  fadeUp mb-6 fadeUp '+forum.className}>Akad Nikah</h1>
                                    <h1 className='text-xl font-bold fadeUp'>{dataWeding.content.day} {dataWeding.content.date} {dataWeding.content.month_name} {dataWeding.content.year}</h1>
                                    <h1 className='text-lg fadeUp'>{dataWeding.content.start_akad} - {dataWeding.content.end_akad}</h1>
                                    <h1 className='text-xl  fadeUp mt-4 fadeUp'>{dataWeding.content.venue}</h1>
                                    <h1 className='text-lg fadeUp'>{dataWeding.content.venue_address}</h1>
                                    {/* <button className='text-white fadeUp flex flex-row items-center justify-center text-sm rounded-lg  gap-2 border bg-[#151313] border-white px-3 py-2 mt-8
                                        hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
                                        <FaSearchLocation/> view Location
                                    </button> */}
                                </div>
                            </div>
                            <div className='bg-white/70 rounded-xl p-8 space-y-4 shadow-xl backdrop-blur-sm fadeUp'>
                                <div className='flex flex-col items-center justify-center text-center gap-y-2'>
                                    <h1 className={'text-3xl  fadeUp mb-6 fadeUp '+forum.className}>Resepsi</h1>
                                    <h1 className='text-xl font-bold fadeUp'>{dataWeding.content.day} {dataWeding.content.date} {dataWeding.content.month_name} {dataWeding.content.year}</h1>
                                    <h1 className='text-lg fadeUp'>{dataWeding.content.start_resepsi} - {dataWeding.content.end_resepsi}</h1>
                                    <h1 className='text-xl  fadeUp mt-4 fadeUp'>{dataWeding.content.venue} </h1>
                                    <h1 className='text-lg fadeUp'>{dataWeding.content.venue_address}</h1>
                                    {/* <button className='text-white fadeUp flex flex-row items-center justify-center text-sm rounded-lg  gap-2 border bg-[#151313] border-white px-3 py-2 mt-8
                                        hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
                                        <FaSearchLocation/> view Location
                                    </button> */}
                                </div>
                            </div>
                          
                        </div>
                    </div>

                        {/* GOOGLE MAP */}
                        <div id='lokasi' className='w-full relative text-sm flex flex-col items-center justify-center px-8 space-y-8 py-[80px] bg-white/90 backdrop-blur-xl overflow-hidden'>
                            {/* <Image
                                src={gDrive+'1y5p-ROyWz65Vk6lIc8_tk6NHLYDIMA9R'+gDriveAuth}
                                width={1200}
                                height={1200}
                                className='w-full  absolute -top-40 left-0 object-contain'
                                alt='appstore'
                            /> */}

                            <iframe src={dataWeding.content.gmap_frame}
                                className='w-full h-[300px] rounded-xl'
                                width="600" 
                                height="600" 
                                style={{border:0}} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                            <button className='text-white fadeUp flex flex-row items-center justify-center text-sm rounded-lg  gap-2 border bg-[#151313] border-white px-3 py-2 mt-8
                                        hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
                                        <FaSearchLocation/> view Location
                            </button>
                            
                        </div>

              
                {/* COUNTDOWN */}
                <Timer 
                targetDate = {dateCountDown} 
                anim = {{fadeUp :'fadeUp'}} 
                bgImage={gDrive+'1y5p-ROyWz65Vk6lIc8_tk6NHLYDIMA9R'+gDriveAuth}
                url={"https://calendar.google.com/calendar/u/0/r/eventedit?text=Wedding+"+dataWeding.content.groom_name+"+%26+"+dataWeding.content.bride_name+"&dates="+dataWeding.content.year+dataWeding.content.month+dataWeding.content.date+"T120000Z/"+dataWeding.content.year+dataWeding.content.month+dataWeding.content.date+"T120000Z&pli=1"}/>

                {/* <Gallery id={'gallery'} images={images} anim={{fadeUp:'fadeUp'}}/> */}

                {/* YOUTUBE */}
                {/* <div className='w-full flex flex-col items-center justify-center px-4  gap-y-8 py-20 bg-white/90 backdrop-blur-xl '>
                    <iframe 
                        className='w-full fadeUp rounded-xl'
                        height="315" 
                        src="https://www.youtube-nocookie.com/embed/kebq86BTZFA?si=9saOo4u4j5ry06DO?autoplay=1" 
                        title="YouTube video player" 
                    
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                       >
                    </iframe>
                </div> */}

                <Comments slug={dataWeding.META.slug} url={url} tamu={to}/>

                {/* <GalleryFade images={imagesGallery} anim={{fadeUp:'fadeUp'}} id="gallery"/> */}

                {/* GIFT */}
                <div id='gift' className='h-full w-full bg-white/90 backdrop-blur-xl py-12 flex gap-y-8 text-sslate-700 flex-col items-center justify-center'  >
                       <h1 className={'text-3xl '+forum.className}>Gifts</h1>
                       <div className=' relative rounded-lg'>
                            <Image
                                src={gDrive+"1GRzih9dezee_XEFl2X-F9lMKpxkTfEM6"+gDriveAuth}
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
                                    className='w-[12%] object-contain my-8'
                                    alt='appstore'
                                />
                                <h1 className=' text-[1rem] text-center tracking-wider font-GameCube mb-4'>1230373961</h1>
                                <h1>Melya sri wahyuni</h1>
                            </div>  
                       </div>
                       <button onClick={()=>{
                                        navigator.clipboard.writeText("1230373961")
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
                                        }
                                    }  className='text-white fadeUp flex flex-row items-center justify-center text-sm rounded-lg  gap-2 border bg-[#151313] border-white px-3 py-2 mt-8
                                    hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
                        <FaRegCopy/> copy no rek
                    </button>
                 
                </div>

                {/* CLOSING */}
                <div className='w-full  relative text-center h-[500px]'>
                    <div className='fadeUp p-12 absolute left-0 top-0 bg-black/40 w-1/2 h-full flex flex-col items-center justify-end text-white'>
                        <p className='text-sm fadeUp'>Two souls become one, two hearts beat as one</p>
                        <h1 className={'fadeUp text-3xl py-4 fadeUp'+cinzel.className}>{dataWeding.content.groom_name} & {dataWeding.content.bride_name}</h1>
                       
                            <p className='w-1/3 fadeUp'>Thank You</p>
                       
                        
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

export default PresA04
