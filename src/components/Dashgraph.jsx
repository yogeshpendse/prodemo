import { Linegraph } from "./Linegraph";
import { Bargraph } from "./Bargraph";
import { chartarray } from "../sampledata/data";
export function Dashgraph() {
  return (
    <div className="dashgraphs">
      <div className="dashgraphlinecont">
        <h2 className="dashgraph__header">Air Travel in CO2e</h2>
        <div className="dashgraphline__cont">
          <Linegraph vizarray={chartarray} />
        </div>
      </div>
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">Road Travel CO2e</h2>
        <div className="dashgraphbar__cont">
          <Bargraph vizarray={chartarray} />
        </div>
      </div>
    </div>
  );
}
