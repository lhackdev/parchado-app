import Connection from "../../../api/conection"

export const getApprovalsLogs = async (month) => {
    let result = []
    let abortController = new AbortController()
    let signal = abortController.signal
    await Connection.get(`/approval/month/${month}`, { signal: signal })
    .then (res => { 
      result = res?.data?.data
    }).catch(_ => {})
  
    abortController.abort()
  
    return result
}