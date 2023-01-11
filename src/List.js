import React from "react"

const List = ({ items, removeItem, editItem, dp, username }) => {


    return (
        <div>
            {items.map((item) => {
                const { id, title } = item;
                return (
                    <article key={id} className="comment-flex">
                        <img src={dp} alt={dp} className="comment-dp" />
                        <div className="comment-flex1">
                            <div className="comment-content">
                                <p className="comment-username">{username}</p>
                                <p className="comment-main-content">{title}</p>
                            </div>
            

                            <div className="com-btn-container">
                                <button className="com-btn" onClick={() => editItem(id)}>edit</button>
                                <button className="com-btn" onClick={() => removeItem(id)}>delete</button>
                            </div>
                        </div>



                    </article>)
            })

            }
        </div>
    )
}

export default List;