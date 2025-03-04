import experience_data from "../experience_data"
import Experience from "./Experience"
import { useState,useRef } from "react"

export default function Exp_container() {
    
    const expHolderRef = useRef(null);
    // expHolderRef.current.scrollLeft += 300
    const [scrollToLeft, setScrollToLeft] = useState(true);
    const [count, setCount] = useState(0);
    const [buttonText, setButtonText] = useState('Experience');

    function handleExpCard(){
        setCount(prev=>prev+1)
        console.log(count);
        
        if(count===experience_data.length-2){
            setCount(0);
            setScrollToLeft(prev=> !prev);
            console.log(scrollToLeft);    
        }
        
        
        
        if(scrollToLeft){
            expHolderRef.current.scrollLeft += 300
        }else{
            expHolderRef.current.scrollLeft -= 300
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
            <button onClick={handleExpCard}>{buttonText}</button>
        </div>
    )
}