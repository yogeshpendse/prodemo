// import scopeimg from "../assets/report/report.png";
import lows from "../assets/report/genratedlowsoot.png";
export function Reportmainhead() {
  return (
    <div className="reportmaincont__header">
      <div className="reportmaincont__genratedby">
        <div className="reportmaincont__genratedhead">
          <p className="reportmaincont__genratedheadname">Generated by</p>
          <img
            className="reportmaincont__genratedheadimg"
            src={lows}
            alt="lowsoot"
          />
        </div>
        <p className="reportmaincont__genratedmessage">
          This BRSR report consists of data about emissions of a company defined
          according to UNCC standards. For any queries contact through below
          details.
        </p>
        <div className="reportmaincont__contacts">
          <div className="reportmaincont__email">
            <p className="reportmaincont__contactlabel">Email</p>
            <p className="reportmaincont__contactdata">hello@lowsoot.com</p>
          </div>
          <div className="reportmaincont__phone">
            <p className="reportmaincont__contactlabel">Phone Number</p>
            <p className="reportmaincont__contactdata">+91 8749943433</p>
          </div>
          <div className="reportmaincont__address">
            <p className="reportmaincont__contactlabel">Address</p>
            <p className="reportmaincont__contactdata">
              A-009,SUKH SAGAR CHS LTD,
              <br /> OPP AURA HOTEL NEW LINK ROAD,
              <br /> BORIVALI WEST MUMBAI Bandra Suburban MH 400091 IN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reportmainhead;
