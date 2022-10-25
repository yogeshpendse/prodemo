// import { Linegraph } from "./Linegraph";
import { Bargraph } from "./Bargraph";
import { chartarray } from "../sampledata/data";
import { Areagraph } from "./Areagraph";
import { color1 } from "../color";
export function Dashgraphco() {
  return (
    <div className="dashgraphs">
      {/* <div className="dashgraphlinecont">
        <h2 className="dashgraph__header">Air Travel in CO2e</h2>
        <div className="dashgraphline__cont">
          <Linegraph vizarray={chartarray} />
        </div>
      </div> */}
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">Road commute CO2e</h2>
        <div className="dashgraphbar__cont">
          <Bargraph vizarray={chartarray} colorvalue={color1} />
        </div>
      </div>
      <div className="dashgraphlinecont">
        <h2 className="dashgraph__header">Road commute in CO2e</h2>
        <div className="dashgraphline__cont">
          <Areagraph vizarray={chartarray} colorvalue={color1} />
        </div>
      </div>
    </div>
  );
}
