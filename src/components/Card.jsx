import React from 'react'

export default function Card({ cardData }) {
    console.log("cardData: ", cardData)


    //open the selected video in a new tab 
    const openNewTab = () => {
        window.open("https://www.youtube.com/watch?v=" + cardData.id.videoId)
    }

console.log("height: ",cardData.snippet.thumbnails.high.height)
    return (
        <div className="card mb-3 videoCard"  onClick={() => openNewTab()} >
            <div className="row g-0">
                <div className="col-6 imageThumbnail">
                    <img src={cardData.snippet.thumbnails.high.url} style={{height:`${cardData.snippet.thumbnails.high.height==='undefined'?"275":cardData.snippet.thumbnails.high.height}px;`}} className="img-thumbnail rounded-start" alt={cardData.snippet.title} />
                </div>
                <div className="col-6 details" >
                    <div className="card-body" style={{height:`${cardData.snippet.thumbnails.high.height}px;`}}>
                        <h5 className="card-title">{cardData.snippet.title}</h5>
                        <p className="card-text lead channelTitle">{cardData.snippet.channelTitle}</p>
                        <p className="card-text description">{cardData.snippet.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
