import { useEffect, useState } from "react"
import { getPlannings } from "../services/getPlannings"

export const useFecthPlannings = () => {
    const [plannings, setPlannings ] = useState([])
    const [isLoading, setIsLoading ] = useState(true)


    const getPlanningsData = async (month) => {
        const planings = await getPlannings(month);
        setPlannings(planings);
        setIsLoading(false);
    }

    // useEffect(() => {
    //     getPlanningsData();
    // }, []);s


    return {
        plannings,
        isLoading,
        getPlanningsData
    }
}