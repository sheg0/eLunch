import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import { Container } from "@mui/material";

function Info() {
  return (
    <Container>
      <List sx={{ width: "100%", maxWidth: 360 }}>
        {[1, 2, 3].map((value) => (
          <ListItem key={value}>
            <ListItemText primary={`Line item ${value}`} />
          </ListItem>
        ))}
        {[1, 2, 3].map((value2) => (
          <ListItem key={value2}>
            <ListItemText primary={`vegan ${value2}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Info;
