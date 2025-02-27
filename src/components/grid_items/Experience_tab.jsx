import Exp_container from "./Exp_container";
import Extras from "./Extras";
import Tech_stack from "./Tech_stack";

export default function Experience_tab (){
    return(
        <div className="exp-tab">
            <Tech_stack/>
            <Exp_container/>
            <Extras/>
        </div>
    )
}