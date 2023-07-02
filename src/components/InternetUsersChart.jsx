import { ResponsiveBar } from "@nivo/bar";
import { useState, useEffect } from "react";
import formatValue from "../utils/formarValue";
import "./charts.style.css";

function InternetUsersChart(data) {
  const transformedData = data.data;
  const [animatedData, setAnimatedData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex < transformedData.length) {
      const slicedData = transformedData.slice(0, currentIndex + 1);
      setAnimatedData(slicedData);
    }
  }, [currentIndex, transformedData]);

  return (
    <div className="chart-bar-container">
      <ResponsiveBar
        data={animatedData}
        keys={["total"]}
        indexBy="year"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Year",
          legendPosition: "middle",
          legendOffset: 32,
          format: (value) => {
            if (value % 5 === 0) {
              return value;
            }
            return "";
          },
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Total",
          legendPosition: "middle",
          legendOffset: -40,
          format: (value) => formatValue(value),
        }}
        label={({ value }) => formatValue(value)}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        motion={{
          animateEntering: {
            y: { duration: 1000 },
          },
          enter: {
            y: { duration: 1000 },
          },
          update: {
            y: { duration: 0 },
          },
        }}
      />
    </div>
  );
}

export default InternetUsersChart;
