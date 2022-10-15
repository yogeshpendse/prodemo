import { Linegraph } from "../Linegraph";

export function Linegraphblock(params) {
  const { vizarray, graphname } = params;
  return (
    <div className="dashgraphlinecont">
      <h2 className="dashgraph__header">{graphname} in CO2e</h2>
      <div className="dashgraphline__cont">
        <Linegraph vizarray={vizarray} />
      </div>
    </div>
  );
}
