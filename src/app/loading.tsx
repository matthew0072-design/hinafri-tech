
import ClipLoader from "react-spinners/ClipLoader"






export default function Loading(){

    

    return (
        <main className='h-screen flex items-center justify-center m-auto'>
            <ClipLoader
                color="green"
                size={350}
                
            />
            
        </main>
    )
}