import React, { useEffect } from 'react'

const Navbar = ({ color }) => {
    // Case 1:
    useEffect(() => {
        alert("Hey I will run on every render")
    })

    // Case 2:
    useEffect(() => {
        alert("Hey welcome to my page. This is the first render")
    }, [])

    // Case 3:
    useEffect(() => {
        alert("Hey I am running because Color Was changed")
    }, [color])

    // Example of cleanup function 
    useEffect(()=>{
        alert("Hey welcome to my page. This is the first render of app.jsx")
        return ()=>{
            alert("Component was unmounted")
        }
    }, [])

    return (
        <div>
            I am navbar of {color} color hehe..
        </div>
    )
}

export default Navbar
