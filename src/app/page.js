// import { client } from "@/sanity/lib/client"
import Hero from "./Component/Hero"
import Navbar from "./Component/navbar"
import Pickdrop from "./Component/Pick-drop"
import Link from "next/link"
import Userform from './Component/Userform'
export default async function Home() {
  // const getpets=  async()=>{
  //  //Groq query language hum pet fetch kr rahe hen sanity se data fetch me kaam ati he
  //  const pets= client.fetch((`*[_type=="pet"]`))
  //  return pets 
  // }
  // const allpet=await  getpets()
  // console.log("allpets",allpet)

//2 software ko aps me communicate krana
// const url= await fetch('https://simple-books-api.glitch.me/books')
// const response=await url.json()
// console.log("BOOK API",response)

const url= await fetch('http://localhost:3000/api/hello',{cache:'no-store'})
const result= await url.json()
console.log("route handlers",result)//caching: apni memory me server me data save krlena next js me hi ishi liye change nh hora example pani ke bottle bhar kr le aya baar bar nh lara bhr kr 
//frquently data change hora he tw caching issue krega
//solution api me
  return (
    <>
    {/* <h1>   {JSON.stringify(response)}</h1> */}
    {/* {
      response.map((item)=>{
        return(
          <Link href={`${item.id}`}>
     
          <h1 className="text-center mt-11 font-extrabold text-[25px]">{item.name}</h1>
          </Link>
        )
      })
    } */}

<Userform></Userform>
<h2 className="text-center text-green-600 text-3xl">Real Time Fetching Data</h2>
{result.map((item)=>{
  return<h1 className="text-center text-3xl">{item.Name}</h1>
})}

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
