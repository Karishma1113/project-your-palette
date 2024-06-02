import React, { useState } from 'react';

const ExploreShare = () => {
    const [showModal, setShowModal] = useState(false);
    const [shareMethod, setShareMethod] = useState('');
    const [shareInfo, setShareInfo] = useState('');
    const [sharedSuccess, setSharedSuccess] = useState(false);

    const handleShareClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setShareMethod('');
        setShareInfo('');
        setSharedSuccess(false);
    };

    const handleShareMethodChange = (e) => {
        setShareMethod(e.target.value);
    };

    const handleShareInfoChange = (e) => {
        setShareInfo(e.target.value);
    };

    const handleShareSubmit = () => {
        if (shareMethod && shareInfo) {
            setSharedSuccess(true);
        }
    };

    return (
        <>
            <button className="share-btn btn btn-outline-secondary" onClick={handleShareClick}>Share</button>
            {showModal && (
                <div className="modal fade show" id="shareModal" tabIndex="-1" aria-labelledby="shareModalLabel" aria-hidden="true" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="shareModalLabel">Share Options</h5>
                                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {!sharedSuccess ? (
                                    <>
                                        <div className="mb-3">
                                            <label htmlFor="shareMethod" className="form-label">Share via:</label>
                                            <select id="shareMethod" className="form-select" value={shareMethod} onChange={handleShareMethodChange}>
                                                <option value="">Select Method</option>
                                                <option value="textMessage">Text Message</option>
                                                <option value="email">Email</option>
                                            </select>
                                        </div>
                                        {shareMethod && (
                                            <div className="mb-3">
                                                <label htmlFor="shareInfo" className="form-label">Enter Information:</label>
                                                <input type="text" id="shareInfo" className="form-control" value={shareInfo} onChange={handleShareInfoChange} placeholder="Enter details..." />
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <p>Post shared with {shareInfo}!</p>
                                )}
                            </div>
                            {!sharedSuccess && (
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" onClick={handleShareSubmit}>Share</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ExploreShare;
