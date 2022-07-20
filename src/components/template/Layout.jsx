import Navbar from "./Navbar";


export default function Layout(props){
    return (
        <div className="flex flex-col min-h-screen flex-grow">
            <Navbar></Navbar>
            <main className="flex flex-grow bg-gray-900 py-20 px-5 items-start justify-center place-content-start
            lg:px-10">
                {props.children}
            </main>
        </div>
    )
}