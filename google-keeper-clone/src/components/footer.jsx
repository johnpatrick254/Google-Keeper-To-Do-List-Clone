import React from "react"

const date = new Date()
let currentYear = date.getFullYear()
 function footer(){
    return <footer className="footer">
    <p>copyright {currentYear}</p>
    </footer>
}
export default footer