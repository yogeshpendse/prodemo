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
import { useNavigate } from "react-router-dom";
import { Steps } from "intro.js-react";
import { useState } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { createMuiTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export function Hompage() {
  const {
    dateval,
    setDateval,
    enddateval,
    setEnddateval,
    enabledc,
    // setEnabled,
  } = useVisuals();
  const navigate = useNavigate();
  const [enabled, setEnabled] = useState(true);
  const onExit = () => {
    setEnabled(false);
  };
  const onComplete = () => {
    navigate("/visualization/travel");
  };
  const steps = [
    {
      element: ".introjs__1",
      intro: "This is a summary page.",
      // position: "right"
    },
    {
      element: ".introjs__2",
      intro: "This is sidebar for navigation.",
      // position: "right"
    },
  ];
  const theme = createMuiTheme({
    typography: {
      htmlFontSize: 10,
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          html: {
            fontSize: "62.5%",
          },
        },
      },
    },
  });

  return (
    <div className="dcontainer">
      <Sidenavv3 />
      <div className="homemainv2">
        <Topbarv3 />
        <div className="homemaincontentv2">
          <h1 id="introjs__1" className="homemainheaderv2">
            <span className="introjs__1">Summary</span>
          </h1>
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
            <div className="datefilters">
              <h3 className="datefilters__head">Date Filters</h3>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    minDate="2022-1-1"
                    maxDate="2022-12-31"
                    label="Start date"
                    inputFormat="MM/DD/YYYY"
                    value={dayjs(dateval)}
                    onChange={(newValue) => {
                      const monthkey = JSON.stringify(newValue["$M"] + 1);
                      const monthkeystring =
                        monthkey.length === 1 ? `0${monthkey}` : monthkey;
                      setDateval(
                        `${newValue["$y"]}-${monthkeystring}-${newValue["$D"]}`
                      );
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <DesktopDatePicker
                    minDate="2022-1-1"
                    maxDate="2022-12-31"
                    label="End date"
                    inputFormat="MM/DD/YYYY"
                    value={dayjs(enddateval)}
                    onChange={(newValue) => {
                      const monthkey = JSON.stringify(newValue["$M"] + 1);
                      const monthkeystring =
                        monthkey.length === 1 ? `0${monthkey}` : monthkey;
                      setEnddateval(
                        `${newValue["$y"]}-${monthkeystring}-${newValue["$D"]}`
                      );
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </ThemeProvider>
              {/* <label>Start date:</label>
            <input
              value={dateval}
              onChange={(e) => {
                console.log(e.target.value);
                setDateval(e.target.value);
              }}
              type="date"
              min="2022-01-01"
              max="2022-12-29"
            /> */}
              {/* <label>End date:</label>
            <input
              value={enddateval}
              onChange={(e) => {
                console.log(e.target.value);
                setEnddateval(e.target.value);
              }}
              type="date"
              min="2022-01-01"
              max="2022-12-29"
            /> */}
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
    </div>
  );
}
