import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Details } from "../pages/Details"
import { AddOption } from "../pages/AddOption"
import { EditOption } from "../pages/EditOption"

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/details/:id" element={<Details />}/>
      <Route path="/addoption" element={<AddOption />}/>
      <Route path="/editoption" element={<EditOption />}/>
    </Routes>
  )
}