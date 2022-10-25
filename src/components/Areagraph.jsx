import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useVisuals } from "../contexts/Visualcontext";
import { getmonthno } from "../functions/setmonthnum";

export function Areagraph(params) {
  const { vizarray, colorvalue } = params;
  const areafill = colorvalue ? colorvalue : "#8884d8";
  const { dateval, enddateval } = useVisuals();
  const monthno = Number(dateval.slice(5, 7));
  const vizx = [...vizarray].map((elem) => getmonthno(elem));
  const ju = vizx.findIndex((elem) => elem.monthno === monthno);
  const juend = Number(enddateval.slice(5, 7));
  const jju = [...vizx].slice(ju, juend);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart width={500} height={300} data={jju}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" />
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
        <Area
          type="monotone"
          dataKey="emission"
          stroke={areafill}
          fill={areafill}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
