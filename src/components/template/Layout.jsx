import Navbar from "./Navbar";


export default function Layout(props){
    return (
        // <div className="flex flex-col min-h-screen ">
        <>
            <Navbar></Navbar>
            <main className="flex flex-col bg-black items-start justify-center place-content-start pb-20 h-full">
                {props.children}
            </main>
        </>
        // </div>
    )
}