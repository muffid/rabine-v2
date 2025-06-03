import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect,useRef } from 'react'
import { useRouter } from 'next/router'
import { useState} from 'react'
import Timer from '../../components/preset/cust-gia/Timer'
import GalleryFade from '../../components/preset/presA04/GalleryFade'
import Comments from '../../components/preset/cust-gia/Comments'
import { FaAngleDoubleDown,FaRegEnvelopeOpen, FaInstagram, FaCalendarAlt, FaRegClock,
        FaSearchLocation, FaRegCopy, FaPause } from "react-icons/fa"
import { IoMdHeart } from "react-icons/io";
import { MdOutlineCalendarToday } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

import Watermark from '../../components/preset/globals/Watermark'
import Navigasi from '../../components/preset/globals/Navigasi'
import { forum, inter } from '../../components/globals/Fonts'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function PresA02({url}) {

    const gDrive = "https://drive.usercontent.google.com/download?id="
    const gDriveAuth ="&authuser=0"
    const dataWeding = {
        META : {
             slug : "gia-lilly",
             title : "The Wedding of Gia And Lilly",
             description : "rabine.id -The Wedding of Gia And Lilly",
             thumbnail : gDrive+"1Luk7XcsNJUj4uyC65xrGRThbIS9jWwIy"+gDriveAuth
         },
         content : {
             audio : "/audio/wedding-cinematic.mp3",
             song_title : "Romantic Love - Charles P",
             groom_name: "Gia",
             bride_name : "Lilly", 
             groom_sure_name : "Giya Sugianto",
             bride_sure_name : "Liyana S.Sos",
             groom_pic : gDrive+"1NRxyl-Ap-Nc6QPqFGAuexlYGhtXvVdoj"+gDriveAuth, 
             bride_pic : gDrive+'1XLzKgDYR4LOqOL__rRpmPfKaxAWYHqEY'+gDriveAuth, 
             groom_father : "Kusmana", // Hanya nama dan Gelar
             groom_mother : "Turidah", // Hanya nama dan Gelar
             bride_father : "Inon Ali", // Hanya nama dan Gelar
             bride_mother : "Hj. Rokhimah",// Hanya nama dan Gelar
             groom_ig_account : "Andre_T",
             bride_ig_account : "Citra_T",
             groom_ig_url : "",
             bride_ig_url : "",
             couple : "Gia & Lilly",
             day : "Selasa",
             date : "10", // Gunakan 01, 02, 03 dst untuk tanggal kurang dari 10
             month : "06", // Gunakan 01, 02, 03 dst untuk bulan kurang dari 10
             month_name : "JUni",
             year : "2025",
             start_akad : "09:00 WIB", // format pemisah menggunakan tanda ":" harus diberi jarak spasi antara jam dan "WIB"
             end_akad : "09:45 WIB",
             start_resepsi : "10:00 WIB",// format pemisah menggunakan tanda ":" harus diberi jarak spasi antara jam dan "WIB"
             end_resepsi : "Selesai",
             venue : "",
             venue_address : "Jl. Nyi Ageng Serang, Blok. Puntang Wetan RT 07 RW 03, Kec. Dukupuntang, Kab. Cirebon, Jawa Barat ",
             rekening : "414 001016863539",
             an : "Liyana",
             gmap_frame : "https://www.google.com/maps/embed?pb=!4v1748916654018!6m8!1m7!1sfeB813EegNZtQGYVtS4x4A!2m2!1d-6.765217339167598!2d108.4257217513503!3f172.59!4f-3.680000000000007!5f0.4000000000000002",
             yt_frame : "https://www.youtube-nocookie.com/embed/kebq86BTZFA?si=9saOo4u4j5ry06DO",
             bg_opening : gDrive+'17UouPVkuVkIzKT8qVQtFAFtdDwuEasDb'+gDriveAuth,
             bg_first_section :gDrive+'1CQhmpdoKdfLWhJXu6cZe81kzUoSWDl8O'+gDriveAuth,
             bg_jadwal : gDrive+"1dp4UJ4cN1QcnUjfpH-Qh55KAfWBV5TW8"+gDriveAuth,
             img_left :  gDrive+"1CQhmpdoKdfLWhJXu6cZe81kzUoSWDl8O"+gDriveAuth,
             img_quote_1 : gDrive+'1tHr7okJ_ksTCpY-RTPpb7fb3A2RXrcyV'+gDriveAuth,
             img_quote_2 : gDrive+'1PgDiDGdBXvrouzBWMyPfM7a8jR_jpOtz'+gDriveAuth,
             img_closing : gDrive+'1J2XGkyjUfBVQT81MCIKZ3h0DTgMmRFmm'+gDriveAuth,
             btn_couple : gDrive+'1ljemzXI1pDZIFeWQIw-iqVgWVRZdYfVE'+gDriveAuth
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
        { src: gDrive+'1J2XGkyjUfBVQT81MCIKZ3h0DTgMmRFmm'+gDriveAuth, alt: 'presA02' },
        { src: gDrive+'1QKjgCU_ZBN6waVXC9ZuxTbJ5JPPg-EVh'+gDriveAuth, alt: 'presA02' },
        { src: gDrive+'1afSiYM7QLKqazH2SOrrafiREuB4Q2PJm'+gDriveAuth, alt: 'presA02' },
        { src: gDrive+'17UouPVkuVkIzKT8qVQtFAFtdDwuEasDb'+gDriveAuth, alt: 'presA02' },
        { src: gDrive+'1dp4UJ4cN1QcnUjfpH-Qh55KAfWBV5TW8'+gDriveAuth, alt: 'presA02' },
     
        // tambhakan lagi kalau masih ada....
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
        <div className={'w-full box-content  text-[#575757] '+inter.className}>

            {/* TO DO: BACKDOUND MP3*/}
            <audio  loop ref={audioRef} src="/audio/wedding-cinematic.mp3" />
            <Head>
                {/* TO DO: TITLE PERNIKAHAN*/}
                <title>{dataWeding.META.title}</title>

                <meta name="description" content={dataWeding.META.description} />
                <meta property="og:image" content={ gDrive+"1Luk7XcsNJUj4uyC65xrGRThbIS9jWwIy"+gDriveAuth} />
                <meta property="og:image:width" content="400" />
                <meta property="og:image:height" content="400" />
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
                <div className='w-full h-screen fixed z-20 moving-up flex flex-col items-start justify-start' style={{ top: `${topPosition}px` }}>
                   <div className='w-full h-screen flex flex-row items-start overflow-hidden'>
                        <Image
                              src={dataWeding.content.bg_opening}
                            width={1200}
                            height={1200}
                            className='w-1/2 object-cover h-full'
                            alt='appstore'
                        />
                       
                        <div className='w-full bg-white flex flex-col items-start justify-between  h-full px-8 py-16'>
                            <h1 className='text-lg'>The Wedding Of</h1>
                            <div className='flex flex-col items-start'>
                                 <div className='flex flex-row items-end'>
                                    <h1 className='text-7xl font-Coralis'>{dataWeding.content.groom_name}</h1>
                                    <h1 className='text-4xl font-Coralis pb-1 mx-2'>& </h1>
                                </div>
                                <h1 className='text-7xl font-Coralis'>{dataWeding.content.bride_name}</h1>
                                <h1 className=' my-6'>{dataWeding.content.date}.{dataWeding.content.month}.{dataWeding.content.year}</h1>
                            </div>
                           <div className='flex flex-col items-start'>
                                <h1 className=''>Kepada Yth:</h1>
                                <h1 className=''>Bapak/Ibu/Sdr/i</h1>
                                <h1 className=' font-bold my-6'>{to}</h1>
                                <button onClick={moveUp} className='bg-[#302e33] rounded-xl text-white px-4 py-3 flex flex-row items-center justify-center text-xs'>
                                    <FaRegEnvelopeOpen className='text-sm mr-1'/>
                                    Buka Undangan
                                </button>
                           </div>
                        </div>
                        
                   </div>
                </div>

                {/* SISI KIRI (TAMPILAN PC) */}

                {/* TO DO: GAMBAR UNTUK SISI KIRI TAMPILAN PC*/}
                <div id='gallery' className="hidden lg:flex bg-cover bg-right md:w-1/2 lg:w-[60%] h-screen overflow-hidden sticky top-0">
                    
                    <div className='gap-y-4 w-full h-full flex flex-col justify-end items-end 
                                 relative'>
                        <Image
                                src={dataWeding.content.img_left}
                                fill
                                style={{objectFit:"cover"}}
                                className='absolute '
                                sizes="100vw"
                                alt='rabine.id'
                            />    
                            <div className='gap-y-4 p-8 w-full h-full bg-gradient-to-l from-[#B6B5B9] to-transparent flex flex-col justify-end items-end 
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
                <div className='w-full  lg:w-[40%] overflow-y-auto relative text-[#575757] bg-white'>

                    {/* NOW PLAYING*/}
                    <div className='lg:hidden flex flex-col items-center justify-between gap-x-4 fixed w-full
                                     top-4 z-10 '>
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
                                <h1>Romantic Love - Alex P.</h1>
                            </div>
                        </div>                    
                    </div>

                    {/* NAVIGASI MENU BAWAH */}
                   <Navigasi imgThumb={dataWeding.content.btn_couple}/>
                    {/* OPENING_PHOTO */}
                   <div id='opening' className='w-full h-screen flex flex-col'>
                      
                        <div className='flex flex-col items-start px-8 pb-8 pt-20'>
                            <div className='flex flex-row items-end'>
                                <h1 className='text-7xl font-Coralis'>{dataWeding.content.groom_name}</h1>
                                <IoMdHeart className='text-2xl mb-2'/>
                            </div>
                            <h1 className='text-7xl font-Coralis'>{dataWeding.content.bride_name}</h1>
                            <h1 className='text-lg my-6'>{dataWeding.content.date}.{dataWeding.content.month}.{dataWeding.content.year}</h1>
                        </div>
                        
                        {/* TO DO: GAMBAR OPENING*/}
                        <div className='w-full h-1/2 bg-yellow-50'>
                            <Image
                                src={dataWeding.content.bg_first_section}
                                width={1200}
                                height={1200}
                                className='w-full'
                                alt='appstore'
                            />
                        </div>
                      
                   </div>

                   {/* AYAT ALQUR'AN */}
                    <div className='w-full relative text-sm flex flex-col items-center justify-center px-16 pt-[100px] bg-white'>
                    
                        <p className='text-center fadeUp text-sm leading-6 italic'>
                           Riak malam yang damai, <br/> tawa ceria di siang hari akan menjadi <br/>kebahagiaan yang tiada tara tatkala <br/> semua ada dalam pernikahan.<br/>-pegpuff
                        </p>
                        <IoMdHeart className='fadeUp text-2xl my-16 text-slate-950'/>
                    </div>
                    <div className="w-full h-[250px] relative fadeUp mb-20">
                        <Image
                            src={dataWeding.content.img_quote_1} // Ganti dengan path gambar Andawhite
                            alt="Contoh Gambar"
                            fill // Mengisi seluruh parent div
                            className="object-center object-cover" // Center dan cover
                            priority
                        />
                    </div>

                    {/* MEMPELAI */}
                    <div id='mempelai' className='w-full h-screen bg-white flex flex-col items-center justify-center py-10  relative overflow-hidden'>
                      
                            <Image
                                src={dataWeding.content.img_quote_1} // Ganti dengan path gambar Andawhite
                                alt="Contoh Gambar"
                                fill // Mengisi seluruh parent div
                                className="object-center object-cover absolute z-0 opacity-15" // Center dan cover
                                priority
                            />  
                      
                       
                        <h1 className='text-center fadeUp font-Coralis text-4xl mb-20'>Calon Mempelai</h1>
                        <div className='w-full flex flex-row items-start'>
                            <div className='w-full bg-white relative overflow-hidden h-[220px]'>
                                <Image
                                    src = {dataWeding.content.groom_pic}
                                    width={1200}
                                    height={1200}
                                    className='w-[180px] h-[170px] object-cover object-center absolute bottom-2 left-0 fadeUp'
                                    alt='appstore'
                                />
                            </div>
                            <div className='w-full flex flex-col items-start px-6 '>
                                <h1 className='text-4xl font-Coralis font-bold fadeUp'>{dataWeding.content.groom_name}</h1>
                                <h1 className='text-lg fadeUp'>{dataWeding.content.groom_sure_name}</h1>
                                <h1 className='text-sm italic mt-2 fadeUp'>Putra dari</h1>
                                <h1 className='text-sm italic fadeUp'>Bapak {dataWeding.content.groom_father} & Ibu {dataWeding.content.groom_mother}</h1>
                                <h1 className='text-[0.5rem] italic mt-2 fadeUp'>Dusun I, RT/RW. 003/001, Desa Sangkanerang, Kec. Jalaksana, Kab. Kuningan</h1>
                                <div className='flex flex-row items-center fadeUp'>
                                    <FaInstagram className='text-sm'/><h1 className='text-sm font-bold mx-2'>@peg_puff</h1>
                                </div>
                            </div>
                        </div>
                        <IoMdHeart className='fadeUp text-4xl my-16 text-slate-950'/>
                         <div className='w-full flex flex-row'>
                            <div className='w-full flex flex-col items-end p-6 '>
                                <h1 className='fadeUp text-4xl font-Coralis font-bold '>{dataWeding.content.bride_name}</h1>
                                <h1 className='fadeUp text-lg'>{dataWeding.content.bride_sure_name}</h1>
                                <h1 className='fadeUp text-sm italic mt-2'>Putri dari</h1>
                                <h1 className='fadeUp text-sm italic text-right'>Bapak {dataWeding.content.bride_father} & Ibu {dataWeding.content.bride_mother}</h1>
                                <h1 className='fadeUp text-[0.5rem] italic mt-2 text-right'>Jln. Nyi ageng serang. Blok puntang wetan, Rt 007 Rw 003, Kec. Dukupuntang, Kab. Cirebon</h1>
                                 <div className='flex flex-row items-center fadeUp'>
                                   <h1 className='text-sm font-bold mx-2'>@liyana_aurora</h1> <FaInstagram className='text-sm'/>
                                </div>
                            </div>
                            <div className='w-full bg-white relative overflow-hidden h-[220px]'>
                                <Image
                                    src = {dataWeding.content.bride_pic}
                                    width={1200}
                                    height={1200}
                                    className='w-[180px] h-[170px] object-cover object-center absolute bottom-2 right-0 fadeUp'
                                    alt='appstore'
                                />
                            </div>
                         
                        </div>
                       
                    </div>
                    <div className='bg-white w-full py-20 flex flex-col items-center'>
                         <h1 className='text-4xl  fadeUp  fadeUp font-Coralis'>Acara</h1>
                    </div>
                    {/* INFO ACARA */}
                    <div id='jadwal' className='w-full  relative overflow-hidden'>
                        <Image
                            src={dataWeding.content.bg_jadwal}
                            fill
                            style={{objectFit:"cover"}}
                            className='asolute scale-150'
                            sizes="100vw"
                            alt='rabine.id'
                        />
                        <div className='w-full h-[720px] flex flex-col items-center justify-between text-[#575757] space-y-6 '>
                            <div className='bg-white/90 w-full p-8 space-y-4  fadeUp'>
                                <div className='fadeUp flex flex-col items-center justify-center text-center gap-y-2'>
                                    <h1 className='text-2xl  fadeUp mb-6 fadeUp font-Coralis'>Akad Nikah</h1>
                                    <div className=' fadeUp flex flex-row items-center'>
                                        <MdOutlineCalendarToday className='text-sm'/><h1 className=' mx-2'>{dataWeding.content.day}, {dataWeding.content.date} {dataWeding.content.month_name} {dataWeding.content.year}</h1>
                                    </div>
                                    <div className='fadeUp flex flex-row items-center'>
                                        <FaRegClock className='text-sm'/><h1 className=' mx-2'>{dataWeding.content.start_akad} - {dataWeding.content.end_akad}</h1>
                                    </div>
                       
                                  
                                </div>
                            </div>
                           <div className='bg-white/90 w-full p-8 space-y-4  fadeUp'>
                                <div className='flex flex-col items-center justify-center text-center gap-y-2'>
                                    <h1 className='text-2xl  fadeUp mb-6 fadeUp font-Coralis'>Resepsi</h1>
                                    <div className='flex flex-row items-center fadeUp'>
                                        <MdOutlineCalendarToday className='text-sm'/><h1 className=' mx-2'>{dataWeding.content.day}, {dataWeding.content.date} {dataWeding.content.month_name} {dataWeding.content.year}</h1>
                                    </div>
                                    <div className='flex flex-row items-center fadeUp'>
                                        <FaRegClock className='text-sm'/><h1 className=' mx-2'>{dataWeding.content.start_resepsi} - {dataWeding.content.end_resepsi}</h1>
                                    </div>
                              
                                        <CiLocationOn className='fadeUp'/><h1 className='fadeUp mx-2 text-sm'>{dataWeding.content.venue_address}</h1>
                                    
                                </div>
                            </div>
                          
                        </div>
                    </div>

                     {/* GOOGLE MAP */}
                     <div id='lokasi' className='relative overflow-hidden w-full h-[600px] flex flex-col items-center justify-center fadeUp gap-y-8 bg-white p-4'>
                           <Image
                                src={dataWeding.content.img_quote_1} // Ganti dengan path gambar Andawhite
                                alt="Contoh Gambar"
                                fill // Mengisi seluruh parent div
                                className="object-center object-cover absolute -z-0 opacity-15" // Center dan cover
                                priority
                            />  
                        <iframe src={dataWeding.content.gmap_frame}
                                className='w-full h-[300px] rounded-xl z-[2]'
                                width="600" 
                                    height="600" 
                                    style={{border:0}} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        <button onClick={()=>{ window.open("https://maps.app.goo.gl/Tueku31BzAYKdn9u5", '_blank');}} className='text-white fadeUp flex flex-row items-center justify-center text-sm rounded-lg  gap-2 border bg-[#151313] border-white px-3 py-2 mt-8
                                        hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
                                        <FaSearchLocation/> Lihat Google Map
                                    </button>
                    </div>

                    {/* COUNTDOWN */}
                    <Timer 
                        targetDate = {dateCountDown} 
                        anim = {{fadeUp :'fadeUp'}} 
                        bgImage={gDrive+"1GRzih9dezee_XEFl2X-F9lMKpxkTfEM6"+gDriveAuth}
                        url={"https://calendar.google.com/calendar/u/0/r/eventedit?text=Wedding+"+dataWeding.content.groom_name+"+%26+"+dataWeding.content.bride_name+"&dates="+dataWeding.content.year+dataWeding.content.month+dataWeding.content.date+"T120000Z/"+dataWeding.content.year+dataWeding.content.month+dataWeding.content.date+"T120000Z&pli=1"} 
                    />
                    <Comments slug={dataWeding.META.slug} url={url} tamu={to}/>
                    <div className='bg-white w-full flex flex-col items-center'>
                                <h1 className='font-Coralis text-4xl fadeUp mb-14 mt-20'>Gallery</h1>
                    </div>
                   <GalleryFade images={imagesGallery} anim={{fadeUp:'fadeUp'}} id="gallery"/>
                    {/* GIFT */}
                    <div id='gift' className='h-full bg-white py-12 flex gap-y-8 text-[#575757] flex-col items-center justify-center fadeUp'  >
                           <h1 className='text-[2.5rem] fadeUp font-Coralis my-8'>Kirim Hadiah</h1>
                           <div className=' relative rounded-lg fadeUp'>
                                <Image
                                    src={gDrive+"1GRzih9dezee_XEFl2X-F9lMKpxkTfEM6"+gDriveAuth}
                                    fill
                                    style={{objectFit:"cover"}}
                                    className='absolute top-0 rounded-lg'
                                    sizes="100%"
                                    alt='rabine.id'
                                />
                                <div className='w-[400px] flex  p-8  flex-col items-start justify-between fadeUp'>
                                    <div className='flex flex-row items-center justify-between w-full'>
                                
                                        <h1>Bank BRI</h1>
                                        <Image
                                            src='/img/BRI.png'
                                            width={1000}
                                            height={1000}
                                            className='w-[20%] object-contain'
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
                                    <h1 className=' text-[1rem] text-center tracking-wider font-GameCube mb-4'>{dataWeding.content.rekening}</h1>
                                    <h1>{dataWeding.content.an}</h1>
                                </div>  
                           </div>
                           <button onClick={()=>{
                                        navigator.clipboard.writeText(dataWeding.content.rekening)
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
                                    } 
                                    className='text-white fadeUp flex flex-row items-center justify-center text-sm rounded-lg  gap-2 border bg-[#151313] border-white px-3 py-2 mt-8
                                        hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
                                    <FaRegCopy/> salin no rekening
                        </button>

                        <div className=' relative rounded-lg fadeUp'>
                                <Image
                                    src={gDrive+"1GRzih9dezee_XEFl2X-F9lMKpxkTfEM6"+gDriveAuth}
                                    fill
                                    style={{objectFit:"cover"}}
                                    className='absolute top-0 rounded-lg'
                                    sizes="100%"
                                    alt='rabine.id'
                                />
                                <div className='w-[400px] flex  p-8  flex-col items-start justify-between fadeUp'>
                                    <div className='flex flex-row items-center justify-between w-full'>
                                
                                        <h1>DANA</h1>
                                        <Image
                                               src={gDrive+'1wofsR2rtFWYDJh7RGqFrHMKK5qssEJje'+gDriveAuth}
                                            width={1000}
                                            height={1000}
                                            className='w-[15%] object-contain'
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
                                    <h1 className=' text-[1rem] text-center tracking-wider font-GameCube mb-4'>0859114987926</h1>
                                    <h1>GIYA</h1>
                                </div>  
                           </div>
                           <button onClick={()=>{
                            const no = "0859114987926"
                                        navigator.clipboard.writeText(no)
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
                                    } 
                                    className='text-white fadeUp flex flex-row items-center justify-center text-sm rounded-lg  gap-2 border bg-[#151313] border-white px-3 py-2 mt-8
                                        hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
                                    <FaRegCopy/> salin no Dana
                        </button>
                     
                    </div>

                    {/* CLOSING */}
                    <div className='w-full  relative text-center h-[500px]'>
                        <div className='p-12 fadeUp absolute top-0 bg-black/40 w-full h-full flex flex-col items-center justify-center text-white'>
                          
                           
                            <div className='flex flex-col items-start '>
                            <div className='flex flex-row items-end'>
                                <h1 className='text-7xl font-Coralis'>{dataWeding.content.groom_name}</h1>
                                <IoMdHeart className='text-2xl mb-2'/>
                            </div>
                            <h1 className='text-7xl font-Coralis'>{dataWeding.content.bride_name}</h1>
                                    <p className='fadeUp w-1/3 text-left'>Thank You</p>
                        </div>
                            
                           
                            
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

export default PresA02
