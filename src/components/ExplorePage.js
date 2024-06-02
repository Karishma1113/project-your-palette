import React, { useState } from "react";
import PageHeader from "./Header";
import PageFooter from "./Footer";
import ExploreLike from "./ExploreLike";
import ExploreComment from "./ExploreComment";
import ExploreShare from "./ExploreShare";

const ExplorePage = () => {
    const [postData, setPostData] = useState([
        {
            id: 1,
            friendName: "Friend 1",
            friendIcon: "img/Golden.png",
            paletteImage: "img/Friend-1.png",
            caption: "How can I improve my palette?",
            liked: false,
            comments: [
                { id: 1, user: "@User1", text: "Nice palette!" },
                { id: 2, user: "@iheartcolors", text: "Maybe try adding more yellow." },
            ],
        },
        {
            id: 2,
            friendName: "Friend 2",
            friendIcon: "img/Golden.png",
            paletteImage: "img/Friend-2.png",
            caption: "New palette!",
            liked: false,
            comments: [],
        },
        {
            id: 3,
            friendName: "Friend 3",
            friendIcon: "img/Golden.png",
            paletteImage: "img/Friend-3.png",
            caption: "Just took the color palette quiz!",
            liked: false,
            comments: [
                { id: 1, user: "@User2", text: "Beautiful colors!" },
            ],
        },
        {
            id: 4,
            friendName: "Friend 4",
            friendIcon: "img/Golden.png",
            paletteImage: "img/Friend-4.png",
            caption: "What would complement dark red hair?",
            liked: false,
            comments: [
                { id: 1, user: "@rainbowluvr", text: "Maybe some brown shades?" },
            ],
        },
    ]);

    const handleLike = (postId) => {
        setPostData(prevData => {
            return prevData.map(post => {
                if (post.id === postId) {
                    return { ...post, liked: !post.liked }; 
                }
                return post;
            });
        });
    };

    const addComment = (postId, text) => {
        setPostData(prevData => {
            return prevData.map(post => {
                if (post.id === postId) {
                    const newComment = {
                        id: post.comments.length + 1,
                        user: "You",
                        text: text
                    };
                    return { ...post, comments: [...post.comments, newComment] };
                }
                return post;
            });
        });
    };

    return (
        <body>
            <PageHeader />
            <main className="explore-background">
                <div className="explore-title text-center">
                    <h1>Explore Your Friends' Palettes</h1>
                </div>
                <div className="all-palettes">
                    <section>
                        <div className="row">
                            {postData.map(post => (
                                <div className="col-12 mb-3" key={post.id}>
                                    <div className="palette-card border border-dark border-2">
                                        <div className="friend-info pt-2 ps-2 d-flex align-items-center justify-content-start">
                                            <img src={post.friendIcon} alt={post.friendName} className="friend-icon" />
                                            <p className="friend-name ps-2 pt-3">{post.friendName}</p>
                                        </div>
                                        <div className="friends-palette">
                                            <img src={post.paletteImage} alt="Friend's Color Palette" />
                                        </div>
                                        <div className="caption pt-2 px-3">
                                            <p>{post.caption}</p>
                                        </div>
                                        <div className="post-interaction pb-3">
                                            <ExploreLike liked={post.liked} onClick={() => handleLike(post.id)} />
                                            <ExploreComment postId={post.id} comments={post.comments} addComment={addComment} />
                                            <ExploreShare />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
            <PageFooter />
        </body>
    );
}

export default ExplorePage;
