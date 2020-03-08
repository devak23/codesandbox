import React, { Fragment } from 'react';
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

export default ({
  exercises,
  category,
  exercise: {
    id,
    title = 'Welcome!',
    description = 'Please select an exercise.'
  },
  onSelect
}) => {
  const handleOnClick = id => onSelect(id);

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  variant={'h6'}
                  style={{ textTransform: 'capitalize' }}
                >
                  {group}
                </Typography>
                <List component="div" disablePadding>
                  {exercises.map(e => (
                    <ListItem
                      button
                      key={e.id}
                      onClick={() => handleOnClick(e.id)}
                    >
                      <ListItemText primary={e.title} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper style={styles.Paper}>
          <Typography variant="h4">{title}</Typography>
          <Typography style={{ marginTop: 20 }}>{description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
