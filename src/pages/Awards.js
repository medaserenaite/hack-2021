import React from 'react'
import awards from '../model/awards.json'
import AwardCard from '../components/AwardCard'

export default function Awards() {
    return (
        <div>
            {/* {awards
            .sort(() => Math.random() - 0.5).map((element) => {
                return (
                    <div
                        className="image image-blank"
                        name={element.name}
                    />
                    <Task />
                );
            })} */}
            <AwardCard />
            <AwardCard />
            <AwardCard />
        </div>
    )
}
