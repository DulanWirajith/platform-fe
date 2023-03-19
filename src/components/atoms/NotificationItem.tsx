import notificationImage from "../../assets/img/notification-img.png";
import React from "react";

export const NotificationItem = (props: {
    title: string,
    description: string,
}) => {
    return (
        <div style={{width: '300px', display: "flex"}}>
            <div>
                <img src={notificationImage}/>
            </div>
            <div style={{marginLeft: '15px'}}>
                <div style={{fontWeight: 'bold'}}>
                    {props.title}
                </div>
                <div>
                    {props.description}
                </div>
            </div>
        </div>
    )
}
