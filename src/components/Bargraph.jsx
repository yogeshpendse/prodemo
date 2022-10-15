import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useVisuals } from "../contexts/Visualcontext";
import { getmonthno } from "../functions/setmonthnum";
// import { chart2data } from "../mockdata";
export function Bargraph(params) {
  const { vizarray } = params;
  const { dateval, enddateval } = useVisuals();
  // dateval.slice(5, 7) dateval.slice(5, 7)
  const monthno = Number(dateval.slice(5, 7));
  const vizx = [...vizarray].map((elem) => getmonthno(elem));
  const ju = vizx.findIndex((elem) => elem.monthno === monthno);
  const juend = Number(enddateval.slice(5, 7));
  const jju = [...vizx].slice(ju, juend);
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   setLoader(true);
  //   (async () => {
  //     try {
  //       const response = await axios.get("/api/chart2data", { signal });
  //       if (response.status === 200) {
  //         setData(response.data.carbodata);
  //       }
  //       setLoader(false);
  //     } catch (error) {
  //       if (axios.isAxiosError(error)) {
  //       } else {
  //       }
  //     } finally {
  //       setLoader(false);
  //     }
  //   })();

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={jju}>
          <XAxis
            dataKey="month"
            style={{
              fontSize: "1.2rem",
              fontWeight: "400",
              lineHeight: "1.5rem",
              fontFamily: "Inter",
            }}
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <YAxis
            style={{
              fontSize: "1.2rem",
              fontWeight: "400",
              lineHeight: "1.5rem",
              fontFamily: "Inter",
            }}
            axisLine={false}
          />
          <Tooltip />
          <Legend />
          <XAxis dataKey="day" />
          <Bar dataKey="emission" stackId="a" fill="#fe7e7d" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
