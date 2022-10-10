import { useState } from "react"
import { saveApprovalLeader } from "../services/saveApprovalLeader"

export const useSaveApprovalLeader = () => {
    const [loadingSave, setLoadingSave ] = useState(false)


    const saveApprovals = async (data) => {
        setLoadingSave(true)
        await saveApprovalLeader(data);
        setLoadingSave(false)
    }

    return {
        loadingSave,
        saveApprovals
    }
}