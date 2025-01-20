import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect,useRef } from 'react'
import { useRouter } from 'next/router'
import { useState} from 'react'
import Timer from '../../components/preset/presA06/Timer'
import Gallery from '../../components/preset/presA06/Gallery'
import Comments from '../../components/preset/presA06/Comments'
import { FaAngleDoubleDown,FaRegEnvelopeOpen, FaInstagram, 
        FaSearchLocation, FaRegCopy, FaPause } from "react-icons/fa"
import { Parallax } from 'react-scroll-parallax'
import Watermark from '../../components/preset/globals/Watermark'
import Navigasi from '../../components/preset/globals/Navigasi'
import { poppins } from '../../components/globals/Fonts'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function PresA06({url}) {

    const gDrive = "https://drive.usercontent.google.com/download?id="
    const gDriveAuth ="&authuser=0"
    const dataWeding = {
       META : {
            slug : "shiva-lukman",
            title : "The Wedding Of Shiva - Lukman | Rabine.id",
            description : "The Wedding Of Shiva - Lukman | Rabine.id",
            thumbnail : gDrive+"1s5fCL2N8ZVDyoRO3sqJvk1p5MdUat7un"+gDriveAuth
        },
        content : {
            audio : "/audio/a-million-dreams.mp3",
            song_title : "A Million Dreams - OST. TGS",
            groom_name: "Lukman",
            bride_name : "Shiva'", 
            groom_sure_name : "Lukman Hakim",
            bride_sure_name : "Anis Shiva' Ulia Dewi",
            groom_pic : gDrive+"1gcBdqYyPq656OHPB-ynWzCxSiR7CrQG-"+gDriveAuth, 
            bride_pic : gDrive+"1SHiBNYRpS_9GpkEAdma6o7h0HfE_4Qnt"+gDriveAuth, 
            groom_father : "Tuwiri", // Hanya nama dan Gelar
            groom_mother : "Asmiati", // Hanya nama dan Gelar
            bride_father : "Mashuri", // Hanya nama dan Gelar
            bride_mother : "Kasemi Nur Mufidah",// Hanya nama dan Gelar
            groom_ig_account : "lukim_me",
            bride_ig_account : "anisshiva",
            groom_ig_url : "https://www.instagram.com/lukim_me?igsh=MjMzb3BmNXdnaGxk",
            bride_ig_url : "https://www.instagram.com/anissshiva?igsh=MTExbGNqZjkxeGl3dQ==",
            couple : "Shiva' & Lukman",
            day_akad : "Minggu",
            date_akad : "26",
            day : "Minggu",
            date : "26", // Gunakan 01, 02, 03 dst untuk tanggal kurang dari 10
            month : "01", // Gunakan 01, 02, 03 dst untuk bulan kurang dari 10
            month_name : "januari",
            year : "2025",
            start_akad : "08:00 WIB", // format pemisah menggunakan tanda ":" harus diberi jarak spasi antara jam dan "WIB"
            end_akad : "selesai",
            start_resepsi : "13:00 WIB",// format pemisah menggunakan tanda ":" harus diberi jarak spasi antara jam dan "WIB"
            end_resepsi : "Selesai",
            venue_akad : "Masjid Darul Arqam",
            venue_akad_address : "Pakisaji",
            venue : "",
            venue_address : "Ruko Kav D Jl. Raya Karangpandan RT.17 RW.04 Kec. Pakisaji Kab. Malang",
            gmap_frame : "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3950.2461724028904!2d112.59000197500805!3d-8.076356691951753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMDQnMzQuOSJTIDExMsKwMzUnMzMuMyJF!5e0!3m2!1sen!2sid!4v1737377330476!5m2!1sen!2sid",
            yt_frame : "https://www.youtube-nocookie.com/embed/kebq86BTZFA?si=9saOo4u4j5ry06DO",
            bg_opening : gDrive+"1L84bt9ttCfXCyB-DAjTnOH3c58k-uuAv"+gDriveAuth,
            d_day_img : gDrive+"14J1HQkyemP8t2yvRzsMnF0r6g269rxkx"+gDriveAuth,
            bg_first_section :gDrive+"1O8st55kZ_awaF8-_WhWZhWrC9V9oBSEJ"+gDriveAuth,
            img_left :  gDrive+"1tVKwN9AkG2Qhx-arInM4879DDfW7mqYI"+gDriveAuth,
            img_quote : gDrive+"1MEs2yPZirA-7xNaP_1v8GXUpbWBQqP_M"+gDriveAuth,
            img_closing : gDrive+'1VE1_J9THDCSncF-4odcZQWz943gJiAyZ'+gDriveAuth,
            bg_resepsi : gDrive+"1S1z6FeSnHJLlaWqpI7Yiz0w0X3e-Hw9W"+gDriveAuth,
            btn_couple : gDrive+'1YO4CA52CpDcEfkJPzCll3ZvL-kxfLSnx'+gDriveAuth
            
        }
    } 

    const imagesGallery = [

        { src: gDrive+'1IIVDbGOYJ7hQurfFLiqhDlmZLOK81Q-z'+gDriveAuth, alt: 'rabine.id' },
        { src: gDrive+'1ZZxV3D9e6VJQ09uIg_O_yFeWXPhjGp5Y'+gDriveAuth, alt: 'rabine.id' },
        { src: gDrive+'1VE1_J9THDCSncF-4odcZQWz943gJiAyZ'+gDriveAuth, alt: 'rabine.id' },
        { src: gDrive+'1tVKwN9AkG2Qhx-arInM4879DDfW7mqYI'+gDriveAuth, alt: 'rabine.id' },
     
        // tambhakan lagi kalau masih ada....
    ]

    const dateCountDown = dataWeding.content.year+'-'+dataWeding.content.month+'-'+dataWeding.content.date_akad+'T'+dataWeding.content.start_akad.substring(0, 5)+':00Z'
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
                    <div className={'w-full h-screen relative flex items-center justify-center '+poppins.className}>
                        
                        <div className='flex flex-col items-center justify-center absolute bg-[#A6756E] w-full h-screen top-0 pb-12'>
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
                <div className={'w-full text-slate-800 lg:w-[40%] overflow-y-auto relative '+poppins.className}>

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
                    <div id='opening' className='w-full h-screen xl:h-full relative'>
                        <div className='p-12 absolute w-full flex flex-col items-center justify-start h-full fadeUp text-white'>
                            <div className='flex flex-row w-full px-8 py-8 items-center justify-center space-x-4'>
                                <h1 className='text-[2.5rem] xl:text-[3.5rem] font-Jimmy text-[#A6756E]'>{dataWeding.content.bride_name}</h1>
                                <Image
                                    src={gDrive+'1ET44MDqv5ktF4K4oJZWxrSG-sW1ILLGa'+gDriveAuth}
                                    width={1200}
                                    height={1200}
                                    className='w-[50px]'
                                    alt='appstore'
                                />
                                 <h1 className='text-[2.5rem] xl:text-[3.5rem] font-Jimmy text-[#A6756E]'>{dataWeding.content.groom_name}</h1>
                            </div>
                            <Image
                                src={gDrive+'12Te_CeejjrkCniXutJ0AOOdBXOZL2LF0'+gDriveAuth}
                                width={1200}
                                height={1200}
                                className='w-[100px] fadeUp -mt-6'
                                alt='appstore'
                            />
                        </div>
                    
                        <Image
                            src={dataWeding.content.bg_first_section}
                            width={1200}
                            height={1200}
                            className='h-screen object-cover'
                            alt='appstore'
                        />
                    </div>

                   {/* AYAT ALQUR'AN */}
                    <div className='w-full  flex flex-col items-center justify-center px-8 pt-[100px]'>
                       
                            <Image
                                src={gDrive+'1NykzfOSaA31pwPaM8H66DMAhkzKptQYr'+gDriveAuth}
                                width={1200}
                                height={1200}
                                className='w-[200px] object-cover fadeUp'
                                alt='appstore'
                            />
                        <h1 className='font-bold text-sm text-center my-6 fadeUp'>Assalamualaikum Warahmatullahi Wabarakatuh</h1>
                        <p className='text-center fadeUp text-sm px-1'>
                            Dengan memohon rahmat dan ridho Allah Subhanahu Wata&apos;ala. Insya Allah kami akan menyelanggarakan acara pernikahan.
                        </p>
                     
                    </div>

                     {/* MEMPELAI */}
                     <div id='mempelai' className='w-full relative '>
                        <Image
                            src={gDrive+'1FXTN6S5L0dT5QT0qVk6Ms6kAn2MzVqmh'+gDriveAuth}
                            width={1200}
                            height={1200}
                            className='absolute bottom-0 w-[100%] h-[40%] fadeUp opacity-75'
                            alt='appstore'
                        />
                        <div className='flex flex-col items-center justify-center px-4 py-[80px] text-center '>
                          
                        
                            <div className='w-[10rem] h-[10rem] rounded-full relative fadeUp bg-slate-600'>
                            <Image
                                    src={dataWeding.content.bride_pic}
                                    fill
                                    style={{objectFit:"cover"}}
                                    className='absolute top-0 rounded-full shadow-xl shadow-slate-300'
                                    sizes="100vw"
                                    alt='rabine.id'
                                />
                            </div>
                            <h1 className='font-bold text-5xl font-Jimmy my-4 fadeUp'>{dataWeding.content.bride_sure_name}</h1>
                            <h1 className=' fadeUp text-sm my-2'>Putri pertama dari  Bapak {dataWeding.content.bride_father} <br/> Dan Ibu {dataWeding.content.bride_mother}</h1>
                            <div onClick={()=>{ window.open(dataWeding.content.bride_ig_url, '_blank');}}
                            className='cursor-pointer flex gap-2 text-sm items-center justify-center fadeUp bg-[#A6756E] text-white px-3 py-2 rounded-full'>
                            <FaInstagram/>
                            {dataWeding.content.bride_ig_account}
                            </div>
                            <h1 className='text-[5rem] my-8 font-Jimmy fadeUp'>&</h1>

                            <div className='w-[10rem] h-[10rem] rounded-full relative fadeUp bg-slate-600'>
                            <Image
                                src={dataWeding.content.groom_pic}
                                fill
                                style={{objectFit:"cover"}}
                                className='absolute top-0 rounded-full shadow-xl shadow-slate-300'
                                sizes="100vw"
                                alt='rabine.id'
                            />
                            </div>
                            <h1 className='font-bold text-5xl font-Jimmy my-4 fadeUp'>{dataWeding.content.groom_sure_name}</h1>
                            <h1 className=' fadeUp text-sm my-2'>Putra terakhir dari  Bapak {dataWeding.content.groom_father} <br/> Dan Ibu {dataWeding.content.groom_mother}</h1>
                            <div onClick={()=>{ window.open(dataWeding.content.groom_ig_url, '_blank');}}
                            className='cursor-pointer flex gap-2 text-sm items-center justify-center fadeUp bg-[#A6756E] text-white px-3 py-2 rounded-full'>
                            <FaInstagram/>
                            {dataWeding.content.groom_ig_account}
                            </div>
                        </div>
                    </div>

                    {/* INFO ACARA */}
                    <div id='jadwal' className='w-full flex flex-col items-center justify-center gap-y-1 p-4 h-full'>
                        <h1 className='text-2xl my-4 fadeUp'>AKAD NIKAH</h1>
                        <h1 className='font-bold fadeUp'>{dataWeding.content.day_akad} {dataWeding.content.date_akad} {dataWeding.content.month_name} {dataWeding.content.year}</h1>
                        <h1 className='text-sm fadeUp'>08:30 - 09:30 WIB Di {dataWeding.content.venue_akad}</h1>
                        <h1 className='text-sm font-bold text-center mx-auto fadeUp '>{dataWeding.content.venue_akad_address}</h1>
                        <h1 className='text-2xl my-4 fadeUp'>RESEPSI</h1>
                        <div className='flex flex-row items-center justify-between w-full h-full'>
                            {/* Kiri */}
                            <div className='w-[30%]  flex flex-row justify-center h-full'>
                                <Image
                                    src={gDrive+'1O6mQzwK5uBcwibdY2MoGGoUAGvH78Uxl'+gDriveAuth}
                                    width={1200}
                                    height={1200}
                                    className='w-[60px] object-cover fadeUp'
                                    alt='appstore'
                                />
                            </div>
                            {/* Tengah */}
                            <div className='flex flex-col items-center justify-center  w-[40%] h-full'>
                                <Image
                                    src={gDrive+'1mEylQXHy5x9qU1CIImF64OSsEezhtEZH'+gDriveAuth}
                                    width={1200}
                                    height={1200}
                                    className='w-[40px] object-cover fadeUp'
                                    alt='appstore'
                                />
                                <h1 className='font-bold fadeUp'>{dataWeding.content.day}</h1>
                                <h1 className='text-sm fadeUp'>{dataWeding.content.date+" "+dataWeding.content.month_name+" "+dataWeding.content.year}</h1>
                                <Image
                                    src={gDrive+'1fwpDUgEi32ls6UjyPC6kTQwBLpSMnsg3'+gDriveAuth}
                                    width={1200}
                                    height={1200}
                                    className='w-[40px] object-cover mt-8 fadeUp'
                                    alt='appstore'
                                />
                                <h1 className='text-sm fadeUp py-2'>{dataWeding.content.start_resepsi+" - "+dataWeding.content.end_resepsi}</h1>
                                {/* <h1 className='font-bold text-sm text-center'>{dataWeding.content.venue}</h1>
                                <h1 className='text-sm text-center'>{dataWeding.content.venue_address}</h1> */}
                            </div>
                            {/* Kanan */}
                            <div className='w-[30%]  flex flex-row justify-center h-full'>
                                <Image
                                    src={gDrive+'1kQzCuRy6Rk5WT-N4sKYBBNkmtjPiFH21'+gDriveAuth}
                                    width={1200}
                                    height={1200}
                                    className='w-[60px] object-cover fadeUp'
                                    alt='appstore'
                                />
                            </div>
                        </div>
                        <Image
                                    src={gDrive+'1ouiMGNfTeQmFNRhBAYF5yV3Fs6QDidi-'+gDriveAuth}
                                    width={1200}
                                    height={1200}
                                    className='w-[30px] object-cover mt-2 fadeUp'
                                    alt='appstore'
                                />
                        <h1 className='text-sm  fadeUp mt-2'>{dataWeding.content.venue}</h1>
                        <h1 className='text-sm font-bold text-center px-8 fadeUp'>{dataWeding.content.venue_address}</h1>
                        <Image
                            src={gDrive+'12Te_CeejjrkCniXutJ0AOOdBXOZL2LF0'+gDriveAuth}
                            width={1200}
                            height={1200}
                            className='w-[200px] object-cover my-12 fadeUp'
                            alt='appstore'
                        />
                     
                    </div>

                    {/* COUNTDOWN */}
                    <Timer 
                        bgColor = "bg-[#A6756E]"
                        targetDate = {dateCountDown} 
                        anim = {{fadeUp :'fadeUp'}} 
                        bgImage={gDrive+"1MukZKf0VNVYuITleAokyLjNcSKXjODr5"+gDriveAuth}
                        url={"https://calendar.google.com/calendar/u/0/r/eventedit?text=Wedding+"+dataWeding.content.groom_name+"+%26+"+dataWeding.content.bride_name+"&dates="+dataWeding.content.year+dataWeding.content.month+dataWeding.content.date+"T120000Z/"+dataWeding.content.year+dataWeding.content.month+dataWeding.content.date+"T120000Z&pli=1"}
                    />

                    <Image
                        src={gDrive+'12Te_CeejjrkCniXutJ0AOOdBXOZL2LF0'+gDriveAuth}
                        width={1200}
                        height={1200}
                        className='w-[150px] object-cover my-4 fadeUp mx-auto'
                        alt='appstore'
                    />
                    
                    {/* GOOGLE MAP */}
                    <div id='lokasi' className='w-full flex flex-col items-center justify-center bg-white gap-y-2 p-8 fadeUp'>
                        <iframe src={dataWeding.content.gmap_frame}
                                className='w-full h-[500px] rounded-2xl'
                                width="600" 
                                height="600" 
                                style={{border:0}} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        <button onClick={()=>{ window.open("https://maps.app.goo.gl/3AHAwBjtAcjCT8BG6", '_blank');}} 
                            className='text-white fadeUp flex flex-row items-center justify-center text-sm rounded-full gap-2 border bg-[#A6756E] border-white px-4 py-2 mt-8
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
                    <Comments slug={dataWeding.META.slug} url={url} tamu={to} bgColor={"bg-[#A6756E]"}/>

                    <div className='flex flex-col space-y-4 relative'>
                    <Image
                            src={gDrive+'1FXTN6S5L0dT5QT0qVk6Ms6kAn2MzVqmh'+gDriveAuth}
                            width={1200}
                            height={1200}
                            className='absolute bottom-0 w-[100%] h-[50%] fadeUp'
                            alt='appstore'
                        />
                        <Gallery groom={dataWeding.groom_name} id={'gallery'} images={imagesGallery}/>
                        <div className='flex flex-row w-full px-8 py-10 items-center justify-center space-x-4 fadeUp'>
                            {/* <h1 className='text-[2.5rem] xl:text-[3.5rem] font-Jimmy'>{dataWeding.content.groom_name}</h1>
                            <Image
                                    src={gDrive+'1EvdQqqxudyR2zMnmA4zx5jl5mlLsaROd'+gDriveAuth}
                                    width={1200}
                                    height={1200}
                                    className='w-[50px]'
                                    alt='appstore'
                            />
                            <h1 className='text-[2.5rem] xl:text-[3.5rem] font-Jimmy'>{dataWeding.content.bride_name}</h1> */}
                        </div>
                    </div>

                    <div  className='h-full  bg-white py-12 flex px-12 gap-y-8 flex-col items-center justify-center'>
                        <p className='text-sm text-center fadeUp'>
                        Merupakan suatu kehormatan dan kebahagiaan bagi kami
                        apabila Bapak/Ibu/Saudara/i berkenan hadir 
                        untuk memberikan do’a restu kepada kami.
                        </p>
                        <p className='text-sm text-center fadeUp'>
                        “Dan di antara tanda-tanda (kebesaran)-Nya ialah
                        Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, 
                        agar kamu cenderung dan merasa tenteram kepadanya, 
                        dan Dia menjadikan di antaramu rasa kasih dan sayang.
                        Sungguh, pada yang demikian itu benar-benar terdapat 
                        tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”
                        <br/>(QS. Ar-Ruum : 21)
                        </p>
                        <p className='font-bold text-sm fadeUp text-center'>Wassalamu’alaikum warahmatullahi wabarakatuh</p>
                        <p className='text-sm text-center fadeUp'>Kami yang berbahagia</p>
                        <div className='flex flex-row w-full px-8  items-center justify-center space-x-4 fadeUp'>
                            <h1 className='text-[2.5rem] xl:text-[3.5rem] font-Jimmy'>{dataWeding.content.bride_name}</h1>
                            <Image
                                    src={gDrive+'1ET44MDqv5ktF4K4oJZWxrSG-sW1ILLGa'+gDriveAuth}
                                    width={1200}
                                    height={1200}
                                    className='w-[50px]'
                                    alt='appstore'
                            />
                            <h1 className='text-[2.5rem] xl:text-[3.5rem] font-Jimmy'>{dataWeding.content.groom_name}</h1>
                        </div>

                    </div>

                    {/* GIFT */}
                    <div id='gift' className='h-full w-full  bg-white p-8 flex gap-y-2 flex-col items-center justify-center mb-8'  >
                           <h1 className='text-2xl  fadeUp'>KIRIM HADIAH</h1>
                           <div className=' relative rounded-lg fadeUp bg-slate-700'>
                                <Image
                                    src={gDrive+"1GRzih9dezee_XEFl2X-F9lMKpxkTfEM6"+gDriveAuth}
                                    fill
                                    style={{objectFit:"cover"}}
                                    className='absolute top-0 rounded-lg '
                                    sizes="100%"
                                    alt='rabine.id'
                                />
                                <div className='w-[350px] flex  p-4  flex-col items-start justify-between fadeUp'>
                                    <div className='flex flex-row items-center justify-between w-full'>
                                        <h1>BRI</h1>
                                        <Image
                                            src={gDrive+'1HLlyQ3xICfcga3kqmtQCp6hGS8_yInVg'+gDriveAuth}
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
                                        className='w-[12%] object-contain my-4'
                                        alt='appstore'
                                    />
                                    <h1 className=' text-[1rem] text-center tracking-wider font-GameCube mb-4'>167701003772509</h1>
                                    <h1>ANIS SHIVA &apos;ULIA DEWI</h1>
                                </div>  
                           </div>
                           <button onClick={()=>{
                                 navigator.clipboard.writeText("167701003772509")
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
                            }}
                            className='text-white fadeUp flex flex-row items-center justify-center text-sm rounded-full gap-2 border bg-[#A6756E] border-white px-4 py-2 mt-8
                            hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
                            <FaRegCopy/> copy no rek
                        </button>
                     
                    </div>

                    {/* CLOSING */}
                    <div className='w-full  relative fadeUp'>
                        <div className='p-12 absolute top-0 bg-black/65 w-full h-full flex flex-col items-start justify-end z-[5] text-white/60'>
                            {/* <p className=' text-xs mt-10'>kami yang berbahagia</p> */}
                            <h1 className=' font-bold text-5xl py-4 font-Jimmy capitalize'>{dataWeding.content.bride_name} <br/>{dataWeding.content.groom_name}</h1>
                            <div className=' flex flex-row items-end justify-start w-full '>
                                <p className='w-1/3 text-xs'>Thank You</p>
                                <div className='w-2/3 h-[0.5px] bg-white/40'></div>
                            </div>
                        </div>
                        <Image
                            src={dataWeding.content.img_closing}
                            width={1200}
                            height={1200}
                            className='w-full object-cover h-full '
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

export default PresA06
