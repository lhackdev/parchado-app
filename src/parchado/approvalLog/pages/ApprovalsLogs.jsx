import { Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import { ParchadoLayout } from '../../layout/ParchadoLayout'
import { CardApprovals } from '../components/CardApprovals'
import { useFethApprovlasLog } from '../hooks/useFethApprovlasLog'
import ReactToPrint from "react-to-print";
import PrintIcon from '@mui/icons-material/Print';

export const ApprovalsLogs = () => {
  const componentRef = useRef(null);
  
  const { getApprovals } = useFethApprovlasLog();
  const [ apprvalsLogs, setApprvalsLogs ] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    var response = await getApprovals("10");
    setApprvalsLogs(response);
    console.log(response)
  }

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const reactToPrintTrigger = React.useCallback(() => {
    // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
    // to the root node of the returned component as it will be overwritten.

    // Bad: the `onClick` here will be overwritten by `react-to-print`
    // return <button onClick={() => alert('This will not work')}>Print this out!</button>;

    // Good
    return  <Button className='buton'
      variant="contained"
      sx={{ fontSize: 10, ml: 5 }}>
        <PrintIcon sx={{ color: "#f5f5f5 !important", fontSize: 25 }} /> Imprimir
    </Button>
  }, []);

  return (
    <ParchadoLayout>
         <Grid
                container
                direction={'column'}
                mb={2}
            >
                <Typography variant='p' className='title'>Lista de aprobaciones</Typography>
                <Divider />
          </Grid>
          <ReactToPrint
              content={reactToPrintContent}
              documentTitle="Log de aprobaciones"
              removeAfterPrint
              trigger={reactToPrintTrigger}
            />
            <Box height={20}/>
          <Grid
                container
                ref={componentRef}
                direction={'column'}
                // alignContent={'center'}
                width={'85%'}
                ml={'auto'}
                mr={'auto'}
                mb={2}>
                  <Box height={20}/>
                  <Typography variant='p' textAlign={'center'} className='title'>Lista de aprobaciones parchado mes de octubre</Typography>
                  <Box height={20}/>
                    { apprvalsLogs.map((item) => {
                      return (
                        <CardApprovals approval={item} />
                        
                      )
                    })}
                <CardApprovals />
          </Grid>

    </ParchadoLayout>
  )
}
