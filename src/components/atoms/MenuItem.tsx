import {Menu} from "antd";
import React from "react";

export function MenuItem(
    props:{
        handleClick: () => void,
        menuItemName: string,
        menuItemKey: string,
        menuItemIcon: JSX.Element,
    },
) {
    return (
        <Menu.Item key={props.menuItemKey} onClick={props.handleClick} style={{height:'60px', }} title={props.menuItemName}>
            {props.menuItemIcon}
            <span> {props.menuItemName}</span>
        </Menu.Item>
    )
}
