import FormInput from '../controls/FormInput'
import FormButton from '../controls/FormButton'
import Link from 'next/link'
import styles from '../../styles/SecaoNoticias.module.css'

export default function SecaoNoticias(){

    const cardNews = (imageUrl, descricao, data, link) => {

        const image = ''.concat("bg-[url('", String(imageUrl),"')]")
        
        
        return (
            <a href={link} target="_blank" className='hover:text-gray-100 font-mono [&_h3]:hover:underline'>
            
            <div className={`group flex flex-col items-center justify-center my-5 p-0
            bg-slate-900 w-[250px] h-[300px] bg-center`} 
            style={{backgroundSize: '700px', backgroundImage: `url(${imageUrl})` }}>
                {/* <div style={{backgroundImage: 'linear-gradient(to bottom, rgba(220,220,220,0.1) 20%, rgba(10,10,10,1))'}} */}
                <div
                className={`flex flex-col w-full h-full hover:noticia1 noticia2 transition-all duration-500`}>
                    <h6 className='flex w-fit py-1 px-2 mt-5 mx-5
                    bg-slate-700/80'>
                        {data}
                    </h6>
                    <div className='flex w-fit py-1 px-2 mt-12 group-hover:mt-5 mx-5 font-bold
                     text-start transition-all duration-500 mb-auto'>
                        <h3>{descricao}</h3>
                    </div>
                    <div className='flex flex-row bottom-0 w-fit py-1 px-2 mb-2 mx-5 font-bold
                     text-start transition-all duration-500'>
                        <h6>Saiba mais</h6>
                    </div>
                </div>
            </div>
            </a>
        )
    }

    return (
        <section id="countdown" className="relative bg-slate-900">
          <div className="py-10 mx-0 px-0 filter-none w-full h-full bg-slate-800/80 backdrop-blur-sm
          flex items-center flex-col text-center">
            <h1 className="font-extrabold text-gray-100 leading-tighter tracking-tighter">Veja notícias sobre o tema</h1>
            {/* <h4 className="font-semibold text-gray-100 mt-5 mb-10">Inscreva-se e fique por dentro de todas as novidades.</h4> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 mt-5'>
                {cardNews('/images/landing/news1.jfif','Coleção NFT de Snoop Dogg é lançada em Cardano com músicas inéditas', '13 Jul 2022 - CriptoFacil' ,'https://www.criptofacil.com/colecao-nft-de-snoop-dogg-e-lancada-em-cardano-com-musicas-ineditas/')}
                {cardNews('/images/landing/news2.jfif','NFL to offer virtual NFT tickets at Super Bowl in Los Angeles', '04 Fev 2022 - CoinTelegraph' ,'https://cointelegraph.com/news/nfl-to-offer-virtual-nft-tickets-at-super-bowl-in-los-angeles')}
                {cardNews('/images/landing/news3.jfif','NFTs Are the Future of Ticketing', '09 Fev 2022 - Medium' ,'https://medium.com/bankless-dao/nfts-are-the-future-of-ticketing-7fe9c2a394d8')}
                {cardNews('/images/landing/news4.jfif','How Blockchain and NFT Technologies Could Change Event Ticketing', '18 Mai 2022 - RollingStone' ,'https://www.rollingstone.com/culture-council/articles/how-blockchain-nft-technologies-could-change-event-ticketing-1354873/')}
            </div>
          </div>
        </section>
    )
}