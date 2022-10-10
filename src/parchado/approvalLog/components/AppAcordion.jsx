import { Accordion, AccordionDetails, AccordionSummary, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextareaAutosize, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import { Box } from '@mui/system';
import { ArrayColumnsTableApproval } from '../pages/ArrayColumnsTableApproval';
import TableDataGrid from '../../../components/TableDataGrid';
import { useState } from 'react';

export const AppAcordion = ({aplication, isLoading, changeRadio, changeObservation}) => {


  return (
    <Grid direction={'column'}>
        <Accordion>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography variant='p' style={{fontWeight: 'bold'}}>Aplicación : {aplication.application}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid
        >
            <Typography>En la siguiente tabla encontrará información relevante del parchado</Typography>
            <Box height={20}/>
            {!isLoading &&
                (
                    <TableDataGrid 
                    columns={ArrayColumnsTableApproval} 
                    data={aplication.approvalsPeding} 
                    isCheck = {false}
                    />
                )
            }
            <Box height={20}/>
            <TextareaAutosize
            aria-label="Observaciones"
            minRows={6}
            onChange={(event) => changeObservation(event, aplication.approvalsPeding[0].id)}
            placeholder="Escriba aquí sus observaciones"
            style={{ width: '100%' }}
            />


        </Grid>
        <Grid textAlign={'center'}>
            <Box height={20}/>
            <FormControl>
            <RadioGroup
                onChange={(event) => changeRadio(event, aplication.approvalsPeding[0].id)}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group">
                <FormControlLabel value={true} control={<Radio />} label="Aprobar" />
                <FormControlLabel value={false} control={<Radio />} label="No Aprobar" />
            </RadioGroup>
            </FormControl>
        </Grid>
        </AccordionDetails>
    </Accordion>
    <Box height={10}/>
    </Grid>
  )
}
