import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";

const Content = () => {
    return (
        <>
            <div className='px-12 mt-10'>
                <Sidebar />
                <div className="pl-72 grid grid-cols-4 gap-y-6">
                    <Card name={"League of Legends"} price={34} />
                    <Card name={"League of Legends"} price={34} />
                    <Card name={"League of Legends"} price={34} />
                    <Card name={"League of Legends"} price={34} />
                    <Card name={"League of Legends"} price={34} />
                    <Card name={"League of Legends"} price={34} />
                    <Card name={"League of Legends"} price={34} />
                    <Card name={"League of Legends"} price={34} />
                </div>
            </div>
        </>
    )
}

export default Content;