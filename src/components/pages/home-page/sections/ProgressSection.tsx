import {PieChart} from "react-minimal-pie-chart";
import {Badge, Col, Row} from "antd";
import {ProgressBox} from "../../../atoms/ProgressBox";
import confirmAccountDetails from "../../../../assets/img/confirm-account-details-img.png";
import React from "react";

export const ProgressSection = () => {

    const progresses = [
        {
            id: "1",
            description: "Total Webinars",
            count: 9,
            isSelected: false
        },
        {
            id: "2",
            description: "Pending Assignments",
            count: 0,
            isSelected: false
        },
        {
            id: "3",
            description: "Total Units",
            count: 5,
            isSelected: false
        },
        {
            id: "4",
            description: "Total Readings",
            count: 14,
            isSelected: false
        },
        {
            id: "5",
            description: "Total Videos",
            count: 5,
            isSelected: true
        },
    ]

    return (
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
                                        <ProgressBox description={progress.description} count={progress.count}
                                                     isSelected={progress.isSelected}/>
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
                        marginTop: '20px',
                        paddingLeft: '70px',
                        display: 'flex',
                        alignItems: 'center',
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
    )
}
