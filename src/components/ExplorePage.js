import React, { useEffect, useState } from "react";
import ExploreLike from "./ExploreLike";
import ExploreComment from "./ExploreComment";
import ExploreShare from "./ExploreShare";
import {
  getDatabase,
  ref,
  set as firebaseSet,
  onValue,
} from "firebase/database";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";

const ExplorePage = () => {
  const [postData, setPostData] = useState([
    {
      id: 1,
      friendName: "Friend 1",
      friendIcon: "img/Golden.png",
      paletteImage: "img/Friend-1.png",
      caption: "How can I improve my palette?",
      liked: false,
      comments: [],
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
      comments: [],
    },
    {
      id: 4,
      friendName: "Friend 4",
      friendIcon: "img/Golden.png",
      paletteImage: "img/Friend-4.png",
      caption: "What would complement dark red hair?",
      liked: false,
      comments: [],
    },
  ]);

  const [userSignedIn, setUserSignedIn] = useState(false);

  const db = getDatabase();
  const auth = getAuth();

  const currentUser = auth.currentUser;

  const handleLike = (postId) => {
    setPostData((prevData) => {
      return prevData.map((post) => {
        if (post.id === postId) {
          return { ...post, liked: !post.liked };
        }
        return post;
      });
    });
  };

  const addComment = (postId, text) => {
    if (!currentUser) {
      return;
    }
    const userId = currentUser.uid;
    const newComment = {
      userId: userId,
      user: currentUser.displayName || "You",
      text: text,
    };

    const updatedPostData = postData.map((post) => {
      if (post.id === postId) {
        const updatedPost = {
          ...post,
          comments: [...post.comments, newComment],
        };

        const commentRef = ref(db, `comments/${postId}/${userId}`);
        firebaseSet(commentRef, updatedPost.comments);

        return updatedPost;
      }
      return post;
    });

    setPostData(updatedPostData);
  };

  useEffect(() => {
    const fetchData = () => {
      if (currentUser) {
        setUserSignedIn(true);
        postData.forEach((post) => {
          const commentRef = ref(db, `comments/${post.id}/${currentUser.uid}`);
          onValue(commentRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
              const comments = Object.values(data);
              setPostData((prevData) =>
                prevData.map((item) =>
                  item.id === post.id ? { ...item, comments: comments } : item
                )
              );
            }
          });
        });
      } else {
        setUserSignedIn(false);
        setPostData([]);
      }
    };

    fetchData();
  }, [db, postData, currentUser]);

  return (
    <body>
      <main className="explore-background">
        <div className="explore-title text-center">
          <h1>Explore Your Friends' Palettes</h1>
        </div>
        {userSignedIn && (
          <div className="all-palettes">
            <section>
              <div className="row">
                {postData.map((post) => (
                  <div className="col-12 mb-3" key={post.id}>
                    <div className="palette-card border border-dark border-2">
                      <div className="friend-info pt-2 ps-2 d-flex align-items-center justify-content-start">
                        <img
                          src={post.friendIcon}
                          alt={post.friendName}
                          className="friend-icon"
                        />
                        <p className="friend-name ps-2 pt-3">
                          {post.friendName}
                        </p>
                      </div>
                      <div className="friends-palette">
                        <img
                          src={post.paletteImage}
                          alt="Friend's Color Palette"
                        />
                      </div>
                      <div className="caption pt-2 px-3">
                        <p>{post.caption}</p>
                      </div>
                      <div className="post-interaction pb-3">
                        <ExploreLike
                          liked={post.liked}
                          onClick={() => handleLike(post.id)}
                        />
                        {currentUser && (
                          <ExploreComment
                            postId={post.id}
                            comments={post.comments}
                            addComment={addComment}
                          />
                        )}
                        <ExploreShare />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
        {!userSignedIn && (
          <div className="sign-in-prompt text-center mt-3">
            <p>
              <span>
                <Link to="/signin">Sign in here</Link> to see and interact
                with posts
              </span>
            </p>
          </div>
        )}
      </main>
    </body>
  );
};

export default ExplorePage;
