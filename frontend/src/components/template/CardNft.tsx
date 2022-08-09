import Link from "next/link";
import { useEffect, useState } from "react";
import FormButton from 'components/controls/FormButton'

interface CardNftProps{
    title: string,
    imageUrl: string,
    price: string,
    edition?: string,
    editionTotal?: number,
    contractAddress?: string,
    tokenId?: string,
    // children?: any
}

export default function CardNft(props: CardNftProps){

    function renderizarCard() {
        // if(nft?.imageURL) {
            return (
                <div className="flex flex-col items-start justify-center rounded-xl bg-gray-100 shadow-gray-700/40
            shadow-lg text-slate-800 pb-0 w-[200px] shrink-0">
                    <div className="w-full rounded-t-xl cursor-pointer">
                        <Link href={`token-info/${props.contractAddress}/${props.tokenId}`} >
                            {/* <div className="fixed w-56 h-56 
                flex items-center justify-center hover:bg-gray-100/80 font-bold rounded-t-xl text-transparent hover:text-gray-900
                underline">
                Show details
                </div> */}
                            <img src={props.imageUrl}
                                className="w-[200px] h-[200px] rounded-t-xl object-fill"></img>
                        </Link>


                    </div>
                    <h4 className="ml-1 mt-1 font-bold">{props.title}</h4>
                    <div className="grid grid-cols-2 grid-flow-row
                items-center w-full">
                        <div className="flex flex-col items-start ml-1">
                            <h6 className="mt-1 mb-0 font-bold text-neutral-600">Price</h6>
                            <h4 className="flex ml-1 mt-0 font-bold">
                                <img src='/images/ethereum-eth-logo.svg' width={9} className="mr-2"></img>
                                {props.price}
                            </h4>
                        </div>
                        <div className="flex flex-col items-end mr-1">
                            <h6 className="mt-1 mb-0 font-bold text-neutral-600">Edition</h6>
                            <h4 className="flex mt-0 font-bold">
                                {props.edition} of XX</h4>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-center mt-1 text-gray-100">
                        {/* <button className="flex w-full hover:bg-cyan-600 hover:text-slate-100 justify-center items-center rounded-b-xl
                py-1 font-bold bg-cyan-500 text-slate-800 transition-all duration-200  ">Buy</button> */}
                        <FormButton bgcolor='cyan' 
                        className="w-full rounded-none rounded-b-xl py-1 hover:bg-cyan-500">
                            Buy
                        </FormButton>
                    </div>
                </div> 
            )
        // } else {
        //     return null
        // }
    }
   
    return (
        renderizarCard()
        
    )
}