import React, { useState, } from 'react';
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head'
function Sender (){

  const router = useRouter()
    const { pengantin } = router.query
    const url = "https://rabine.id/nikahnya/"
   
  
    const defaultTeksUndangan = `Kepada Yth.
Bapak/Ibu/Saudara/i
[Tamu]
_____________________

Assalamualaikum Warahmatullahi Wabarakatuh

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami.

Berikut link undangan kami, untuk info lengkap dari acara, bisa kunjungi :

[Link]

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Wassalamualaikum Warahmatullahi Wabarakatuh

Terima Kasih

Hormat kami,
Calon Mempelai
____________________`;
    
    const [slug, setSlug] = useState('');
    const [namaTamu, setNamaTamu] = useState('');
    const [teksUndangan, setTeksUndangan] = useState(defaultTeksUndangan);
   
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Slug:', slug);
      console.log('Nama Tamu:', namaTamu);
    };

    

    
    const copyText = () =>{
       
        let namaTamuEncode = encodeURIComponent(namaTamu)
        let linkFixed = url+pengantin+"?to="+namaTamuEncode
        const linkToSend = linkFixed.replace(/%2/g, '%252')
        const textToWa = "Kepada%20Yth.%0A%0ABapak/Ibu/Saudara/i%0A"+namaTamuEncode+"%0A_____________________%0A%0AAssalamualaikum%20Warahmatullahi%20Wabarakatuh%0A%0ATanpa%20mengurangi%20rasa%20hormat,%20perkenankan%20kami%20mengundang%20Bapak/Ibu/Saudara/i,%20teman%20sekaligus%20sahabat,%20untuk%20menghadiri%20acara%20pernikahan%20kami.%0A%0ABerikut%20link%20undangan%20kami,%20untuk%20info%20lengkap%20dari%20acara,%20bisa%20kunjungi%20:%0A%0A"+linkToSend+"%0A%0AMerupakan%20suatu%20kebahagiaan%20bagi%20kami%20apabila%20Bapak/Ibu/Saudara/i%20berkenan%20untuk%20hadir%20dan%20memberikan%20doa%20restu.%0A%0AWassalamualaikum%20Warahmatullahi%20Wabarakatuh%0A%0ATerima%20Kasih%0A%0AHormat%20kami,%0ACalon%20Mempelai%0A_____________________"
        // const replacement = {
        //     "\\[Link\\]": linkFixed,
        //     "\\[Tamu\\]": namaTamu
        // };
        // let teksUndanganPlain = teksUndangan

        // for (const pola in replacement) {
        //     const regex = new RegExp(pola, "g");
        //     teksUndanganPlain = teksUndanganPlain.replace(regex, replacement[pola]);
        //   }
        
        // navigator.clipboard.writeText(teksUndanganPlain)
        window.open('https://wa.me/?text='+textToWa, '_blank');
        // toast.success('berhasil, tinggal paste dan kirim ke tujuan', {
        //     position: "top-right",
        //     autoClose: 3000, // Durasi tampilan toast dalam milidetik
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme:'dark'
        //   });
    }
  
    return(
        <>
         <Head>
        <title>Rabine.id - Undangan Pernikahan Online | Modern & Elegant Design</title>
        <meta charSet='utf-8'/>
        <meta name='description' content='Rabine.id - Undangan Pernikahan Online | Modern & Elegant Design' />
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <meta name='description' content='Sebar Undangan jadi makin gampang, segampang tinggal klik. yuk, ganti undangan kertasmu ke undangan digital'  />
        <meta content='Rabine.id' name='keywords'/>
        <meta name='keywords' content='rabine, rabine.id, undangan online, undangan pernikahan online, undangan web, web pernikahan'/>
        {/* <meta property='og:image' content='http://contentmanagement.cendikabangsa.sch.id/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-23-at-17.04.06.jpeg' /> */}
        {/* <meta property='og:image:width' content='400' />
        <meta property='og:image:height' content='300' /> */}
        <meta property='og:locale' content='en_US'  />
        <meta property='og:type' content='website'  />
        <meta property='og:title' content='Rabine.id - Undangan Pernikahan Online | Modern & Elegant Design'  />
        <meta property='og:description' content='Sebar Undangan jadi makin gampang, segampang tinggal klik. yuk, ganti undangan kertasmu ke undangan digital'  />
        <meta property='og:url' content='https://rabine.id/'  />
        <meta property='og:site_name' content='Rabine'  />
        <link rel='icon' href='/rbn.ico' />
      </Head>
            <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Form Undangan</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug</label>
          <input
            disabled
            type="text"
            id="slug"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={pengantin}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="Contoh: ahmad-siti"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="namaTamu" className="block text-sm font-medium text-gray-700">Nama Tamu</label>
          <input
            type="text"
            id="namaTamu"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={namaTamu}
            onChange={(e) => setNamaTamu(e.target.value)}
            placeholder="Nama Tamu"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="teksUndangan" className="block text-sm font-medium text-gray-700">Teks Undangan</label>
          <textarea
            disabled
            id="teksUndangan"
            rows={15}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={teksUndangan}
            onChange={(e) => setTeksUndangan(e.target.value)}
            placeholder="Tulis teks undangan Anda di sini..."
            required
          ></textarea>
        </div>
        <button
        onClick={copyText}
          type="submit"
          className="bg-emerald-700 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          kirim Undangan
        </button>
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
        theme='dark'
      />
      </form>
    </div>
        </>
    )
}

export default Sender