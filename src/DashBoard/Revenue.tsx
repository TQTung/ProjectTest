import Box from "@mui/material/Box";
import React from "react";
import ReactApexChart from "react-apexcharts";

const datas = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 67, 78, 54, 43, 45],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 87, 86, 76, 88, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 56, 45, 47, 59, 24],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
  },
};

const Revenue = () => {
  return (
    <Box sx={{ pt: 4, mx: 4 }}>
      <ReactApexChart
        options={datas}
        series={datas.series}
        type="bar"
        height={350}
      />
    </Box>
  );
};

export default Revenue;
