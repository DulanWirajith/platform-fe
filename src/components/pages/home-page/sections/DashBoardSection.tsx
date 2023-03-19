import {Card} from "antd";
import englishIcon from "../../../../assets/img/english-icon.png";
import welcomeBannerMan from "../../../../assets/img/welcome-banner-man.png";
import React from "react";
import './Sections.css'

export const DashBoardSection = () => {
    return (
        <section>
            <div className="divStyleFlex">
                <div>
                    <p className="headerTitle">
                        Dashboard
                    </p>
                </div>
                <div>
                    <Card style={{backgroundColor: "white"}}>
                        <span className="spanDashboard">
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
            <div className="welcomeBannerDiv">
                <div style={{display: "flex",}}>
                    <div style={{position: 'relative', top: '-60px'}}>
                        <img src={welcomeBannerMan} style={{height: "260px"}}/>
                    </div>
                    <div style={{height: '200px', marginTop: '60px', marginLeft: "40px"}}>
                        <div style={{margin: "auto",}}>
                            <span className="welcomeBannerText">
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
    )
}
