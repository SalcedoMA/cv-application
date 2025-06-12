import '../styles/InfoSections.css'
import { useState, useEffect } from 'react';

function EducationInfo({ defaultInfo, onChange }) {
    const [schoolInfo, setSchoolInfo] = useState({...defaultInfo});

    useEffect(() => {
        setSchoolInfo({...defaultInfo});
    }, [defaultInfo]);

    function handleChange(e) {
        const updatedInfo = {...schoolInfo, [e.target.name]: e.target.value};
        setSchoolInfo(updatedInfo);
    }

    return (
        <div className="info-section education-info">
            <h1 className='section-title'>Education information</h1>
            <form id='education-info-form' className='info-form'>
                <section className="section">
                    <label htmlFor="school-name">
                        <p>School name:<span aria-label="required">*</span></p>
                        <input 
                            type="text" 
                            name="school-name" 
                            id="school-name" 
                            maxLength="32" 
                            pattern="[A-Za-z\s]{1,32}" 
                            value={schoolInfo["school-name"] || ''} 
                            onChange={handleChange} 
                            placeholder="Kitsch" 
                            required 
                        />
                    </label>
                    <label htmlFor="degree">
                        <p>Degree:</p>
                        <input 
                            type="text" 
                            name="degree" 
                            id="degree" 
                            maxLength="32" 
                            pattern="[A-Za-z\s]{1,32}" 
                            value={schoolInfo["degree"] || ''} 
                            onChange={handleChange} 
                            placeholder="Knausgaard" 
                        />
                    </label>
                </section>
                <section className="section">
                    <label htmlFor="education-level">
                        <p>Level of education <span aria-label="required">*</span></p>
                        <select 
                            name="education-level" 
                            id="education-level" 
                            value={schoolInfo["education-level"] || ''} 
                            onChange={handleChange} 
                            required
                        >
                            <option value="">Select...</option>
                            <option value="highschool">High School</option>
                            <option value="undergrad">Undergrad</option>
                            <option value="masters">Masters</option>
                            <option value="doctorate">Doctorate</option>
                        </select>
                    </label>
                    <section className="date">
                        <label htmlFor="start-date">
                            <p>Start date:</p>
                            <input 
                                type="date" 
                                name="start-date" 
                                value={schoolInfo["start-date"] || ''} 
                                id="start-date" 
                                onChange={handleChange} 
                            />
                        </label>
                        <label htmlFor="end-date">
                            <p>End date:</p>
                            <input 
                                type="date" 
                                name="end-date" 
                                value={schoolInfo["end-date"] || ''} 
                                id="end-date" 
                                onChange={handleChange} 
                            />
                        </label>
                    </section>
                </section>
                <button 
                    type='button' 
                    className='submit-button' 
                    onClick={(e) => {
                        e.preventDefault();
                        setSchoolInfo({
                            "school-name": "",
                            "degree": "",
                            "education-level": "",
                            "start-date": "",
                            "end-date": ""
                        })
                        onChange(schoolInfo);
                    }}
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export { EducationInfo };