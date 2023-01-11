import React from "react";
import List from "./List";
import Alert from "./alert";

const Postj = (props) => {
    const [toggle, setToggle] = React.useState(true)
    function toggleNav() {
        setToggle(prevToggle => !prevToggle)
    }

    const style = {
        display: toggle === true ? "block" : "none",

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

// const getLocalStorage = () => {
//     let list = localStorage.getItem('list');
//     if(list) {
//     return JSON.parse(localStorage.getItem('list'))
//     } else {
//         return []
//     }
// }

    const [comment, setComment] = React.useState("")
    const [list, setList] = React.useState([])
    const [isEditing, setIsEditing] = React.useState(false)
    const [editID, setEditID] = React.useState(null)
    const [alert, setAlert] = React.useState({ show: false, msg: '', type: '' })
    function handleSubmit(e) {
        e.preventDefault()
        if(!comment) {
            // display alert
        } else if (comment && isEditing) {
            setList(list.map((item)=> {
                if(item.id=== editID) {
                    return {...item, title: comment}
                }
                return item
            }))
            setComment('')
            setEditID(null)
            setIsEditing(false)
        } else {
            // show alert
            const newItem = {id: new Date().getTime().toString(), 
                title: comment};
                setList([...list, newItem])
                setComment('')
            }
        }
        const removeItem = (id) => {
            setList(list.filter((item)=> item.id !==id))
        }
        const editItem = (id) => {
            const specificItem = list.find((item)=> item.id === id);
            setIsEditing(true)
            setEditID(id)
            setComment(specificItem.title)
        }
    
        // React.useEffect(()=> {
        //     localStorage.setItem('list',JSON.stringify('list'))
        // }, [list])
        const [showc, setShowc] = React.useState(style1)

        function showRemaingComments () {
                setShowc(
                    {
                    height: "unset",
                    overFlow: "hidden",
                    }
                )
        }
        function reduceComments () {
            setShowc(
                {
                height: "85px",
                overFlow: "hidden",
                }
            )
        }
    return (
        <section>
            <div className="body-post-container" style={style}>
                <section className="body-post-container1">
                    <section className="body-post-main-flex">
                        <section className="pj-post-main-flex1">
                            <div className="pj-post-img-container">
                                <img src={props.postdata.dp} className="pj-post-dp" alt={props.postdata.dp} />
                            </div>
                            <div className="pj-post-name">
                                <p><span className="boldusername">{props.postdata.username}</span> is feeling Happy</p>
                                <p><span>21 h</span></p>
                            </div>
                        </section>
                        <section className="body-info-flex">
                            <div className="info-balls-container">
                                <div className="info-balls"></div>
                                <div className="info-balls"></div>
                                <div className="info-balls"></div>
                            </div>
                            <div className="Cancel-group-post" onClick={toggleNav}>&times;</div>
                        </section>
                    </section>
                    <p>{props.postdata.caption}</p>

                </section>
                <img src={props.postdata.imageposted} alt={props.postdata.imageposted} className="body-post-image" />
                <section className="body-post-container2">
                    <div className="body-post-container2-flex">
                        <div>
                            <p>{like ? 1 : ""}</p>
                        </div>
                        <div>
                            <p>{list.length === 0 ? "" : `${list.length} ${list.length === 1 ? "comment" : "comments"}` }</p>
                        </div>
                    </div>
                    <div className="body-post-container2-grid">
                        <button className="like-btn" onClick={add}>Like</button>
                        <button className="comment-btn">Comment</button>
                        <button className="share-btn">Share</button>
                    </div>
                    <div className="comment-container">
                        <img src={props.postdata.dp} alt={props.postdata.dp} className="comment-dp" />
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
                            <div style={list.length >=1 ? showc: style2}>
                            <p onClick={showRemaingComments} className="view-all-comment-btn">{list.length >= 1 ? "View all comments" : ""}</p>
                            <List items={list} removeItem={removeItem} editItem={editItem} dp={props.postdata.dp} username={props.postdata.username}/>
                            <p onClick={reduceComments}  className="show-less-comment-btn">{list.length <= 1 ? "" : "Show less Comments"}</p>
                            
                            {alert.show && <Alert />}
                            </div>
                        </div>
                    </div>

                </section>

            </div> 

        </section>
    )


    }
export default Postj;