import "../styles/Preview.css"
import pfp from '../assets/pfp.png';
import { EducationItem } from "./EducationItem";
import { WorkItem } from "./WorkItem";

function Preview({generalInfo, educationArray, editEducation, deleteEducation, workArray, editJob, deleteJob }) {
    return (
        <>
            <div className="preview">
                <section className="left">
                    <img src={pfp} alt="User profile picture" className="pfp" />
                    <section className="contact-info">
                        <h2 className="title">Contact information</h2>
                        <p>{generalInfo.age === undefined ? '__' : generalInfo['age']} years-old</p>
                        <p>✉️ {generalInfo.email === undefined ? 'someone@company.abc' : generalInfo['email']}</p>
                        <p>📞 {generalInfo.phone === undefined ? '123-456-7890' : generalInfo['phone']}</p>
                        <p>📍 {generalInfo.address === undefined ? '123 Place Hldr' : generalInfo['address']}</p>
                    </section>
                    <section className="education">
                        <h2 className="title">Education</h2>
                        {educationArray.length > 0 ? educationArray.map((schoolInfo) => <EducationItem schoolInfo={schoolInfo} editEducation={editEducation} deleteEducation={deleteEducation} />) : '<<Your education history goes here>>'}
                    </section>
                </section>
                <section className="right">
                    <section className="preview-fullname">
                        <h1 className="preview-fname">{generalInfo['first-name'] === undefined ? 'First Name' : generalInfo['first-name']}</h1>
                        <h1 className="preview-surname">{generalInfo.surname === undefined ? 'Surname' : generalInfo.surname}</h1>
                    </section>
                    <section className="work-experience">
                        <h2 className="title">Work experience</h2>
                        {workArray.length > 0 ? workArray.map((jobInfo) => <WorkItem jobInfo={jobInfo} editJob={editJob} deleteJob={deleteJob} />) : '<<Your work history goes here>>'}
                    </section>
                </section>
            </div>
        </>
    )
}

export { Preview }