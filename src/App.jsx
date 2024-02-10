import React from 'react'
import { Routes } from "react-router-dom";
import { Box } from "@mantine/core"
import AppRoutes from "./routes/app.routes";

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <Routes>
        {
          AppRoutes?.map((route, index) => <React.Fragment key={`app-route-${index}`}>{route}</React.Fragment>)
        }
      </Routes>
    </Box>
  )
}

export default App
