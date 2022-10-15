import { Bargraph } from "../Bargraph";

export function Bargraphblock(params) {
  const { vizarray, graphname } = params;
  return (
    <>
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">{graphname} in CO2e</h2>
        <div className="dashgraphbar__cont">
          <Bargraph vizarray={vizarray} />
        </div>
      </div>
    </>
  );
}
