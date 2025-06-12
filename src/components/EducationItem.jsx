// import '../styles/InfoSections.css'
// import { useState } from "react"

function EducationItem({ schoolInfo, editEducation, deleteEducation }) {
    // const [disabled, setDisabled] = useState(false)

    return (
    <>
        <section className="education-item">
            <section className="education-item-info">
                <h3 className="school-name">{schoolInfo['school-name']}</h3>
                <p>Level: {schoolInfo["education-level"]}</p>
                <p>Degree: {schoolInfo["degree"]}</p>
                <p>Started: {schoolInfo["start-date"]}</p>
                <p>Ended: {schoolInfo["end-date"]}</p>
            </section>
            <div className="item-edit-buttons">
                <button type="button" onClick={() => editEducation(schoolInfo)}>edit</button>
                <button type="button" onClick={() => deleteEducation(schoolInfo)}>delete</button>
            </div>
        </section>
    </>)
}


export {EducationItem};