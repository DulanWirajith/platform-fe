import React from 'react';
import {Menu} from 'antd';
import {AppstoreFilled, FileFilled, HomeFilled, MenuOutlined, MessageFilled, SlidersFilled} from '@ant-design/icons';

const SideNav = () => {
    const handleHomeClick = () => {
    }

    const handleMenuClick = () => {
    }

    const handleFileClick = () => {
    }

    const handleChartClick = () => {
    }

    const handleMessageClick = () => {
    }


    return (
        <div>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['2']}>
                <Menu.Item key="0" onClick={handleHomeClick} style={{height: '60px',}} title={"Show"}>
                    <MenuOutlined
                        style={{fontSize: '20px', color: 'white', fill: "white", height: '100%', display: 'flex'}}/>
                    <span> Show</span>
                </Menu.Item>
                <Menu.Item key="1" onClick={handleHomeClick} style={{height: '60px',}} title={"Home"}>
                    <HomeFilled
                        style={{fontSize: '20px', color: 'white', fill: "white", height: '100%', display: 'flex'}}/>
                    <span> Home</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={handleMenuClick} style={{height: '60px',}} title={"Menu"}>
                    <AppstoreFilled
                        style={{fontSize: '20px', color: 'white', fill: "white", height: '100%', display: 'flex'}}/>
                    <span> Menu</span>
                </Menu.Item>
                <Menu.Item key="3" onClick={handleFileClick} style={{height: '60px',}} title={"Files"}>
                    <FileFilled
                        style={{fontSize: '20px', color: 'white', fill: "white", height: '100%', display: 'flex'}}/>
                    <span> Files</span>
                </Menu.Item>
                <Menu.Item key="4" onClick={handleChartClick} style={{height: '60px',}} title={"Charts"}>
                    <SlidersFilled
                        style={{fontSize: '20px', color: 'white', fill: "white", height: '100%', display: 'flex'}}/>
                    <span> Charts</span>
                </Menu.Item>
                <Menu.Item key="5" onClick={handleMessageClick} style={{height: '60px',}} title={"Messages"}>
                    <MessageFilled
                        style={{fontSize: '20px', color: 'white', fill: "white", height: '100%', display: 'flex'}}/>
                    <span> Messages</span>
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default SideNav;
