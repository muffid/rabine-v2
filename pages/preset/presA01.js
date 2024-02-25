import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect,useRef } from 'react'
import { useRouter } from 'next/router'
import { useState} from 'react'
import Timer from '../../components/preset/presA01/Timer'
import Gallery from '../../components/preset/presA01/Gallery'
import { FaAngleDoubleDown,FaRegEnvelopeOpen, FaInstagram, 
        FaSearchLocation, FaRegCopy, FaPause } from "react-icons/fa"
import { Parallax } from 'react-scroll-parallax'



function PresA01() {

    const dataWeding = {
       META : {
            title : "momenku - preview tema presA01",
            description : "momenku - preview tema presA01",
            thumbnail : "http://contentmanagement.cendikabangsa.sch.id/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-23-at-17.04.06.jpeg"
        },
        content : {
            audio : "/audio/wedding-cinematic.mp3",
            song_title : "Romantic Love - Charles P",
            groom_name: "Andre",
            bride_name : "Citra", 
            groom_sure_name : "Andre Taulanu",
            bride_sure_name : "Citra Lestari Alamku",
            groom_pic : "url('/images/preset/A01/groom.png')", // isi source image di dalam url 
            bride_pic : "url('/images/preset/A01/bride.png')", // isi source image di dalam url 
            groom_father : "Budi Mulyanto", // Hanya nama dan Gelar
            groom_mother : "Rasmitha Sari", // Hanya nama dan Gelar
            bride_father : "Doni Tata", // Hanya nama dan Gelar
            bride_mother : "Susi Pujianti",// Hanya nama dan Gelar
            groom_ig_account : "Andre_T",
            bride_ig_account : "Citra_T",
            groom_ig_url : "",
            bride_ig_url : "",
            couple : "Andre & Citra",
            day : "Minggu",
            date : "25", // Gunakan 01, 02, 03 dst untuk tanggal kurang dari 10
            month : "03", // Gunakan 01, 02, 03 dst untuk bulan kurang dari 10
            month_name : "Maret",
            year : "2024",
            start_akad : "08:00 WIB", // format pemisah menggunakan tanda ":" harus diberi jarak spasi antara jam dan "WIB"
            end_akad : "selesai",
            start_resepsi : "10:00 WIB",// format pemisah menggunakan tanda ":" harus diberi jarak spasi antara jam dan "WIB"
            end_resepsi : "Selesai",
            venue : "Hotel Jayakarta Bandung",
            venue_address : "Jl. Ir. Juanda No 381A, Dago, Kecamatan Coblong, Kota Bandung, Jawa Barat",
            gmap_frame : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15799.40307219353!2d112.5761332!3d-8.1166731!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e789fe408c2880b%3A0x60b0af7bd09faf32!2snadhirdecal!5e0!3m2!1sid!2sid!4v1708078149410!5m2!1sid!2sid",
            yt_frame : "https://www.youtube-nocookie.com/embed/kebq86BTZFA?si=9saOo4u4j5ry06DO",
            bg_opening : "/images/preset/A01/bg-couple.jpg",
            bg_first_section :"/images/preset/A01/couple-opening.jpg",
            img_left :  "url('/images/preset/A01/bg-couple.jpg')",
            img_quote : '/images/preset/A01/bg-couple.jpg',
            img_closing : '/images/preset/A01/bg-closing.jpg',
        }
    } 

    const imagesGallery = [
        { src: '/images/preset/A01/gallery-1.jpg', alt: 'First' },
        { src: '/images/preset/A01/gallery-2.jpg', alt: 'First' },
        { src: '/images/preset/A01/gallery-3.jpg', alt: 'First' },
        { src: '/images/preset/A01/gallery-4.jpg', alt: 'First' },
        // tambhakan lagi kalau masih ada....
    ]

    const dateCountDown = dataWeding.content.year+'-'+dataWeding.content.month+'-'+dataWeding.content.date+'T'+dataWeding.content.start_akad.substring(0, 5)+':00Z'
    const audioRef = useRef()
    const [isPlaying, setIsPlaying] = useState(false)
    const [scrollTo, setScrollTo] = useState('opening')

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

    const scrollToTarget = (targetId) => {
       setScrollTo(targetId)
    }

    useEffect(()=>{
        const element = document.getElementById(`${scrollTo}`)
        element.scrollIntoView({behavior:'smooth'})
      },[scrollTo])

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
                <meta property="og:image" content="" />
                <meta property="og:image:width" content="400" />
                <meta property="og:image:height" content="300" />
                <link rel="icon" href="/rbn.ico" />
                <script async src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
                <script async src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
                <script async src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 
            </Head>
            <div className='w-full flex flex-row items-start justify-between'>

                {/* COVER UNDANGAN */}
                <div className='w-full h-screen fixed z-20 moving-up flex flex-col items-center justify-center' style={{ top: `${topPosition}px` }}>
                    <div className='w-full h-screen relative flex items-center justify-center'>
                        
                        <div className='flex flex-col items-center justify-end absolute bg-gradient-to-t from-black 
                                        to-transparent via-black/75 w-full h-screen top-0 pb-20'>
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
                <div className="hidden lg:flex bg-cover bg-center md:w-1/2 lg:w-[60%] h-screen overflow-hidden sticky top-0" 
                     style={{backgroundImage:dataWeding.content.img_left}}>

                    <div className='gap-y-4 w-full h-full bg-gradient-to-l from-black to-transparent flex flex-col justify-end items-end 
                                 py-12 px-10 relative'>
                                    
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
                    <div className='lg:hidden flex flex-row items-center justify-center w-full fixed z-10 bottom-0 py-4 bg-black/80 backdrop-blur-xl space-x-6 '>
                        <Image
                            src='/images/preset/A01/marriage.png'
                            width={500}
                            height={500}
                            className='w-[8%] object-contain'
                            alt='appstore'
                            onClick={()=>scrollToTarget('mempelai')}
                        />
                        <Image
                            src='/images/preset/A01/wedding-bells.png'
                            width={500}
                            height={500}
                            className='w-[8%] object-contain'
                            alt='appstore'
                            onClick={()=>scrollToTarget('jadwal')}
                        />
                          
                        <Image
                            src='/images/preset/A01/gps.png'
                            width={500}
                            height={500}
                            className='w-[8%] object-contain'
                            alt='appstore'
                            onClick={()=>scrollToTarget('lokasi')}
                        />
                        <Image
                            src='/images/preset/A01/photo-camera.png'
                            width={500}
                            height={500}
                            className='w-[8%] object-contain'
                            alt='appstore'
                            onClick={()=>scrollToTarget('gallery')}
                        />
                        <Image
                            src='/images/preset/A01/love-letter.png'
                            width={500}
                            height={500}
                            className='w-[8%] object-contain'
                            alt='appstore'
                            onClick={()=>scrollToTarget('opening')}
                        />
                        <Image
                            src='/images/preset/A01/wedding-gift.png'
                            width={500}
                            height={500}
                            className='w-[8%] object-contain'
                            alt='appstore'
                            onClick={()=>scrollToTarget('gift')}
                        />
                            
                   </div>

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
                    <div className='w-full relative bg-center bg-cover flex flex-col items-center justify-center px-16 py-[200px]'
                         style={{backgroundImage: "url('/images/preset/A01/Template-1-Marble.webp')"}}>
                        <Parallax speed={5} scale={[1, 2]} className='absolute top-20 lg:top-10 fadeUp flex flex-col items-center justify-center' >
                            <Image
                                src='/images/preset/A01/separator-saphire.svg'
                                    width={500}
                                    height={500}
                                    className='w-[50%] lg:w-[30%]'
                                    alt='appstore'
                            />
                        </Parallax>
                        <Parallax speed={5} scale={[1, 1.4]} className='absolute bottom-36 lg:bottom-36 fadeUp flex flex-col items-center justify-center' >
                            <Image
                                src='/images/preset/A01/separator-saphire.svg'
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

                   {/* QUOTES CALON PENGANTEN*/}
                     <div className='w-full  relative'>
                        <div className='p-12 absolute top-0 bg-black/80 w-full h-full flex flex-col items-center justify-between'>
                        
                        {/* TO DO: ISI DATANYA*/}
                        <Image
                            src={dataWeding.content.img_quote}
                            width={1200}
                            height={1200}
                            className='w-full object-cover rounded-xl -mt-28 fadeUp'
                            alt='appstore'
                        />
                        <p className='text-center font-bold text-xl lg:text-2xl px-10 lg:px-16 font-Batusa fadeUp'>
                            Love seems the swiftest but it is the slowest of all growths. No man or woman really knows what perfect 
                            love is until they have been married a quarter of a century.
                        </p>
                        <Image
                            src='/images/preset/A01/separator-sparkling.svg'
                            width={1200}
                            height={1200}
                            className='object-cover w-[8%] fadeUp'
                            alt='appstore'
                        />
                        </div>

                        {/* TO DO: ISI DATANYA*/}
                        <Image
                            src='/images/preset/A01/bg-section-1.jpg'
                            width={1200}
                            height={1200}
                            className='w-full object-cover h-full'
                            alt='appstore'
                        />
                    </div>

                     {/* MEMPELAI */}
                     <div id='mempelai' className='w-full relative bg-center bg-cover flex flex-col items-center justify-center px-16 py-[100px] text-center'
                        style={{backgroundImage: "url('/images/preset/A01/Template-1-Marble.webp')"}}>
                        <div className='w-[14rem] h-[16rem] rounded-t-full bg-top bg-cover fadeUp'  

                        //TO DO: ISI DATANYA*/
                        style={{backgroundImage:dataWeding.content.bride_pic}}></div>

                        {/* TO DO: ISI DATANYA*/}
                        <h1 className='font-bold text-2xl font-Royal-Exq py-6 fadeUp'>{dataWeding.content.bride_sure_name}</h1>
                        <Image
                            src='/images/preset/A01/separator-sparkling.svg'
                            width={1200}
                            height={1200}
                            className='object-cover w-[8%] my-6 fadeUp'
                            alt='appstore'
                        />

                        {/* TO DO: ISI DATANYA*/}
                        <h1 className='my-8 fadeUp'>Putri dari <br/> Bapak {dataWeding.content.bride_father} <br/> Dan Ibu {dataWeding.content.bride_mother}</h1>
                        <div className='flex gap-2 text-sm items-center justify-center fadeUp'>
                            <FaInstagram/>
                           {dataWeding.content.bride_ig_account}
                        </div>
                        <h1 className='text-[5rem] my-10 font-Royal-Exq fadeUp'>&</h1>
                        <div className='w-[14rem] h-[16rem] rounded-t-full bg-top bg-cover fadeUp'  
                            style={{backgroundImage:dataWeding.content.groom_pic}}></div>
                        <h1 className='font-bold text-2xl font-Royal-Exq py-6 fadeUp'>{dataWeding.content.groom_sure_name}</h1>
                        <Image
                            src='/images/preset/A01/separator-sparkling.svg'
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

                    {/* INFO ACARA */}
                    <div id='jadwal' className='w-full  relative bg-center bg-cover ' style={{backgroundImage: "url('/images/preset/A01/bg-section-2.jpg')"}}>
                        <div className='bg-gradient-to-t from-black to-black/50 via-black/80 w-full h-full  flex flex-col items-center justify-center
                                        py-20 px-12 gap-y-10 text-center'>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='text-2xl font-Royal-Exq fadeUp'>{dataWeding.content.day}, {dataWeding.content.date} {dataWeding.content.month_name} {dataWeding.content.year}</h1>
                                <Image
                                    src='/images/preset/A01/separator-sparkling.svg'
                                    width={1200}
                                    height={1200}
                                    className='object-cover w-[20%] fadeUp'
                                    alt='appstore'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center fadeUp'>
                                <h1 className='text-3xl font-Royal-Exq'>Akad Nikah</h1>
                                <p>{dataWeding.content.start_akad} s/d {dataWeding.content.end_akad}</p>
                            </div>
                            <div className='flex flex-col items-center justify-center fadeUp'>
                                <h1 className='text-3xl font-Royal-Exq'>Resepsi Pernikahan</h1>
                                <p>{dataWeding.content.start_resepsi} s/d {dataWeding.content.end_resepsi}</p>
                            </div>
                            <div className='flex flex-col items-center justify-center fadeUp'>
                                <h1 className='text-3xl font-Royal-Exq'>{dataWeding.content.venue}</h1>
                                <p>{dataWeding.content.venue_address}</p>
                            </div>  
                        </div>
                    </div>

                    {/* COUNTDOWN */}
                    <Timer targetDate = {dateCountDown} anim = {{fadeUp :'fadeUp'}}/>

                    {/* GOOGLE MAP */}
                    <div id='lokasi' className='w-full flex flex-col items-center justify-center bg-black gap-y-8'>
                        <iframe src={dataWeding.content.gmap_frame}
                                className='w-full h-[500px]'
                                width="600" 
                                    height="600" 
                                    style={{border:0}} 
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        <button className='flex flex-row items-center justify-center gap-2 border border-white px-5 py-2 mt-4
                                        hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
                            <FaSearchLocation/> view Location
                        </button>
                    </div>

                    {/* YOUTUBE */}
                    <div className='w-full flex flex-col items-center justify-center bg-black gap-y-8 py-20 '>
                        <iframe 
                            className='w-full fadeUp'
                            height="315" 
                            src={dataWeding.content.yt_frame} 
                            title="YouTube video player" 
                            frameborder="0" a
                            llow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>
                        </iframe>
                    </div>

                    <Gallery id={'gallery'} images={imagesGallery}/>

                    {/* GIFT */}
                    <div id='gift' className='h-full  bg-black py-12 flex gap-y-8 flex-col items-center justify-center'  >
                           <h1 className='text-[2.5rem] font-Royal-Exq fadeUp'>Gifts</h1>
                           <div className='w-[400px] flex rounded-lg p-8 bg-cover bg-center flex-col items-start justify-between fadeUp' 
                                style={{backgroundImage: "url('/images/preset/A01/crdit_card.jpg')"}}>
                               <div className='flex flex-row items-center justify-between w-full'>
                                    <h1>Mandiri</h1>
                                    <Image
                                        src='/images/preset/A01/mandiri.webp'
                                        width={1000}
                                        height={1000}
                                        className='w-[28%] object-contain'
                                        alt='appstore'
                                    />
                               </div>
                               <Image
                                    src='/images/preset/A01/chip.png'
                                    width={1000}
                                    height={1000}
                                    className='w-[12%] object-contain my-8'
                                    alt='appstore'
                                />
                                <h1 className=' text-[1rem] text-center tracking-wider font-GameCube mb-4'>647387374648</h1>
                                <h1>Andre T</h1>
                           </div>
                           <button className='flex flex-row items-center justify-center gap-2 border border-white px-5 py-2 mt-4
                                        hover:bg-white hover:text-black hover:scale-105 transition-all ease-out text-sm'>
                            <FaRegCopy/> copy no rek
                        </button>
                           <div className='w-[400px] flex rounded-lg p-8 bg-cover bg-center flex-col items-start justify-between fadeUp' 
                                style={{backgroundImage: "url('/images/preset/A01/crdit_card.jpg')"}}>
                               <div className='flex flex-row items-center justify-between w-full'>
                                    <h1>BCA</h1>
                                    <Image
                                        src='/images/preset/global/BCA.webp'
                                        width={1000}
                                        height={1000}
                                        className='w-[28%] object-contain'
                                        alt='appstore'
                                    />
                               </div>
                               <Image
                                    src='/images/preset/A01/chip.png'
                                    width={1000}
                                    height={1000}
                                    className='w-[12%] object-contain my-8'
                                    alt='appstore'
                                />
                                <h1 className=' text-[1rem] text-center tracking-wider font-GameCube mb-4'>647387374648</h1>
                                <h1>Citra ALamaku</h1>
                           </div>
                           <button className='flex flex-row items-center justify-center gap-2 border border-white px-5 py-2 mt-4
                                        hover:bg-white hover:text-black hover:scale-105 transition-all ease-out text-sm'>
                            <FaRegCopy/> copy no rek
                        </button>
                    </div>

                    {/* CLOSING */}
                    <div className='w-full  relative'>
                        <div className='p-12 absolute top-0 bg-black/40 w-full h-full flex flex-col items-start justify-end'>
                            <p>Two souls become one, two hearts beat as one</p>
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
                   <div className='w-full bg-black flex flex-col items-center text-slate-400 justify-center gap-y-1 text-xs text-center pt-10 pb-20'>
                        <h1>made with love and passion by</h1>
                        <h1 className='text-base font-bold'>Rabine</h1>
                        <h1>ingin punya undangan keren seperti ini?<br/> Hubungi kami sekarang juga</h1>
                        <h1>copyright rabine 2024</h1>
                   </div>
                </div>
            </div>
        </div>
    )
}
export async function getServerSideProps() {
    return {
        props: {
          data: null, 
        },
      }
}

export default PresA01
