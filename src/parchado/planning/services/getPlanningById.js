import Connection from "../../../api/conection"

export const getPlanningById = async (id) => {
    let result = []
    let abortController = new AbortController()
    let signal = abortController.signal
    await Connection.get(`/planning/id/${id}`, { signal: signal })
    .then (res => { 
        console.log(res);
      result = res?.data?.data
    }).catch(_ => {})
  
    abortController.abort()
  
    return result
}