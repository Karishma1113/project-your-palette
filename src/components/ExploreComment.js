import React, { useState } from 'react';

const ExploreComment = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCommentClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <button className="comment-btn btn btn-outline-secondary" onClick={handleCommentClick}>Comment</button>
            {showModal && (
                <div className="modal fade" id="commentModal" tabIndex="-1" aria-labelledby="commentModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="commentModalLabel">Comments</h5>
                                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>User 1: Nice palette!</p>
                                <p>User 2: Maybe try adding more yellow.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ExploreComment;
