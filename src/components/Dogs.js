import React from 'react';
import Resource from './Resource';
import './Components.css';

const Dogs = () => {
    const webURL = 'https://api.thedogapi.com/v1/images/search/?limit=20&page=100&order=DESC';
    let count = 1;

    const render = (data) => {
        if (data.loading === true) return <p>loading ...</p>;

        console.log('Got the data', data);

        return data.trans.map((dog) => {
            const petId = `Dog_${count.toString().padStart(6, '0')}`;
            count++;

            return (
                <div className="dog-container" key={dog.id}>
                    <img className="image" src={dog.url} alt="dog img" />
                    <p className="pet-id">Pet ID: {petId}</p>
                </div>
            );
        });
    };

    return (
        <div>
            <h2>Dogs</h2>
            <Resource path={webURL} render={render} />
        </div>
    );
};

export default Dogs;
