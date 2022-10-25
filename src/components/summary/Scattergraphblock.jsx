import { Scatterchartgraph } from "../Scatterchart";

export function Scattergraphblock(params) {
  const { vizarray, graphname } = params;
  return (
    <>
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">{graphname} in CO2e</h2>
        <div className="dashgraphbar__cont">
          <Scatterchartgraph vizarray={vizarray} />
        </div>
      </div>
    </>
  );
}
