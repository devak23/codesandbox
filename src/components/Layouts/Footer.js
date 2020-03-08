import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default ({ muscles, category, onSelect }) => {
  const handleOnChange = (e, index) =>
    onSelect(index ? muscles[index - 1] : '');

  const index = category ? muscles.findIndex(m => m === category) + 1 : 0;

  return (
    <Paper>
      <Tabs
        value={index ? index : 0}
        onChange={handleOnChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(m => (
          <Tab key={m} label={m} />
        ))}
      </Tabs>
    </Paper>
  );
};
