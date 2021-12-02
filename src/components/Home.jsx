import React from 'react'
import Cards from './Cards'
import { useState } from 'react'

export default function Home() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false);

    const getCards = async (SearchString) => {
        
        //checking if input is empty
        if(SearchString===""){
            alert("The search input is empty")
            return
        }

        setLoading(true) // activate the Loading function "loading....."
        //API CALL
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${SearchString}&key=AIzaSyArGKeR8EKzonMfQeaTmPtstbdSthLGnjA`)
        console.log("response: ", response)
        setData(await response.json());

        setLoading(false) // shutting down the Loading function
        
        console.log("data after search: ",data)
    }

    //loading message til data coming from youtube
    const Loading = () => {
        return (<>
            Getting result form youtube...
        </>)
    }
    console.log(data)

    return (
        <div className="container" >
            <div>
                {/* Search/navber  */}
                <nav className="navbar navbar-light bg-light shadow-sm">
                    <div className="container">
                        <form className="d-flex offset-3">
                            <input className="form-control me-2 col-6" type="search" onChange={e => setSearch(e.target.value)} placeholder="Search something..." />
                            <button className="btn btn-outline-dark" type="button" onClick={()=>getCards(search)}>Search</button>
                        </form>
                    </div>
                </nav>
            </div>

            {/* Loading/cards spot - ckecking if there is any data to display */}
            <div className=" justify-content-center container offset-3 py-5 cards">
                {data.length===0 ? "Please search somthing in input above!": loading ? <Loading /> : <Cards data={data} />}
            </div>
        </div>
    )
}
