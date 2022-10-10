import Connection from "../../../api/conection"

export const SendEmailPlanning = async (body) => {
    let result = []
    let abortController = new AbortController()
    let signal = abortController.signal
    console.log(body);
    await Connection.post('/planning/sendEmail', body, { signal: signal })
    .then (res => { 
      result = res?.data?.data
    }).catch(_ => {})
  
    abortController.abort()
  
    return result
}