import React from 'react';
import './App.css';
import ApplicationRoutes from "./config/ApplicationRoutes";
import {ConfigProvider} from "antd";

function App() {
    return (
        <ConfigProvider
            theme={{
                // inherit: true,
                token: {
                    // colorPrimary: 'white',
                    colorBgContainer: '#3D84FF',
                    colorPrimaryBg: '#005DFF',
                },
                components: {
                    Input: {
                        colorBgContainer: 'white',
                        colorBorder: '#F5F5F5',
                        borderRadius: 5,
                    },
                    Button: {
                        colorPrimary: "#3D84FF",
                        colorPrimaryActive: "#3D84FF",
                        borderRadius: 5,

                    }
                },
            }}
        >
            <ApplicationRoutes/>
        </ConfigProvider>

    );
}

export default App;
