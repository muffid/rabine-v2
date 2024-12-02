import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Sender (){
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
        let linkFixed = url+slug+"?to="+namaTamuEncode
        const replacement = {
            "\\[Link\\]": linkFixed,
            "\\[Tamu\\]": namaTamu
        };
        let teksUndanganPlain = teksUndangan

        for (const pola in replacement) {
            const regex = new RegExp(pola, "g");
            teksUndanganPlain = teksUndanganPlain.replace(regex, replacement[pola]);
          }
        
        navigator.clipboard.writeText(teksUndanganPlain)
        toast.success('berhasil, tinggal paste dan kirim ke tujuan', {
            position: "top-right",
            autoClose: 3000, // Durasi tampilan toast dalam milidetik
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme:'dark'
          });
    }
  
    return(
        <>
            <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Form Undangan</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug</label>
          <input
            type="text"
            id="slug"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            value={slug}
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
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Salin Text
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