import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EuroIcon from '@mui/icons-material/Euro';
import PeopleIcon from '@mui/icons-material/People';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import InfoIcon from '@mui/icons-material/Info';



import { useNavigate } from "react-router-dom";


const drawerWidth = 250;

export default function ClippedDrawer({children})  {

  const navigate = useNavigate();

  function SwitchPath(path) {
    console.log(path)
    switch (path) {
      case "Speiseplan":
        return navigate("/");
      case "Gerichte":
        return navigate("/List");
      case "Einkaufszettel":
        return navigate("/Calendar");
      case 4:
        return navigate("/");
      case 5:
        return navigate("/");
      case 6:
        return navigate("/");
      case 7:
        return navigate("/");
      default:
        return navigate("/");
    }
  }


    const listItems = ['Speiseplan', 'Gerichte', 'Einkaufszettel', 'Finanzen', 'Mitarbeiter' , 'Statistik', 'Infos'];

    const iconMap = {
        'Speiseplan': <KebabDiningIcon />,
        'Gerichte': <LocalDiningIcon />,
        'Einkaufszettel': <ShoppingCartIcon />,
        'Finanzen': <EuroIcon />,
        'Mitarbeiter': <PeopleIcon />,
        'Statistik': <StackedLineChartIcon />,
        'Infos': <InfoIcon />
    };

    return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor:"#10c388" }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" 
            sx={{ fontSize: '40px' , fontFamily: "Segoe UI"}}
          >
            Steinbeis
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' , fontSize: '40px' , fontFamily: "Segoe UI"},
          
        }}
        
        >
        <Toolbar />
        <Box sx={{ overflow: 'auto' , background: 'linear-gradient(0deg, #097C55, #10C388)' , height: '100vh' }}>
          <List sx={{ color: "white" }}>
            {listItems.map(item =>{      
              return(
                <ListItemButton  onClick={()=>SwitchPath(item) } key={item}
                  sx={{ fontFamily:'Segoe UI', fontSize: '20px' }}
                >
                  
                    <ListItemIcon sx={{ color: "white" , position: 'absolute' }}>
                        {iconMap[item]}
                    </ListItemIcon>
                    <ListItemText 
                      //primary={item} 
                      //sx={{ fontFamily: 'Segoe UI' , textAlign: 'center' }} 
                    />
                    {item}
                </ListItemButton>
            )})}
          </List>
          <Typography 
            sx={{ 
              fontFamily: 'Segoe UI',
              fontSize: '15px',
              color: 'white',
              bottom: '0',
              left: '0',
              right: '0',
              position: 'absolute',
              padding: '15px',
              
            }}>
              Impressum | Druckansicht | ICAL
          </Typography>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}