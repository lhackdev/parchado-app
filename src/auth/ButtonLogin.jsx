import { Button, Grow, Tooltip } from '@mui/material'
import FingerprintIcon from '@mui/icons-material/Fingerprint'
import { useMsal } from "@azure/msal-react"
import { loginRequest } from "@/api/MsalAuthConfig"

// Rutas
import { useNavigate } from "react-router-dom"

export const ButtonLogin = () => {
  const { instance } = useMsal()
  const navigate = useNavigate()

  const handleLogin = async () => {
    navigate('/')
  }


  return (
    <Tooltip title="HAGA CLICK PARA INGRESAR" placement="top" arrow>
        <Grow
        in={true}
        style={{ transformOrigin: '0 0 0' }}
        {...({ timeout: 5000 })}
        >     
        <Button className='buton'
            variant="contained"
            sx={{ fontSize: 12, backgroundColor: " #0097a7" }}
            onClick={() => handleLogin()}
        >
            <FingerprintIcon sx={{ color:"#f5f5f5 !important", fontSize: 50, marginRight: 1.5 }} /> Ingresar
        </Button>
        </Grow> 
    </Tooltip>
  )
}
