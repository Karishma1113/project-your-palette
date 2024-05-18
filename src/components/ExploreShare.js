import React, { useState } from 'react';

const ExploreShare = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShareClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <button className="share-btn btn btn-outline-secondary" onClick={handleShareClick}>Share</button>
            {showModal && (
                <div className="modal fade" id="shareModal" tabIndex="-1" aria-labelledby="shareModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="shareModalLabel">Share Options</h5>
                                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <button className="btn btn-outline-secondary btn-block">Share via Text Message</button>
                                <button className="btn btn-outline-secondary btn-block">Share via Email</button>
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

export default ExploreShare;
