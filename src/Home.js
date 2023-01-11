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
    return (
        <>
            <Navbar mainuserimage={userinfo.image}/>

            <div className="home-container">

                <Story mainuserimage={userinfo.image}/>
 
             

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
