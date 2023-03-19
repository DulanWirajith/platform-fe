import {Button, Tag} from "antd";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";
import {EventsItem} from "../../../atoms/EventsItem";
import React from "react";
import './Sections.css'


export const EventsSection = () => {
    const events = [
        {
            id: "1",
            time: "10:00 AM",
            title: "This is a event"
        },
        {
            id: "2",
            time: "11:00 AM",
            title: "This is a event"
        },
    ]
    return (
        <section>
            <div>
                <p className="headerTitle">
                    Events
                </p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                <div className="eventsBannerDiv">
                    <div className='eventTagDiv'>
                        <Tag color="#3D84FF" style={{borderRadius: 10}}>SCIENCE</Tag>
                    </div>
                    <div className="eventsBannerText">
                        <div style={{display: "flex"}}>
                            <Button className="eventsBannerButton">
                                <ArrowLeftOutlined/>
                            </Button>
                            <div className={"eventsBannerBackText"}>
                                Youth Talent & <br/>Education
                            </div>
                        </div>
                        <div style={{display: "flex"}}>
                            <div className={"eventsBannerNextText"}>
                                May, 20
                            </div>
                            <Button className="eventsBannerButton">
                                <ArrowRightOutlined/>
                            </Button>
                        </div>
                    </div>
                </div>
                <div style={{width: '33%', height: '200px',}}>
                    <div className="eventsTodayText">
                        Events Today
                        <hr className="eventsHr"/>
                    </div>
                    {
                        events.map((event: any) => {
                            return (
                                <EventsItem time={event.time} title={event.title}/>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )

}
