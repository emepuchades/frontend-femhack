import { ResponsiveBar } from "@nivo/bar";

function CountryUsersChart({data}) {
  return (
    <div className="chart-bar-container">
      <ResponsiveBar
        data={data}
        keys={["internetUsers"]}
        indexBy="country"
        width={400}
        height={500}
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        padding={0.3}
        colors={{ scheme: "nivo" }}
        axisBottom={{
          tickRotation: -45,
        }}
      />
    </div>
  );
}

export default CountryUsersChart;
