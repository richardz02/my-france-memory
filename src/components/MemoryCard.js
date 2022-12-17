import React from 'react'
import { Card, Paper, Box, Typography, Grid } from '@mui/material'

const MemoryCard = ({ places }) => {
  return (
    <Grid item xs={3}>
      <Card>
        <Paper elevation={3}>
            <img src={places.image} alt="" className='img'/>
            <Box paddingX={1}>
                <Typography variant='h6'>
                    {places.name}
                </Typography>
                <Typography variant='body1'>
                  {places.caption}
                </Typography>
            </Box>
        </Paper>
      </Card>
    </Grid>
  )
}

export default MemoryCard;
