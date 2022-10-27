import { Dashparameters } from "../components/Dashparameters";
import { Lowsootfooter } from "../components/Lowsootfooter";
import { useVisuals } from "../contexts/Visualcontext";
import { Sidenavv3 } from "../components/sidenav/Sidenavv3";
import { Topbarv3 } from "../components/topbar/Topbarv3";
import { Bargraphblock } from "../components/summary/Bargraphblock";
import { Linegraphblock } from "../components/summary/Linegraphblock";
import { chartarray } from "../sampledata/data";
import { Areagraphblock } from "../components/summary/Areagraphblock";
import { Scattergraphblock } from "../components/summary/Scattergraphblock";
import { color1, color2, color3 } from "../color";
import { Piegraphsumblock } from "../components/Piegraphsum";
export function Hompage() {
  const { dateval, setDateval, enddateval, setEnddateval } = useVisuals();
  return (
    <div className="dcontainer">
      <Sidenavv3 />
      <div className="homemainv2">
        <Topbarv3 />
        <div className="homemaincontentv2">
          <h1 className="homemainheaderv2">Summary</h1>
          <div>
            <label>Start date:</label>
            <input
              value={dateval}
              onChange={(e) => setDateval(e.target.value)}
              type="date"
              min="2022-01-01"
              max="2022-12-29"
            />
            <label>End date:</label>
            <input
              value={enddateval}
              onChange={(e) => setEnddateval(e.target.value)}
              type="date"
              min="2022-01-01"
              max="2022-12-29"
            />
          </div>
          <>
            <Dashparameters />
            <div className="summaryparams">
              <div className="summaryparam">
                <p className="summaryparam__title">
                  Total number of <br />
                  kilometers travelled
                </p>
                <p className="summaryparam__value">23392 kms</p>
              </div>
              <div className="summaryparam">
                <p className="summaryparam__title">
                  Total number of
                  <br /> electricity consumed
                </p>
                <p className="summaryparam__value">19000 KWh </p>
              </div>
              <div className="summaryparam">
                <p className="summaryparam__title">
                  Total fuel <br /> scope
                </p>
                <p className="summaryparam__value">1521.7 Liters </p>
              </div>
            </div>
            <div className="homevizgraph__cont">
              <div className="summarygrid">
                <Linegraphblock
                  vizarray={chartarray}
                  graphname={"Air Travel"}
                  colorvalue={color1}
                />
                <Piegraphsumblock />
                <Bargraphblock
                  vizarray={chartarray}
                  graphname={"Road Travel"}
                  colorvalue={color1}
                />
                {/* <Linegraphblock
                  vizarray={chartarray}
                  graphname={"Air Cargo"}
                  colorvalue={color1}
                /> */}
                <Areagraphblock
                  vizarray={chartarray}
                  graphname={"Air Cargo"}
                  colorvalue={color1}
                />
                {/* <Bargraphblock
                  vizarray={chartarray}
                  graphname={"Road Cargo"}
                  colorvalue={color1}
                /> */}
                <Scattergraphblock
                  vizarray={chartarray}
                  graphname={"Road Cargo"}
                  colorvalue={color1}
                />
                <Bargraphblock
                  vizarray={chartarray}
                  graphname={"Electricity"}
                  colorvalue={color2}
                />
                {/* <Areagraphblock
                  vizarray={chartarray}
                  graphname={"Electricity"}
                  colorvalue={color1}
                /> */}
                <Scattergraphblock
                  vizarray={chartarray}
                  graphname={"Fuel"}
                  colorvalue={color2}
                />
                {/* <Bargraphblock
                  vizarray={chartarray}
                  graphname={"Fuel"}
                  colorvalue={color2}
                /> */}
                <Bargraphblock
                  vizarray={chartarray}
                  graphname={"Road commute"}
                  colorvalue={color3}
                />
                {/* <Scattergraphblock
                  vizarray={chartarray}
                  graphname={"Road commute"}
                  colorvalue={color1}
                /> */}
                {/* <Areagraphblock
                  vizarray={chartarray}
                  graphname={"Electricity"}
                  colorvalue={color1}
                /> */}
                <Bargraphblock
                  vizarray={chartarray}
                  graphname={"(Scope 3) Fuel"}
                  colorvalue={color3}
                />
                <Bargraphblock
                  vizarray={chartarray}
                  graphname={"(Scope 3) Electricity"}
                  colorvalue={color3}
                />
                <Linegraphblock
                  vizarray={chartarray}
                  graphname={"Gas Purchase"}
                  colorvalue={color1}
                />
              </div>
            </div>
          </>
          <Lowsootfooter />
        </div>
      </div>
    </div>
  );
}
