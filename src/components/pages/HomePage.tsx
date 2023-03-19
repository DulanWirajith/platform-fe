import React from "react";
import {Badge, Button, Card, Col, Row, Tag} from "antd";
import englishIcon from "./../../assets/img/english-icon.png";
import welcomeBanner from "./../../assets/img/welcome-banner.png";
import eventsBanner from "./../../assets/img/events-banner.png";
import welcomeBannerMan from "./../../assets/img/welcome-banner-man.png";
import confirmAccountDetails from "./../../assets/img/confirm-account-details-img.png";
import {ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons';
import {EventsItem} from "../atoms/EventsItem";
import {ActivityItem} from "../atoms/ActivityItem";
import {PieChart} from "react-minimal-pie-chart";
import {ProgressBox} from "../atoms/ProgressBox";


export const HomePage = () => {

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
    const activities = [
        {
            id: "1",
            description: "This is a activity"
        },
        {
            id: "2",
            description: "This is a activity"
        },
    ]
    const progresses = [
        {
            id: "1",
            description: "Total Webinars",
            count: 9
        },
        {
            id: "2",
            description: "Pending Assignments",
            count: 0
        },
        {
            id: "3",
            description: "Total Units",
            count: 5
        },
        {
            id: "4",
            description: "Total Readings",
            count: 14
        },
        {
            id: "5",
            description: "Total Videos",
            count: 5
        },
    ]


    return (
        <>
            <section>
                <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                    <div>
                        <p style={{fontSize: "xx-large", fontWeight: '900', fontFamily: 'Gotham'}}>
                            Dashboard
                        </p>
                    </div>
                    <div>
                        <Card style={{backgroundColor: "white"}}>
                        <span style={{
                            fontSize: "15px",
                            fontWeight: '900',
                            fontFamily: 'Gilroy',
                            color: "#9D9BB6"
                        }}>
                            Currently Learning
                        </span>

                            <div style={{display: 'flex', justifyContent: "space-between", marginTop: '5px'}}>
                            <span>
                                <img src={englishIcon} height={'30px'}/>
                            </span>
                                <span style={{fontSize: "25px", fontWeight: '900', fontFamily: 'Gilroy'}}>
                                 English
                            </span>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* welcome banner*/}
                <div style={{
                    marginTop: '20px',
                    backgroundImage: `url(${welcomeBanner})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '200px',
                    height: '200px',
                    borderRadius: 15
                }}>
                    <div style={{display: "flex",}}>
                        <div style={{position: 'relative', top: '-60px'}}>
                            <img src={welcomeBannerMan} style={{height: "260px"}}/>
                        </div>
                        <div style={{height: '200px', marginTop: '60px', marginLeft: "40px"}}>
                            <div style={{margin: "auto",}}>
                        <span style={{
                            fontSize: "xx-large",
                            fontFamily: 'Gilroy',
                            color: "white",
                            fontWeight: '600',
                            margin: "auto"
                        }
                        }>
                            Welcome Back, Clarence <br/>
                            <span style={{color: "white", fontSize: 'x-large', fontWeight: '300'}}>
                                Ta-da! You’re up to date. 🥳
                            </span>
                        </span>

                            </div>
                        </div>

                    </div>
                </div>

            </section>

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

            <br/>
            <section>
                <div>
                    <div style={{
                        display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: "xx-large",
                        fontWeight: '900',
                        fontFamily: 'Gotham',
                    }}>
                        Activity
                        <hr style={{width: "85%", color: '#9D9BB6', height: '2px', border: '1px solid #9D9BB6'}}/>
                        <Button style={{
                            backgroundColor: "#9D9BB6",
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

            <section>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '40px'}}>
                    <div style={{
                        width: '35%',
                        backgroundColor: '#1A2D7D',
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: "center",
                        borderRadius: 10,
                    }}>
                        <p style={{
                            fontSize: "xx-large",
                            color: "white",
                            alignItems: 'center',
                        }}>
                            Progress Overview
                        </p>
                        <div>
                            <PieChart
                                data={[{title: 'Completed', value: 60, color: 'yellow'},
                                    {title: 'Left to go', value: 40, color: 'orange'},]}
                                lineWidth={20}
                                style={{height: '200px'}}
                            />
                        </div>
                        <br/>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            height: '100px',
                            borderRadius: 10
                        }}>
                            <div style={{width: "200px", paddingLeft: '20px', paddingTop: '20px'}}>
                                <Badge count={1}
                                       style={{
                                           backgroundColor: 'yellow',
                                           color: 'yellow',
                                           borderRadius: 10,

                                       }}/>
                                <span style={{paddingLeft: '20px', color: 'white'}}>Completed</span>
                                <div style={{
                                    fontSize: "30px",
                                    fontWeight: '900',
                                    fontFamily: 'Gotham',
                                    marginLeft: '20px',
                                    color: "white",
                                    marginTop: '10px'
                                }}>
                                    20 Hours
                                </div>
                            </div>
                            <hr/>

                            <div style={{width: "200px", paddingLeft: '20px', paddingTop: '20px'}}>
                                <Badge count={1}
                                       style={{backgroundColor: 'orange', color: 'orange', borderRadius: 10}}/>
                                <span style={{paddingLeft: '20px', color: 'white'}}>Left to Go</span>
                                <div style={{
                                    fontSize: "30px",
                                    fontWeight: '900',
                                    fontFamily: 'Gotham',
                                    marginLeft: '20px',
                                    color: "white",
                                    marginTop: '10px'
                                }}>
                                    30 Hours
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                    <div style={{width: '63%'}}>
                        <div style={{
                            display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: "xx-large",
                            fontWeight: '900',
                            fontFamily: 'Gotham',
                        }}>
                            Progress
                            <hr style={{width: "80%", color: '#9D9BB6', height: '2px', border: '1px solid #9D9BB6'}}/>
                        </div>
                        <br/>
                        <Row gutter={16}>
                            {
                                progresses.map((progress: any) => {
                                    return (
                                        <Col span={8} style={{display: 'flex'}}>
                                            <ProgressBox description={progress.description} count={progress.count}/>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                        <div style={{
                            borderRadius: 20,
                            height: '100px',
                            backgroundImage: `url(${confirmAccountDetails})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            alignItems: 'center',
                            marginTop: '20px',
                            paddingTop: '35px',
                            paddingLeft: '70px',
                        }}>
                            <span style={{color: "white", fontSize: 'x-large', fontWeight: '700',}}>
                                Confirm your account details.
                                <span style={{
                                    color: "white",
                                    fontSize: 'x-large',
                                    fontWeight: '300',
                                    textAlign: 'center'
                                }}>
                                    Please confirm your email and phone number. 😢
                                </span>
                            </span>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );

}
