import React from "react"
// import { Link } from "react-router-dom"


const Navbar = ({mainuserimage}) => {
    function clicky() {
        let show = document.querySelector('.FB-messanger-text')
        show.classList.add("active")
    }
    function removeClicky() {
        let hide = document.querySelector('.FB-messanger-text')
        hide.classList.remove("active")
    }
    function nClicky() {
        let show = document.querySelector('.FB-notification-text')
        show.classList.add("active")

    }
    function nRemoveClicky() {
        let hide = document.querySelector('.FB-notification-text')
        hide.classList.remove("active")
    }
    function pClicky() {
        let show = document.querySelector('.FB-profile-text')
        show.classList.add("active")

    }
    function pRemoveClicky() {
        let hide = document.querySelector('.FB-profile-text')
        hide.classList.remove("active")
    }


    return (

        <section>
            <nav className="navbar" >
                <h2 className="FB-logo">Facebook</h2>
                <label>
                    <input type="text" placeholder="Search Facebook" className="FB-main-search" />
                </label>

                <div className="FB-nav-icons">
                    <div className="FB-messanger" onMouseOver={clicky} onMouseLeave={removeClicky}>

                        <div className="FB-messanger-text" >Messenger</div>

                    </div>
                    <div className="FB-notification" onMouseOver={nClicky} onMouseLeave={nRemoveClicky}>
                        <div className="FB-notification-text" >Notification</div>
                    </div>
                    <div className="FB-Profile" onMouseOver={pClicky} onMouseLeave={pRemoveClicky}>
                        <img src={mainuserimage} className="FB-profile-img" alt={mainuserimage} />
                        <div className="FB-profile-text" >Account</div>
                      
                    </div>
                </div>
            </nav>
        </section>
    )
}
export default Navbar;



