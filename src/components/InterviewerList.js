import React from 'react';
import "components/InterviewerList";
import InterviewerListItem from './InterviewerListItem';


export default function InterviewerList(props) {
  const { interviewers, setInterviewer, interviewer } = props;
  
  const InterviewerList = interviewers.map((item) => {
    return <InterviewerListItem
    key={item.id}
    name={item.name}
    avatar={item.avatar}
    selected={item.name === interviewer}
    setInterviewer={setInterviewer}
    />
  })
console.log("interviewers ---> ", interviewer)
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {InterviewerList}
      </ul>
    </section>
  );
}

