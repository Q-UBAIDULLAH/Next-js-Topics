import { IoIosRadioButtonOn } from "react-icons/io";
import { RiArrowUpDownLine } from "react-icons/ri";
function Pickdrop(){
    return(
        <>

<div className="flex gap-1">


<div className="w-[552px] h-[132px] rounded-md bg-slate-200 mx-11 ">

<div className="flex gap-4 mx-11 my-4"><IoIosRadioButtonOn /><h2> Pick-Up</h2></div>

<div className="flex mx-11 my-4 gap-7">

<div className=" ">
<h2>Locations</h2>
    <select className="w-32 text-sm">
        <option className="" value="">select your city</option>
      
    </select>
    </div>
    <span className="border-r border-gray-500"></span>
<div className="">
<h2>Date</h2>
    <select className="w-32  text-sm">
        <option value="">select your date</option>
      
    </select>
    </div>
    <span className="border-r border-gray-400"></span>
<div className="">
<h2>Time</h2>
    <select className="w-32  text-sm">
        <option  value="">select your time</option>
    
    </select>
    </div>



</div>



</div>
<div className="relative right-7"><RiArrowUpDownLine fontSize={40}/></div>


<div className="w-[532px] h-[132px] rounded-md bg-slate-200 hello" >

<div className="flex gap-4 mx-11 my-4"><IoIosRadioButtonOn /><h2> Drop-Off</h2></div>

<div className="flex mx-11 my-4 gap-6">

<div className=" ">
<h2>Locations</h2>
    <select className="w-32 text-sm">
        <option className="" value="">select your city</option>
      
    </select>
    </div>
    <span className="border-r border-gray-500"></span>
<div className="">
<h2>Date</h2>
    <select className="w-32  text-sm">
        <option value="">select your date</option>
      
    </select>
    </div>
    <span className="border-r border-gray-400"></span>
<div className="">
<h2>Time</h2>
    <select className="w-32  text-sm">
        <option  value="">select your time</option>
    
    </select>
    </div>



</div>

</div>



 </div>
 <br />
 <br />
 <br />
 <br />
 <br />
        </>
    )
}
export default Pickdrop