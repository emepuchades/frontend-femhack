import { ResponsiveBar } from "@nivo/bar";
import { useState, useEffect } from "react";
import "./charts.style.css"

function InternetUsersChart(data) {
    console.log('data', data.data)
  //const transformedData = data.map((item) => ({
    //year: String(item.year), // Convertir año a cadena si es necesario
    //total: item.total,
  //}));
  const transformedData = data.data
  const [animatedData, setAnimatedData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 1000); // Espera 5 segundos antes de mostrar la siguiente barra

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex < transformedData.length) {
      const slicedData = transformedData.slice(0, currentIndex + 1);
      setAnimatedData(slicedData);
    }
  }, [currentIndex]);



  return (
    <div className="chart-bar-container">
   <ResponsiveBar
      data={animatedData}
      keys={['total']}
      indexBy="year"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Year',
        legendPosition: 'middle',
        legendOffset: 32,
        format: (value) => {
          if (value % 5 === 0) {
            return value;
          }
          return '';
        },
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Total',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      motion={{
        // Configuración personalizada de la animación
        animateEntering: {
          y: { duration: 1000 }, // Controla la aparición de las barras
        },
        enter: {
          y: { duration: 1000 }, // Controla la aparición de las barras
        },
        update: {
          y: { duration: 0 }, // Desactiva la animación de actualización para que las barras se queden en su posición permanentemente
        },
      }}
    />
    </div>

  );
}

export default InternetUsersChart;
