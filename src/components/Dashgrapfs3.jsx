import { Linegraph } from "./Linegraph";
import { Bargraph } from "./Bargraph";
import { chartarray } from "../sampledata/data";
export function Dashgrapfs3() {
  return (
    <div className="dashgraphs">
      <div className="dashgraphlinecont hide">
        <h2 className="dashgraph__header">&nbsp;</h2>
        <div
          style={{ visibility: "hidden", display: "none" }}
          className="dashgraphline__cont"
        >
          <Linegraph vizarray={chartarray} />
        </div>
      </div>
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">Fuel in CO2e (Scope 3)</h2>
        <div className="dashgraphbar__cont">
          <Bargraph vizarray={chartarray} />
        </div>
      </div>
    </div>
  );
}