import axios from 'axios'

// Redux
// import { EditLoadings, EditLogin, Editruta } from '../redux/reducers/auth'
// import store from "../redux/store"

// Esta debe ser la misma instancia que se pasa a MsalProvider
// const createdMsalInstance = new PublicClientApplication(msalConfig);


// const acquireAccessToken = async (
//   msalInstance,
// ) => {
//   const activeAccount = msalInstance.getActiveAccount() // Esto sólo devolverá un valor no nulo si tiene una lógica en algún otro lugar que llame a la API setActiveAccount
//   const accounts = msalInstance.getAllAccounts()

//   if (!activeAccount && accounts.length === 0) {
//       return 'No auth-token' 
//   }

//   const valorCount = {account: activeAccount || accounts[0]}

//   let request = Object.assign(loginRequest, valorCount)

//   const authResult = await msalInstance.acquireTokenSilent(request);
//   return authResult.accessToken
// }

const Connection = axios.create({
  baseURL: import.meta.env.VITE_APP_BASEURL,
  headers: {
    // 'Content-Type': 'multipart/form-data'
    'Content-Type': 'application/json'
  }}) 

//   Conexion.interceptors.request.use(
//   async (config)  => {
//     store.dispatch(EditLoadings(true))
//     const token = await acquireAccessToken(createdMsalInstance)
//     const { headers } = config
//     headers['Authorization'] = `Bearer ${token}`
//     return config
//   },
//   error => Promise.reject(error)
//   )

//   Conexion.interceptors.response.use(
//     async response => {
//       store.dispatch(EditLoadings(false))
//       return response
//     },
//     async error => {
//     store.dispatch(EditLoadings(false))
//     let verifyCadena = error.toString().includes('InteractionRequiredAuthError')
//     if (verifyCadena) {
//       store.dispatch(EditLogin({}))
//       store.dispatch(Editruta('/'))
//       window.location.href = import.meta.env.VITE_APP_REDIRECT_TO
//       mensaje_error('Upsssss ', 'Se venció tu sesión. Por favor vuelva a Autenticarse')
//     }

//     let message = searchError(error.toJSON().status)
//     message = !message ? error : message
//     if(error.response?.data?.type === 'application/json'){
//       message = 'El archivo no pudo ser encontrado.'
//     }
//     let mensaje = message === undefined ? 'Error Desconocido' : message
//     mensaje_error('Error '+error.toJSON()?.status, mensaje+error?.response?.data?.message)
//   })

export default Connection