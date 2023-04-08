import React from "react";
import images from "../assets/image-mockups.png"
 function FirstPage(){
    return(
        <div className="w-[100%] h-[90vh] flex flex-row">
            <div className="pt-[15%] pl-[40px] w-[50%]">
                <div className="w-[100%]"> 
                    <h2 className="text-[50px]">Next generation digital banking</h2>
                    <p className="py-[20px]">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                </div>

                <div>
                    <button className="bg-Lime_Green p-[10px] rounded-[20%]">
                        Request invite
                    </button>
                </div>
                
            </div>
            <div className="bg-bg_desktop bg-center bg-cover w-[90%]">
                <div className="ml-[20%] w-[100%]">
                    <img
                    className=""
                    src={images}
                    alt="image" 
                    />
                </div>
            </div>
        </div>
    )
 }

export default FirstPage;