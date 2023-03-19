import {Button} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import {ActivityItem} from "../../../atoms/ActivityItem";
import React from "react";
import './Sections.css'

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
                <div className="headerTitle">
                    Activity
                    <hr className="activityHr"/>
                    <Button className="buttonStyle">
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
