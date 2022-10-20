import { Linegraph } from "./Linegraph";
import { Bargraph } from "./Bargraph";
// import { chart1data } from "../mockdata";
// import { useVisuals } from "../contexts/Visualcontext";
import { chartarray } from "../sampledata/data";
import { Areagraph } from "./Areagraph";
export function Dashgraphc() {
  // const { visualstate } = useVisuals();
  // console.log({ cargowale: visualstate.cargo });
  return (
    <div className="dashgraphs">
      <div className="dashgraphlinecont">
        <h2 className="dashgraph__header">Air Cargo CO2e</h2>
        <div className="dashgraphline__cont">
          <Linegraph vizarray={chartarray} />
        </div>
      </div>
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">Road Cargo CO2e</h2>
        <div className="dashgraphbar__cont">
          <Bargraph vizarray={chartarray} />
        </div>
      </div>
      <div className="dashgraphlinecont">
        <h2 className="dashgraph__header">Air Cargo in CO2e</h2>
        <div className="dashgraphline__cont">
          <Areagraph vizarray={chartarray} />
        </div>
      </div>
    </div>
  );
}
