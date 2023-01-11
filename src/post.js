import React from "react"










const Post = ({mainuserimage}) => {
    function openPost() {
        let opentPost = document.querySelector(".text-areaContainer")
        opentPost.style.display = "block";
    }
    function closePost() {
        let opentPost = document.querySelector(".text-areaContainer")
        opentPost.style.display = "none";
    }
    window.addEventListener("click", function (e) {
        let modalContainer = document.querySelector(".text-areaContainer");
        if (e.target === modalContainer) {
            modalContainer.style.display = "none"
        }
    })
    return (
        
            <div className="post-container">
                <div className="post-flex">
                    <img src={mainuserimage} className="FB-profile-img" alt={mainuserimage} />
                    <input type="text" placeholder="What's on your mind, Esan" className="FB-post-input" />
                </div>
                <div className="post-grid">
                    <button className="btn-liveVideo" onClick={openPost}>Live video</button>
                    <button className="btn-photoVideo">Photo/Video</button>
                    <button className="btn-feelingActivity">Feeling/Activity</button>

                </div>

                <div className="text-areaContainer">
                    <h2 className="postLogo">Create Post</h2>
                     <div id="close" onClick={closePost}>
                        <textarea className="post-textarea" placeholder="Create Post"></textarea>
                        <button className="submit-post-btn" onClick={closePost}>Post</button>
                    </div>


                </div>
            </div>
            )
}

            export default Post;