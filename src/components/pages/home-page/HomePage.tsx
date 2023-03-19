import React from "react";
import {DashBoardSection} from "./sections/DashBoardSection";
import {EventsSection} from "./sections/EventsSection";
import {ActivitySection} from "./sections/ActivitySection";
import {ProgressSection} from "./sections/ProgressSection";


export const HomePage = () => {
    return (
        <>
            <DashBoardSection/>
            <EventsSection/>
            <ActivitySection/>
            <ProgressSection/>
        </>
    );

}
