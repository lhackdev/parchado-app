import Connection from "../../../api/conection"

export const getPlanningLeader = async (id, typeLeader) => {
    let result = []
    let abortController = new AbortController()
    let signal = abortController.signal
    await Connection.get(`/approval/planning/${id}/typeLeader/${typeLeader}`, { signal: signal })
    .then (res => { 
      result = res?.data?.data
    }).catch(_ => {})
  
    abortController.abort()
  
    return result
}