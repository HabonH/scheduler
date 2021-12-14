import React, { Fragment } from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import useVisualMode from 'hooks/useVisualMode';
import Button from 'components/Button';
import Form from './Form';


//How does Appointment have access to the values of children components
// Once I deconstruct props, will React know that I want to use the props of Appt to get the prop values in the child component?
export default function Appointment(props) {
  const { id, time, interview, interviewers} = props;
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  )


  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    props.bookInterview(id, interview)
    
  }


  
  return (
    <article className="appointment">
      <Fragment>
        {interview ?
          <>
            <Header time={time} />
            {mode === SHOW && (<Show
              id={id}
              student={interview.student}
              interviewer={interview.interviewer.name} />)}
          </>
          :
          <>
            <Header time={time} />
            {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
            {mode === CREATE && (<Form
            interviewers={interviewers}
            onSave={save}
            onCancel={() => back(EMPTY)}
            />)}
          </>
        }
      </Fragment>
    </article>
  );
}


