import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import FetchMeal from "../components/FetchMeal";

const MealList = () => {

    const data = FetchMeal();
    
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
                <DataGrid
                    rows={data}
                    columns={columns}
                    autoHeight={true}
                    autoPageSize={true}
                />
            </Box>
        </Box>
    )

    
}

export default MealList;