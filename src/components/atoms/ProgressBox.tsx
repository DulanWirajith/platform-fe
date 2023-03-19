import React from "react";

export const ProgressBox = (props: {
    description: string,
    count: number,
    isSelected: boolean,
}) => {
    return (
        <div style={{
            width: '100%',
            display: "flex",
            marginBottom: '10px',
            ...(props.isSelected ? {
                backgroundColor: '#1884FF',
                boxShadow: '1px 2px 9px #1884FF',
            } : {backgroundColor: "white"}),
            padding: '20px',
            borderRadius: 10,

        }}>

            <div style={{
                marginLeft: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                <div style={{
                    fontWeight: '900',
                    fontFamily: 'Gotham',
                    ...(props.isSelected ? {color: 'white'} : {color: "#9D9BB6"}),
                    fontSize: "20px",
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    {props.description}
                </div>
            </div>
            <div style={{
                fontWeight: '900',
                fontFamily: 'Gotham',
                ...(props.isSelected ? {color: 'white'} : {color: "black"}),
                fontSize: "40px",
                width: '50px',
                display: 'flex',
            }}>
                {props.count}
            </div>
        </div>
    )
}
