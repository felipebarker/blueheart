import {FaRegHeart, FaHeart, FaRegEye, FaEthereum, FaWallet, FaListUl, FaBars, FaBuffer} from 'react-icons/fa'
import {FiInfo, FiGrid, FiChevronDown} from 'react-icons/fi'
import FormButton from "components/controls/FormButton";
import { useState } from "react";
import styles from '../../styles/TokenInfo.module.css'
import CardNft from "components/template/CardNft";
import { Disclosure } from '@headlessui/react'
import {GoTriangleDown} from 'react-icons/go'
import React from 'react'

interface SecaoNftProps {
    titulo?: any
    icone?: any
    className?: string
    defaultOpen?: boolean
    children?: any
}

export default function SecaoNft(props){
    console.log(props.icone)
    return (
        // <div className={`flex flex-col w-full  text-gray-100 border border-gray-600 
        //             rounded-lg ${props.className}`}>
            <Disclosure as='div' defaultOpen={props.defaultOpen ?? true} 
            className={`flex flex-col w-full  text-gray-100 border border-gray-600 shadow-md shadow-gray-600/20
            rounded-lg ${props.className}`}>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex items-center w-full">
                            <div className={`flex flex-row w-full items-center p-2 
                            ${open ? 'border-b border-gray-600' : ''} `}>

                                <span className='text-sm'>
                                    {React.createElement(props.icone)}
                                </span>
                                <h3 className="text-lg md:text-lg ml-2 font-semibold">{props.titulo}</h3>
                                <span className="flex ml-auto">
                                    <FiChevronDown className={`${open ? "transform rotate-180" : ""}`} />
                                </span>
                            </div>

                        </Disclosure.Button>
                        <Disclosure.Panel className={`p-2`}>
                            {props.children}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        // </div>
    )
}