// import '../styles/InfoSections.css'
// import { useState } from "react"

function WorkItem({ jobInfo, editJob, deleteJob }) {
    // const [disabled, setDisabled] = useState(false)

    return (
    <>
        <section className="work-item">
            <section className="work-item-info">
                <h3 className="company-name">{jobInfo['workplace']}</h3>
                <p><i>{jobInfo["job-title"]}</i></p>
                <p>Started: {jobInfo["job-start-date"]}</p>
                <p>Ended: {jobInfo["job-end-date"]}</p>
                <p>Responsibilities: {jobInfo["responsibilities"]} </p>
            </section>
            <div className="item-edit-buttons">
                <button type="button" onClick={() => editJob(jobInfo)}>edit</button>
                <button type="button" onClick={() => deleteJob(jobInfo)}>delete</button>
            </div>
        </section>
    </>)
}


export {WorkItem};