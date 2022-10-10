import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextareaAutosize, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Logo from '/images/header.png'
import { AppAcordion } from '../components/AppAcordion';
import { useState } from 'react';
import { useFectApprovalLeaders } from '../hooks/useFectApprovalLeaders';
import Swal from 'sweetalert2'
import { useSaveApprovalLeader } from '../hooks/useSaveApprovalLeader';
import { Title } from '@mui/icons-material';

export const ApprovalLeader = () => {

  const { getApprovals } = useFectApprovalLeaders();
  const { saveApprovals } = useSaveApprovalLeader();
  const [ applicationsApproval, setApplicationsApproval ] = useState([]);
  const { isLoading, setLoading } = useState(false);
  const [ approvalsLeader, setApprovalsLeader ] = useState([]);
  let applicationErrorValidate = "";
  

  let { id, typeLeader } = useParams();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    var response = await getApprovals(id, typeLeader);
    setApplicationsApproval(response);
    var approv = [];
    response.forEach((item, index) => {
      approv.push({
        "id" : item.approvalsPeding[0].id,
        "application" : item.approvalsPeding[0].application,
        "approval" : null,
        "observation" : "",
        "leaderType" : typeLeader,
        "user" : typeLeader == 'lf' ? item.approvalsPeding[0].functionalLeader : item.approvalsPeding[0].technicalLeader
      });
    });

    setApprovalsLeader(approv);
  }

  const validate = () => {

    var valid = true;
    applicationErrorValidate = "";

    approvalsLeader.forEach((item) => {
      console.log(item.approval)
      if(item.approval == null) {
        applicationErrorValidate = `${applicationErrorValidate} Falta aprobación en <b>${item.application}</b><br>`
        valid = false;
        return valid;
      };
      if(item.observation === "" && item.approval === false) {
        applicationErrorValidate = `${applicationErrorValidate} Falta observación en <b>${item.application}</b><br>`
        valid = false;
        return valid;
      }
    })

    return valid;
  }


  const handleRadio = async ({target}, id) => {
    var isTrueSet = (target.value === 'true');
    console.log(isTrueSet)
    var newsApp = approvalsLeader.map((item) => 
        item.id === id ? {...item, approval : isTrueSet} : item
     );
     setApprovalsLeader(newsApp);
  }

  const handleText = async ({target}, id) => {
    var newsApp = approvalsLeader.map((item) => 
        item.id === id ? {...item, observation : target.value} : item
     );
     setApprovalsLeader(newsApp);
  }

  const obtenerNombreMes = (numero) => {
    let miFecha = new Date();
    if (0 < numero && numero <= 12) {
      miFecha.setMonth(numero - 1);
      return new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(miFecha);
    } else {
      return null;
    }
  }

  const sendApprovals = async () => {
    console.log(validate());
    if(!validate())
    {
      Swal.fire({
         icon: 'warning',
         html: `${applicationErrorValidate}`
      }
      )
      return;
    }

    Swal.fire({
      text: "¿Está seguro que desea enviar la información suministrada?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#0C243D',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, quiero enviar!',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await saveApprovals(approvalsLeader)
        getData();
        Swal.fire(
          'Información enviada!',
          'Muchas gracias.',
          'success'
        );
      }
    })
  }

  return (
    <Grid
      container
      direction={'column'}
      mt={2}
      alignItems={'center'}>
      <Grid
      width={'70%'}>
        <Box sx={{ textAlign: 'center', width: '100%' }}>
          <img src={Logo} style={{width: '100%'}} alt="Imágen Ecopetrol"  />
        </Box>
        { approvalsLeader.length > 0 ? 
        (
          <Grid>
            <Box height={20}/>
            <Grid textAlign={'center'}>
              <Typography variant='p' className='title'>Avales parchado programado mes { applicationsApproval.length > 0 ? obtenerNombreMes(applicationsApproval[0].approvalsPeding[0].month) : 'may'}</Typography>
            </Grid>
            <Box height={20}/>
            <Divider />
            <Box height={20}/>
            <Grid
            direction={'column'}
            textAlign={'justify'} >
              <Typography variant='p'>Acontinuación se visualiza las aplicaciones con sus respectivos servidores, 
              ademas encontrará información adicional donde puede validar y dar el aval para ejecutar el parchado.
              En caso de que no apruebé una ejecución deberá escribir la justificación en la caja de observaciones.
              Gracias. 
              </Typography>
            </Grid>
            <Box height={20}/>
            { applicationsApproval.map((item) => {
              return (
                <AppAcordion aplication={item} isLoading={isLoading} changeObservation={handleText} changeRadio={handleRadio}/>
              )
            }) }
            <Box height={20}/>
            <Grid
            direction={'column'}
            textAlign={'center'}>
            <Button sx={{ mr: 5 }}
                  className="buton"
                  variant="contained"
                  component="span" 
                  onClick={() => sendApprovals()}>
                  Enviar
              </Button>
              <Box height={20}/>
            </Grid>
          </Grid>
        ) : 
        (<Grid textAlign={'center'}> 
            <Typography variant='p' className='title'>No tiene aprobaciones pendiente</Typography>
        </Grid>)}
      </Grid>
    </Grid>
  )
}
