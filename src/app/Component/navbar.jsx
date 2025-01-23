import { FaHeart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiSliderHorizontal } from "react-icons/ci";
function Navbar(){    
    return(
        <>
   <div className="flex justify-start gap-36
    mx-8">

    <div>
<h3 className="text-blue-600 font-bold">MORENT</h3>
    </div>

    {/* <div className="border-2 ">
    <CiSliderHorizontal />
    <CiSearch/>
   <input  className="w-80" placeholder="type here" type="text" />

        </div> */}
        <div className="relative ">
      <CiSearch className="absolute top-1/2 transform -translate-y-1/2 left-2" />
      <input 
        className="w-80 pl-10 border-2 rounded-md" 
        placeholder="type here" 
        type="text" 
      />
       <CiSliderHorizontal className="absolute top-1/2 transform -translate-y-1/2 left-72"/>
    </div>

    


    



<div className="flex mx-80 gap-9">
    <div><FaHeart /></div>
    <div><FaBell /></div>
    <div><IoIosSettings /></div>
    <div><IoIosSettings /></div>
</div>
</div>
        </>
    )
}
export default Navbar