export default function Watermark({url="https://rabine-id.vercel.app/"}){
    return(
        <div className='w-full bg-black flex flex-col items-center text-slate-400 justify-center gap-y-1 text-xs text-center pt-10 pb-32 lg:pb-10'>
            <h1>made with love and passion by</h1>

            <h1 className='text-sm font-bold text-pink-800'> <a href={url}> Rabine.id</a></h1>
            <h1>ingin punya undangan keren seperti ini?<br/> Hubungi kami sekarang juga</h1>
            <h1>copyright rabine 2024</h1>
        </div>
    )
}