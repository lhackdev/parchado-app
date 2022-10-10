import { useState } from "react"
import Swal from 'sweetalert2'
import { SendEmailPlanning } from "../services/sendEmail"

export const useSendMailPlannings = () => {
    const [isLoadingEmail, setIsLoadingEmail ] = useState(true)

    const sendEmailsPlannings = async (plannings) => {
        const response = await SendEmailPlanning(plannings);
        console.log(response);
        setIsLoadingEmail(false);
        Swal.fire({
            icon: 'success',
            title: 'Notificaciones enviadas correctamente',
            showConfirmButton: false,
            timer: 1500
          })
    }

    return {
        isLoadingEmail,
        sendEmailsPlannings
    }
}