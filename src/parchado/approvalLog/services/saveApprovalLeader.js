import Connection from "../../../api/conection"

export const saveApprovalLeader = async (data) => {
    console.log(data);
    let result = []
    let abortController = new AbortController()
    let signal = abortController.signal
    await Connection.post(`/approval`, data, { signal: signal })
    .then (res => { 
      result = res?.data?.data
    }).catch(_ => {})
  
    abortController.abort()
  
    return result
}