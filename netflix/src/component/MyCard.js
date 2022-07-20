import React from 'react'
// import bootstrap from 'bootstrap'
import "./style.css"
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const MyCard = () => {
    // const [num, setnum] = useState(0)
    const [allUsers, setallUser] = useState([])
    const [error, seterror] = useState([])
    const url = "https://imdb-api.com/en/API/Top250Movies/k_hc7xlt0w"
    const [isloading, setisloading] = useState(true)
    useEffect(() => {
        console.log(`yooooooo`)
        makeRequest()
    }, [])
    const makeRequest = () => {
        axios.get(url).then((res) => {
            if (res.status == 200) {
                console.log(res.data.items)
                setallUser(res.data.items)
                setisloading(false)
            }
            else {
                console.log(`an error occured`)
            }
        }).catch((err) => {
            seterror(err);
        })
    }

    return (
        <>
                       {isloading ? <div>is loading...</div> :
                            allUsers.map((user) => (
                                <div key={user.id}>
                                    <div className="card m-2">
                                        <img src={user.image} className='card-img-top h-50' alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{user.title}</h5>
                                        </div>
                                    </div>
                                    
                                </div>

                            ))
                        }
        </>
    )
}

export default MyCard