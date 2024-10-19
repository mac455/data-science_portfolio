import React from "react";
import BackButton from "@/components/BackButton";

const contact =() =>{
    return(
        <>
          {/* Heading */}
          <div className="pt-10 mt-20">
                <div className="md:flex items-center justify-center gap-20">
                    <div className="cursor-pointer transition-opacity duration-300 hover:opacity-25">
                        <BackButton />
                    </div>
                    <div className="md:ml-10 flex flex-col md:w-2/3 mx-auto px-4 md:px-0">
                        <h1 className="inline-block text-3xl md:text-5xl text-center font-bold text-gray-900 tracking-tight p-4">
                            Let's connect!🙌
                        </h1>
    
                    </div>
                </div>
            </div>
            <div>
                <h1 className="mt-10 block mx-auto w-2/3 mb-10 text-xl md:text-4xl text-center text-gray-900 tracking-tight p-4"> Please don't hesitate to get in touch! <br/>
                I'm open to all opportunities and eager for a new challenge where I can learn new skills and grow  !😊<br/>
                My details are available below. <br/>
                Looking forward to hearing from you! 
                </h1>
            </div>
        </>
    )
}

export default contact