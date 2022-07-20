// import styles from '../../styles/SecaoNoticias.module.css'
import {Fade, Reveal, Slide} from 'react-awesome-reveal'

export default function SecaoComoFunciona(){

    return (
        <section id="como-funciona" className="relative bg-white text-gray-800" > 
            <div className="flex flex-col py-12 px-20 w-full justify-center">
                <div className="flex flex-col items-center justify-center
                md:flex">
                    <h1 className="font-extrabold leading-tighter tracking-tighter mb-14 text-center w-full">
                        Como funciona?
                    </h1>
                    <ul className="grid grid-cols-4 items-start justify-center w-full space-x-10">
                        <Fade>
                            <li className="flex flex-col list-decimal items-center justify-center">
                                <img src='/images/landing/NFT ICON.jpg' className='mb-auto w-[100px]'></img>
                                <span className='h-full'>
                                    <h3 className='flex text-center w-full justify-center font-bold mt-2 mb-5'>1º PASSO</h3>
                                    <h4 className='text-justify'>Você adquire o NFT pela nossa plataforma. Esse NFT funciona como um NFT Membership ou como o ingresso 3.0 para eventos e shows.</h4>
                                </span>
                            </li>
                        </Fade>
                        <Fade delay={200}>
                            <li className="flex flex-col list-decimal items-center justify-center ">
                                <img src='/images/landing/LOVE ICON.jpg' className='mb-auto w-[100px]'></img>
                                <span className='h-full'>
                                    <h3 className='flex text-center w-full justify-center font-bold mt-2 mb-5'>2º PASSO</h3>
                                    <h4 className='text-justify'>Sendo ingresso ou Membership, o seleto grupo de fãs detentores dos NFTs terão contato direto com o artista, com benefícios e ofertas registradas no ativo, exclusivos para os detentores.</h4>
                                </span>
                            </li>
                        </Fade>
                        <Fade delay={400}>
                            <li className="flex flex-col list-decimal items-center justify-center">
                                <img src='/images/landing/ESTRELA ICON.jpg' className='mb-auto w-[100px]'></img>
                                <span className='h-full'>
                                    <h3 className='flex text-center w-full justify-center font-bold mt-2 mb-5'>3º PASSO</h3>
                                    <h4 className='text-justify'>Os benefícios do NFT surgem e são resgatados desde o pré lançamento de um álbum, durante o show e após o evento.  Seu token é um arquivo digital que permite que suas experiências digitais e físicas se unam.</h4>
                                </span>
                            </li>
                        </Fade>
                        <Fade delay={600}>
                            <li className="flex flex-col list-decimal items-center justify-center">
                                <img src='/images/landing/WALLET ICON.jpg' className='mb-auto w-[100px]'></img>
                                <span className='h-full'>
                                    <h3 className='flex text-center w-full justify-center font-bold mt-2 mb-5'>4º PASSO</h3>
                                    <h4 className='text-justify'>Seu ativo digital é único, ficará em uma carteira digital, e você ainda pode ganhar dinheiro na valorização do colecionável. Bem vindo à nova indústria do entretenimento da Web 3.0!</h4>
                                </span>
                            </li>
                        </Fade>
                        
                    </ul>
                </div>
            </div>
        </section>
        
    )
}

