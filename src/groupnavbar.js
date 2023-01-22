import React from "react"



const Gnavbar = () => {
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
                <div className="flex">
                <h2 className="FB-logo">facebook</h2>
                <p>ICon</p>
                    
                </div>
             
              

                <div className="FB-nav-icons">
                    <div className="FB-messanger" onMouseOver={clicky} onMouseLeave={removeClicky}>

                        <div className="FB-messanger-text" >Messenger</div>

                    </div>
                    <div className="FB-notification" onMouseOver={nClicky} onMouseLeave={nRemoveClicky}>
                        <div className="FB-notification-text" >Notification</div>
                    </div>
                    <div className="FB-Profile" onMouseOver={pClicky} onMouseLeave={pRemoveClicky}>
                        <img src="Dabi.JPG" className="FB-profile-img" alt="dabi" />
                        <div className="FB-profile-text" >Account</div>
                      
                    </div>
                </div>
            </nav>
        </section>
    )
}
export default Gnavbar;



