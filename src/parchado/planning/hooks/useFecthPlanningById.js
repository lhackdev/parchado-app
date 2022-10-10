import { useEffect, useState } from "react"
import { getPlanningById } from "../services/getPlanningById"

export const useFecthPlanningById = () => {
    const [plannings, setPlannings ] = useState([])
    const [isLoadingData, setIsLoadingData ] = useState(true)


    const getPlanningsDataById = async (id) => {
        const planings = await getPlanningById(id);
        setPlannings(planings);
        setIsLoadingData(false);
        return planings;
    }

    return {
        plannings,
        isLoadingData,
        getPlanningsDataById
    }
}