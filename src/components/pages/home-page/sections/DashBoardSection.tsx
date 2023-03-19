import {Card} from "antd";
import englishIcon from "../../../../assets/img/english-icon.png";
import welcomeBanner from "../../../../assets/img/welcome-banner.png";
import welcomeBannerMan from "../../../../assets/img/welcome-banner-man.png";
import React from "react";

export const DashBoardSection = () => {
    return (
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
    )
}
