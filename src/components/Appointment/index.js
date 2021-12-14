import React, { Fragment } from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Status from "./Status";
import useVisualMode from "hooks/useVisualMode";
import Button from "components/Button";
import Form from "./Form";

export default function Appointment(props) {
  const { id, time, interview, interviewers, bookInterview, cancelInterview } = props;
  
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";

  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    bookInterview(id, interview).then(() => {
      transition(SHOW);
    });
  };

  const onDelete = () => {
    transition(DELETING)
    cancelInterview(id)
    .then(() => {
      transition(EMPTY)
    })

  }

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === SHOW && (
        <Show
          id={id}
          student={interview.student}
          interviewer={interview.interviewer.name}
          onDelete={onDelete}
        />
      )}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SAVING && <Status message={"SAVING"} />}
      {mode === DELETING && <Status message={"DELETING"} />}
      {mode === CREATE && (
        <Form interviewers={interviewers} onSave={save} onCancel={back} />
      )}
    </article>
  );
}
