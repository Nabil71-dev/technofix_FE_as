

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MantineProvider } from "@mantine/core"
import { Notifications } from "@mantine/notifications"
import { BrowserRouter } from "react-router-dom"
import { ModalsProvider } from '@mantine/modals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications />
      <ModalsProvider labels={{ confirm: 'Submit', cancel: 'Cancel' }}>
        <App />
      </ModalsProvider>
    </MantineProvider>
  </BrowserRouter>,
)
