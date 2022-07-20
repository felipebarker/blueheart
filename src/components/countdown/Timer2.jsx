import React, { Component, useEffect, Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
// import moment from 'moment';
// import "./Timer.module.css";
import { useTimeoutFn } from 'react-use'
import { randomUUID } from "crypto";

// interface TimerProps {
//   efeito?: boolean = false,
//   children?: any
// }

export default function Timer(props){
  const [dias, setDias] = useState('')
  const [horas, setHoras] = useState('')
  const [minutos, setMinutos] = useState('')
  const [segundos, setSegundos] = useState('')
  let [isShowing, setIsShowing] = useState(true)
  let [, , resetIsShowing] = useTimeoutFn(() => {
    setIsShowing(true)
    count()
  }, 500)

  const deadline = new Date("Oct 08, 2022 21:00:00").getTime()

  function count() {
    // setIsShowing(false)
    var now = new Date().getTime();
    var t = deadline - now;
    var dd = Math.floor(t / (1000 * 60 * 60 * 24));
    var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((t % (1000 * 60)) / 1000);

    setDias(dd < 10 ? "0" + dd : dd)
    setHoras(hh < 10 ? "0" + hh : hh)
    setMinutos(mm < 10 ? "0" + mm : mm)
    setSegundos(ss < 10 ? "0" + ss : ss)
    // setIsShowing(true)
    // setIsShowing(false)
    // resetIsShowing()
    // setIsShowing(true)

    // this.setState({ days, minutes, hours, seconds });
  }

  // setInterval(count, 1000);

  useEffect(() => {
    // setIsShowing(!isShowing)
    // setIsShowing(false)
    setInterval(() => {
      setIsShowing(false)
      resetIsShowing()
      // count()
    }, 1000);
    
  },[])

  const time = [
    {valor:dias, texto: 'Dias'},
    {valor:horas, texto: 'Horas'},
    {valor:minutos, texto: 'Minutos'},
    {valor:segundos, texto: 'Segundos'}]


  return (
    <ul id="countdown" className="flex flex-row justify-center items-center overflow-hidden">
      {time.map((val,key) => {
          return (
            <>
                <li key={key} className="flex flex-col shrink items-center justify-center text-3xl w-full mx-2">
                  <span className={`flex items-center justify-center h-full text-sm mb-2`}>{val.texto}</span>
                  <div className="grid grid-flow-row grid-cols-2 gap-x-0 items-center justify-center text-center">
                    <span className="flex font-semibold items-center justify-center py-4 px-4 mr-0.5 rounded-xl text-5xl text-stone-700"
                    style={{backgroundImage: 'linear-gradient(to bottom, rgb(226 232 240) 50%, rgb(241 245 249) 50%)'}}>
                      {String(val.valor)?.slice(0,1)}
                    </span>
                    {val.texto == 'Segundos' && props?.efeito ?
                      <Transition
                      as={Fragment}
                      appear={true}
                      show={isShowing}
                      enter="transform transition ease-in-out duration-50"
                      enterFrom="scale-50 opacity-50"
                      enterTo="scale-100 opacity-100"
                      leave="transform transition ease-in-out duration-50"
                      leaveFrom="scale-100 opacity-100"
                      leaveTo="scale-50 opacity-50"
                    >
                      <span className="flex font-semibold items-center justify-center py-4 px-4 mr-0.5 rounded-xl text-5xl text-stone-700"
                      style={{backgroundImage: 'linear-gradient(to bottom, rgb(226 232 240) 50%, rgb(241 245 249) 50%)'}}>
                        {String(val.valor)?.slice(1,2)}
                      </span>
                    </Transition>
                    :
                    <span className="flex font-semibold items-center justify-center py-4 px-4 ml-0.5 rounded-xl text-5xl text-stone-700"
                    style={{backgroundImage: 'linear-gradient(to bottom, rgb(226 232 240) 50%, rgb(241 245 249) 50%)'}}>
                        {String(val.valor)?.slice(1,2)}
                      </span>
                    }
                  </div>
                  {/* <span className={`flex items-center justify-center h-full text-sm mt-2`}>{val.texto}</span> */}
                </li>

                {val.texto != 'Segundos' ?
                <div className="flex justify-center items-center">
                  <span className="flex py-4 px-0 rounded-xl
                  text-5xl text-gray-100 items-center justify-center translate-y-2">:</span>
                </div>
                : <></>
                }
            </>
          )
        }
      )}
    </ul>
  )
  
}