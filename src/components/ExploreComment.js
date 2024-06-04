import React, { useState } from 'react';

function ExploreComment(props) {
    const { postId, comments, addComment} = props; 
    const [showModal, setShowModal] = useState(false);
    const [newComment, setNewComment] = useState("");

    const handleCommentClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            addComment(postId, newComment);
            setNewComment("");
        }
    };

    const commentElements = comments.map(comment => (
        <p key={comment.id}>{comment.user}: {comment.text}</p>
    ));

    return (
        <>
            <button className="comment-btn btn btn-outline-secondary" onClick={handleCommentClick}>Comment</button>
            {showModal && (
                <div className="modal fade show" id="commentModal" tabIndex="-1" aria-labelledby="commentModalLabel" aria-hidden="true" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="commentModalLabel">Comments</h5>
                                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {comments.length > 0 ? commentElements : <p>No comments yet.</p>}
                                <form onSubmit={handleCommentSubmit} className="d-flex">
                                    <input 
                                        type="text" 
                                        className="form-control me-2" 
                                        id="newComment" 
                                        value={newComment} 
                                        onChange={handleCommentChange} 
                                        placeholder="Write a comment..." 
                                    />
                                    <button type="submit" className="btn btn-primary">Comment</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ExploreComment;
