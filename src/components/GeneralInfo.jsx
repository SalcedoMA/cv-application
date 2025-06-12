import '../styles/InfoSections.css'
import { useState } from "react"

function GeneralInfo({onChange}) {
    const [disabled, setDisabled] = useState(false)
    const buttonState = disabled ? 'Edit' : 'Submit';

    return (
    <>
        <div className="info-section general-info">
            <h1 className='section-title'>General information</h1>
            <form id='general-info-form' className='info-form'>
                <fieldset disabled={disabled}>
                    <section className="section">
                        <label htmlFor="first-name">
                            <p>First name:<span aria-label="required">*</span></p>
                            <input type="text" name="first-name" id="first-name" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="Kitsch" required />
                        </label>
                        <label htmlFor="surname">
                            <p>Last name:</p>
                            <input type="text" name="surname" id="surname" maxLength="32" pattern="[A-Za-z ]{1,32}" placeholder="Knausgaard" />
                        </label>
                        <label htmlFor="age">
                            <p>Age:</p>
                            <input type="number" id="age" name="age" min="18" max="95" />
                        </label>
                    </section>
                    <section className="section">
                        <label htmlFor="email">
                            <p>Email: <span aria-label="required">*</span></p>
                            <input type="email" name="email" id="email" placeholder="marxism@samehelvetica.org" required />
                        </label>
                        <label htmlFor="phone">
                            <p>Phone number:</p>
                            <input type="tel" name="phone" id="phone" placeholder="555-555-5555" pattern="\d{3}-\d{3}-\d{4}"
                             title="Please provide a number following this format: 123-456-7890" />
                        </label>
                        <label htmlFor="address">
                            <p>Address:<span aria-label="required">*</span></p>
                            <input type="text" name="address" id="address" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="123 Marxism St" required />
                        </label>
                    </section>
                </fieldset>
                <button type='submit' className='submit-button' id='general-info-submit' onClick={(e) => {
                        e.preventDefault();
                        const generalForm = document.getElementById('general-info-form')
                        const generalFormElements = Array.from(generalForm.elements);
                        const generalInfo = {}
                        generalFormElements.forEach(element => {
                            if (element.name) { //ONLY STORE ELEMENTS WITH NAME ATTRIBUTES.
                            generalInfo[element.name] = element.value;
                            }
                        });
                        onChange(generalInfo)
                        setDisabled(!disabled);
                    }}>{buttonState}</button>
            </form>
        </div>
    
    </>)
}


export {GeneralInfo};