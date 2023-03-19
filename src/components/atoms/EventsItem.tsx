import eventsImage from "../../assets/img/events-img.png";
import React from "react";

export const EventsItem = (props: {
    title: string,
    time: string,
}) => {
    return (
        <div style={{
            width: '100%',
            display: "flex",
            marginBottom: '10px',
            backgroundColor: "white",
            padding: '20px',
            borderRadius: 10,
            cursor: 'pointer'
        }}>
            <div>
                <img src={eventsImage} height={70}/>
            </div>
            <div style={{marginLeft: '15px', marginTop: '10px'}}>
                <div style={{
                    fontWeight: '900',
                    fontFamily: 'Gotham',
                    color: "#9D9BB6",
                    fontSize: "20px",
                }}>
                    {props.time}
                </div>
                <div style={{
                    fontWeight: '900',
                    fontFamily: 'Gotham',
                    color: "black",
                    fontSize: "20px",
                }}>
                    {props.title}
                </div>
            </div>
        </div>
    )
}
