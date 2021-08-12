import React from 'react';
import { Grid } from '@material-ui/core';
import BodyCard from './BodyCard';

function Content() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <BodyCard />
        </Grid>
        <Grid item xs={4}>
          <BodyCard />
        </Grid>
        <Grid item xs={4}>
          <BodyCard />
        </Grid>
      </Grid>
    )
};

export default Content;