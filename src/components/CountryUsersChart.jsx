import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import { useState } from "react";
import ReactPaginate from "react-paginate";

function CountryUsersChart(data) {
  const usersperYearCountry = data.data;
  const itemsPerPage = 10; // Número de países a mostrar por página

  const [currentPage, setCurrentPage] = useState(0);

  function getMaxUsers(data) {
    let maxUsers = 0;

    data.forEach((item) => {
      const countries = item.data;
      countries.forEach((country) => {
        if (country.y > maxUsers) {
          maxUsers = country.y;
        }
      });
    });

    return maxUsers;
  }

  const transformedData = usersperYearCountry.map((item) => {
    return {
      id: item.year.toString(),
      data: item.countries.map((country) => {
        return {
          x: country.y,
          y: country.country,
          year: item.year.toString(),
        };
      }),
    };
  });

  const pageCount = Math.ceil(transformedData.length / itemsPerPage);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = (currentPage + 1) * itemsPerPage;
  const currentPageData = transformedData.slice(startIndex, endIndex);

  return (
    <div className="chart-bar-container">
      <ResponsiveScatterPlot
        data={currentPageData}
        margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
        xScale={{ type: "point", padding: 0.5 }}
        yScale={{
          type: "linear",
          min: 0,
          max: getMaxUsers(transformedData),
        }}
        colors={{ scheme: "category10" }}
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -45,
          legend: "Country",
          legendPosition: "middle",
          legendOffset: 46,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Year",
          legendPosition: "middle",
          legendOffset: -60,
        }}
        nodeSize={8}
        enableGridX={true}
        enableGridY={true}
        useMesh={true}
        tooltip={({ node }) => (
          <strong>{`${node.data.country}: ${node.data.y} users (${node.data.x})`}</strong>
        )}
      />

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default CountryUsersChart;
