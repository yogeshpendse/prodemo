import { useLocation, useNavigate } from "react-router-dom";
import { useNavc } from "../../contexts/Navcontext";
import "../../styles/sidebar/Sidenavv3.css";
export function Sidenavv3() {
  const { navboardstate, navdispatch } = useNavc();
  const navigate = useNavigate();
  const hoki = useLocation();
  return (
    <div className="sidenavv3__container">
      <div className="sidenavv3">
        <div className="sidenavv3__logo">
          {/* <div className="sidenavv3__logocont">
            <img
              className="sidenavv3__logoimg"
              src={navboardstate.navimage}
              alt="sideimage"
            />
          </div> */}
          <p className="sidenavv3__logopara">Brand</p>
        </div>
        <div className="sidenavv3__homemenu">
          <div
            onClick={() => {
              navigate("/");
              navdispatch({ type: "SELECT_HOME" });
            }}
            className={
              hoki.pathname === "/"
                ? "sidenavv3__homemenucont sidenavv3__homemenucont--selected"
                : "sidenavv3__homemenucont"
            }
          >
            <button className="sidenavv3__homemenulink">Home</button>
          </div>
        </div>
        <div className="sidenavv3__navigate">
          {[...navboardstate.subnav2].map((itm) => {
            return (
              <div key={itm.navid} className="sidenavv3__navigateitm">
                <div className="sidenavv3__navigateitmdd">
                  <p className="sidenavv3__navigateitmddmsg">{itm.name}</p>
                </div>
                <div className="sidenavv3__navigatedd">
                  {itm.isopen && itm.canopen && (
                    <Subnav3
                      slashnav={itm.route}
                      subnavarrayx={itm.subnavarr}
                      navid={itm.navid}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Subnav3(params) {
  const { slashnav, subnavarrayx, navid } = params;
  const locat = useLocation();
  const { navdispatch } = useNavc();
  const navigate = useNavigate();
  return (
    <>
      {[...subnavarrayx].map((subnavitm) => {
        return (
          <div
            onClick={() => {
              navigate(`/${slashnav}/${subnavitm.subroute}`);
              navdispatch({
                type: "SET_NAVSTATE",
                payload: { navnum: subnavitm.navnum },
              });
              navdispatch({
                type: "SELECT_NAVDD",
                payload: { navid, id: subnavitm.id },
              });
            }}
            key={subnavitm.id}
            className={
              locat.pathname === `/${slashnav}/${subnavitm.subroute}`
                ? "sidenavv3__dditm sidenavv3__dditm--selected"
                : "sidenavv3__dditm"
            }
          >
            <div className="sidenavv3__dditmlogo">
              <img
                className="sidenavv3__dditmimg"
                src={subnavitm.imgicon}
                alt="subnavitm"
              />
            </div>
            <p className="sidenavv3__dditmmsg">{subnavitm.name}</p>
          </div>
        );
      })}
    </>
  );
}
