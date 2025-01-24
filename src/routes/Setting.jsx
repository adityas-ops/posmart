import { Player } from "@lottiefiles/react-lottie-player"
import Layout from "../components/Layout"


function Setting() {
  return (
   <Layout>
       <div className=" flex w-full h-full justify-center items-center flex-col">
       
             <h1 className="text-6xl  font-bold text-center text-white">Work in Progress</h1>
             <Player
               autoplay
               loop
               src="/assets/working.json"
               className="sm:size-[350px] scale-[1.5]  size-[250px] object-cover sm:scale-[2]"
             />
          </div>
   </Layout>
  )
}

export default Setting