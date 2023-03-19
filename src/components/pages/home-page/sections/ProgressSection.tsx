import {PieChart} from "react-minimal-pie-chart";
import {Badge, Col, Row} from "antd";
import {ProgressBox} from "../../../atoms/ProgressBox";
import React from "react";
import './Sections.css'

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
                <div className="progressDiv">
                    <p className="progressOverviewText">
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
                    <div className="progressOverViewHours">
                        <div style={{width: "200px", paddingLeft: '20px', paddingTop: '20px'}}>
                            <Badge count={1}
                                   style={{
                                       backgroundColor: 'yellow',
                                       color: 'yellow',
                                       borderRadius: 10,
                                   }}/>
                            <span style={{paddingLeft: '20px', color: 'white'}}>Completed</span>
                            <div className="progressHoursText">
                                20 Hours
                            </div>
                        </div>
                        <hr/>

                        <div style={{width: "200px", paddingLeft: '20px', paddingTop: '20px'}}>
                            <Badge count={1}
                                   style={{
                                       backgroundColor: 'orange',
                                       color: 'orange',
                                       borderRadius: 10
                                   }}/>
                            <span style={{paddingLeft: '20px', color: 'white'}}>Left to Go</span>
                            <div className="progressHoursText">
                                30 Hours
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
                <div style={{width: '63%'}}>
                    <div className="progressSecondDiv">
                        Progress
                        <hr className="progressHr"/>
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
                    <div className="confirmAccountDetailsDiv">
                            <span className="confirmAccountDetailsDivText1">
                                Confirm your account details.
                                <span className="confirmAccountDetailsDivText2">
                                    Please confirm your email and phone number. 😢
                                </span>
                            </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
