import experience_data from "../experience_data"
import Experience from "./Experience"
import { useState,useRef, useEffect } from "react"

export default function Exp_container() {
    
    const expHolderRef = useRef(null);
    // expHolderRef.current.scrollLeft += 300
    const [scrollToLeft, setScrollToLeft] = useState(true);
    const [count, setCount] = useState(0);
    const [buttonText, setButtonText] = useState('Experience');

    function handleClick(){
       if(scrollToLeft){
        expHolderRef.current.scrollLeft += 300
       }else{
        expHolderRef.current.scrollLeft -= 300
       }

       var index = count;
       index++;

       if(index===experience_data.length-1){
        setCount(0);
        
        if(buttonText==='Previous'){
            setButtonText('Next')
        }else{
            setButtonText('Previous')
        }

        setScrollToLeft(prev=>!prev)
       }else{
        setCount(index)
       }
    }

    return(
        <div className="experience-container"
        onMouseEnter={()=>setButtonText(scrollToLeft?'Previous' : 'Next')}
        onMouseLeave={()=>setButtonText('Exprience')}
        >
            <div className="exp-holder" ref={expHolderRef}>
                {
                    experience_data.map((e)=>{
                        return(
                        <Experience data={e}/>  
                        )
                    })
                }
            </div>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}