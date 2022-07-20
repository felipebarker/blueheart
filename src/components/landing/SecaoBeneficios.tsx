import FormInput from '../controls/FormInput'
import FormButton from '../controls/FormButton'
// import {Slide} from 'react-awesome-reveal'

const beneficios = [
   {imageUrl:'./images/landing/singer2.svg', subtitulo:'Experiência únicas',
   titulo:'Eventos com artistas', descricao: [
    'Contato direto com os fãs',
    'Sem intermediadores',
    'Receita direta da venda e revenda de NFTs',
    'Total autonomia para criação e interação com os fãs'
   ]},
   {imageUrl:'./images/landing/ticket.svg', subtitulo:'Confiabilidade',
   titulo:'Ingressos 3.0', descricao: [
    'Autenticidade assegurada pela tecnolgia de Blockchain',
    'Colecionáveis, não perecíveis e transferíveis',
    'Passe de entrada para comunidade entre fã e artista',
    'Sem cambistas, sem fraudes',
   ]},
   {imageUrl:'./images/landing/singer.svg', subtitulo:'Vanguarda',
   titulo:'Entre na comunidade', descricao:[
      'Comunidade com os artistas favoritos',
      'NFTs únicos',
      'Airdrops',
      'Experiência digital e física',
    ]},  
]

export default function SecaoCadastro(){

    return (
    <section id="beneficios" className="relative">
      <div className="flex flex-col w-auto px-5 md:px-auto items-center justify-center bg-slate-100 py-14">

        <div className="flex flex-col w-full items-center justify-center text-center">
        <h1 className="font-extrabold text-gray-700 leading-tighter tracking-tighter mb-10">Conheça os benefícios do nosso ecossistema</h1>
          {/* <h4 className="font-semibold text-gray-700 mt-5 mb-10">Conheça os benefícios do nosso ecossistema.</h4> */}
        </div>
        <div className="flex flex-col md:flex-row w-full items-start justify-center">
          {beneficios.map((val) => {
            return (
              <div className="flex flex-col justify-center items-center w-fit md:w-1/3
              text-gray-700 mt-5 my-5 mx-0 md:mx-5 ">
              {/* <MusicNoteIcon className="text-red-700"></MusicNoteIcon>
              */}
                <span className="items-center justify-center flex mx-auto"><img src={val.imageUrl} width={50}></img></span>
                {/* <h6 className="flex w-full items-start font-semibold mt-5 leading-tighter tracking-tighter">{val.subtitulo}</h6> */}
                
                {/* TITULO GRANDE */}
                <h2 className="flex items-start font-bold mt-5 mb-3 leading-tighter tracking-tighter">{val.titulo}</h2>
                
                <ul className='flex flex-col mx-5'>
                  {/* Beneficios */}
                  {val.descricao.map((val,key) => {
                    return (
                      <li key={key} className="list-disc text-base">{val}</li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    )
}