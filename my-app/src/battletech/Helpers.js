import ClusterCalc from "./ClusterCalc";
import DiceRoller from "./DiceRoller";

function Helpers() {
    return (
        <div className="container">
            <h1>Helper Tools</h1>
            <hr/>
            <DiceRoller />
            <hr/>
            <ClusterCalc />
        </div>
    );
}

export default Helpers;