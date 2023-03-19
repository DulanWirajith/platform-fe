import React from "react";
import logo from "./../../assets/img/logo.png";
import profileImage from "./../../assets/img/profile-image.png";
import {Badge, Button, Dropdown, Input, Menu} from "antd";
import {BellFilled, MessageFilled, PlusOutlined, QuestionCircleOutlined} from "@ant-design/icons";
import {NotificationItem} from "../atoms/NotificationItem";
import './../../App.css'

export function MainHeader() {

    const notifications = [
        {
            id: "1",
            title: "Notification 1",
            description: "This is a notification"
        },
        {
            id: "2",
            title: "Notification 2",
            description: "This is a notification"
        },
        {
            id: "3",
            title: "Notification 3",
            description: "This is a notification"
        }
    ]

    const menu = (
        <Menu>
            {
                notifications.map((notification: any) => {
                    return (
                        <Menu.Item key={notification.id}>
                            <NotificationItem title={notification.title} description={notification.description}/>
                        </Menu.Item>
                    );

                })
            }
        </Menu>
    );
    return (
        <div className="mainHeaderDiv">
            <div style={{display: "flex", alignItems: "center"}}>
                <img src={logo}/>
            </div>

            <div>
                <Input placeholder="Search and Find"
                       style={{backgroundColor: 'white', width: '390px',}}
                       suffix={<QuestionCircleOutlined/>} bordered={true}
                       color={'white'}
                />
            </div>

            <div style={{
                display: "flex", alignItems: "center"
            }}>
                <Button type="primary" icon={<PlusOutlined/>} size={"large"}
                        style={{marginRight: '10px', borderRadius: 15}}>
                    ADD
                </Button>
                <div style={{margin: '0 20px', display: 'flex'}}>
                    <Dropdown overlay={menu}>
                        <Badge offset={[-3, 23]} dot={true} color={"#3D84FF"}>
                            <BellFilled className="notifications"/>
                        </Badge>
                    </Dropdown>
                </div>
                <div>
                    <MessageFilled className="messages"/>
                </div>
                <div style={{margin: '0 20px', display: 'flex', fontSize: 'medium'}}>
                    Clarence Russell
                </div>
                <img src={profileImage}/>
            </div>
        </div>
    );
}
