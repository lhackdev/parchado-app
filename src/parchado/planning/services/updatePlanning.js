import Connection from "../../../api/conection"

export const updatePlanning = async (body) => {
    let result = []
    let abortController = new AbortController()
    let signal = abortController.signal
    await Connection.put('/planning', body, { signal: signal })
    .then (res => { 
      result = res?.data?.data
    }).catch(_ => {})
  
    abortController.abort()
  
    return result
}