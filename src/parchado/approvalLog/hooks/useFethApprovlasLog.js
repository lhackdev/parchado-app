import { useState } from "react"
import { getApprovalsLogs } from "../services/getApprovalsLog"

export const useFethApprovlasLog = () => {
    const [approvals, setApprovals ] = useState([])
    const [isLoadingData, setIsLoadingData ] = useState(true)


    const getApprovals = async (month) => {
        const approvals = await getApprovalsLogs(month);
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