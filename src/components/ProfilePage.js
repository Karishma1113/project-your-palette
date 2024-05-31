import React from 'react';
import PageHeader from "./Header";
import PageFooter from "./Footer";

function ProfilePage() {
    const palettesData = [
        { title: "Kawaii", imgSrc: "img/kawaii.png" },
        { title: "Cappuccino", imgSrc: "img/Cappuccino.png" },
        { title: "Beach", imgSrc: "img/Beach.png" },
        { title: "Rainbow", imgSrc: "img/rainbow.png" }
    ];

    const paletteElements = palettesData.map(palette => (
        <div className="col-md-6 col-xl-3 d-flex" key={palette.title}>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-auto col-xl-12">
                            <img className="pb-3" src={palette.imgSrc} alt={`${palette.title} palette`} />
                        </div>
                        <div className="col-sm">
                            <h2 className="card-title">{palette.title}</h2>
                            <button className="btn btn-info">Unsave</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            <PageHeader />
            <main className="profile">
                <div className="container">
                    <div className="profile-info">
                        <section className="profile-name">
                            <h1>The Dub</h1>
                        </section>
                        <section className="picture">
                            <img src="img/husky.png" alt="Profile picture of a husky" />
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
                            {paletteElements}
                        </div>
                    </section>
                </div>
            </main>
            <PageFooter />
        </div>
    );
}

export default ProfilePage;