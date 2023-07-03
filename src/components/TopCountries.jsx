import { ResponsivePie } from "@nivo/pie";
import { useState, useEffect} from "react"

function TopCountries(data) {
  let startYear = 1990
  const [selectedYear, setSelectedYear] = useState(0);
  const [datita, setDatita] = useState(data.data[selectedYear].countries);

  const handleChange = (event) => {
        console.log("event", event.target.value);

      const selectedOption = event.target.value;
      setSelectedYear(selectedOption);
  };

  useEffect(() => {
      console.log("setDatita", datita);

      setDatita(data.data[selectedYear].countries);
  }, [selectedYear]);


  return (
    <div>
      <h1 className="title-heatmapchart">
        Ranking of the most visited countries per year.
      </h1>
      <div className="internet-user-container">
        <div className="banner-heatmapchart-container">
          <h2 className="p-heatmapchart">
            Top 10 countries that have been most visited in different years.
            Choose a year to see which countries have had the most
            internet-connected users.
          </h2>
          <h3 className="subtitle-heatmapchart">Choose a year:</h3>
          <select className="select-years" onChange={(e) => handleChange(e)}>
            {Array.from({ length: 30 }, (_, index) => {
              const year = startYear + index;
              return (
                <option key={year} value={index}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
        <div className="heatmapchart-container">
          <ResponsivePie
            data={datita}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: "circle",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#000",
                    },
                  },
                ],
              },
            ]}
            key={selectedYear}
          />
        </div>
      </div>
    </div>
  );
}

export default TopCountries;
