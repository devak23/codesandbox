import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

const styles = {
  Paper: {
    padding: 20,
    margin: '10px 5px 10px 0',
    height: 400,
    overflowY: 'auto'
  }
};

export default ({ exercises, category }) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) =>
            !category || category === group ? (
              <div key={group}>
                <Typography
                  variant={'h6'}
                  style={{ textTransform: 'capitalize' }}
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
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper style={styles.Paper}>
          <Typography variant="h4">Welcome!</Typography>
          <Typography style={{ marginTop: 20 }}>
            Please select an exercise.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
