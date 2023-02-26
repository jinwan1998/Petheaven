import React, { useState } from 'react';
import './Components.css';


const AdoptionForm = () => {
    const [formType, setFormType] = useState('');

    const handleFormTypeChange = (event) => {
        setFormType(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <div>
            <h2>Adoption Form</h2>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="formType">Form Type:</label>
                <select id="formType" value={formType} onChange={handleFormTypeChange}>
                    <option value="">Select a form type</option>
                    <option value="membership">Membership registration</option>
                    <option value="surrender">Surrender pet</option>
                    <option value="adoption">Adoption request</option>
                </select>
                {formType === 'membership' && (
                    <>
                        <label htmlFor="name">Name:</label>
                        <input id="name" type="text" required />
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="email" required />
                        <label htmlFor="phone">Phone:</label>
                        <input id="phone" type="tel" required />
                        <button type="submit">Submit</button>
                    </>
                )}

                {formType === 'surrender' && (
                    <>
                        <label htmlFor="petName">Pet Name:</label>
                        <input id="petName" type="text" required />
                        <label htmlFor="petType">Pet Type:</label>
                        <input id="petType" type="text" required />
                        <label htmlFor="petPhoto">Pet Photo:</label>
                        <input id="petPhoto" type="file" accept="image/*" required />
                        <label htmlFor="reason">Reason for surrender:</label>
                        <textarea id="reason" required></textarea>
                        <button type="submit">Submit</button>
                    </>
                )}
                {formType === 'adoption' && (
                    <>
                        <label htmlFor="petId">Pet ID:</label>
                        <input id="petId" type="text" required />
                        <label htmlFor="name">Name:</label>
                        <input id="name" type="text" required />
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="email" required />
                        <label htmlFor="phone">Phone:</label>
                        <input id="phone" type="tel" required />
                        <button type="submit">Submit</button>
                    </>
                )}
            </form>
        </div>
    );
};

export default AdoptionForm;
