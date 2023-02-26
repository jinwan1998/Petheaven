import React from 'react';
import Resource from './Resource';
import './Components.css';

const Cats = () => {
    const webURL = 'https://api.thecatapi.com/v1/images/search/?limit=15&page=100&order=DESC';
    let count = 1;

    const render = (data) => {
        if (data.loading === true) return <p>loading ...</p>;

        console.log('Got the data', data);

        return data.trans.map((cat) => {
            const petId = `Cat_${count.toString().padStart(6, '0')}`;
            count++;

            return (
                <div className="cat-container" key={cat.id}>
                    <img className="image" src={cat.url} alt="cat img" />
                    <p className="pet-id">Pet ID: {petId}</p>
                </div>
            );
        });
    };

    return (
        <div>
            <h2>Cats</h2>
            <Resource path={webURL} render={render} />
        </div>
    );
};

export default Cats;
