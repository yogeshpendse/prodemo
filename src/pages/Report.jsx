import { useRef, useState } from "react";
import JsPDF from "jspdf";
import { Lowsootfooter } from "../components/Lowsootfooter";
import { Reportend } from "../components/Reportend";
import Reportmainhead from "../components/Reportmainhead";
import { Bsrtable1 } from "../components/reportables/Bsrtable1";
import { Bsrtable2 } from "../components/reportables/Bsrtable2";
import { Bsrtable3 } from "../components/reportables/Bsrtable3";
import { Bsrtable4 } from "../components/reportables/Bsrtable4";
import { Bsrtable5 } from "../components/reportables/Bsrtable5";
import { Bsrtable6 } from "../components/reportables/Bsrtable6";
import { Sidenavv3 } from "../components/sidenav/Sidenavv3";
import { Topbarv3 } from "../components/topbar/Topbarv3";
import { useVisuals } from "../contexts/Visualcontext";
import { Steps } from "intro.js-react";

export function Report() {
  const reportdata = {};
  const componentRef = useRef();
  const generatePDF = () => {
    const widthval = document.querySelector(
      "#report__datacontainer"
    ).clientWidth;
    const heightval = Math.pow(2, 0.5) * widthval + 20;
    const report = new JsPDF({
      orientation: "portarit",
      unit: "px",
      format: [widthval + 20, heightval],
    });
    report.html(document.querySelector("#report__datacontainer")).then(() => {
      report.save("report.pdf");
    });
  };
  const { enabledc, setEnabledc } = useVisuals();
  const [enabled, setEnabled] = useState(true);

  const onExit = () => {
    setEnabled(false);
    setEnabledc(false);
  };
  const onComplete = () => {
    setEnabledc(false);
  };
  const steps = [
    {
      element: ".introjs__4",
      intro: "This is a Report page with a comprehensive brsr report.",
      // position: "right"
    },
  ];

  return (
    <div className="dcontainer">
      <Sidenavv3 />
      <div className="reportmain">
        <Topbarv3 />
        <div className="reportmaincontent">
          <h1 className="reportmainheader">
            <span className="introjs__4">Report</span>
          </h1>
          <div className="reportmaincont">
            <div ref={componentRef} id="report__datacontainer">
              <Reportmainhead />
              <div className="bsrreports">
                <Bsrtable1 reportdata={reportdata} />
                <Bsrtable2 reportdata={reportdata} />
                <Bsrtable3 reportdata={reportdata} />
                <Bsrtable4 reportdata={reportdata} />
                <Bsrtable5 reportdata={reportdata} />
                <Bsrtable6 reportdata={reportdata} />
              </div>
              <div className="reportmaincont__tables"></div>
            </div>
            <Reportend generatePDF={generatePDF} componentRef={componentRef} />
          </div>
        </div>
        {/* enabledc && */}
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
