import Connection from "../conection"

export const getPlanning = async (BaseUrl) => {
    let result = []
    let abortController = new AbortController()
    let signal = abortController.signal
    await Connection.get(BaseUrl, { signal: signal })
    .then (res => { 
        console.log(res);
      result = res?.data?.data
    }).catch(_ => {})
  
    abortController.abort()
  
    return result
}

export const importPlanning = async (BaseUrl, body) => {
    let result = []
    let abortController = new AbortController()
    let signal = abortController.signal
    console.log(body);
    await Connection.post(BaseUrl, body, { signal: signal })
    .then (res => { 
      result = res?.data?.data
    }).catch(_ => {})
  
    abortController.abort()
  
    return result
}