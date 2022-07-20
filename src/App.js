import './App.css';
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
function App() {
  const [t, i18n] = useTranslation("global")
  const [count, setCount] = useState(0)
  return (
    <div className=''>
<nav className="bg-gray-700 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className='hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
              {t("navbar.inicio")}
            </div>
            <div onClick={() => { i18n.changeLanguage("en") }} className='hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
              {t("navbar.ingles")}
            </div>
            <div onClick={() => { i18n.changeLanguage("es") }} className='hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
              {t("navbar.espanol")}
            </div>
            <div className='flex justify-end'>
            <div className='mx-5 hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
            <img src="https://img.icons8.com/color/48/000000/twitter--v1.png"/>
            </div>
            <div className='mx-5 hover:text-white text-gray-500 transition hover:animate-pulse font-semibold cursor-pointer'>
            <img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png"/>
            </div>
          </div>
</nav>
<div className='w-2/4' >
        <h2 className='text-4xl text-white font-extrabold'>Cynthia Marisol Carranza Rivera</h2>
        <br></br>
        <p className='text-xl  text-gray-400'>{t("body.descripcion")}</p>
        <br></br>
        <br></br>
        <button  onClick={()=>{setCount(count + 1)}} class="bg-green-500 hover:bg-green-700 text-white font-bold py-5 px-12 border border-green-700 rounded">
        {t("body.contador")}
        </button>
        <p className=' text-white'>{t("body.contador2")}: {count}</p>
        <br></br>
        <p className='text-xl  text-gray-300'>{t("body.DescripcionTecnologias")}</p>
        <br></br>
        <p className='text-xl text-white'>{t("body.tecnologias")}</p>
      </div>
      <div className='flex justify-center pb-6 align-item-start'>
        <img className='rounded-full w-69 h-69 ' src="https://avatars.githubusercontent.com/u/75049477?v=4" />
      </div>
      </div>
  );
}

export default App;
