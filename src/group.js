import React from "react"
import List from "./List";
import Alert from "./alert";


const Group = () => {
    const [follow, setFollow] = React.useState(false)
    function checkfolow() {
        setFollow(prevFollow => !prevFollow)
    }

    const [like, setLike] = React.useState(false)

    function add() {
        setLike(prevLike => !prevLike)
    }
    const style1 = {

        height: "85px",
        overFlow: "hidden",

    }
    const style2 = {
        backgroundColor: "transparent",
    }

    const [comment, setComment] = React.useState("")
    const [list, setList] = React.useState([])
    const [isEditing, setIsEditing] = React.useState(false)
    const [editID, setEditID] = React.useState(null)
    const [alert, setAlert] = React.useState({ show: false, msg: '', type: '' })
    function handleSubmit(e) {
        e.preventDefault()
        if (!comment) {
            // display alert
        } else if (comment && isEditing) {
            setList(list.map((item) => {
                if (item.id === editID) {
                    return { ...item, title: comment }
                }
                return item
            }))
            setComment('')
            setEditID(null)
            setIsEditing(false)
        } else {
            // show alert
            const newItem = {
                id: new Date().getTime().toString(),
                title: comment
            };
            setList([...list, newItem])
            setComment('')
        }
    }
    const removeItem = (id) => {
        setList(list.filter((item) => item.id !== id))
    }
    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id);
        setIsEditing(true)
        setEditID(id)
        setComment(specificItem.title)
    }

    // React.useEffect(()=> {
    //     localStorage.setItem('list',JSON.stringify('list'))
    // }, [list])
    const [showc, setShowc] = React.useState(style1)

    function showRemaingComments() {
        setShowc(
            {
                height: "unset",
                overFlow: "hidden",
            }
        )
    }
    function reduceComments() {
        setShowc(
            {
                height: "85px",
                overFlow: "hidden",
            }
        )
    }


    function activeStory() {
        let active = document.querySelector(".btn-storie")
        let activeReels = document.querySelector(".btn-Reel")
        let activeRooms = document.querySelector(".btn-Room")
        active.classList.add("activeSt")
        activeReels.classList.remove("activeSt")
        activeRooms.classList.remove("activeSt")
    }
    function activeReels() {
        let active = document.querySelector(".btn-Reel")
        let activeStories = document.querySelector(".btn-storie")
        let activeRooms = document.querySelector(".btn-Room")
        activeStories.classList.remove("activeSt")
        active.classList.add("activeSt")
        activeRooms.classList.remove("activeSt")
    }
    function activeRooms() {
        let active = document.querySelector(".btn-Room")
        let activeStories = document.querySelector(".btn-storie")
        let activeReels = document.querySelector(".btn-Reel")
        activeReels.classList.remove("activeSt")
        activeStories.classList.remove("activeSt")
        active.classList.add("activeSt")
    }
    function check() {
        let active = document.querySelector(".btn-storie")
        active.classList.add("activeSt")

    }

    function discussion() {
        let discussion = document.querySelector(".discussion")
        let featured = document.querySelector(".featured")
        let people = document.querySelector(".people")
        let media = document.querySelector(".media")
        let file = document.querySelector(".file")
        let reels = document.querySelector(".reels")
        discussion.classList.add("activeStory")
        featured.classList.remove("activeStory")
        people.classList.remove("activeStory")
        media.classList.remove("activeStory")
        file.classList.remove("activeStory")
        reels.classList.remove("activeStory")

    }
    function featured() {
        let discussion = document.querySelector(".discussion")
        let featured = document.querySelector(".featured")
        let people = document.querySelector(".people")
        let media = document.querySelector(".media")
        let file = document.querySelector(".file")
        let reels = document.querySelector(".reels")
        featured.classList.add("activeStory")
        discussion.classList.remove("activeStory")
        people.classList.remove("activeStory")
        media.classList.remove("activeStory")
        file.classList.remove("activeStory")
        reels.classList.remove("activeStory")
    }
    function people() {
        let discussion = document.querySelector(".discussion")
        let featured = document.querySelector(".featured")
        let people = document.querySelector(".people")
        let media = document.querySelector(".media")
        let file = document.querySelector(".file")
        let reels = document.querySelector(".reels")
        people.classList.add("activeStory")
        featured.classList.remove("activeStory")
        discussion.classList.remove("activeStory")
        media.classList.remove("activeStory")
        file.classList.remove("activeStory")
        reels.classList.remove("activeStory")
    }
    function media() {
        let discussion = document.querySelector(".discussion")
        let featured = document.querySelector(".featured")
        let people = document.querySelector(".people")
        let media = document.querySelector(".media")
        let file = document.querySelector(".file")
        let reels = document.querySelector(".reels")
        people.classList.remove("activeStory")
        featured.classList.remove("activeStory")
        discussion.classList.remove("activeStory")
        media.classList.add("activeStory")
        file.classList.remove("activeStory")
        reels.classList.remove("activeStory")
    }
    function file() {
        let discussion = document.querySelector(".discussion")
        let featured = document.querySelector(".featured")
        let people = document.querySelector(".people")
        let media = document.querySelector(".media")
        let file = document.querySelector(".file")
        let reels = document.querySelector(".reels")
        people.classList.remove("activeStory")
        featured.classList.remove("activeStory")
        discussion.classList.remove("activeStory")
        media.classList.remove("activeStory")
        file.classList.add("activeStory")
        reels.classList.remove("activeStory")
    }
    function reels() {
        let discussion = document.querySelector(".discussion")
        let featured = document.querySelector(".featured")
        let people = document.querySelector(".people")
        let media = document.querySelector(".media")
        let file = document.querySelector(".file")
        let reels = document.querySelector(".reels")
        people.classList.remove("activeStory")
        featured.classList.remove("activeStory")
        discussion.classList.remove("activeStory")
        media.classList.remove("activeStory")
        file.classList.remove("activeStory")
        reels.classList.add("activeStory")
    }
    function checkdiscussion() {
        let active = document.querySelector(".discussion")
        active.classList.add("activeStory")

    }
    function homeEnter() {
        let active = document.querySelector('.Home-hover')
        active.classList.add('block')
    }

    function homeLeave() {
        let active = document.querySelector('.Home-hover')
        active.classList.remove('block')
    }

    function homeEnte() {
        let active = document.querySelector('.profile-hover')
        active.classList.add('block')
    }

    function homeleav() {
        let active = document.querySelector('.profile-hover')
        active.classList.remove('block')
    }

    function homeEnt() {
        let active = document.querySelector('.friends-hover')
        active.classList.add('block')
    }

    function homelea() {
        let active = document.querySelector('.friends-hover')
        active.classList.remove('block')
    }

    function homeEn() {
        let active = document.querySelector('.recent-hover')
        active.classList.add('block')
    }

    function homele() {
        let active = document.querySelector('.recent-hover')
        active.classList.remove('block')
    }

    function homeE() {
        let active = document.querySelector('.group-hover')
        active.classList.add('block')
    }

    function homel() {
        let active = document.querySelector('.group-hover')
        active.classList.remove('block')
    }
    function homeMe() {
        let active = document.querySelector('.market-hover')
        active.classList.add('block')
    }

    function homeMl() {
        let active = document.querySelector('.market-hover')
        active.classList.remove('block')
    }
    function homeWe() {
        let active = document.querySelector('.watch-hover')
        active.classList.add('block')
    }

    function homeWl() {
        let active = document.querySelector('.watch-hover')
        active.classList.remove('block')
    }
    function homeSe() {
        let active = document.querySelector('.see-hover')
        active.classList.add('block')
    }

    function homeSl() {
        let active = document.querySelector('.see-hover')
        active.classList.remove('block')
    }
    function homeSagm() {
        let active = document.querySelector('.sag-hover')
        active.classList.add('block')
    }

    function homeSagl() {
        let active = document.querySelector('.sag-hover')
        active.classList.remove('block')
    }
    function homeSasm() {
        let active = document.querySelector('.sas-hover')
        active.classList.add('block')
    }

    function homeSasl() {
        let active = document.querySelector('.sas-hover')
        active.classList.remove('block')
    }



    return (
        <>



            <section className="group-main-flex" onLoad={check}>
                <section className="group-fixed-bar" onLoad={checkdiscussion}>
                    <article className="group-fixed-flex">
                        <article className="group-fixed-bar-icons">
                            <ul>
                                <li onMouseEnter={homeEnter} onMouseLeave={homeLeave} >H</li><span className="Home-hover">Home</span>
                                <li onMouseEnter={homeEnte} onMouseLeave={homeleav} ><img src="Dabi.jpg" alt="dabi.jpg" className="comment-dp" /></li><span className="profile-hover">Your profile</span>
                            </ul>
                            <ul>
                                <li onMouseEnter={homeEnt} onMouseLeave={homelea} >f</li><span className="friends-hover">Friends</span>
                                <li onMouseEnter={homeEn} onMouseLeave={homele} >M</li><span className="recent-hover">Most recent</span>
                                <li onMouseEnter={homeE} onMouseLeave={homel} >G</li><span className="group-hover">Groups</span>
                                <li onMouseEnter={homeMe} onMouseLeave={homeMl}>M</li><span className="market-hover">Market Place</span>
                                <li onMouseEnter={homeWe} onMouseLeave={homeWl}>w</li><span className="watch-hover">Watch</span>
                                <li onMouseEnter={homeSe} onMouseLeave={homeSl}>S</li><span className="see-hover">See all</span>
                            </ul>
                            <ul>
                                <li><img src="Dabi.jpg" alt="dabi.jpg" className="comment-dp" /></li>
                                <li><img src="Dabi.jpg" alt="dabi.jpg" className="comment-dp" /></li>
                                <li><img src="Dabi.jpg" alt="dabi.jpg" className="comment-dp" /></li>
                                <li><img src="Dabi.jpg" alt="dabi.jpg" className="comment-dp" /></li>
                                <li onMouseEnter={homeSagm} onMouseLeave={homeSagl}>S</li><span className="sag-hover">See all groups</span>
                            </ul>
                            <ul>
                                <li onMouseEnter={homeSasm} onMouseLeave={homeSasl}>S</li><span className="sas-hover">See all shortcuts</span>
                            </ul>

                        </article>
                        <article>
                            <div className="group-flex-bar">
                                <img src="kaley112.jpg" alt="kaley112.jpg" className="body-post-dp" />

                                <div className="group-fixed-name-container">
                                    <h1 className="group-fixed-name">The Home of Kaley Cuoco fans</h1>
                                    <p>Public group . <span className="underline"> 6.3k folowing</span></p>
                                </div>
                            </div>
                            <div className="group-fixed-btn-flex">
                                <button onClick={checkfolow} className="follow-btn">{follow ? "Following" : "Follow"}</button>
                                <div className="info-balls-container group-radius">
                                    <div className="info-balls"></div>
                                    <div className="info-balls"></div>
                                    <div className="info-balls"></div>
                                </div>
                            </div>

                            <article>
                                <ul className="group-fixed-menu">
                                    <li className="group-fixed-list btn-storie" onClick={activeStory}>Community home</li>
                                    <li className="group-fixed-list btn-Reel" onClick={activeReels}>Rooms</li>
                                    <li className="group-fixed-list btn-Room" onClick={activeRooms}>Events</li>
                                </ul>
                            </article>
                        </article>
                    </article>
                </section>




                <section className="group-main-section">
                    <div className="group-main-container-dp">
                        <img src="Kaley112.jpg" alt="oppai" className="group-main-dp" />
                    </div>
                    <article className="group-main-section1">
                        <article className="group-main-flex-section1">
                            <a className="group-name" href="#">The Home of Kaley Cuoco Fans</a>
                            <div>
                                <button className="group-invite-btn" >+   Invite</button>
                            </div>
                        </article>

                        <article className="group-discussion-info">
                            <ul className="group-discussion-menu" >
                                <li className="group-discussion-list discussion" onClick={discussion}>Discussion</li>
                                <li className="group-discussion-list featured" onClick={featured}>Featured</li>
                                <li className="group-discussion-list people" onClick={people}>People</li>
                                <li className="group-discussion-list media" onClick={media}>Media</li>
                                <li className="group-discussion-list file" onClick={file}>File</li>
                                <li className="group-discussion-list reels" onClick={reels}>Reels</li>
                            </ul>

                            <div class="flex">
                                <div><p>icon</p></div>

                                <div className="group-balls-container">
                                    <div className="info-balls"></div>
                                    <div className="info-balls"></div>
                                    <div className="info-balls"></div>
                                </div>
                            </div>
                        </article>


                    </article>
                    <section className="group-container">
                        <section className="group-container1">
                            <section className="create-group-section">
                                <div className="create-group-flex">
                                    <img src="dabi.jpg" alt="dabi.jpg" className="pj-post-dp" />
                                    <input type="text" placeholder="write something...." className="create-group-input" />
                                </div>
                                <div className="post-grid">
                                    <button className="btn-liveVideo reduce-padding" >Reels</button>
                                    <button className="btn-photoVideo">Photo/Video</button>
                                    <button className="btn-feelingActivity">Room</button>

                                </div>
                            </section>
                            <div className="group-featured-container">
                                <section >
                                    <p className="group-featured-title">Featured</p>
                                    <a>1 new pin</a>
                                    <div className="group-featured-box">
                                        <div className="group-featured-flex">
                                            <img src="dabi.jpg" alt="dabi.jpg" className="pj-post-dp" />
                                            <div>
                                                <p>Hollywiid Diva & Hottest Queens</p>
                                                <a>3 january at 13:01</a>

                                            </div>
                                        </div>
                                        <p>Do not chat or reply to anyone claming
                                            to be kaley cuoco<br />At your own risk if you are scammed!<br />
                                            Kaley Cuoco will never ask for money or Your details, BE AWARE</p>

                                    </div>
                                </section>
                            </div>
                            <section className="post-group-container">
                                <section className="post-group-container1">
                                    <article className="body-post-main-flex">
                                        <div className="pj-post-main-flex1">
                                            <img src="dabi.jpg" alt="dabi" className="pj-post-dp" />
                                            <div>
                                                <h2 className="group-username underline">Itz Sweg OG</h2>
                                                <p className="group-username-location">3d. <span className="underline">Oujda, Morocco.</span></p>
                                            </div>
                                        </div>

                                        <div className="info-balls-container">
                                            <div className="info-balls"></div>
                                            <div className="info-balls"></div>
                                            <div className="info-balls"></div>
                                        </div>
                                    </article>

                                </section>
                                <img src="me.png" alt="dabi.jpg" className="group-post-img" />

                                <section className="body-post-container2">
                                    <div className="body-post-container2-flex">
                                        <div>
                                            <p>{like ? 1 : ""}</p>
                                        </div>
                                        <div>
                                            <p>{list.length === 0 ? "" : `${list.length} ${list.length === 1 ? "comment" : "comments"}`}</p>
                                        </div>
                                    </div>
                                    <div className="body-post-container2-grid">
                                        <button className="like-btn" onClick={add}>Like</button>
                                        <button className="comment-btn">Comment</button>
                                        <button className="share-btn">Share</button>
                                    </div>
                                    <div className="comment-container">
                                        <img src="Kaley.jpg" alt="Kaley.jpg" className="comment-dp" />
                                        <div className="commet1">
                                            <form onSubmit={handleSubmit}>
                                                <input
                                                    type="text"
                                                    className="comment-input"
                                                    placeholder="write a comment...."
                                                    value={comment}
                                                    onChange={(e) => setComment(e.target.value)}

                                                />
                                            </form>
                                            <p>Press Enter to post.</p>
                                            <div style={list.length >= 1 ? showc : style2}>
                                                <p onClick={showRemaingComments} className="view-all-comment-btn">{list.length >= 1 ? "View all comments" : ""}</p>
                                                <List items={list} removeItem={removeItem} editItem={editItem} />
                                                <p onClick={reduceComments} className="show-less-comment-btn">{list.length <= 1 ? "" : "Show less Comments"}</p>

                                                {alert.show && <Alert />}
                                            </div>
                                        </div>
                                    </div>

                                </section>


                            </section>
                            <section className="post-group-container">
                                <section className="post-group-container1">
                                    <article className="body-post-main-flex">
                                        <div className="pj-post-main-flex1">
                                            <img src="dabi.jpg" alt="dabi" className="pj-post-dp" />
                                            <div>
                                                <h2 className="group-username underline">Itz Sweg OG</h2>
                                                <p className="group-username-location">3d. <span className="underline">Oujda, Morocco.</span></p>
                                            </div>
                                        </div>

                                        <div className="info-balls-container">
                                            <div className="info-balls"></div>
                                            <div className="info-balls"></div>
                                            <div className="info-balls"></div>
                                        </div>
                                    </article>

                                </section>
                                <img src="me.png" alt="dabi.jpg" className="group-post-img" />

                                <section className="body-post-container2">
                                    <div className="body-post-container2-flex">
                                        <div>
                                            <p>{like ? 1 : ""}</p>
                                        </div>
                                        <div>
                                            <p>{list.length === 0 ? "" : `${list.length} ${list.length === 1 ? "comment" : "comments"}`}</p>
                                        </div>
                                    </div>
                                    <div className="body-post-container2-grid">
                                        <button className="like-btn" onClick={add}>Like</button>
                                        <button className="comment-btn">Comment</button>
                                        <button className="share-btn">Share</button>
                                    </div>
                                    <div className="comment-container">
                                        <img src="Kaley.jpg" alt="Kaley.jpg" className="comment-dp" />
                                        <div className="commet1">
                                            <form onSubmit={handleSubmit}>
                                                <input
                                                    type="text"
                                                    className="comment-input"
                                                    placeholder="write a comment...."
                                                    value={comment}
                                                    onChange={(e) => setComment(e.target.value)}

                                                />
                                            </form>
                                            <p>Press Enter to post.</p>
                                            <div style={list.length >= 1 ? showc : style2}>
                                                <p onClick={showRemaingComments} className="view-all-comment-btn">{list.length >= 1 ? "View all comments" : ""}</p>
                                                <List items={list} removeItem={removeItem} editItem={editItem} />
                                                <p onClick={reduceComments} className="show-less-comment-btn">{list.length <= 1 ? "" : "Show less Comments"}</p>

                                                {alert.show && <Alert />}
                                            </div>
                                        </div>
                                    </div>

                                </section>


                            </section>
                            <section className="post-group-container">
                                <section className="post-group-container1">
                                    <article className="body-post-main-flex">
                                        <div className="pj-post-main-flex1">
                                            <img src="dabi.jpg" alt="dabi" className="pj-post-dp" />
                                            <div>
                                                <h2 className="group-username underline">Itz Sweg OG</h2>
                                                <p className="group-username-location">3d. <span className="underline">Oujda, Morocco.</span></p>
                                            </div>
                                        </div>

                                        <div className="info-balls-container">
                                            <div className="info-balls"></div>
                                            <div className="info-balls"></div>
                                            <div className="info-balls"></div>
                                        </div>
                                    </article>

                                </section>
                                <img src="me.png" alt="dabi.jpg" className="group-post-img" />

                                <section className="body-post-container2">
                                    <div className="body-post-container2-flex">
                                        <div>
                                            <p>{like ? 1 : ""}</p>
                                        </div>
                                        <div>
                                            <p>{list.length === 0 ? "" : `${list.length} ${list.length === 1 ? "comment" : "comments"}`}</p>
                                        </div>
                                    </div>
                                    <div className="body-post-container2-grid">
                                        <button className="like-btn" onClick={add}>Like</button>
                                        <button className="comment-btn">Comment</button>
                                        <button className="share-btn">Share</button>
                                    </div>
                                    <div className="comment-container">
                                        <img src="Kaley.jpg" alt="Kaley.jpg" className="comment-dp" />
                                        <div className="commet1">
                                            <form onSubmit={handleSubmit}>
                                                <input
                                                    type="text"
                                                    className="comment-input"
                                                    placeholder="write a comment...."
                                                    value={comment}
                                                    onChange={(e) => setComment(e.target.value)}

                                                />
                                            </form>
                                            <p>Press Enter to post.</p>
                                            <div style={list.length >= 1 ? showc : style2}>
                                                <p onClick={showRemaingComments} className="view-all-comment-btn">{list.length >= 1 ? "View all comments" : ""}</p>
                                                <List items={list} removeItem={removeItem} editItem={editItem} />
                                                <p onClick={reduceComments} className="show-less-comment-btn">{list.length <= 1 ? "" : "Show less Comments"}</p>

                                                {alert.show && <Alert />}
                                            </div>
                                        </div>
                                    </div>

                                </section>


                            </section>

                        </section>
                        <section className="group-side-container">
                            <section className="about-group-section">
                                <p className="about-group-section-bold">About</p>
                                <p className="about-group-description">This Group is Strictly for Kaley Cuoco fans</p>
                                <div className="about-group-section-container">
                                    <p className="about-group-section-bold">Public</p>
                                    <p>Anyone can see group content and who follows the group</p>
                                </div>
                                <div className="about-group-section-container">
                                    <p className="about-group-section-bold">Visible</p>
                                    <p>Anyone can find this group</p>
                                </div>
                                <button className="learn-more-btn">Learn More</button>
                            </section>
                            <section className="group-popular-post-container">
                                <p className="bold">Popular topics in this group</p>
                                <ul>
                                    <li className="bold">#bigbantheory</li>
                                    <li>13post</li>
                                </ul>
                                <ul>
                                    <li className="bold">#kaleycuco</li>
                                    <li>12posts</li>
                                </ul>

                            </section>
                            <section className="group-sticky-stop">
                                <section className="groups-rooms-container">
                                    <h2 className="room-title">Rooms</h2>
                                    <img src="roomicon.png" alt="roomicon" className="room-img" />

                                    <div className="groups-inner-rooms-container">
                                        <h2>Get the group together on video chat</h2>
                                        <p>create a room to instantly connect with other members via video chat.</p>
                                        <button className="create-room-btn">Create Room</button>
                                    </div>
                                </section>

                                <section className="recent-media-container">
                                    <h2>Recent Media</h2>
                                    <div className="recent-media-grid">
                                        <img src="me.png" alt="me" className="grid-photos cg1" />
                                        <img src="dabi.jpg" alt="me" className="grid-photos cg2" />
                                        <img src="kaley.jpg" alt="me" className="grid-photos cg3" />
                                        <img src="kaley112.jpg" alt="me" className="grid-photos cg4" />

                                    </div>
                                    <button className="follow-btn space">See all</button>

                                </section>
                            </section>

                        </section>
                    </section>

                </section>
            </section>

        </>
    )
}

export default Group;