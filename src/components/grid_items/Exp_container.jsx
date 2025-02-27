import experience_data from "../experience_data"
import Experience from "./Experience"

export default function Exp_container() {
    return(
        <div className="experience-container">
            <div className="exp-holder">
                {
                    experience_data.map((e)=>{
                        return(
                        <Experience data={e}/>  
                        )
                    })
                }
            </div>
            <div className="exp-button">
                <p className="exp-btn l1">Experience</p>
                <p className="exp-btn l2">Previous</p>
                <p className="exp-btn l3">Next</p>
            </div>
        </div>
    )
}