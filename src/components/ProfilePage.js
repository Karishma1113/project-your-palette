import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';

function ProfilePage(props) {
    const [createdPalettes, setCreatedPalettes] = useState([]);

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            const db = getDatabase();
            const paletteRef = ref(db, `users/${user.uid}/palettes`);
            
            onValue(paletteRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const palettes = Object.values(data);
                    setCreatedPalettes(palettes);
                }
            });
        }
    }, []);


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
                            <button className="btn btn-info">Unlike</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            <main className="profile">
                <div className="container">
                    <div className="profile-info">
                        <section className="profile-name">
                            <h1>{props.currentUser?.userName}</h1>
                        </section>
                        <section className="picture">
                            <img src="img/husky.png" alt="Profile of a husky" />
                        </section>
                        <section className="info">
                            <p>Viewer: 999</p>
                            <p>Friends: 4</p>
                        </section>
                    </div>
                    <section className="liked-palettes">
                        <h2>Liked Palettes:</h2>
                    </section>
                    <section className="palettes">
                        <div className="row">
                            {paletteElements}
                        </div>
                    </section>
                    <section className="created-palettes">
                        <h2>Created Palettes:</h2>
                        <div className="row">
                            {createdPalettes.map((palette, index) => (
                                <div className="col-md-6 col-xl-3 d-flex" key={index}>
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <div className="color-palette">
                                                {palette.map((color, i) => (
                                                    <div
                                                        key={i}
                                                        className="color-selected"
                                                        style={{ backgroundColor: color, height: '20px', width: '20px', display: 'inline-block' }}
                                                    ></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default ProfilePage;