import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { ButtonLogin } from '../ButtonLogin'
import Logo from '/images/EcopetrolHead.png'



export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main' }}
    >
      <Box sx={{ textAlign: 'right', width: '100%' }}>
        <img src={Logo} alt="Imágen Ecopetrol" width={100}  height={40} style={{ marginRight: '16px', marginTop: '20px' }} />
      </Box>
      <Grid
        container
        spacing={0}
        direction ="column"
        alignItems="center"

      >
        <Typography  mb={8} variant='h4' style={{"color" : "white"}} >Aplicación de parchado</Typography>
        <ButtonLogin/>
      </Grid>
    </Grid>

  )
}
