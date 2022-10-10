import { Navigate, Route, Routes } from "react-router-dom"
import { Planning } from "../planning/pages/Planning"


export const ParchadoRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <Planning /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
