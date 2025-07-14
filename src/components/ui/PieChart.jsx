import { Stack, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useThemeStore } from "../../stores/themeStore";

export function EntryPieChart({ list }) {
  const [filter, setFilter] = useState();

  useEffect(() => {}, [list]);

  return (
    <Stack direction={"row"} flexWrap={"wrap"} mt={5} alignItems={"left"}>
      {list?.length > 0 &&
        list?.map((el, i) => {
          return <ChartUpdate key={i} data={el} />;
        })}
    </Stack>
  );
}

/**
 * Pie chart component that displays emotion data using ApexCharts.
 *
 * @param {Object} props - Component props.
 * @param {Array<{emotion: string, value: number}>} props.data - List of emotion objects to display in the chart.
 * @param {number} [props.width] - Optional width of the chart.
 * @param {number} [props.height] - Optional height of the chart.
 * @returns {JSX.Element} The rendered pie chart.
 */
export default function ChartUpdate({
  data,
  width,
  height,
  legend = true,
  bgColor = "background.paper",
}) {
  const theme = useTheme();
  const mode = useThemeStore((state) => state.mode);

  const [chartState, setChartState] = useState(() => ({
    options: {
      chart: {
        width: 240,
        type: "pie",
        background: bgColor,
      },
      labels: data.map((el) => el.emotion),
      legend: {
        show: legend,
        position: "bottom",
        floating: false,
        labels: {
          colors: theme.palette.text.primary,
          useSeriesColors: false,
        },
        markers: {
          width: 12,
          height: 12,
        },
      },
      theme: {
        mode: theme.palette.mode,
      },
      colors: ["#B3D8EC", "#AEF6FA", "#67ABD0"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 250,
              height: 200,
            },
            legend: {
              position: "bottom",
              color: "#fff",
              fontWeight: "normal",
            },
          },
        },
      ],
    },
    series: data.map((el) => el.value),
  }));

  useEffect(() => {
    setChartState({
      options: {
        chart: {
          width: 240,
          type: "pie",
          background: bgColor,
        },
        labels: data.map((el) => el.emotion),
        legend: {
          show: legend,
          position: "bottom",
          floating: false,
          labels: {
            colors: theme.palette.text.primary,
            useSeriesColors: false,
          },
          markers: {
            width: 12,
            height: 12,
          },
        },
        theme: {
          mode: theme.palette.mode,
        },
        colors: ["#B3D8EC", "#AEF6FA", "#67ABD0"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 250,
                height: 200,
              },
              legend: {
                position: "bottom",
                color: "#fff",
                fontWeight: "normal",
              },
            },
          },
        ],
      },
      series: data.map((el) => el.value),
    });

    console.log("MODE changé :", mode);
  }, [data, mode, theme.palette]); // 👈 Bien inclure `theme.palette` pour déclencher le bon recalcul

  return (
    <Chart
      options={chartState.options}
      series={chartState.series}
      type="pie"
      width={width ? width : 300}
      height={height ? height : 300}
    />
  );
}
