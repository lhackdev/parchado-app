import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { ApprovalRoutes } from "../parchado/approvalLog/routes/ApprovalRoutes"
import { ParchadoRoutes } from "../parchado/routes/ParchadoRoutes"


export const AppRouter = () => {
  return (
    <Routes>

        {/* Login */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        <Route path="/approval/*" element={ <ApprovalRoutes /> } />

         {/* Parchado App */}
         <Route path="/planeacion/*" element={ <ParchadoRoutes /> } />


        {/* Login */}
        <Route path='/' element={<ParchadoRoutes />} />

    </Routes>
  )
}
