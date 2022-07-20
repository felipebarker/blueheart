import FormInput from '../controls/FormInput'
import FormButton from '../controls/FormButton'
import Timer2 from '../countdown/Timer2'

export default function Countdown(){
    return (
        <section id="countdown" className="relative bg-[url('/images/landing/launch2.jpg')] bg-cover bg-fixed md:h-[400px]" style={{backgroundPositionY: '-40px'}}>
          <div className="py-10 mx-0 px-0 filter-none w-full h-full bg-gradient-to-b from-black via-slate-100/40 to-slate-100 backdrop-blur-sm
          flex items-center flex-col text-center justify-center">
            <h1 className="font-extrabold text-gray-100 leading-tighter tracking-tighter">Estamos nos preparando para o lançamento!</h1>
            <h4 className="font-semibold text-gray-100 mt-5 mb-10"><a href="#cadastro" className='underline'>Cadastre-se</a> e fique por dentro de todas as novidades.</h4>
            <Timer2 efeito={false}></Timer2>
          </div>
        </section>
    )
}