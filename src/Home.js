import React from "react"
import Navbar from "./navbar"
import Body from "./body"
import Story from "./story"
import Post from "./post"
 import {groupdata} from "./groupdata"
import {postdata} from "./postdata"
import Postj from "./Pj"
const Home = () => {
         const dataElement = groupdata.map((groupdata)=> {
             return <Body 
             key={groupdata.id}
             groupdata={groupdata}
             />
         })

        const postElement = postdata.map((postdata)=> {
            return <Postj 
            key={postdata.id}
            postdata={postdata}

          
          
            />
            
        })


const userinfo = {
    name:  "Richard Esan",
    image: "dabi.jpg"
}

    function clicky() {
        let show = document.querySelector('.groups-container')
        show.classList.add("scroll")

    }
    function removeClicky() {
        let show = document.querySelector('.groups-container')
        show.classList.remove("scroll")
    }
    function clickyp (){
        let show = document.querySelector('.frined-container')
        show.classList.add("scroll")
    }
    function removeClickyp() {
        let show = document.querySelector('.frined-container')
        show.classList.remove("scroll")
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

    function borderh() {
        let active = document.querySelector('.bordleft')
        active.classList.add('borderh')
        active.classList.remove('borderw')
        active.classList.remove('bordermr')
        active.classList.remove('bordermp')
        active.classList.remove('borderg')
        active.classList.remove('borderp')
        active.classList.remove('borderf')
        active.classList.remove('bordersa')
        active.classList.remove('bordersag')
    }
    function borderg() {
        let active = document.querySelector('.bordleft')
        active.classList.add('borderg')
        active.classList.remove('borderw')
        active.classList.remove('borderh')
        active.classList.remove('borderp')
        active.classList.remove('bordermr')
        active.classList.remove('bordermp')
        active.classList.remove('borderf')
        active.classList.remove('bordersa')
        active.classList.remove('bordersag')
        active.classList.remove('bordersas')
    }
    function borderp() {
        let active = document.querySelector('.bordleft')
        active.classList.add('borderp')
        active.classList.remove('borderg')
        active.classList.remove('borderh')
        active.classList.remove('bordermr')
        active.classList.remove('borderw')
        active.classList.remove('borderf')
        active.classList.remove('bordermp')
        active.classList.remove('bordersa')
        active.classList.remove('bordersag')
        active.classList.remove('bordersas')
    }
    function borderf() {
        let active = document.querySelector('.bordleft')
        active.classList.add('borderf')
        active.classList.remove('bordersag')
        active.classList.remove('borderp')
        active.classList.remove('borderg')
        active.classList.remove('borderh')
        active.classList.remove('bordermr')
        active.classList.remove('bordermp')
        active.classList.remove('borderw')
        active.classList.remove('bordersa')
        active.classList.remove('bordersas')

    }
    function bordmr() {
        let active = document.querySelector('.bordleft')
        active.classList.add('bordermr')
        active.classList.remove('borderf')
        active.classList.remove('borderp')
        active.classList.remove('borderg')
        active.classList.remove('borderh')
        active.classList.remove('bordermp')
        active.classList.remove('borderw')
        active.classList.remove('bordersa')
        active.classList.remove('bordersag')

    }
    function bordmp() {
        let active = document.querySelector('.bordleft')
        active.classList.add('bordermp')
        active.classList.remove('bordersas')
        active.classList.remove('bordermr')
        active.classList.remove('borderf')
        active.classList.remove('borderp')
        active.classList.remove('borderg')
        active.classList.remove('borderh')
        active.classList.remove('borderw')
        active.classList.remove('bordersa')
        active.classList.remove('bordersag')
    }
    function bordw() {
        let active = document.querySelector('.bordleft')
        active.classList.add('borderw')
        active.classList.remove('bordermp')
        active.classList.remove('bordermr')
        active.classList.remove('bordersas')
        active.classList.remove('borderf')
        active.classList.remove('borderp')
        active.classList.remove('borderg')
        active.classList.remove('borderh')
        active.classList.remove('bordersa')
        active.classList.remove('bordersag')

    }
    function bordsa() {
        let active = document.querySelector('.bordleft')
        active.classList.add('bordersa')
        active.classList.remove('borderw')
        active.classList.remove('bordermp')
        active.classList.remove('bordermr')
        active.classList.remove('borderf')
        active.classList.remove('borderp')
        active.classList.remove('bordersas')
        active.classList.remove('borderg')
        active.classList.remove('bordersag')
        active.classList.remove('borderh')
    }
    function bordsag() {
        let active = document.querySelector('.bordleft')
        active.classList.add('bordersag')
        active.classList.remove('bordersa')
        active.classList.remove('borderw')
        active.classList.remove('bordermp')
        active.classList.remove('bordermr')
        active.classList.remove('bordersas')
        active.classList.remove('borderf')
        active.classList.remove('borderp')
        active.classList.remove('borderg')
        active.classList.remove('borderh')
    }
    function bordsas() {
        let active = document.querySelector('.bordleft')
        active.classList.add('bordersas')
        active.classList.remove('bordersag')
        active.classList.remove('bordersa')
        active.classList.remove('borderw')
        active.classList.remove('bordermp')
        active.classList.remove('bordermr')
        active.classList.remove('borderf')
        active.classList.remove('borderp')
        active.classList.remove('borderg')
        active.classList.remove('borderh')
    }
    return (
        <>
            <Navbar mainuserimage={userinfo.image}/>

            <div className="home-container">

                <Story mainuserimage={userinfo.image}/>
 
                <article className="fb-fixed-bar-icons">
                        <ul>
                            <li onMouseEnter={homeEnter} onMouseLeave={homeLeave} onClick={borderh} >H</li><span className="Home-hover">Home</span>
                            <li onMouseEnter={homeEnte} onMouseLeave={homeleav} onClick={borderp} ><img src="Dabi.jpg" alt="dabi.jpg" className="comment-dp" /></li><span className="profile-hover">Your profile</span>
                        </ul>
                        <ul>
                            <li onMouseEnter={homeEnt} onMouseLeave={homelea} onClick={borderf} >f</li><span className="friends-hover">Friends</span>
                            <li onMouseEnter={homeEn} onMouseLeave={homele} onClick={bordmr} >M</li><span className="recent-hover">Most recent</span>
                            <li onClick={borderg} onMouseEnter={homeE} onMouseLeave={homel} className="group-btn">G</li><span className="group-hover">Groups</span>
                            <li onClick={bordmp} onMouseEnter={homeMe} onMouseLeave={homeMl}>M</li><span className="market-hover">Market Place</span>
                            <li onClick={bordw} onMouseEnter={homeWe} onMouseLeave={homeWl}>w</li><span className="watch-hover">Watch</span>
                            <li onClick={bordsa} onMouseEnter={homeSe} onMouseLeave={homeSl}>S</li><span className="see-hover">See all</span>
                        </ul>
                        <ul>
                            <li><img src="Dabi.jpg" alt="dabi.jpg" className="comment-dp" /></li>
                            <li><img src="Dabi.jpg" alt="dabi.jpg" className="comment-dp" /></li>
                            <li><img src="Dabi.jpg" alt="dabi.jpg" className="comment-dp" /></li>
                            <li><img src="Dabi.jpg" alt="dabi.jpg" className="comment-dp" /></li>
                            <li onClick={bordsag} onMouseEnter={homeSagm} onMouseLeave={homeSagl}>S</li><span className="sag-hover">See all groups</span>
                        </ul>
                        <ul>

                            <li onClick={bordsas} onMouseEnter={homeSasm} onMouseLeave={homeSasl}>S</li><span className="sas-hover">See all shortcuts</span>
                        </ul>
                        <div className="bordleft"></div>

                    </article>

                <section className="groups-container" onMouseOver={clicky} onMouseLeave={removeClicky}>
                    <ul className="groups-section-1">
                        <li>Home</li>
                        <li>Esan Richard</li>
                    </ul>

                    <ul className="groups-section-1">
                        <li>Friends</li>
                        <li>Most Recent</li>
                        <li>Groups</li>
                        <li>Marketplace</li>
                        <li>See All</li>
                    </ul>
                    <ul className="groups-section-1">
                        <li>Kaley cuoco</li>
                        <li>Maria Sharapova</li>
                        <li>The Home of Kaley Cuoco fans</li>
                        <li>See all groups</li>
                    </ul>
                    <ul className="groups-section-1">
                        <li>Fans who love Blake Shelton</li>
                        <li>Gwen Stefani is a Goddess</li>
                        <li>Gwen Stefani Fans</li>
                        <li>Gwen stefani </li>
                        <li>Blake shelton fan group</li>
                    </ul>
                </section>
                <section className="frined-container"  onMouseOver={clickyp} onMouseLeave={removeClickyp}>
                    <div className="mini-friend-flex">
                        <h3>Friend requests</h3>
                        <p className="friend-request-seeall-link">See all</p>
                    </div>
                    <div className="main-friend-flex">
                        <div className="mini-friend-flex1">
                            <img src="berry2.png" className="friend-dp-img" alt="friend-dp-img"/>
                            <div>
                                <p className="friend-name">Kingsley Chidalu</p>
                                <p className="friend-friends">29 mutual friends</p>
                                <div className="frineds-btn-container">
                                    <button className="btn-confirm">Confirm</button>
                                    <button className="btn-delete ">Delete</button>
                                </div>

                            </div>
                        </div>
                        <p className="friends-days">4d</p>
                    </div>
                    <h3 className="birthdays">Birthdays</h3>
                    <div className="users-birthdays">
                        <p><span className="bold">Isa Gbl </span>and <span className="bold">Olanike Olufunke Oladipupo </span>have birthdays today.</p>
                    </div>
                    <div>
                        <h3 className="contacts">Contacts</h3>
                    </div>
                    <section className="contact-contaier">
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Simeon Enearu</p>
                        </div>
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Olu Sola</p>
                        </div>
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Onwughalu Michaeal</p>
                        </div>
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Odeh Gold</p>
                        </div>
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Ion Ciulei Ion</p>
                        </div>
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Obansajo Samuel</p>
                        </div>
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Benjamin Fakorede</p>
                        </div>
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Bueze Anyiego</p>
                        </div>
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Ade Queens Ade Queens</p>
                        </div>
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Michael Osinmade</p>
                        </div>
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Adedunmibola Daniella</p>
                        </div>
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Prood Marley</p>
                        </div>
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Phebe Adebola Daodu</p>
                        </div>
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Mi De</p>
                        </div>
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Prisicilla Rotoluwa</p>
                        </div>
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Ife Alabi</p>
                        </div>
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Favour Sokefun</p>
                        </div>
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Favour Beauty</p>
                        </div>
                        <div className="contact-flex">
                            <img src="berry2.png" className="contact-dp-img" alt="berry2.png"/>
                            <p>Dyna Coopa</p>
                        </div>
                    </section>

                    <h3>Group conversations</h3>
                    <div>+</div>
                    <p>Create new group</p>

                </section>
                <Post mainuserimage={userinfo.image}/>
                
                {postElement}
                {dataElement}
                
                
            </div>


        </>
    )
}
export default Home;
