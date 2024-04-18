import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect,useRef } from 'react'
import { useRouter } from 'next/router'
import { useState} from 'react'
import Timer from '../../components/preset/presA01/Timer'
import Gallery from '../../components/preset/presA01/Gallery'
import Comments from '../../components/preset/presA01/Comments'
import { FaAngleDoubleDown,FaRegEnvelopeOpen, FaInstagram, 
        FaSearchLocation, FaRegCopy, FaPause } from "react-icons/fa"
import { Parallax } from 'react-scroll-parallax'
import Watermark from '../../components/preset/globals/Watermark'
import Navigasi from '../../components/preset/globals/Navigasi'




function PresA01({url}) {

    const gDrive = "https://drive.usercontent.google.com/download?id="
    const gDriveAuth ="&authuser=0"
    const dataWeding = {
       META : {
            slug : "taufiq-marta",
            title : "Rabine.id - Taufiq & Marta",
            description : "Rabine.id - Taufiq & Marta",
            thumbnail : "http://contentmanagement.cendikabangsa.sch.id/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-23-at-17.04.06.jpeg"
        },
        content : {
            audio : "/audio/Karolina.mp3",
            song_title : "Sore - Karolina",
            groom_name: "Taufiq",
            bride_name : "Marta", 
            groom_sure_name : "Muhamad Ahmad Taufiq Api Gadi, M.Pd",
            bride_sure_name : "Marta Dwi Anggraini, S.Pd",
            groom_pic : gDrive+"1HTpOrauzbpVauB_21cjeZkvChHncgdP4"+gDriveAuth, 
            bride_pic : gDrive+"1muAfRkI28a_R2CPwQqCgXtAVqQqPcc7y"+gDriveAuth, 
            groom_father : "Gadi Gaa Junaidin", // Hanya nama dan Gelar
            groom_mother : "Nurhartati", // Hanya nama dan Gelar
            bride_father : "Siyono", // Hanya nama dan Gelar
            bride_mother : "Munti'ah",// Hanya nama dan Gelar
            groom_ig_account : "",
            bride_ig_account : "",
            groom_ig_url : "",
            bride_ig_url : "",
            couple : "Taufiq & Marta",
            day : "Sabtu",
            date : "27", // Gunakan 01, 02, 03 dst untuk tanggal kurang dari 10
            month : "04", // Gunakan 01, 02, 03 dst untuk bulan kurang dari 10
            month_name : "April",
            year : "2024",
            start_akad : "07:30 WIB", // format pemisah menggunakan tanda ":" harus diberi jarak spasi antara jam dan "WIB"
            end_akad : "selesai",
            start_resepsi : "11:00 WIB",// format pemisah menggunakan tanda ":" harus diberi jarak spasi antara jam dan "WIB"
            end_resepsi : "11.30 WIB",
            venue : "Gedung Kodim Tuban",
            venue_address : "Jl. Dr. Wahidin Sudirohusodo No 800, Sidorejo Kec. Tuban Kab. Tuban Jawa Timur 62315",
            gmap_frame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3960.9204491704136!2d112.044862!3d-6.9001173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77980005ae899d%3A0x4ef4d64fdc8818be!2sKomando%20Distrik%20Militer%200811!5e0!3m2!1sid!2sid!4v1713354070849!5m2!1sid!2sid",
            yt_frame : "https://www.youtube-nocookie.com/embed/kebq86BTZFA?si=9saOo4u4j5ry06DO",
            bg_opening : gDrive+"1yDceHk8U3hinYbPucB7UaE66ms1t0-bX"+gDriveAuth,
            bg_first_section :gDrive+"1yDceHk8U3hinYbPucB7UaE66ms1t0-bX"+gDriveAuth,
            img_left :  gDrive+"1MgZp_TRe0poec7ZhHPYOk2E8QepztiR0"+gDriveAuth,
            img_quote : gDrive+"1EkH7HVSZ3TpCBMVHgqQ84Q_iFnq5GtFU"+gDriveAuth,
            img_closing : gDrive+'1szkda0eeSr9vWHL7ybveI9ofbzutQJh3'+gDriveAuth,
            bg_jadwal : gDrive+"1szkda0eeSr9vWHL7ybveI9ofbzutQJh3"+gDriveAuth,
            btn_couple : gDrive+'1szkda0eeSr9vWHL7ybveI9ofbzutQJh3'+gDriveAuth
            
        }
    } 

    const imagesGallery = [

        { src: gDrive+'1hivOEsRJBRYmrheh94InA7ACZhbef3vP'+gDriveAuth, alt: 'momenku' },
        { src: gDrive+'1cZupWQkVhmerqhXqyaw_jNK0vakU_lnC'+gDriveAuth, alt: 'momenku' },
        { src: gDrive+'1gJteV-muM7nhLZUQSi70ddbLkaUX_wdE'+gDriveAuth, alt: 'momenku' },
        { src: gDrive+'1DXGy80sDvpGTXwX_TPl9VFS_yo8LrJMM'+gDriveAuth, alt: 'momenku' },
     
        // tambhakan lagi kalau masih ada....
    ]

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
        <div className=' w-full box-content text-white'>
            {/* TO DO: BACKDOUND MP3*/}
            <audio  loop ref={audioRef} src={dataWeding.content.audio} />
            <Head>
                {/* TO DO: TITLE PERNIKAHAN*/}
                <title>{dataWeding.META.title}</title>

                <meta name="description" content={dataWeding.META.description} />
                <meta property="og:image" content={gDrive+"1hbbP5CxuQI_FmWc6-OxqIlj12LbheI4k"+gDriveAuth} />
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
                <div className='w-full h-screen fixed z-20 moving-up flex flex-col items-center justify-center' style={{ top: `${topPosition}px` }}>
                    <div className='w-full h-screen relative flex items-center justify-center'>
                        
                        <div className='flex flex-col items-center justify-end absolute bg-gradient-to-t from-black 
                                        to-transparent via-black/20 w-full h-screen top-0 pb-20'>
                            <h1>THE WEDDING OF</h1>

                            {/* TO DO: NAMA KEDUA MEMPELAI*/}
                            <h1 className='font-bold text-5xl pb-8 font-Royal-Exq'>{dataWeding.content.couple}</h1>

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
                <div className="hidden lg:flex bg-cover bg-center md:w-1/2 lg:w-[60%] h-screen overflow-hidden sticky top-0">
                    {/* //  style={{backgroundImage:dataWeding.content.img_left}}> */}


                    <div className='gap-y-4 w-full h-full flex flex-col justify-end items-end 
                                 py-12 px-10 relative'>
                            <Image
                                src={dataWeding.content.img_left}
                                fill
                                style={{objectFit:"cover"}}
                                className='absolute'
                                sizes="100vw"
                            />

                        <div className=' flex flex-col justify-end items-end 
                                 py-12 px-10 bg-gradient-to-t from-black to-transparent absolute w-full h-full top-0 left-0'>
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
                            <h1 className='text-3xl font-bold text-right font-Batusa'>The Wedding Of {dataWeding.content.couple}</h1>
                        </div>
                        </div>
                                    
                    
                    </div>
                </div>

                {/* SISI KANAN */}
                <div className='w-full  lg:w-[40%] overflow-y-auto relative'>

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
                                <h1>{dataWeding.content.song_title}</h1>
                            </div>
                        </div>                    
                    </div>

                    {/* NAVIGASI MENU BAWAH */}
                    <Navigasi imgThumb={dataWeding.content.btn_couple}/>
                    {/* OPENING_PHOTO */}
                   <div id='opening' className='w-full h-screen relative'>
                        <div className='p-12 absolute top-0 bg-black/40 w-full h-full flex flex-col items-start justify-end fadeUp'>
                            <p>THE WEDDING OF</p>

                            {/* TO DO: NAMA MEMPELAI*/}
                            <h1 className='font-bold text-6xl py-4 font-Royal-Exq capitalize'>{dataWeding.content.groom_name}<br/> &<br/>{dataWeding.content.bride_name}</h1>
                            <div className='flex flex-row items-end justify-start w-full'>

                                {/* TO DO: TANGGAL NIKAH*/}
                                <p className='tracking-[0.5rem]'>{dataWeding.content.date}.{dataWeding.content.month}.{dataWeding.content.year}</p> 
                                <div className='w-full h-[1px] bg-white'></div>
                            </div>
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

                   {/* AYAT ALQUR'AN */}
                    <div className='w-full relative bg-center bg-cover flex flex-col items-center justify-center px-16 py-[200px]'>
                        <Image
                            src={gDrive+"1MukZKf0VNVYuITleAokyLjNcSKXjODr5"+gDriveAuth}
                            fill
                            style={{objectFit:"cover"}}
                            className='absolute top-0 '
                            sizes="100vw"
                        />
                        <Parallax speed={8} scale={[1, 2]} className='absolute top-20 lg:top-40 fadeUp flex flex-col items-center justify-center' >
                            <Image
                                src={gDrive+'1_rDfssLjuAMkotzXiAEkQYlEIDocVLRO'+gDriveAuth}
                                width={500}
                                height={500}
                                className='w-[50%] lg:w-[30%]'
                                alt='appstore'
                                
                            />
                        </Parallax>
                        <Parallax speed={5} scale={[1, 1.4]} className='absolute bottom-36 lg:bottom-36 fadeUp flex flex-col items-center justify-center' >
                            <Image
                                src={gDrive+'1_rDfssLjuAMkotzXiAEkQYlEIDocVLRO'+gDriveAuth}
                                width={500}
                                height={500}
                                className='w-[50%] lg:w-[30%]'
                                alt='appstore'
                            />
                        </Parallax>
                            
                        <p className='text-center fadeUp'>
                            “Dan diantara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, 
                            agar kamu cenderung dan merasa tenteram kepadanya dan Dia menjadikan diantaramu rasa kasih dan sayang. 
                            Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.“
                        </p>
                        <p className='text-center text-xl py-4 fadeUp'>
                            (QS. Ar-Rum ayat 21)
                        </p>
                    </div>

               

                     {/* MEMPELAI */}
                     <div id='mempelai' className='w-full relative bg-center bg-cover'>
                        <div className='flex flex-col items-center justify-center px-16 py-[100px] text-center '>
                     
                            <Image
                                    src={gDrive+"1MukZKf0VNVYuITleAokyLjNcSKXjODr5"+gDriveAuth}
                                    fill
                                    style={{objectFit:"cover"}}
                                    className='absolute h-24'
                                    
                            />
                             <h1 className='font-bold text-[2.5rem] font-Royal-Exq py-6 px-8 fadeUp'>Calon Mempelai</h1>
                            <div className='w-[14rem] h-[16rem] rounded-t-full relative fadeUp bg-slate-600'>
                            <Image
                                    src={dataWeding.content.bride_pic}
                                    fill
                                    style={{objectFit:"cover"}}
                                    className='absolute top-0 rounded-t-full'
                                    sizes="100vw"
                                />
                            </div>

                            {/* TO DO: ISI DATANYA*/}
                            
                            <h1 className='font-bold text-2xl font-Royal-Exq py-6 px-8 fadeUp'>{dataWeding.content.bride_sure_name}</h1>
                            <Image
                                src={gDrive+'1UKidRoz3krbXS_4fgupr2QTVOS0paEyf'+gDriveAuth}
                                width={1200}
                                height={1200}
                                className='object-cover w-[8%] my-6 fadeUp'
                                alt='appstore'
                            />

                            {/* TO DO: ISI DATANYA*/}
                            <h1 className='my-8 fadeUp'>Putra dari <br/> Bapak {dataWeding.content.bride_father} <br/> Dan Ibu {dataWeding.content.bride_mother}</h1>
                            <div className='flex gap-2 text-sm items-center justify-center fadeUp'>
                                <FaInstagram/>
                            {dataWeding.content.bride_ig_account}
                            </div>
                            <h1 className='text-[5rem] my-10 font-Royal-Exq fadeUp'>&</h1>
                            <div className='w-[14rem] h-[16rem] rounded-t-full relative fadeUp bg-slate-600'>
                            <Image
                                    src={dataWeding.content.groom_pic}
                                    fill
                                    style={{objectFit:"cover"}}
                                    className='absolute top-0 rounded-t-full'
                                    sizes="100vw"
                                />
                            </div>
                            <h1 className='font-bold text-2xl font-Royal-Exq py-6 px-8 fadeUp'>{dataWeding.content.groom_sure_name}</h1>
                            <Image
                                src={gDrive+'1UKidRoz3krbXS_4fgupr2QTVOS0paEyf'+gDriveAuth}
                                width={1200}
                                height={1200}
                                className='object-cover w-[8%] my-6 fadeUp'
                                alt='appstore'
                            />
                            <h1 className='my-8 fadeUp'>Putri dari <br/> Bapak {dataWeding.content.groom_father} <br/> Dan Ibu {dataWeding.content.groom_mother}</h1>
                            <div className='flex gap-2 text-sm items-center justify-center fadeUp'>
                                <FaInstagram/>
                                {dataWeding.content.groom_ig_account}
                            </div>
                        </div>
                    </div>

                    {/* INFO ACARA */}
                    <div id='jadwal' className='w-full  relative'>
                        <Image
                            src={dataWeding.content.bg_jadwal}
                            fill
                            style={{objectFit:"cover"}}
                            className='asolute'
                            sizes="100vw"
                        />
                        <div className='w-full  flex flex-col items-center justify-center text-[#3c3838] p-8 space-y-6 '>
                            <div className='bg-white/60 rounded-xl p-8 space-y-4 shadow-xl backdrop-blur-sm fadeUp'>
                                <div className='flex flex-col items-center justify-center text-center gap-y-2'>
                                    <h1 className='text-3xl font-Royal-Exq fadeUp mb-6 fadeUp'>Akad Nikah</h1>
                                    <h1 className='text-sm fadeUp'>{dataWeding.content.day} {dataWeding.content.date} {dataWeding.content.month_name} {dataWeding.content.year}</h1>
                                    <h1 className='text-sm fadeUp'>{dataWeding.content.start_akad} - {dataWeding.content.end_akad}</h1>
                                    <h1 className='text-xl font-Royal-Exq fadeUp mt-4 fadeUp'>{dataWeding.content.venue}</h1>
                                    <h1 className='text-sm fadeUp'>{dataWeding.content.venue_address}</h1>
                                    <button onClick={()=>{window.open('https://maps.app.goo.gl/zEthnkPs47grJo7C8','_blank')}} className='text-white fadeUp flex flex-row items-center justify-center text-sm rounded-lg  gap-2 border bg-[#151313] border-white px-3 py-2 mt-8
                                        hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
                                        <FaSearchLocation/> view Location
                                    </button>
                                </div>
                            </div>
                            <div className='bg-white/60 rounded-xl p-8 space-y-4 shadow-xl backdrop-blur-sm fadeUp'>
                                <div className='flex flex-col items-center justify-center text-center gap-y-2'>
                                    <h1 className='text-3xl font-Royal-Exq fadeUp mb-6 fadeUp'>Resepsi</h1>
                                    <h1 className='text-sm fadeUp'>{dataWeding.content.day} {dataWeding.content.date} {dataWeding.content.month_name} {dataWeding.content.year}</h1>
                                    <h1 className='text-sm fadeUp'>{dataWeding.content.start_resepsi} - {dataWeding.content.end_resepsi}</h1>
                                    <h1 className='text-xl font-Royal-Exq fadeUp mt-4 fadeUp'>{dataWeding.content.venue} </h1>
                                    <h1 className='text-sm fadeUp'>{dataWeding.content.venue_address}</h1>
                                    <button onClick={()=>{window.open('https://maps.app.goo.gl/zEthnkPs47grJo7C8','_blank')}} className='text-white fadeUp flex flex-row items-center justify-center text-sm rounded-lg  gap-2 border bg-[#151313] border-white px-3 py-2 mt-8
                                        hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
                                        <FaSearchLocation/> view Location
                                    </button>
                                </div>
                            </div>
                          
                        </div>
                    </div>

                    {/* COUNTDOWN */}
                    <Timer 
                        targetDate = {dateCountDown} 
                        anim = {{fadeUp :'fadeUp'}}
                        bgImage={gDrive+"1MukZKf0VNVYuITleAokyLjNcSKXjODr5"+gDriveAuth} 
                        url={"https://calendar.google.com/calendar/u/0/r/eventedit?text=Wedding+"+dataWeding.content.groom_name+"+%26+"+dataWeding.content.bride_name+"&dates="+dataWeding.content.year+dataWeding.content.month+dataWeding.content.date+"T120000Z/"+dataWeding.content.year+dataWeding.content.month+dataWeding.content.date+"T120000Z&pli=1"} 
                    />

                    {/* GOOGLE MAP */}
                    <div id='lokasi' className='w-full flex flex-col items-center justify-center bg-black gap-y-8 pb-8'>
                        <iframe src={dataWeding.content.gmap_frame}
                                className='w-full h-[500px]'
                                width="600" 
                                height="600" 
                                style={{border:0}} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        <button onClick={()=>{window.open('https://maps.app.goo.gl/zEthnkPs47grJo7C8','_blank')}} className='flex flex-row items-center justify-center gap-2 border border-white px-5 py-2 mt-4
                                        hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
                            <FaSearchLocation/> view Location
                        </button>
                    </div>

                    {/* YOUTUBE */}
                    {/* <div className='w-full flex flex-col items-center justify-center bg-black gap-y-8 py-20 '>
                        <iframe 
                            className='w-full fadeUp'
                            height ="315" 
                            src ={dataWeding.content.yt_frame} 
                            title ="YouTube video player" 
                            allowFullScreen ="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                           >
                        </iframe>
                    </div> */}

                    {/* COMMENTS */}
                    <Comments slug={dataWeding.META.slug} url={url} tamu={to}/>

                    {/* <Gallery id={'gallery'} images={imagesGallery}/> */}
                    {/* <div id='gift' className='h-full  bg-black py-12 flex gap-y-8 flex-col items-center justify-center'  >
                           <h1 className='text-[2.5rem] font-Royal-Exq fadeUp'>Gifts</h1>
                           <div className=' relative rounded-lg fadeUp'>
                                <Image
                                    src={gDrive+"1Yflvx20k1sJFZCLcNAoOMIA3lHs_FeED"+gDriveAuth}
                                    fill
                                    style={{objectFit:"cover"}}
                                    className='absolute top-0 rounded-lg'
                                    sizes="100%"
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
                                    <h1 className=' text-[1rem] text-center tracking-wider font-GameCube mb-4'>0367555025</h1>
                                    <h1>{dataWeding.content.groom_sure_name}</h1>
                                </div>  
                           </div>
                           <button onClick={()=>{navigator.clipboard.writeText('0367555025')}} className='flex flex-row items-center justify-center gap-2 border border-white px-5 py-2 mt-4
                                        hover:bg-white hover:text-black fadeUp hover:scale-105 transition-all ease-out text-sm'>
                            <FaRegCopy/> copy no rek
                        </button>
                     
                    </div> */}
           
                

                    {/* CLOSING */}
                    <div className='w-full  relative' id='gift'>
                        <div id='gallery' className='p-12 absolute top-0 bg-black/40 w-full h-full flex flex-col items-start justify-end z-[5]'>
                            <p >Two souls become one, two hearts beat as one</p>
                            <h1 className='font-bold text-6xl py-4 font-Royal-Exq capitalize'>{dataWeding.content.groom_name} <br/>{dataWeding.content.bride_name}</h1>
                            <div className='flex flex-row items-end justify-start w-full'>
                                <p className='w-1/3'>Thank You</p>
                                <div className='w-2/3 h-[1px] bg-white'></div>
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
        </div>
    )
}
export async function getServerSideProps() {
    const url = process.env.API_URL_PROD
    return { props: {url} }
}

export default PresA01
