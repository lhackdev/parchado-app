import { Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import moment from 'moment';

export const CardApprovals = ({approval}) => {
  return (
    <>
    {approval!==undefined ? (
        <>
        <Card>
            <CardContent>
            <Typography variant="p" style={{'fontWeight' : 'bold', 'fontSize' : '14px'}}>
                {approval?.application}
            </Typography>
            <Divider/>
            <Box height={20} />
                <Grid
                    container
                    justifyContent={'space-between'}
                    style={{'fontSize' : '12px', 'fontFamily' : 'Arial, Helvetica, sans-serif'}}
                    mb={2}>
                    <Typography variant="p" >
                        <Typography style={{'fontWeight' : 'bold'}} variant="p"> Servidores: </Typography> {approval?.hostNames},
                    </Typography>
                    <Typography variant="p" >
                        <Typography style={{'fontWeight' : 'bold'}} variant="p"> Fecha de ejecución: </Typography> {moment(approval?.executeDate).format('YYYY/MM/DD')}
                    </Typography>
                    <Typography variant="p" >
                        <Typography style={{'fontWeight' : 'bold'}} variant="p"> Hora Ventana </Typography>: {approval?.timeWindows}
                    </Typography>
                    <Typography variant="p" >
                    <Typography style={{'fontWeight' : 'bold'}} variant="p"> Hora RollBack </Typography>: {approval?.timeRollBacks}
                    </Typography>
                </Grid>
                <Box height={20} />
                <Grid
                    container
                    style={{'fontSize' : '12px'}}
                    mb={2}>
                         { approval.approvals.map((item) => {
                            // console.log(item)
                            return (<Grid
                                container
                                direction={'column'}
                                width={'50%'}
                                alignContent={'center'}
                                mb={2}>
                                <Typography variant="p" >
                                    <Typography style={{'fontWeight' : 'bold'}} variant="p"> Aprobador: </Typography> {item.user},
                                </Typography>
                                <Typography variant="p" >
                                    <Typography style={{'fontWeight' : 'bold'}} variant="p"> Apropado: </Typography> {item.isAprroval}
                                </Typography>
                                <Typography variant="p" >
                                    <Typography style={{'fontWeight' : 'bold'}} variant="p"> Tipo Lider: </Typography> {item.leaderType}
                                </Typography>
                                <Typography variant="p" >
                                    <Typography style={{'fontWeight' : 'bold'}} variant="p"> Fecha de aprobación: </Typography> {moment(item.date).format('YYYY/MM/DD hh:mm')}
                                </Typography>
                                <Typography variant="p" >
                                    <Typography style={{'fontWeight' : 'bold'}} variant="p"> Observaciones: </Typography>{item.observation}
                                </Typography>
                            </Grid>)
                         })}
                  
                </Grid>
            </CardContent>
        </Card>
        <Box height={20} />
        </>
    ) :<Box/> }
    </>
  )
}
