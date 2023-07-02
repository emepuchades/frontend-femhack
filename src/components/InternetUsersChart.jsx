import { ResponsiveBar } from "@nivo/bar";
import "./charts.style.css"

function InternetUsersChart() {

  const data = [
    {
      years: "1980",
      users: 2324,
      usersColor: "hsl(78, 70%, 50%)",
    },
    {
      years: "1985",
      users: 324,
      usersColor: "hsl(295, 70%, 50%)",
    },
    {
      years: "1990",
      users: 2433,
      usersColor: "hsl(78, 70%, 50%)",
    },
    {
      years: "1995",
      users: 324,
      usersColor: "hsl(295, 70%, 50%)",
    },
  ];

  return (
    <div className="chart-bar-container">
      <ResponsiveBar
        data={data}
        keys={["users"]}
        indexBy="years"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        width={400}
        height={500}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "users",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "users",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        labelSkipWidth={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 121,
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
        motionConfig={{
          mass: 9,
          tension: 121,
          friction: 38,
          clamp: false,
          precision: 0.01,
          velocity: 0,
        }}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
      />
    </div>
  );
}

export default InternetUsersChart;
