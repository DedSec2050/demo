"use client"

import "./Popup.css"
import { Button } from "./ui/button";




const Popup =  (props) => {

  return (
    (props.trigger)?
        <>
            <div className="popup">
                <div className="popup-container flex flex-col h-[90%] w-[100%] overflow-auto">
                

                <Button className="close-btn "
                   
                  onClick={()=>{props.setTrigger(false)}}
                  >
                    Close</Button>
                <div className="popup-inner flex border-2 border-red-500 rounded-md ">
                  
                    { props.children}
                </div>
                </div>
            </div>

        </>: 
        ""

  );
}

export default Popup;
