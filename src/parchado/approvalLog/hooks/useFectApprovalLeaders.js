import { useEffect, useState } from "react"
import { getPlanningLeader } from "../services/getPlanningLeader"

export const useFectApprovalLeaders = () => {
    const [approvals, setApprovals ] = useState([])
    const [isLoadingData, setIsLoadingData ] = useState(true)


    const getApprovals = async (id, typeLeader) => {
        const approvals = await getPlanningLeader(id, typeLeader);
        setApprovals(approvals);
        setIsLoadingData(false);
        return approvals;
    }

    return {
        approvals,
        isLoadingData,
        getApprovals
    }
}