import Layout from "../components/template/Layout";
import Timer from "../components/countdown/Timer"
import Navbar from "../components/template/Navbar";
// import { url } from "inspector";
import SecaoCadastro from "../components/landing/SecaoCadastro";
import SecaoBeneficios from "../components/landing/SecaoBeneficios";
import SecaoFinal from "../components/landing/SecaoFinal";
import SecaoCountdown from '../components/landing/SecaoCountdown'
import SecaoNoticias from '../components/landing/SecaoNoticias'
import SecaoBarreiras from '../components/landing/SecaoBarreiras'
import SecaoComoFunciona from '../components/landing/SecaoComoFunciona'
import {MusicNoteIcon} from '@heroicons/react/outline'
import Banner from "../components/landing/Banner";

export default function Home() {

  
  // bg-[url('/images/landing/fundo1.jpg')]
  return (
  <div className="flex flex-col min-h-screen flex-grow">
    <Navbar></Navbar>
    <main className="flex-grow">
      <SecaoCadastro></SecaoCadastro>
      <SecaoBarreiras></SecaoBarreiras>
      <SecaoComoFunciona></SecaoComoFunciona>
      <SecaoCountdown></SecaoCountdown>
      <SecaoBeneficios></SecaoBeneficios>
      <SecaoNoticias></SecaoNoticias>
      <SecaoFinal></SecaoFinal>
      {/* <Banner></Banner> */}
    </main>
  </div>
  )
}