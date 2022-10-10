import { useState } from "react"
import { updatePlanning } from "../services/updatePlanning"

export const useUpdatePlanning = () => {
    const [isLoading, setLoading ] = useState(true)

    const useUpdateDataPlanning = async (planning) => {
        const response = await updatePlanning(planning);
        setLoading(false);
        return response;
    }

    return {
        isLoading,
        useUpdateDataPlanning
    }
}