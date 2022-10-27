import { ResponsiveContainer, PieChart, Pie } from "recharts";
export function Piegraphsumblock() {
  const datax = [
    { name: "Travel", value: 8, fill: "#0088FE" },
    { name: "Cargo", value: 9, fill: "#00C49F" },
    { name: "Electricity", value: 13, fill: "#00049F" },
    { name: "Fuel", value: 22, fill: "#FF0000" },
    { name: "Road Commute", value: 3, fill: "#FF8042" },
    { name: "Fuel S3", value: 16, fill: "#8884d8" },
    { name: "Electricity S3", value: 10, fill: "#c3e0e5" },
    { name: "Gas Purchase", value: 16, fill: "#FFBB28" },
  ];

  return (
    <>
      <div className="dashgraphbarcont">
        <h2 className="dashgraph__header">Distribution of CO2e</h2>
        <div className="dashgraphbar__cont">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart height={250}>
              <Pie
                data={datax}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }) => {
                  console.log("handling label?");
                  const RADIAN = Math.PI / 180;
                  const radius = 25 + innerRadius + (outerRadius - innerRadius);
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                  return (
                    <text
                      x={x}
                      y={y}
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                    >
                      {datax[index].name} ({value})
                    </text>
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
