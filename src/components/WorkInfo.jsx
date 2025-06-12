import '../styles/InfoSections.css'
import { useState, useEffect } from 'react';

function WorkInfo({ defaultInfo, onChange }) {
    const [jobInfo, setJobInfo] = useState({...defaultInfo});

    useEffect(() => {
        setJobInfo({...defaultInfo});
    }, [defaultInfo]);

    function handleChange(e) {
        const updatedInfo = {...jobInfo, [e.target.name]: e.target.value};
        setJobInfo(updatedInfo);
    }

    return (
    <>
        <div className="info-section work-info">
            <h1 className='section-title'>Work experience</h1>
            <form id='work-info-form' className='info-form'>
                <section className="section">
                    <label htmlFor="workplace">
                        <p>Company:<span aria-label="required">*</span></p>
                        <input type="text" name="workplace" id="workplace" maxLength="32" pattern="[A-Za-z]{1,32}" value={jobInfo['workplace']} onChange={handleChange} placeholder="Kitsch" required />
                    </label>
                    <label htmlFor="job-title">
                        <p>Job title:</p>
                        <input type="text" name="job-title" id="job-title" maxLength="32" pattern="[A-Za-z ]{1,32}" value={jobInfo['job-title']} onChange={handleChange} placeholder="Knausgaard" />
                    </label>
                </section>
                <section className="section">
                    <section className="date">
                        <label htmlFor="job-start-date">
                            <p>Start date:</p>
                            <input type="date" name="job-start-date" id="job-start-date" value={jobInfo['job-start-date']} onChange={handleChange} />
                        </label>
                        <label htmlFor="job-end-date">
                            <p>End date:</p>
                            <input type="date" name="job-end-date" id="job-end-date" value={jobInfo['job-end-date']} onChange={handleChange} />
                        </label>
                    </section>
                </section>
                <section className='responsibilities'>
                    <label htmlFor="responsibilities">
                        <p>Responsablities: <span aria-label="required">*</span></p>
                        <textarea type="text" name="responsibilities" id="responsibilities"  maxLength="32" pattern="[A-Za-z]{1,32}" value={jobInfo['responsibilities']} onChange={handleChange} placeholder="sdfbsdfb sdfb" />
                    </label>
                </section>
                <button 
                    type='button' 
                    className='submit-button' 
                    onClick={(e) => {
                        e.preventDefault();
                        setJobInfo({
                            "workplace": "",
                            "job-title": "",
                            "job-start-date": "",
                            "job-end-date": "",
                            "responsibilities": ""
                        })
                        onChange(jobInfo);
                    }}
                >
                    Add
                </button>
            </form>
        </div>
    
    </>)
}

export { WorkInfo };