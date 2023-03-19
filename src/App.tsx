import React from 'react';
import './App.css';
import ApplicationRoutes from "./config/ApplicationRoutes";
import {ConfigProvider} from "antd";

function App() {
  return (
      <ConfigProvider
          theme={{
              inherit: true,
            token: {
                colorPrimary: 'white',
                colorBgContainer: '#3D84FF',
                colorPrimaryBg: '#005DFF',
            },
          }}
      >
        <ApplicationRoutes />
      </ConfigProvider>

  );
}

export default App;
