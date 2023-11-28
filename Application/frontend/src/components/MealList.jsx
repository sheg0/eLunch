import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import FetchMeal from "../components/FetchMeal";
import { useState, useEffect } from "react";

const MealList = () => {
  const { events, meals, dispatch } = useMealsEventsContext();
  const [data, setData] = useState([]); // create a state variable to store the data
  const [loading, setLoading] = useState(true); // create a state variable to indicate the loading status

  useEffect(() => {
    // use the useEffect hook to fetch the data when the component mounts
    const fetchData = async () => {
      const result = await FetchMeal(); // wait for the data to be fetched
      setData(result); // update the state variable with the data
      setLoading(false); // update the state variable to indicate the loading is done
    };
    fetchData();
  }, []); // pass an empty array as the dependency array to run the effect only once

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Gericht",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "vegetarian",
      headerName: "isVegetarian",
      flex: 1,
    },
    {
      field: "vegan",
      headerName: "isVegan",
      flex: 1,
    },
    {
      field: "gluten",
      headerName: "hasGluten",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "yellow",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#717d89",
            borderBottom: "5px solid white",
            borderRadius: "18px",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#cdcdcd",
            borderRadius: "18px",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#043c5f",
            borderTop: "5px solid white",
            borderRadius: "18px",
          },
          "& .MuiCheckbox-root": {
            color: `purple !important`,
          },
        }}
      >
        {loading ? (
          <div>Loading...</div> // show a loading indicator while the data is being fetched
        ) : (
          <DataGrid
            rows={data} // use the state variable as the rows prop
            columns={columns}
            autoHeight={true}
            autoPageSize={true}
          />
        )}
      </Box>
    </Box>
  );
};

export default MealList;
