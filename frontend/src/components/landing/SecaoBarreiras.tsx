// import styles from '../../styles/SecaoNoticias.module.css'

export default function SecaoBarreiras() {
  return (
    <section
      id='barreiras'
      className='relative bg-black text-gray-100 bg-center'
    >
      <div className='flex flex-col py-12 px-20 w-full justify-center  '>
        <div className="flex w-full text-center items-start justify-center bg-cover bg-fixed bg-[url('/images/landing/imagem9.jpg')] bg-[center_top_-150px]">
          <div
            className='block w-full h-[400px] '
            style={{
              backgroundImage:
                'linear-gradient(to right, black, transparent 20%, transparent 80%, black)',
            }}
          >
            <div
              className='block w-full h-[400px] '
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, black, transparent 40%, transparent 60%, black',
              }}
            ></div>
          </div>
        </div>

        <div
          className='flex flex-col items-end justify-center
                md:flex md:flex-row pt-12 pb-36'
        >
          <div
            className='flex flex-col items-center text-center w-full 
                    md:mx-auto md:w-2/3 space-y-2 md:mr-20 bg-center'
          >
            <h1 className='font-extrabold leading-tighter tracking-tighter mb-2 text-left w-full'>
              Quebrando barreiras
            </h1>
            <h3 className='flex flex-col justify-start items-start text-left text-[1.15rem] w-full'>
              <span className='font-extrabold text-start w-full my-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-teal-400'>
                Ingressos 3.0
              </span>
              Queremos disruptar a indústria de tickets tradicional usando
              blockchain. Ingressos colecionáveis, transferíveis, com valores de
              revenda padronizados passam a ser nova realidade. Cambistas e
              fraudes dão lugar a uma conexão humanizada e direta entre fã e
              artistas.
              <span className='font-extrabold text-start w-full mt-5 my-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-teal-400'>
                NFT Membership
              </span>
              As NFTs permitem que os artistas adotem uma abordagem DIY (“Do It
              Yourself”), oferecendo uma experiência única para muito além dos
              shows. Não se tem mais intermediários entre o fã e o artista: sem
              big techs, serviços de streaming e nem distribuição de royalties
              abusiva de grandes gravadoras. É você quem está no controle e faz
              as regras, como deveria ser.
            </h3>
          </div>
          <div
            className='flex flex-col items-center justify-center w-full mt-16
                    md:mx-auto md:w-[60%] md:items-end md:justify-end'
          >
            <img
              src='/images/landing/schema.gif'
              className='flex w-full opacity-75 justify-end'
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}
