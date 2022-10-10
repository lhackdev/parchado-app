import { TextField } from "@mui/material";


export const Fmk_TextFields = ({ 
  formik, nameID, label, disable=false, estilo='outlined', color='primary', requerido=true,
  placeholder, labelview=true, helperText='', imgNoRequired='✔' }) => {

    const inputProps = {
      step: 300,
    };

    return (
      <TextField
        name={nameID}
        disabled={disable}
        value={formik?.values?.[nameID]}
        onChange={formik?.handleChange}
        label={label} 
        placeholder={placeholder}
        type="text"
        fullWidth
        size="small"
        inputProps={inputProps}
        InputLabelProps={{ shrink: labelview }}
      />
  );
}
