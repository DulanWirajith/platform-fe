import eventsBanner from "../../../../assets/img/events-banner.png";
import {Button, Tag} from "antd";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@ant-design/icons";
import {EventsItem} from "../../../atoms/EventsItem";
import React from "react";

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
                <p style={{fontSize: "xx-large", fontWeight: '900', fontFamily: 'Gotham'}}>
                    Events
                </p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                <div style={{
                    width: '65%',
                    borderRadius: 20,
                    height: '300px',
                    backgroundImage: `url(${eventsBanner})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div style={{position: "relative", top: '20px', left: '90%'}}>
                        <Tag color="#3D84FF" style={{borderRadius: 10}}>SCIENCE</Tag>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '5%',
                        padding: '30px'
                    }}>
                        <div style={{display: "flex"}}>
                            <Button style={{
                                backgroundColor: "white",
                                height: '40px',
                                paddingTop: '10px',
                                margin: 'auto',
                                width: '50px',
                                display: "flex",
                            }}>
                                <ArrowLeftOutlined/>
                            </Button>
                            <div style={{
                                fontSize: "40px",
                                fontWeight: '900',
                                fontFamily: 'Gotham',
                                marginLeft: '20px',
                                color: "white"
                            }}>
                                Youth Talent & <br/>Education
                            </div>
                        </div>
                        <div style={{display: "flex"}}>
                            <div style={{
                                fontSize: "40px",
                                fontWeight: '900',
                                fontFamily: 'Gotham',
                                marginRight: '20px',
                                color: "white"
                            }}>
                                May, 20
                            </div>
                            <Button style={{
                                backgroundColor: "white",
                                height: '40px',
                                paddingTop: '10px',
                                margin: 'auto',
                                width: '50px',
                                display: "flex",
                            }}>
                                <ArrowRightOutlined/>
                            </Button>
                        </div>
                    </div>

                </div>
                <div style={{width: '33%', height: '200px',}}>
                    <div style={{
                        display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: "25px",
                        fontWeight: '900',
                        fontFamily: 'Gotham',
                        color: "#9D9BB6"
                    }}>
                        Events Today
                        <hr style={{width: "60%", color: '#9D9BB6', height: '2px', border: '1px solid #9D9BB6'}}/>
                    </div>
                    {
                        events.map((event: any) => {
                            return (
                                <EventsItem time={event.time}
                                            title={event.title}/>
                            );

                        })
                    }
                </div>
            </div>
        </section>
    )

}
