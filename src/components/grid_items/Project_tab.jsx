import { useRef } from "react";

import Social_links from "./Social_links";
import projects_data from "../projects_data";
import Project_card from "./Project_card";

export default function Project_tab (){
    const total_projects = projects_data.length

    const projectContainerRef = useRef(null)

    function handleNext(){
        projectContainerRef.current.scrollLeft += 300
    }

    function handlePrev(){
        projectContainerRef.current.scrollLeft -= 300
    }
    
    return(
        <div className="project-tab">
            <div className="project-tab-header">

                <div className="total-projects">
                    <p>{"Projects ("}{total_projects}{")"}
                    <i className="fa-solid fa-chevron-down"></i></p>
                </div>

                <Social_links/>
            </div>
            
            <div className="project-wrapper">
                
                <div className="project-container"
                ref={projectContainerRef}
                >
                    {
                        projects_data.map((a)=>{
                            return(
                               <Project_card data={a}></Project_card>
                            )
                        })
                    }
                </div>

                <div className="project-btn-container">
                    <button className="next-project" onClick={handleNext}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                    <button className="prev-project" onClick={handlePrev}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}