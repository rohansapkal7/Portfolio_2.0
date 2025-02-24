import Namecard from "./components/grid_items/Namecard"
import Edu_card from "./components/grid_items/Edu_card"
import Project_tab from "./components/grid_items/Project_tab"
import Experience_tab from "./components/grid_items/Experience_tab"

function Hero() {
  return (
  <>
    <div className='body-cover'>

      <div className="wrapper">
        
        <div className="left-container">
          <Namecard />
          <Edu_card />
        </div>
        
        <div className="right-container">
          <Project_tab />
          <Experience_tab />
        </div>
      </div>
    </div>
  </>)
}

export default Hero