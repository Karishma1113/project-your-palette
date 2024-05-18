import React from 'react';
import PageHeader from "./Header";
import PageFooter from "./Footer";

function Profile(props) {
    return (
        <body>
            <PageHeader />
            <main className="profile">
                <div className="container">
                    <div className="Profile-Info">
                        <section className="profile-name">
                            <h1>The Dub</h1>
                        </section>
                        <section className="picture">
                            <img src="img/husky.png" alt="profile picture of husky" />
                        </section>
                        <section className="info">
                            <p>Viewer: 999</p>
                            <p>Friends: 4</p>
                        </section>
                        <section className="saved-palettes">
                            <h2>Saved Palettes:</h2>
                        </section>
                    </div>
                    <section className="palettes">
                        <div className="row">
                            {[
                                { title: "Kawaii", imgSrc: "img/kawaii.png" },
                                { title: "Cappuccino", imgSrc: "img/Cappuccino.png" },
                                { title: "Beach", imgSrc: "img/Beach.png" },
                                { title: "Rainbow", imgSrc: "img/rainbow.png" }
                            ].map(palette => (
                                <div className="col-md-6 col-xl-3 d-flex" key={palette.title}>
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-auto col-xl-12">
                                                    <img className="pb-3" src={palette.imgSrc} alt={`the ${palette.title.toLowerCase()} palettes`} />
                                                </div>
                                                <div className="col-sm">
                                                    <h2 className="card-title">{palette.title}</h2>
                                                    <button className="btn btn-info">Dislike</button>
                                                </div>
                                            </div>
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
};

export default Profile;