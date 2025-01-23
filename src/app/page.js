import { client } from "@/sanity/lib/client"
import Hero from "./Component/Hero"
import Navbar from "./Component/navbar"
import Pickdrop from "./Component/Pick-drop"
import Link from "next/link"
export default async function Home() {
  // const getpets=  async()=>{
  //  //Groq query language hum pet fetch kr rahe hen sanity se data fetch me kaam ati he
  //  const pets= client.fetch((`*[_type=="pet"]`))
  //  return pets 
  // }
  // const allpet=await  getpets()
  // console.log("allpets",allpet)
// fetch('https://simple-books-api.glitch.me')
// .then(res=>res.json())
// .then(res=>console.log(res))
//2 software ko aps me communicate krana
const url= await fetch('https://simple-books-api.glitch.me/books')
const response=await url.json()
console.log("BOOK API",response)



  return (
    <>
    {/* <h1>   {JSON.stringify(response)}</h1> */}
    {
      response.map((item)=>{
        return(
          <Link href={`${item.id}`}>
     
          <h1>{item.name}</h1>
          </Link>
        )
      })
    }
 
// GROQ query language


{/* {
  allpet.map((item)=>{
return(<div>
  <h1>{item.name}</h1>
  <h1>{item.Name}</h1>
</div>
) 
  })
} */}








   {/* <Navbar></Navbar>
   <Hero></Hero>
   <Pickdrop></Pickdrop> */}




   </>
  )











}
