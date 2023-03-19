import followersImage from "../../assets/img/followers-icon.png";
import React from "react";
import {CaretRightOutlined} from "@ant-design/icons";

export const ActivityItem = (props: {
    description: string,
}) => {
    return (
        <div style={{
            width: '100%',
            display: "flex",
            marginBottom: '10px',
            backgroundColor: "white",
            padding: '20px',
            borderRadius: 10,
            cursor: 'pointer'
        }}>
            <div>
                <img src={followersImage} height={70}/>
            </div>
            <div style={{
                marginLeft: '20px',
                marginTop: '25px',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <div style={{
                    fontWeight: '900',
                    fontFamily: 'Gotham',
                    color: "#9D9BB6",
                    fontSize: "20px",
                }}>
                    {props.description}
                </div>
                <div>
                    <CaretRightOutlined/>
                </div>
            </div>
        </div>
    )
}
