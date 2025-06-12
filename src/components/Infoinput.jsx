import "../styles/Infoinput.css"
import { useState } from "react"
import { GeneralInfo } from "./GeneralInfo"
import { WorkInfo } from "./WorkInfo"
import { EducationInfo } from "./EducationInfo"
import { Preview } from "./Preview"

function InfoInput() {
    // const [count, setCount] = useState(0)
    // const generalForm = document.getElementById('general-info-form');
    const [ generalInfo, setGeneralInfo ] = useState({});
    const [ educationArray, setEducationArray] = useState([]);
    const [ editEduInfo, setEditEduInfo] = useState({index: -1, info: {}});
    const [ workArray, setWorkArray] = useState([]);
    const [ editJobInfo, setEditJobInfo] = useState({index: -1, info: {}});

    function saveGeneralInfo(form) {
      setGeneralInfo({...form});
      // console.log(form);
    }

    function addEducationItem(item) {
      const educationItems = educationArray;
      if (editEduInfo.index === -1) {
        educationItems.push(item);
      } else {
        educationItems.splice(editEduInfo.index, 1, item);
      }
      setEducationArray(educationItems);
      setEditEduInfo({index: -1, info: {}})
      console.log(educationArray)
    }

    function editEducationItem(item) {
      for (let i=0; i<educationArray.length; i++) {
        if (educationArray[i] === item) {
          window.scrollTo(0, 0);
          setEditEduInfo({index: i, info: item});
        }
      }
    }

    function deleteEducationIitem(item) {
      for (let i=0; i<educationArray.length; i++) {
        if (educationArray[i] === item) {
          const educationItems = educationArray;
          educationItems.splice(i, 1);
          setEducationArray(educationItems);
          setEditEduInfo({index: -1, info: {}});
          console.log(educationArray)
        }
      }
    }

    function addWorkItem(item) {
      const workItems = workArray;
      if (editJobInfo.index === -1) {
        workItems.push(item);
      } else {
        workItems.splice(editJobInfo.index, 1, item);
      }
      setWorkArray(workItems);
      setEditJobInfo({index: -1, info: {}})
    }

     function editJobItem(item) {
      for (let i=0; i<workArray.length; i++) {
        if (workArray[i] === item) {
          window.scrollTo(0, 0);
          setEditJobInfo({index: i, info: item});
        }
      }
    }

    function deleteJobItem(item) {
      for (let i=0; i<workArray.length; i++) {
        if (workArray[i] === item) {
          const workItems = workArray;
          workItems.splice(i, 1);
          setWorkArray(workItems);
          setEditJobInfo({index: -1, info: {}});
        }
      }
    }

    return (
      <>
        <div className='inputContainer'>
            <GeneralInfo 
              onChange={saveGeneralInfo}
            />
            <EducationInfo
              defaultInfo={editEduInfo.info}
              onChange={addEducationItem}
            />
            <WorkInfo 
              defaultInfo={editJobInfo.info}
              onChange={addWorkItem}
            />
        </div>
        <Preview 
          generalInfo={generalInfo}
          educationArray={educationArray}
          editEducation={editEducationItem}
          deleteEducation={deleteEducationIitem}
          workArray={workArray}
          editJob={editJobItem}
          deleteJob={deleteJobItem}
        />
      </>
    )
  }
  
  export default InfoInput;