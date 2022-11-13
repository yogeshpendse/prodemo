import { Steps } from "intro.js-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Dashgraphco } from "../components/Dashgraco";
import { Dashgrapes3 } from "../components/Dashgrapes3";
import { Dashgrapf } from "../components/Dashgrapf";
import { Dashgrapfs3 } from "../components/Dashgrapfs3";
import { Dashgraph } from "../components/Dashgraph";
import { Dashgrapharea } from "../components/Dashgrapharea";
import { Dashgraphc } from "../components/Dashgraphc";
import { Dashgrape } from "../components/Dashgraphe";
import { Dashgraphgp } from "../components/Dashgraphgp";
import { Dashparameters } from "../components/Dashparameters";
import { Dashwebplatforms } from "../components/Dashwebplatforms";
import { Lowsootfooter } from "../components/Lowsootfooter";
import { Sidenavv3 } from "../components/sidenav/Sidenavv3";
import { Topbarv3 } from "../components/topbar/Topbarv3";
import { useVisuals } from "../contexts/Visualcontext";

export function Dashboard() {
  const { name } = useParams();
  const { enabledc } = useVisuals();

  const [enabled, setEnabled] = useState(true);
  const navigate = useNavigate();
  const onExit = () => {
    setEnabled(false);
  };
  const onComplete = () => {
    navigate("/report/brsr");
  };
  const steps = [
    {
      element: ".introjs__3",
      intro: "This is a Visualization page.",
      // position: "right"
    },
  ];
  return (
    <div className="dcontainer">
      <Sidenavv3 />
      <div className="dashmain">
        <Topbarv3 />
        <div className="dashmaincontent">
          <h1 className="dashheader">
            <span className="introjs__3">Visualization</span>
          </h1>
          <Dashparameters />
          <div className="dashgraphs__cont">
            {name === "travel" && <Dashgraph />}
            {name === "cargo" && <Dashgraphc />}
            {name === "electricity" && <Dashgrape />}
            {name === "fuel" && <Dashgrapf />}
            {name === "commute" && <Dashgraphco />}
            {name === "s3fuel" && <Dashgrapfs3 />}
            {name === "s3electricity" && <Dashgrapes3 />}
            {name === "gaspurchase" && <Dashgraphgp />}
          </div>
          <div className="dashgraphblock">
            <Dashgrapharea />
            <Dashwebplatforms />
          </div>
        </div>
        {enabledc && (
          <Steps
            onComplete={onComplete}
            enabled={enabled}
            steps={steps}
            // skipLabel={"skip"}
            initialStep={0}
            // skipLabel={true}
            options={{ nextToDone: true }}
            onExit={onExit}
          />
        )}
        <Lowsootfooter />
      </div>
    </div>
  );
}
