import Connection from "../../../api/conection"

export const getPlannings = async (month) => {
    let result = []
    let abortController = new AbortController()
    let signal = abortController.signal
    await Connection.get(`/planning/month/${month}`, { signal: signal })
    .then (res => { 
        console.log(res);
      result = res?.data?.data
    }).catch(_ => {})
  
    abortController.abort()
  
    return result
}