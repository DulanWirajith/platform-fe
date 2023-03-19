import {Button} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import {ActivityItem} from "../../../atoms/ActivityItem";
import React from "react";
import './Sections.css'

export const ActivitySection = () => {
    const activities = [
        {
            id: "1",
            description: "You have new 5 followers including Kathryn Crawford and Piper Shaw"
        },
        {
            id: "2",
            description: "3 new events were added to your calendar"
        },
        {
            id: "3",
            description: "You have 3 pending readings to complete 🤓"
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
