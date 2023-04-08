import React from "react";
import Logo from "../assets/logo.svg"

function NavBar(){
    
   return(
    <div className="flex flex-row  overflow-hidden fixed w-[100%] border-2 justify-between bg-White h-[70px] px-[90px] p-[10px]">
        <div>
            <img
              alt="logo"
              src={Logo}
            />
        </div>

        <div >
           <ul className="flex flex-row">
                <li className=" text-[hsl(0, 0%, 98%)] p-[3px] rounded "><a href="#">Home</a></li>
                <li className=" ml-[10px] text-[hsl(0, 0%, 98%)] p-[3px] rounded"><a href="#">About</a></li>
                <li className=" ml-[10px] text-[hsl(0, 0%, 98%)] p-[3px] rounded"><a href="#">Blog</a></li>
                <li className=" ml-[10px] text-[hsl(0, 0%, 98%)] p-[3px] rounded"><a href="#">Contact</a></li>
                <li className=" ml-[10px] text-[hsl(0, 0%, 98%)] p-[3px] rounded"><a href="#">Careers</a></li>
           </ul>
        </div>

        <div className="">
            <button className="bg-Lime_Green p-[10px] rounded-[10%]">
                Request invite
            </button>
        </div>
    </div>
   )
}

export default NavBar;