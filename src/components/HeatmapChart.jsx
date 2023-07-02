import { ResponsiveHeatMap } from "@nivo/heatmap";
import './charts.style.css'

function HeatmapChart( data ) {

const countriesYearUsers = data.data

  return (
    <>
      <h1 className="title-heatmapchart">
        Filtered users by year and by country
      </h1>
      <div className="internet-user-container">
        <div className="chart-bar-container">
          <ResponsiveHeatMap
            data={countriesYearUsers}
            margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
            valueFormat=" >-.2s"
            axisTop={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: -90,
              legend: "",
              legendOffset: 46,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "country",
              legendPosition: "middle",
              legendOffset: -72,
            }}
            colors={{
              type: "diverging",
              scheme: "red_yellow_blue",
              divergeAt: 0.5,
              minValue: -100000,
              maxValue: 100000,
            }}
            emptyColor="#555555"
            legends={[
              {
                anchor: "bottom",
                translateX: 0,
                translateY: 30,
                length: 400,
                thickness: 8,
                direction: "row",
                tickPosition: "after",
                tickSize: 3,
                tickSpacing: 4,
                tickOverlap: true,
                tickFormat: ">-.2s",
                title: "Value →",
                titleAlign: "start",
                titleOffset: 4,
              },
            ]}
          />
        </div>
        <div className="banner-container">
          <h3>
            30 years of <span className="title">internet evolution</span> and
            the number of users each year.
          </h3>
          <p className="subtitle">
            Discover which countries have the most internet-connected users and
            which year has seen the highest internet usage.
          </p>
        </div>
      </div>
    </>
  );
}

export default HeatmapChart;
