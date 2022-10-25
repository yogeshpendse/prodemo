import { Linegraph } from "./Linegraph";
import { Bargraph } from "./Bargraph";
import { chartarray } from "../sampledata/data";
import { Areagraph } from "./Areagraph";
import { color1 } from "../color";
export function Dashgrape() {
  // const { visualstate } = useVisuals();
  // console.log({ electricwale: visualstate.electricty.Electricity });
  return (
    <div className="dashgraphs">
      <div className="dashgraphlinecont hide">
        <h2 className="dashgraph__header">&nbsp;</h2>
        <div style={{ visibility: "hidden" }} className="dashgraphline__cont">
          <Linegraph vizarray={chartarray} />
        </div>
      </div>
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">Electricity in CO2e</h2>
        <div className="dashgraphbar__cont">
          <Bargraph vizarray={chartarray} colorvalue={color1} />
        </div>
      </div>
      <div className="dashgraphlinecont">
        <h2 className="dashgraph__header">&nbsp;</h2>
        <div className="dashgraphline__cont">
          <Areagraph vizarray={chartarray} colorvalue={color1} />
        </div>
      </div>
    </div>
  );
}
