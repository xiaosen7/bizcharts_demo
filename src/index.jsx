import React from "react";
import ReactDOM from "react-dom";
import { Chart, Geom, Axis, Tooltip, Legend, Label } from "bizcharts";

// 数据源
const data = [
  { day: "0", advisory: 275 },
  { day: "12", advisory: 115 },
  { day: "18", advisory: 120 },
  { day: "24", advisory: 350 },
  { day: "30", advisory: 150 },
];

// 定义度量
const cols = {
  day: { alias: "日期" },
  advisory: { alias: "咨询" },
};
console.log(document.getElementById("mountNode"));
// 渲染图表
ReactDOM.render(
  <>
  <Chart height={400} data={data} scale={cols} forceFit>
    <span
      className="sub-title"
      style={{ color: "rgba(134,138,147,1)", fontSize: "14px" }}
    >
      单位（人）
    </span>
 
    <Axis
      name="advisory"
      line={false}
      tickLine={null}
      grid={{
        align: "top", // 网格顶点从两个刻度中间开始
        type: "line", // 网格的类型
        lineStyle: {
          stroke: "rgba(230, 233, 242, 1)", // 网格线的颜色
          lineWidth: 1, // 网格线的宽度复制代码
        }, // 网格线的样式配置，原有属性为 line
      }}
    />
    <Axis
      name="day"
      tickLine={null}
     
    />
    <Legend position="top" dy={-20} />
    <Tooltip />
    <Geom
      shape="smooth"
      type="line"
      position="day*advisory"
      color="l (0) 0:rgba(0, 206, 96, 1) 1:rgba(84, 184, 173, 1)"
      size={4}
    />
    <Geom
      type="areaStack"
      shape="smooth"
      position="day*advisory"
      tooltip={['day*advisory', (day, advisory = 0) => (
        {
          title: `${day}日`,
          name: '咨询：',
          value: `${advisory}人`
        }
      )]}
      color={[
        "l (90) 0:rgba(84, 184, 173, 0.5) 1:rgba(255, 255, 255,0.3)",
      ]}
    />
  </Chart>
  
  <Chart height={400} data={data} padding={[50, 50, 30, 70]} forceFit>
      <Legend position="top-right" />
      <Axis name="day" />
      <Tooltip crosshairs={{ type: 'y' }} />
      <Geom 
        type="line"
        position="day*advisory"
        size={3}
        color="#2AAD5C"
        shape="smooth"
        tooltip={['day*advisory', (day, advisory = 0) => (
          {
            title: `${day}日`,
            name: '咨询：',
            value: `${advisory}人`
          }
        )]}
      />
    </Chart></>,
  document.getElementById("mountNode")
);
