import { Linegraph } from "./Linegraph";
import { Bargraph } from "./Bargraph";
// import { useVisuals } from "../contexts/Visualcontext";
import { chartarray } from "../sampledata/data";

export function Dashgrapes3() {
  return (
    <div className="dashgraphs">
      <div className="dashgraphlinecont hide">
        <h2 className="dashgraph__header">&nbsp;</h2>
        <div style={{ visibility: "hidden" }} className="dashgraphline__cont">
          <Linegraph vizarray={chartarray} />
        </div>
      </div>
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">Electricity in CO2e (Scope 3)</h2>
        <div className="dashgraphbar__cont">
          <Bargraph vizarray={chartarray} />
        </div>
      </div>
    </div>
  );
}
