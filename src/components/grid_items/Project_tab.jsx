import Social_links from "./Social_links";
import projects_data from "../projects_data";
import Project_card from "./Project_card";

export default function Project_tab (){
    const total_projects = projects_data.length
    
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
                
                <div className="project-container">
                    {
                        projects_data.map((a)=>{
                            return(
                               <Project_card data={a}></Project_card>
                            )
                        })
                    }
                </div>

                <button className="next-project">Next</button>
            </div>
        </div>
    )
}