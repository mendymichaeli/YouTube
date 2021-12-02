import React from 'react'
import Card from './Card'


//get the data and Map it to cards (to the card component)
export default function Cards(data) {
    console.log("items: ", data.data.items)

    const newData = data.data.items
    return (
        <div>
            
            {
                newData.map((cardData) => {
                    return <Card cardData={cardData} key={cardData.id.videoId} />
                })
            }
        </div>
    )
}
