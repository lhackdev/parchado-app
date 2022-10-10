import { Route, Routes, useParams } from "react-router-dom"
import { ApprovalLeader } from "../pages/ApprovalLeader"
import { ApprovalsLogs } from "../pages/ApprovalsLogs"


export const ApprovalRoutes = () => {

  return (
    <Routes>
        <Route path="approvalleader/:id/:typeLeader" element={ <ApprovalLeader /> } />
        <Route path="/" element={ <ApprovalsLogs /> } />
    </Routes>
  )
}
