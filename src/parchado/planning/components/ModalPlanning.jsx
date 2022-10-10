import React from 'react'
import { Grid, Box, CardActions, IconButton, Typography, Slide } from '@mui/material/'
import Dialog from '@mui/material/Dialog'
import FactCheckIcon from '@mui/icons-material/FactCheck'
import CancelIcon from '@mui/icons-material/Cancel'
import { FormPlanning } from './FormPlanning'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const ModalPlanning = ({ open, setOpen, planning }) => {


    const modalClose = () => setOpen(false)

    return (
        <Dialog
            fullScreen
            open={open}
            scroll={'paper'}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            TransitionComponent={Transition}
        >
            <CardActions>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton onClick={modalClose} aria-label="Cerrar Ventana" sx={{ marginTop: '-6px' }}>
                    <CancelIcon sx={{ fontSize: 25, color: "#9e9e9e" }} />
                </IconButton>
            </CardActions>
            <Box mt={6} />
            <Grid item xs={12} mt={-9} mb={2}>
                <Box ml={3}>
                    <Typography variant='p' className='title'>Editar planeación</Typography>
                </Box>
            </Grid>
            <FormPlanning data={planning} setOpen={setOpen}/>
        </Dialog>
    )
}
