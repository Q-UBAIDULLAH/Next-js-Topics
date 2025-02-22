'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
const Userform=()=>{
    const router=useRouter()
const [Name,setName]=useState("")
console.log(Name)
const handlesubmit= async(e)=>{
e.preventDefault()
const URL= await fetch('api/hello',{
    method:"POST",
    headers:{
        "Content-Type":"application.json" //mera data json me hoga ye btaya
    },
    body:JSON.stringify({Name}) //or body me mene kr be diya convert json me

})
await URL.json()
router.refresh()
}
    return <>
     
<form className="text-center" onSubmit={handlesubmit}>

<input value={Name} onChange={(e)=>setName(e.target.value)}className="bg-slate-500" type="text" placeholder="type here"></input>
<button className="bg-cyan-500 m-4 " type="submit">Submit</button>
</form>

    </>
}
export default Userform