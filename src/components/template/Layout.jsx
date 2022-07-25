import Navbar from "./Navbar";


export default function Layout(props){
    return (
        <div className="flex flex-col min-h-screen flex-grow">
            <Navbar></Navbar>
            <main className="flex flex-col flex-grow bg-[#161616] items-start justify-center place-content-start">
                {props.children}
            </main>
        </div>
    )
}