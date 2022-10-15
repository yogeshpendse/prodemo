import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useVisuals } from "../contexts/Visualcontext";
import { getmonthno } from "../functions/setmonthnum";
export function Linegraph(params) {
  const { vizarray } = params;
  const { dateval, enddateval } = useVisuals();
  const monthno = Number(dateval.slice(5, 7));
  const vizx = [...vizarray].map((elem) => getmonthno(elem));
  const ju = vizx.findIndex((elem) => elem.monthno === monthno);
  const juend = Number(enddateval.slice(5, 7));
  const jju = [...vizx].slice(ju, juend);
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={jju}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            style={{
              fontSize: "1.2rem",
              fontWeight: "400",
              lineHeight: "1.5rem",
              fontFamily: "Inter",
            }}
          />
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
          <XAxis
            style={{
              fontSize: "1rem",
              fontFamily: "san serif",
            }}
            dataKey="month"
          />
          <Line type="monotone" dataKey="emission" stroke="#4d7cfe" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
