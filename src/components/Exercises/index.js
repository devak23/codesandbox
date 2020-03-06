import React from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 30,
    marginTop: 10,
    marginBottom: 10
  }
};

export default ({ exercises }) => {
  console.log(exercises);
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) => (
            <div id={group}>
              <Typography
                variant={"h6"}
                style={{ textTransform: "capitalize" }}
              >
                {group}
              </Typography>
              <List component="div" disablePadding>
                {exercises.map(e => (
                  <ListItem button key={e.id}>
                    <ListItemText primary={e.title} />
                  </ListItem>
                ))}
              </List>
            </div>
          ))}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper style={styles.Paper}>Right Pane</Paper>
      </Grid>
    </Grid>
  );
};
