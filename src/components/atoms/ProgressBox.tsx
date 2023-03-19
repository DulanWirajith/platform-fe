import React from "react";

export const ProgressBox = (props: {
    description: string,
    count: number,
}) => {
    return (
        <div style={{
            width: '100%',
            display: "flex",
            marginBottom: '10px',
            backgroundColor: "white",
            padding: '20px',
            borderRadius: 10,
        }}>

            <div style={{
                marginLeft: '20px',
                marginTop: '25px',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <div style={{
                    fontWeight: '900',
                    fontFamily: 'Gotham',
                    color: "#9D9BB6",
                    fontSize: "20px",
                }}>
                    {props.description}
                </div>
            </div>
            <div style={{
                fontWeight: '900',
                fontFamily: 'Gotham',
                color: "black",
                fontSize: "40px",
                width: '50px',
                display: 'flex',

            }}>
                {props.count}
            </div>
        </div>
    )
}
