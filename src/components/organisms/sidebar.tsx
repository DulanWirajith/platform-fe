import React from 'react';
import {Menu} from 'antd';
import {AppstoreFilled, FileFilled, HomeFilled, MessageFilled, SlidersFilled} from '@ant-design/icons';
import {MenuItem} from "../atoms/MenuItem";

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
                <MenuItem
                    handleClick={handleHomeClick}
                    menuItemKey={'1'}
                    menuItemName={'Home'}
                    menuItemIcon={<HomeFilled
                        style={{fontSize: '20px', color: 'white', fill: "white", height: '100%', display: 'flex'}}/>}
                />
                <MenuItem
                    handleClick={handleMenuClick}
                    menuItemKey={'2'}
                    menuItemName={'Menu'}
                    menuItemIcon={<AppstoreFilled
                        style={{fontSize: '20px', color: 'white', fill: "white", height: '100%', display: 'flex'}}/>}
                />
                <MenuItem
                    handleClick={handleFileClick}
                    menuItemKey={'3'}
                    menuItemName={'Files'}
                    menuItemIcon={<FileFilled
                        style={{fontSize: '20px', color: 'white', fill: "white", height: '100%', display: 'flex'}}/>}
                />
                <MenuItem
                    handleClick={handleChartClick}
                    menuItemKey={'4'}
                    menuItemName={'Charts'}
                    menuItemIcon={<SlidersFilled
                        style={{fontSize: '20px', color: 'white', fill: "white", height: '100%', display: 'flex'}}/>}
                />
                <MenuItem
                    handleClick={handleMessageClick}
                    menuItemKey={'5'}
                    menuItemName={'Messages'}
                    menuItemIcon={<MessageFilled
                        style={{fontSize: '20px', color: 'white', fill: "white", height: '100%', display: 'flex'}}/>}
                />
            </Menu>
        </div>
    );
}

export default SideNav;
