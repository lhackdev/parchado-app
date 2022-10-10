import { useState } from "react"
import { importPlanning } from "../services/importPlanning"
import Swal from 'sweetalert2'

export const useImportPlanings = () => {
    const [isLoadingImport, setIsLoadingImport ] = useState(true)

    const importPlanningsData = async (file, month) => {
        let formData = new FormData();
        formData.append('file', file);
        formData.append('month', month);
        const response = await importPlanning(formData);
        setIsLoadingImport(false);
        Swal.fire({
            icon: 'success',
            title: 'Planeación importada correctamente',
            showConfirmButton: false,
            timer: 1500
          })
    }

    return {
        isLoadingImport,
        importPlanningsData
    }
}