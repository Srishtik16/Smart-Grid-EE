import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";
import axios from "axios";

const Chart = ({ data, aspect, title, yLabel}) => {
  // Area Changed
  const [Data, setData] = useState(data);
  console.log("CHARTS");
  console.log(Data);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/smartgrid/`)
    .then((response) => {
      console.log(response);
      let arr = []
      console.log(typeof(response));
      response.data.forEach( (obj) => {
        arr.push({'name': obj['Timestamp'].substring(0, 10), [`${yLabel}`]: obj[[`${yLabel}`]]});
      } );
      // console.log(response.data);
      console.log(arr);
      setData(arr);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [yLabel]);

  // Ends here

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={Data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={yLabel}
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
