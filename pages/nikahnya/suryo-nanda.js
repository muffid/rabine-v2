import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect,useRef } from 'react'
import { useRouter } from 'next/router'
import { useState} from 'react'
import Timer from '../../components/preset/cust-mila/Timer'
import Gallery from '../../components/preset/presA06/Gallery'
import Comments from '../../components/preset/cust-mila/Comments'
import { FaAngleDoubleDown,FaRegEnvelopeOpen, FaInstagram, 
        FaSearchLocation, FaRegCopy, FaPause } from "react-icons/fa"
import { TiLocationOutline } from "react-icons/ti";
import Watermark from '../../components/preset/globals/Watermark'
import Navigasi from '../../components/preset/globals/Navigasi'
import { poppins } from '../../components/globals/Fonts'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'




function Suryonanda({url,main_web_url}) {

    const gDrive = "https://drive.usercontent.google.com/download?id="
    const gDriveAuth ="&authuser=0"
    const dataWeding = {
       META : {
            slug : "suryo-nanda",
            title : "The Wedding Of Suryo & Nanda",
            description : "The Wedding Of Suryo & Nanda",
            thumbnail : "/img/suryo-nanda/E.jpg"
        },
        content : {
            audio : "/audio/a-million-dreams.mp3",
            song_title : "A Million Dreams - OST. TGS",
            groom_name: "Suryo",
            bride_name : "Nanda", 
            groom_sure_name : "Muhammad Suryo Alam",
            bride_sure_name : "Ananda Aulia Frialisty",
            groom_pic : "/img/suryo-nanda/C.jpg",
            bride_pic : "/img/suryo-nanda/D.png",
            groom_father : "Nurul Huda", // Hanya nama dan Gelar
            groom_mother : "Mila Kholifah", // Hanya nama dan Gelar
            bride_father : "Supriyanto", // Hanya nama dan Gelar
            bride_mother : "Yuni Siswati",// Hanya nama dan Gelar
            groom_ig_account : "@yafi.a",
            bride_ig_account : "@nanda.af12",
            groom_ig_url : "https://www.instagram.com/yafi.a?igsh=ZXpxMHdvcHM4Y2F5",
            bride_ig_url : "https://www.instagram.com/nanda.af12?igsh=OXJwOWhnb2w1b2pu",
            couple : "Suryo & Nanda",
            day_akad : "Selasa",
            date_akad : "17",
            day : "Selasa",
            date : "17", // Gunakan 01, 02, 03 dst untuk tanggal kurang dari 10
            month : "06", // Gunakan 01, 02, 03 dst untuk bulan kurang dari 10
            month_name : "juni",
            year : "2025",
            start_akad : "08:00 WIB", // format pemisah menggunakan tanda ":" harus diberi jarak spasi antara jam dan "WIB"
            end_akad : "selesai",
            start_resepsi : "10:00 WIB",// format pemisah menggunakan tanda ":" harus diberi jarak spasi antara jam dan "WIB"
            end_resepsi : "Selesai",
            venue : "Warung Tengah Sawah Malang",
            venue_address : "Bakalankrajan, Kec. Sukun, Kota Malang",
            gmap_frame : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.8991301608385!2d112.6119557!3d-8.009338199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e789d516ecc29f9%3A0xca0b83612d2423ef!2sWarung%20Tengah%20Sawah%20%2F%20WTS!5e0!3m2!1sid!2sid!4v1747186117569!5m2!1sid!2sid",
            yt_frame : "https://www.youtube-nocookie.com/embed/kebq86BTZFA?si=9saOo4u4j5ry06DO",
            bg_opening : "/img/suryo-nanda/A.jpg",
            d_day_img : gDrive+"1CrWm-uG8hFz2oUkslZUo_LXWVFo40xfB"+gDriveAuth,
            bg_first_section :"/img/suryo-nanda/B.jpg",
            img_left : "/img/suryo-nanda/A.jpg",
            img_quote : gDrive+"1MEs2yPZirA-7xNaP_1v8GXUpbWBQqP_M"+gDriveAuth,
            img_closing : "/img/suryo-nanda/F.jpg",
            bg_resepsi : gDrive+"1S1z6FeSnHJLlaWqpI7Yiz0w0X3e-Hw9W"+gDriveAuth,
            btn_couple : gDrive+"1DZ0CqwJ6XOi4SnKKPBulSw6K3NG_Znbn"+gDriveAuth
            
        }
    } 

    const imagesGallery = [

        { src:"/img/suryo-nanda/A.jpg", alt: 'rabine.id' },
        { src:"/img/suryo-nanda/H.jpg", alt: 'rabine.id' },
        { src:"/img/suryo-nanda/B.jpg", alt: 'rabine.id' },
        { src:"/img/suryo-nanda/G.jpg", alt: 'rabine.id' },
        {src:"/img/suryo-nanda/I.jpg"}
     
        // tambhakan lagi kalau masih ada....
    ]

    const dateCountDown = dataWeding.content.year+'-'+dataWeding.content.month+'-'+dataWeding.content.date+'T'+dataWeding.content.start_resepsi.substring(0, 5)+':00Z'
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
        <div className=' w-full box-content '>
            {/* TO DO: BACKDOUND MP3*/}
            <audio  loop ref={audioRef} src={dataWeding.content.audio} />
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
                <div className='text-white w-full h-screen fixed z-20 moving-up flex flex-col items-center justify-center' style={{ top: `${topPosition}px` }}>
                    <div className={'w-full h-screen relative flex items-center bg-[#222831] justify-center '+poppins.className}>
                        <Image
                            src={dataWeding.content.bg_opening}
                            width={1200}
                            height={1200}
                            className='w-full xl:w-[700px] object-cover h-full opacity-50'
                            alt='appstore'
                        />
                        <div className='flex flex-col items-center justify-center absolute  w-full h-screen top-0 py-12'>
                          
                            <h1 className='text-4xl font-Coralis tracking-wider'>17.06.2025</h1>
                        
                            <div className='flex flex-col items-center mt-32'>
                                <h1>The Wedding Of</h1>
                                <h1 className='text-4xl font-Coralis tracking-wider'>{dataWeding.content.groom_name}</h1>
                                <h1 className='text-4xl font-Andrew'>&</h1>
                                <h1 className='text-4xl font-Coralis tracking-wider'>{dataWeding.content.bride_name}</h1>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-sm text-center'>Kepada Yth.<br></br> Bapak/Ibu/Saudara(i)</p>
                                <h1 className='py-4 font-bold'>{to}</h1>
                                <button className='text-sm flex flex-row items-center justify-center gap-2 blink bg-white rounded-full
                                                text-black px-5 py-2 hover:bg-yellow-100' onClick={moveUp}>
                                <FaRegEnvelopeOpen/> Buka Undangan
                                </button>
                            </div>
                        </div>

                        {/* TO DO: GAMBAR UNTUK BACKGROUND OPENING*/}
                        
                    </div>
                </div>

                {/* SISI KIRI (TAMPILAN PC) */}

                {/* TO DO: GAMBAR UNTUK SISI KIRI TAMPILAN PC*/}
                <div id='opening' className="hidden lg:flex bg-cover bg-center md:w-1/2 lg:w-[60%] h-screen overflow-hidden sticky top-0">
                    {/* //  style={{backgroundImage:dataWeding.content.img_left}}> */}


                    <div className='gap-y-4 w-full h-full flex flex-col justify-end items-end 
                                 py-12 px-10 relative'>
                            <Image
                                src={dataWeding.content.img_left}
                                fill
                                style={{objectFit:"cover"}}
                                className='absolute'
                                sizes="100vw"
                                alt='rabine.id'
                            />

                        <div className=' flex flex-col justify-end items-end text-white 
                                 py-12 px-10 bg-gradient-to-l from-black to-transparent absolute w-full h-full top-0 left-0'>
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
                                    <h1>{dataWeding.content.song_title}</h1>
                                </div>
                            </div>
                            {/* TO DO: NAMA MEMPELAI*/}
                            <h1 className='text-3xl font-bold text-right  text-white'>The Wedding Of {dataWeding.content.couple}</h1>
                        </div>
                        </div>
                                    
                    
                    </div>
                </div>

                {/* SISI KANAN */}
                <div id='gift' className={'w-full text-slate-800 lg:w-[40%] overflow-y-auto relative '+poppins.className}>

                    {/* NOW PLAYING*/}
                    <div className='lg:hidden flex flex-col items-center justify-between gap-x-4 fixed w-full
                                     top-4 z-10 '>
                         <div onClick={togglePlay} className='flex flex-row items-center justify-between bg-slate-100/40 backdrop-blur-lg rounded-full py-1 px-6 gap-x-4'>
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
                    <div id='opening' className='w-full h-full  relative py-24  bg-[#222831] px-10'>
                        <div className='absolute right-0 top-0'>
                            <Image
                                    src="/img/suryo-nanda/Asset 17.png"
                                    width={1200}
                                    height={1200}
                                    className='w-[220px]'
                                    alt='appstore'
                                />
                        </div>
                        <div className='absolute left-0 top-[170px]'>
                            <Image
                                    src="/img/suryo-nanda/Asset 18.png"
                                    width={1200}
                                    height={1200}
                                    className='w-[100px]'
                                    alt='appstore'
                                />
                        </div>
                        <div className='absolute bottom-0 right-0'>
                            <Image
                                    src="/img/suryo-nanda/Asset 21.png"
                                    width={1200}
                                    height={1200}
                                    className='w-[100px]'
                                    alt='appstore'
                                />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-center text-white font-Coralis tracking-wider text-4xl'>{dataWeding.content.groom_name}</h1>
                            <h1 className='text-center text-white font-Andrew text-4xl'>&</h1>
                            <h1 className='text-center text-white font-Coralis tracking-wider text-4xl'>{dataWeding.content.bride_name}</h1>
                            <Image
                                src={dataWeding.content.bg_first_section}
                                width={1200}
                                height={1200}
                                className=' object-cover w-[300px] rounded-xl h-[400px] my-10'
                                alt='appstore'
                            />
                            <h1 className='text-white text-center text-sm'>Ada haru yang terukir dalam rasa bahagia dihati kami, dengan memanjatkan puji dan syukur
                                serta memohon ridho, rahmat serta pertolongan Allah SWT.
                            </h1>
                        </div>
                    </div>

                   {/* AYAT ALQUR'AN */}
                    <div className='w-full h-full flex flex-col items-center justify-center relative py-8 bg-[#222831] px-10 text-white'>
                        <p className='text-center fadeUp text-sm px-1'>
                          &quot; Dan diantara tanda-tanda kekuasaan-Nya ialah Ia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa 
                          tentram kepadanya &quot;
                        </p>
                        <p className='text-center fadeUp text-xs px-1 my-8'>
                            Ar Rum : 21
                        </p>
                        <Image
                                    src="/img/suryo-nanda/Asset 14.png"
                                    width={1200}
                                    height={1200}
                                    className='w-[100px] fadeUp'
                                    alt='appstore'
                                />
                     
                    </div>

                     {/* MEMPELAI */}
                     <div id='mempelai' className='w-full h-full relative bg-cover  bg-[#222831]  px-10 text-white overflow-hidden'>
                        <Image
                            src="/img/suryo-nanda/Asset 27.png"
                            fill
                            className='absolute opacity-10 object-cover scale-105'
                            alt='rabine.id'
                        />
                        <div className='flex flex-col items-center justify-center px-4 py-[80px] text-center '>
                            <h1 className='text-white text-4xl font-Coralis tracking-wider fadeUp mb-16'>Mempelai</h1>
                            <div className='w-[200px] h-[200px] rounded-full relative fadeUp flex flex-col items-center justify-center'>
                               
                                <Image
                                    src={dataWeding.content.groom_pic}
                                        width={1200}
                                        height={1200}
                                        className='w-[150px] rounded-full h-[150px] object-cover '
                                        alt='appstore'
                                />
                                
                                <div className='absolute  w-[200px] h-[200px] rounded-full -z-10 right-2 top-1'>
                                    <Image
                                    src="/img/suryo-nanda/Asset 26.png"
                                    width={1200}
                                    height={1200}
                                    className=' w-[600px] object-contain'
                                    alt='appstore'
                                />
                                </div>
                           
                            </div>
                            <h1 className='font-bold text-xl font-Coralis tracking-wider fadeUp'>{dataWeding.content.groom_sure_name}</h1>
                            <h1 className=' fadeUp text-sm my-3'>Putra dari  Bapak {dataWeding.content.groom_father} <br/> Dan Ibu {dataWeding.content.groom_mother}</h1>
                            <div onClick={()=>{ window.open(dataWeding.content.groom_ig_url, '_blank');}}
                            className='cursor-pointer flex gap-2 text-xs items-center justify-center fadeUp  text-white px-3 py-2 rounded-full'>
                            <FaInstagram/>
                            {dataWeding.content.groom_ig_account}
                            </div>

                            <h1 className='text-[5rem] my-8 font-Andrew fadeUp'>&</h1>

                            <div className='w-[200px] h-[200px] rounded-full relative fadeUp flex flex-col items-center justify-center'>
                                <Image
                                    src={dataWeding.content.bride_pic}
                                        width={1200}
                                        height={1200}
                                        className='w-[150px] rounded-full h-[150px] object-cover '
                                        alt='appstore'
                                />
                                <div className='absolute  w-[200px] h-[200px] rounded-full -z-10 right-2 top-1'>
                                    <Image
                                    src="/img/suryo-nanda/Asset 26.png"
                                    width={1200}
                                    height={1200}
                                    className=' w-[600px] object-contain'
                                    alt='appstore'
                                />
                                </div>
                           
                            </div>
                            <h1 className='font-bold text-xl font-Coralis tracking-wider  fadeUp'>{dataWeding.content.bride_sure_name}</h1>
                            <h1 className=' fadeUp text-sm my-3'>Putri dari  Bapak {dataWeding.content.bride_father} <br/> Dan Ibu {dataWeding.content.bride_mother}</h1>
                            <div onClick={()=>{ window.open(dataWeding.content.bride_ig_url, '_blank');}}
                            className='cursor-pointer flex gap-2 text-xs items-center justify-center fadeUp  text-white px-3 py-2 rounded-full'>
                            <FaInstagram/>
                            {dataWeding.content.bride_ig_account}
                            </div>
                        </div>
                    </div>

                      {/* COUNTDOWN */}
                      <Timer 
                        targetDate = {dateCountDown} 
                        anim = {{fadeUp :'fadeUp'}} 
                        bgImage="/img/suryo-nanda/Asset 14.png"
                        url={"https://calendar.google.com/calendar/u/0/r/eventedit?text=Wedding+"+dataWeding.content.groom_name+"+%26+"+dataWeding.content.bride_name+"&dates="+dataWeding.content.year+dataWeding.content.month+dataWeding.content.date+"T120000Z/"+dataWeding.content.year+dataWeding.content.month+dataWeding.content.date+"T120000Z&pli=1"}
                    />

                    {/* INFO ACARA */}
                    <div id='jadwal' className='relative bg-cover overflow-hidden w-full flex flex-col items-center justify-center gap-y-1 p-4 h-full bg-[#222831] text-white'>
                        <Image
                            src="/img/suryo-nanda/Asset 27.png"
                            fill
                            className='absolute opacity-10 object-cover scale-110 z-0'
                            alt='rabine.id'
                        />
                        <h1 className='text-white text-4xl font-Coralis tracking-wider fadeUp mt-8'>Resepsi</h1>
                        <div className='flex flex-col items-center justify-center my-8'>
                            <h1 className='text-xl text-center my-2 fadeUp'>{dataWeding.content.day}</h1>
                            <div className='flex flex-row items-center justify-center gap-4 fadeUp'>
                                <h1 className='text-6xl font-Coralis tracking-wider'>{dataWeding.content.date}</h1>
                                <div className='flex flex-col items-start justify-center'>
                                    <h1 className='text-2xl font-Coralis tracking-wider'>{dataWeding.content.month_name}</h1>
                                    <h1 className='text-2xl font-Coralis tracking-wider'>{dataWeding.content.year}</h1>
                                </div>
                            </div>
                        </div>
                        <TiLocationOutline className='text-3xl text-[#DFD0B8] fadeUp'/>
                        <h1 className='text-xl text-center font-Coralis tracking-wider fadeUp'>{dataWeding.content.venue}</h1>
                        <h1 className=' text-center text-xs italic mx-10 fadeUp'>{dataWeding.content.venue_address}</h1>
                        <iframe id='lokasi' src={dataWeding.content.gmap_frame}
                                className='w-[400px] h-[500px] rounded-2xl my-8 fadeUp'
                                width="600" 
                                height="600" 
                                style={{border:0}} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        <button onClick={()=>{ window.open("https://maps.app.goo.gl/cgoxZEDFTg4x3nePA", '_blank');}} 
                            className='text-[#222831] fadeUp flex flex-row items-center justify-center text-sm rounded-lg gap-2  bg-[#DFD0B8]  px-6 py-2 mt-4 mb-8
                            hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
                            <FaSearchLocation/> Goolge Map
                        </button>

                    </div>

                  
                    {/* COMMENTS */}
                    <Comments slug={dataWeding.META.slug} url={url} tamu={to} bgColor={'bg-[#94A7C0]'}/>

                   <div id='gallery' className='w-full h-full relative  flex flex-col gap-3 items-center bg-[#222831] overflow-hidden px-10 text-white  py-8'>
                        <Image
                            src="/img/suryo-nanda/Asset 27.png"
                            fill
                            className='absolute opacity-10 object-cover scale-110 '
                            alt='rabine.id'
                        />
                        <h1 className='text-white text-4xl font-Coralis tracking-wider fadeUp my-8'>Gallery</h1>
                        <div className='w-full flex flex-row items-start justify-between gap-3 z-[9]'>
                            <div className='w-full flex flex-col gap-3'>
                               <Zoom>
                                <Image
                                        src={imagesGallery[0].src}
                                            width={1200}
                                            height={1200}
                                            className='w-full h-[170px] object-top  object-cover rounded-lg fadeUp'
                                            alt='appstore'
                                    />
                                </Zoom>
                                <Zoom>
                                <Image
                                        src={imagesGallery[1].src}
                                            width={1200}
                                            height={1200}
                                            className='w-full h-[250px] object-top  object-cover rounded-lg fadeUp'
                                            alt='appstore'
                                    />
                                </Zoom>
                            </div>
                            <div className='w-full flex flex-col gap-3'>
                                <Zoom>
                                    <Image
                                        src={imagesGallery[2].src}
                                            width={1200}
                                            height={1200}
                                            className='w-full h-[250px] object-top  object-cover rounded-lg fadeUp'
                                            alt='appstore'
                                    />
                                </Zoom>
                                <Zoom>
                                <Image
                                        src={imagesGallery[3].src}
                                            width={1200}
                                            height={1200}
                                            className='w-full h-[170px] object-top  object-cover rounded-lg fadeUp'
                                            alt='appstore'
                                    />
                                </Zoom>
                            </div>
                        </div> 
                        <div className='w-full  bg-red-300 rounded-lg z-[9]'>
                              <Zoom>
                                <Image
                                        src={imagesGallery[4].src}
                                            width={1200}
                                            height={1200}
                                            className='w-full h-[170px]   object-cover object-center rounded-lg '
                                            alt='appstore'
                                    />
                                </Zoom>
                        </div>

                       
                   </div>

                   
                  
                    {/* CLOSING */}
                    <div className='w-full  relative fadeUp'>
                        <div className='p-12 absolute top-0 bg-black/65 w-full h-full flex flex-col items-start justify-end z-[5] text-white/60'>
                            {/* <p className=' text-xs mt-10'>kami yang berbahagia</p> */}
                            <h1 className=' font-bold text-5xl py-4 font-Jimmy capitalize'>{dataWeding.content.groom_name} <br/>{dataWeding.content.bride_name}</h1>
                            <div className=' flex flex-row items-end justify-start w-full '>
                                <p className='w-1/3 text-xs'>Thank You</p>
                                <div className='w-2/3 h-[0.5px] bg-white/40'></div>
                            </div>
                        </div>
                        <Image
                            src={imagesGallery[4].src}
                            width={1200}
                            height={1200}
                            className='w-full object-cover object-top h-[500px] '
                            alt='appstore'
                        />
                   </div>

                   {/* WATERMARK */}
                   <Watermark url={main_web_url}/>
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
    const main_web_url = process.env.WEB_URL
    return { props: {url,main_web_url} }
}

export default Suryonanda
