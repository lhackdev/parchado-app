import { Grid, Button, DialogActions, DialogContent, Card, Divider, Typography, Checkbox, FormGroup, FormControlLabel } from '@mui/material'
import { Box } from '@mui/system'
import { Fmk_TextFields } from '../../../components/Fmk_TextFields.jsx'
import useFormikYup from '../../../hooks/useFormikYup'
import CheckIcon from '@mui/icons-material/Check';
import { useEffect, useState } from 'react';
import { useFecthPlanningById } from '../hooks/useFecthPlanningById.js';
import { columnasDetallesPlaneaciones } from '../pages/ArrayColumnsTableDetail.js';
import { columnsApprovals } from '../pages/ArrayColumnsApprovalsLog.js';
import TableDataGrid from '../../../components/TableDataGrid.jsx';
import { useUpdatePlanning } from '../hooks/useUpdatePlanning.js';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { useSendMailPlannings } from '../hooks/useSendMailPlannings.js';

export const FormPlanning = ({data, setOpen}) => {

    const { formik, valorSubmit, setValorSubmit } = useFormikYup(data)
    const { isLoading, useUpdateDataPlanning } = useUpdatePlanning();
    const { isLoadingData, plannings, getPlanningsDataById } = useFecthPlanningById();
    const { isLoadingEmail, sendEmailsPlannings } = useSendMailPlannings();
    const [sendLF, setsendLF] = useState(true)
    const [sendLT, setsendLT] = useState(true)

    useEffect(() => {
        if (!valorSubmit) return
        updatePlanning();
      }, [valorSubmit])
     
    useEffect(() => {
        getDataPlanning();
    }, []);


    const getDataPlanning = async () => {
       var response = await getPlanningsDataById(data.id);
       console.log(response);
    }

    const updatePlanning = async () => {
        var response = await useUpdateDataPlanning(valorSubmit);
        setOpen(false);
        formik.handleReset('')
        setValorSubmit(null)
    }
    
    const sendEmail = async () => {
        data['sendLF'] = sendLF;
        data['sendLT'] = sendLT;
        await sendEmailsPlannings([data]);
    }

    return (<>
        
        <DialogContent dividers={true} >
            <Grid  container spacing={2} rowSpacing={3}>
                <Grid item xs={12} sm={4} >
                    <Fmk_TextFields
                        nameID="activityNumber"
                        label="ID Actividad"
                        formik={formik}
                        requerido={false}
                        imgNoRequired='°'
                    />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Fmk_TextFields
                        nameID="application"
                        label="Aplicación"
                        formik={formik}
                        requerido={false}
                        imgNoRequired='°'
                    />
                </Grid>
                <Grid item xs={12} sm={4} >
                    <Fmk_TextFields
                        nameID="executionDate"
                        label="Fecha de ejecución"
                        formik={formik}
                        requerido={false}
                        imgNoRequired='°'
                    />
                </Grid>
       
            </Grid>
            <Box mt={5}/>
            <Divider/>
            <Grid mt={2} container spacing={2} rowSpacing={3}>
                <Grid item xs={12} sm={3} >
                    <Fmk_TextFields
                        nameID="supportLeader"
                        label="Líder del Equipo de Soporte"
                        formik={formik}
                        requerido={false}
                        imgNoRequired='°'
                    />
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Fmk_TextFields
                        nameID="supportLeaderEmail"
                        label="Correo líder de Soporte"
                        formik={formik}
                        requerido={false}
                        imgNoRequired='°'
                    />
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Fmk_TextFields
                        nameID="technicalLeader"
                        label="Líder Tecnico"
                        formik={formik}
                        requerido={false}
                        imgNoRequired='°'
                    />
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Fmk_TextFields
                        nameID="technicalLeaderEmail"
                        label="Correo líder Tecnico"
                        formik={formik}
                        requerido={false}
                        imgNoRequired='°'
                    />
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Fmk_TextFields
                        nameID="functionalLeader"
                        label="Líder Funcional"
                        formik={formik}
                        requerido={false}
                        imgNoRequired='°'
                    />
                </Grid>
                <Grid item xs={12} sm={3} >
                    <Fmk_TextFields
                        nameID="functionalLeaderEmail"
                        label="Correo líder Funcional"
                        formik={formik}
                        requerido={false}
                        imgNoRequired='°'
                    />
                </Grid>
            </Grid>
            <Box mt={5}/>
            <Grid>
                <FormGroup row> 
                    <FormControlLabel
                        control={
                        <Checkbox checked={sendLF} name="gilad" onChange={() => setsendLF(!sendLF)} />
                        }
                        label="Envío lider Funcional"/>
                    <FormControlLabel
                        control={
                        <Checkbox checked={sendLT} name="gilad" onChange={() => setsendLT(!sendLT)}/>
                        }
                        label="Envío lider Técnico"/>
                        
            <Button 
                onClick={() => sendEmail()}
                variant='contained' 
                size="small" 
                color="warning"
            >
                <ForwardToInboxIcon sx={{ color:"white"}}/> Reinyectar
            </Button>
                </FormGroup>
            </Grid>

            <Box mt={5}/>
            <Divider/>
           {!isLoadingData &&
                (
                    <>
                        <Typography variant='p' style={{'fontWeight' : 'bold'}} >Servidores</Typography>
                        <TableDataGrid columns={columnasDetallesPlaneaciones} data={plannings} isCheck={false} />
                        <Box height={20}/>
                        <Typography variant='p' style={{'fontWeight' : 'bold'}} >Aprobaciones</Typography>
                        <TableDataGrid columns={columnsApprovals} data={plannings[0]?.approvals} isCheck={false} />
                    </>
                )
            }
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}
        >
            <Button 
                onClick={() => formik.handleSubmit()}
                variant='contained' 
                size="small" 
                color="primary"
            >
                <CheckIcon sx={{ color:"white"}}/> Guardar Información
            </Button>
        </DialogActions>
        
        </>)
}
