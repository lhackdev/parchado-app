
// Formik
import { useFormik } from "formik"
import * as Yup from "yup"
import { useState } from 'react'


const useFormikYup = ( campos ) => {
  const [valorSubmit, setValorSubmit] = useState(null)
  console.log(campos)
  const variables = campos

  const formik = useFormik({
    initialValues: variables,
    onSubmit: (formAccesos) => {      
      setValorSubmit(formAccesos)
    }
  })

  return { formik, valorSubmit, setValorSubmit }

}

export default useFormikYup