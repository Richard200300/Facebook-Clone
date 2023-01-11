import React from "react";

const Story = ({mainuserimage}) => {
    const [cstory, setStory] = React.useState(true)
    function activeStory () {
        let active = document.querySelector(".btn-stories")
        let activeReels = document.querySelector(".btn-Reels")
        let activeRooms = document.querySelector(".btn-Rooms")
        active.classList.add("activeStory")
        activeReels.classList.remove("activeStory")
        activeRooms.classList.remove("activeStory")
    }
    function activeReels() {
        let active = document.querySelector(".btn-Reels")
        let activeStories = document.querySelector(".btn-stories")
        let activeRooms = document.querySelector(".btn-Rooms")
        activeStories.classList.remove("activeStory")
        active.classList.add("activeStory")
        activeRooms.classList.remove("activeStory")
    }
    function activeRooms() {
        let active = document.querySelector(".btn-Rooms")
        let activeStories = document.querySelector(".btn-stories")
        let activeReels = document.querySelector(".btn-Reels")
        activeReels.classList.remove("activeStory")
        activeStories.classList.remove("activeStory")
        active.classList.add("activeStory")
    }
    function check() {
        let active = document.querySelector(".btn-stories")
        active.classList.add("activeStory")

    }
    return (
        <div onLoad={check}>
            <div className="FB-story-main-section">
                <div className="FB-story-section">
                    <button className="btn-stories " onClick={activeStory}>Stories</button>
                    <button className="btn-Reels" onClick={activeReels}>Reels</button>
                    <button className="btn-Rooms" onClick={activeRooms}>Rooms</button>

                </div>
                <div className="FB-story-mini-section">
                    <div className="main-FB-story-img-container">
                    <img src={mainuserimage} className="main-FB-story-img" alt={mainuserimage}/>
                    <div className="FB-add-story-icon">+</div>
                    <p className="FB-add-story-text">Create story</p>
                    </div>
                
                 { cstory && <img src="Oppai.JPG" className="FB-story-img" alt="opaai"/>}
                 
                </div>
                
            </div>
            
           
        </div>
    )
}

export default Story;