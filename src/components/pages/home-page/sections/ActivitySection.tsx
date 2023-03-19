import {Button} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import {ActivityItem} from "../../../atoms/ActivityItem";
import React from "react";

export const ActivitySection = () => {
    const activities = [
        {
            id: "1",
            description: "This is a activity 01"
        },
        {
            id: "2",
            description: "This is a activity 02"
        },
        {
            id: "3",
            description: "This is a activity 03"
        },
    ]
    return (
        <section>
            <div>
                <div style={{
                    display: 'flex', justifyContent: 'space-between', marginTop: '40px', fontSize: "xx-large",
                    fontWeight: '900',
                    fontFamily: 'Gotham',
                    marginBottom: '30px'
                }}>
                    Activity
                    <hr style={{width: "85%", color: '#9D9BB6', height: '2px', border: '1px solid #9D9BB6'}}/>
                    <Button style={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        height: '40px',
                        paddingTop: '10px',
                        margin: 'auto',
                        width: '50px',
                        display: "flex",
                    }}>
                        <ArrowRightOutlined/>
                    </Button>
                </div>
                {
                    activities.map((activity: any) => {
                        return (
                            <ActivityItem description={activity.description}/>
                        );

                    })
                }
            </div>
        </section>
    )
}
