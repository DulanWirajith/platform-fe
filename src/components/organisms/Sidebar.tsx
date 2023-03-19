import React from 'react';
import {Menu} from 'antd';
import {AppstoreFilled, FileFilled, HomeFilled, MenuOutlined, MessageFilled, SlidersFilled} from '@ant-design/icons';
import './../../App.css';

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
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="0" onClick={handleHomeClick} style={{height: '60px',}} title={"Show"}>
                    <MenuOutlined className='sideBarMenuItem'/>
                    <span> Show</span>
                </Menu.Item>
                <Menu.Item key="1" onClick={handleHomeClick} style={{height: '60px',}} title={"Home"}>
                    <HomeFilled className='sideBarMenuItem'/>
                    <span> Home</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={handleMenuClick} style={{height: '60px',}} title={"Menu"}>
                    <AppstoreFilled className='sideBarMenuItem'/>
                    <span> Menu</span>
                </Menu.Item>
                <Menu.Item key="3" onClick={handleFileClick} style={{height: '60px',}} title={"Files"}>
                    <FileFilled className='sideBarMenuItem'/>
                    <span> Files</span>
                </Menu.Item>
                <Menu.Item key="4" onClick={handleChartClick} style={{height: '60px',}} title={"Charts"}>
                    <SlidersFilled className='sideBarMenuItem'/>
                    <span> Charts</span>
                </Menu.Item>
                <Menu.Item key="5" onClick={handleMessageClick} style={{height: '60px',}} title={"Messages"}>
                    <MessageFilled className='sideBarMenuItem'/>
                    <span> Messages</span>
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default SideNav;
