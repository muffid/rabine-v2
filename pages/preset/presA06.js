import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect,useRef } from 'react'
import { useRouter } from 'next/router'
import { useState} from 'react'
import Timer from '../../components/preset/presA06/Timer'
import Gallery from '../../components/preset/presA01/Gallery'
import Comments from '../../components/preset/presA01/Comments'
import { FaAngleDoubleDown,FaRegEnvelopeOpen, FaInstagram, 
        FaSearchLocation, FaRegCopy, FaPause } from "react-icons/fa"
import { Parallax } from 'react-scroll-parallax'
import Watermark from '../../components/preset/globals/Watermark'
import Navigasi from '../../components/preset/globals/Navigasi'
import { poppins } from '../../components/globals/Fonts'




function PresA06({url}) {

    const gDrive = "https://drive.usercontent.google.com/download?id="
    const gDriveAuth ="&authuser=0"
    const dataWeding = {
       META : {
            slug : "blossom",
            title : "rabine.id - preview tema presA01",
            description : "rabine.id - preview tema presA01",
            thumbnail : "http://contentmanagement.cendikabangsa.sch.id/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-23-at-17.04.06.jpeg"
        },
        content : {
            audio : "/audio/wedding-cinematic.mp3",
            song_title : "Romantic Love - Charles P",
            groom_name: "Lukman",
            bride_name : "Shiva'", 
            groom_sure_name : "Lukman Hakim",
            bride_sure_name : "Anis Shiva' Ulia Dewi",
            groom_pic : gDrive+"1wYqGsu8TinsvqvTpd015VVyeYdYp3Ugf"+gDriveAuth, 
            bride_pic : gDrive+"1J5r1KPOGG60Da54zOol6jDAe0ogQ-Ls-"+gDriveAuth, 
            groom_father : "Budi Mulyanto", // Hanya nama dan Gelar
            groom_mother : "Rasmitha Sari", // Hanya nama dan Gelar
            bride_father : "Doni Tata", // Hanya nama dan Gelar
            bride_mother : "Susi Pujianti",// Hanya nama dan Gelar
            groom_ig_account : "Andre_T",
            bride_ig_account : "Citra_T",
            groom_ig_url : "",
            bride_ig_url : "",
            couple : "Lukman & Shiva'",
            day_akad : "Minggu",
            date_akad : "26",
            day : "Senin",
            date : "27", // Gunakan 01, 02, 03 dst untuk tanggal kurang dari 10
            month : "01", // Gunakan 01, 02, 03 dst untuk bulan kurang dari 10
            month_name : "januari",
            year : "2025",
            start_akad : "08:00 WIB", // format pemisah menggunakan tanda ":" harus diberi jarak spasi antara jam dan "WIB"
            end_akad : "selesai",
            start_resepsi : "10:00 WIB",// format pemisah menggunakan tanda ":" harus diberi jarak spasi antara jam dan "WIB"
            end_resepsi : "Selesai",
            venue : "Rumah Mempelai Pria",
            venue_address : "Jl. Ir. Juanda No 381A, Dago, Kecamatan Coblong, Kota Bandung, Jawa Barat",
            gmap_frame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15799.40307219353!2d112.5761332!3d-8.1166731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e789fe408c2880b%3A0x60b0af7bd09faf32!2snadhirdecal!5e0!3m2!1sid!2sid!4v1708078149410!5m2!1sid!2sid",
            yt_frame : "https://www.youtube-nocookie.com/embed/kebq86BTZFA?si=9saOo4u4j5ry06DO",
            bg_opening : gDrive+"1TfoPDqLrxbQtL_wB51atmCw48reJY4q7"+gDriveAuth,
            d_day_img : gDrive+"1CrWm-uG8hFz2oUkslZUo_LXWVFo40xfB"+gDriveAuth,
            bg_first_section :gDrive+"1yuWWRvMZUDJFJNNF6R_85DSXbtMVGjRo"+gDriveAuth,
            img_left :  gDrive+"1MEs2yPZirA-7xNaP_1v8GXUpbWBQqP_M"+gDriveAuth,
            img_quote : gDrive+"1MEs2yPZirA-7xNaP_1v8GXUpbWBQqP_M"+gDriveAuth,
            img_closing : gDrive+'1Du7GKLv0R3xpQbyrKmWRWO4S_v707LVG'+gDriveAuth,
            bg_resepsi : gDrive+"1S1z6FeSnHJLlaWqpI7Yiz0w0X3e-Hw9W"+gDriveAuth,
            btn_couple : gDrive+'16NSBeIdM2CEBpljlPUcwmkw2j1c7t0ul'+gDriveAuth
            
        }
    } 

    const imagesGallery = [

        { src: gDrive+'1hivOEsRJBRYmrheh94InA7ACZhbef3vP'+gDriveAuth, alt: 'rabine.id' },
        { src: gDrive+'1cZupWQkVhmerqhXqyaw_jNK0vakU_lnC'+gDriveAuth, alt: 'rabine.id' },
        { src: gDrive+'1gJteV-muM7nhLZUQSi70ddbLkaUX_wdE'+gDriveAuth, alt: 'rabine.id' },
        { src: gDrive+'1DXGy80sDvpGTXwX_TPl9VFS_yo8LrJMM'+gDriveAuth, alt: 'rabine.id' },
     
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
        <div className=' w-full box-content '>
            {/* TO DO: BACKDOUND MP3*/}
            <audio  loop ref={audioRef} src={dataWeding.content.audio} />
            <Head>
                {/* TO DO: TITLE PERNIKAHAN*/}
                <title>{dataWeding.META.title}</title>
                <meta name="description" content={dataWeding.META.description} />
                <meta property="og:image" content="" />
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
                    <div className={'w-full h-screen relative flex items-center justify-center '+poppins.className}>
                        
                        <div className='flex flex-col items-center justify-end absolute bg-[#94A7C0] w-full h-screen top-0 pb-12'>
                            <h1>THE WEDDING OF</h1>

                            <Image
                                src={dataWeding.content.bg_opening}
                                width={1200}
                                height={1200}
                                className='w-[250px] object-cover my-4'
                                alt='appstore'
                            />

                            <Image
                                src={dataWeding.content.d_day_img}
                                width={1200}
                                height={1200}
                                className='w-[300px] object-cover mb-10'
                                alt='appstore'
                            />

                            {/* TO DO: NAMA KEDUA MEMPELAI*/}
                            {/* <h1 className='font-bold text-5xl pb-8 font-Royal-Exq'>{dataWeding.content.couple}</h1> */}

                            <p className='text-sm'>Kepada Yth. Bapak/Ibu/Saudara(i)</p>
                            <h1 className='py-4 font-bold'>{to}</h1>
                            <button className='text-sm flex flex-row items-center justify-center gap-2 blink bg-white rounded-full
                                            text-black px-5 py-2 hover:bg-yellow-100' onClick={moveUp}>
                               <FaRegEnvelopeOpen/> Buka Undangan
                            </button>
                        </div>

                        {/* TO DO: GAMBAR UNTUK BACKGROUND OPENING*/}
                        {/* <Image
                            src={dataWeding.content.bg_opening}
                            width={1200}
                            height={1200}
                            className='w-full object-cover h-full'
                            alt='appstore'
                        /> */}
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

                        <div className=' flex flex-col justify-end items-end 
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
                            <h1 className='text-3xl font-bold text-right font-Batusa'>The Wedding Of {dataWeding.content.couple}</h1>
                        </div>
                        </div>
                                    
                    
                    </div>
                </div>

                {/* SISI KANAN */}
                <div className={'w-full text-slate-800 lg:w-[40%] overflow-y-auto relative '+poppins.className}>

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
            

                   {/* AYAT ALQUR'AN */}
                    <div className='w-full  flex flex-col items-center justify-center px-16 pt-[100px]'>
                       
                            <Image
                                src={gDrive+'1z5bNCMzS7a2RkKow-y-6Zgc_ac6R-dXz'+gDriveAuth}
                                width={1200}
                                height={1200}
                                className='w-[200px] object-cover'
                                alt='appstore'
                            />
                        <h1 className='font-bold text-sm text-center my-6'>Assalamualaikum Warahmatullahi Wabarakatuh</h1>
                        <p className='text-center fadeUp text-sm px-8'>
                            Dengan memohon rahmat dan ridho Allah Subhanahu Wata'ala. Insya Allah kami akan menyelanggarakan acara pernikahan.
                        </p>
                     
                    </div>

                     {/* MEMPELAI */}
                     <div id='mempelai' className='w-full relative '>
                        <Image
                            src={gDrive+'1FpsbsRgATXP8lXNdk232QDf8GKmVeGc-'+gDriveAuth}
                            width={1200}
                            height={1200}
                            className='absolute bottom-0 w-[100%] h-[40%]'
                            alt='appstore'
                        />
                        <div className='flex flex-col items-center justify-center px-4 py-[80px] text-center '>
                           
                            <div className='w-[10rem] h-[10rem] rounded-full relative fadeUp bg-slate-600'>
                            <Image
                                    src={dataWeding.content.bride_pic}
                                    fill
                                    style={{objectFit:"cover"}}
                                    className='absolute top-0 rounded-full'
                                    sizes="100vw"
                                    alt='rabine.id'
                                />
                            </div>
                            <h1 className='font-bold text-5xl font-Jimmy my-4 fadeUp'>{dataWeding.content.bride_sure_name}</h1>
                            <h1 className=' fadeUp text-sm my-2'>Putri dari  Bapak {dataWeding.content.bride_father}  Dan Ibu {dataWeding.content.bride_mother}</h1>
                            <div className='flex gap-2 text-sm items-center justify-center fadeUp bg-[#94A7C0] text-white px-3 py-2 rounded-full'>
                            <FaInstagram/>
                            {dataWeding.content.bride_ig_account}
                            </div>
                            <h1 className='text-[5rem] my-8 font-Jimmy fadeUp'>&</h1>
                            <div className='w-[10rem] h-[10rem] rounded-full relative fadeUp bg-slate-600'>
                            <Image
                                src={dataWeding.content.groom_pic}
                                fill
                                style={{objectFit:"cover"}}
                                className='absolute top-0 rounded-full'
                                sizes="100vw"
                                alt='rabine.id'
                            />
                            </div>
                            <h1 className='font-bold text-5xl font-Jimmy my-4 fadeUp'>{dataWeding.content.groom_sure_name}</h1>
                            <h1 className=' fadeUp text-sm my-2'>Putri dari  Bapak {dataWeding.content.groom_father}  Dan Ibu {dataWeding.content.groom_mother}</h1>
                            <div className='flex gap-2 text-sm items-center justify-center fadeUp bg-[#94A7C0] text-white px-3 py-2 rounded-full'>
                            <FaInstagram/>
                            {dataWeding.content.groom_ig_account}
                            </div>
                        </div>
                    </div>

                    {/* INFO ACARA */}
                    <div id='jadwal' className='w-full flex flex-col items-center justify-center gap-y-1 p-8 h-full'>
                        <h1 className='text-2xl my-4 fadeUp'>AKAD NIKAH</h1>
                        <h1 className='font-bold fadeUp'>{dataWeding.content.day} {dataWeding.content.date} {dataWeding.content.month_name} {dataWeding.content.year}</h1>
                        <h1 className='text-sm fadeUp'>Di rumah mempelai wanita</h1>
                        <h1 className='text-2xl my-4 fadeUp'>RESEPSI</h1>
                        <div className='flex flex-row items-center justify-between w-full h-full'>
                            {/* Kiri */}
                            <div className='w-[30%]  flex flex-row justify-center h-full'>
                                <Image
                                    src={gDrive+'1O6mQzwK5uBcwibdY2MoGGoUAGvH78Uxl'+gDriveAuth}
                                    width={1200}
                                    height={1200}
                                    className='w-[60px] object-cover'
                                    alt='appstore'
                                />
                            </div>
                            {/* Tengah */}
                            <div className='flex flex-col items-center justify-center gap-y-1 w-[40%] h-full'>
                                <Image
                                    src={gDrive+'1gFTzYEu89cSkeQ7no42IyXYl9ToFlTQG'+gDriveAuth}
                                    width={1200}
                                    height={1200}
                                    className='w-[40px] object-cover'
                                    alt='appstore'
                                />
                                <h1 className='font-bold'>{dataWeding.content.day_akad}</h1>
                                <h1 className='text-sm'>{dataWeding.content.date_akad+" "+dataWeding.content.month_name+" "+dataWeding.content.year}</h1>
                                <Image
                                    src={gDrive+'19HEu0Ka4OiKaQcRs9WKrtFrUYtVKWqpc'+gDriveAuth}
                                    width={1200}
                                    height={1200}
                                    className='w-[40px] object-cover mt-4'
                                    alt='appstore'
                                />
                                <h1 className='text-sm fadeUp'>{dataWeding.content.start_resepsi+" - "+dataWeding.content.end_resepsi}</h1>
                                {/* <h1 className='font-bold text-sm text-center'>{dataWeding.content.venue}</h1>
                                <h1 className='text-sm text-center'>{dataWeding.content.venue_address}</h1> */}
                            </div>
                            {/* Kanan */}
                            <div className='w-[30%]  flex flex-row justify-center h-full'>
                                <Image
                                        src={gDrive+'1kQzCuRy6Rk5WT-N4sKYBBNkmtjPiFH21'+gDriveAuth}
                                        width={1200}
                                        height={1200}
                                        className='w-[60px] object-cover'
                                        alt='appstore'
                                    />
                            </div>
                        </div>
                        <h1 className='text-sm  fadeUp mt-6'>{dataWeding.content.venue}</h1>
                        <h1 className='text-sm font-bold text-center px-8 fadeUp mt-2'>{dataWeding.content.venue_address}</h1>
                     
                    </div>

                    {/* COUNTDOWN */}
                    <Timer 
                        targetDate = {dateCountDown} 
                        anim = {{fadeUp :'fadeUp'}} 
                        bgImage={gDrive+"1MukZKf0VNVYuITleAokyLjNcSKXjODr5"+gDriveAuth}
                        url={"https://calendar.google.com/calendar/u/0/r/eventedit?text=Wedding+"+dataWeding.content.groom_name+"+%26+"+dataWeding.content.bride_name+"&dates="+dataWeding.content.year+dataWeding.content.month+dataWeding.content.date+"T120000Z/"+dataWeding.content.year+dataWeding.content.month+dataWeding.content.date+"T120000Z&pli=1"}
                    />
                    
                    {/* GOOGLE MAP */}
                    <div id='lokasi' className='w-full flex flex-col items-center justify-center bg-white gap-y-2 p-4'>
                        <iframe src={dataWeding.content.gmap_frame}
                                className='w-full h-[500px] rounded-2xl'
                                width="600" 
                                height="600" 
                                style={{border:0}} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        <button onClick={()=>{ window.open("https://maps.app.goo.gl/5zBJFeLg2aN8NJKt8", '_blank');}} 
                            className='text-white fadeUp flex flex-row items-center justify-center text-sm rounded-full gap-2 border bg-[#94A7C0] border-white px-4 py-2 mt-8
                            hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
                            <FaSearchLocation/> Lihat Goolge Map
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

                    <Gallery id={'gallery'} images={imagesGallery}/>

                    {/* GIFT */}
                    <div id='gift' className='h-full  bg-black py-12 flex gap-y-8 flex-col items-center justify-center'  >
                           <h1 className='text-[2.5rem] font-Royal-Exq fadeUp'>Gifts</h1>
                           <div className=' relative rounded-lg fadeUp'>
                                <Image
                                    src={gDrive+"1Yflvx20k1sJFZCLcNAoOMIA3lHs_FeED"+gDriveAuth}
                                    fill
                                    style={{objectFit:"cover"}}
                                    className='absolute top-0 rounded-lg'
                                    sizes="100%"
                                    alt='rabine.id'
                                />
                                <div className='w-[400px] flex  p-8  flex-col items-start justify-between fadeUp'>
                                    <div className='flex flex-row items-center justify-between w-full'>
                                
                                        <h1>Mandiri</h1>
                                        <Image
                                            src={gDrive+'1LLO7ya96NFvEOqeIgdOHJC5u7BlEy5uT'+gDriveAuth}
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
                                    <h1 className=' text-[1rem] text-center tracking-wider font-GameCube mb-4'>647387374648</h1>
                                    <h1>Andre T</h1>
                                </div>  
                           </div>
                           <button className='flex flex-row items-center justify-center gap-2 border border-white px-5 py-2 mt-4
                                        hover:bg-white hover:text-black fadeUp hover:scale-105 transition-all ease-out text-sm'>
                            <FaRegCopy/> copy no rek
                        </button>
                     
                    </div>

                    {/* CLOSING */}
                    <div className='w-full  relative'>
                        <div className='p-12 absolute top-0 bg-black/40 w-full h-full flex flex-col items-start justify-end z-[5]'>
                            <p className='fadeUp'>Two souls become one, two hearts beat as one</p>
                            <h1 className='fadeUp font-bold text-6xl py-4 font-Royal-Exq capitalize'>{dataWeding.content.groom_name} <br/>{dataWeding.content.bride_name}</h1>
                            <div className='fadeUp flex flex-row items-end justify-start w-full '>
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

export default PresA06
