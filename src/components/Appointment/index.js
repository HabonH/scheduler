import React, { Fragment } from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Show from './Show';
import Empty from './Empty';

//How does Appointment have access to the values of children components
// Once I deconstruct props, will React know that I want to use the props of Appt to get the prop values in the child component?
export default function Appointment(props) {
  const { id, time, interview } = props;
  console.log("Interview ---> ", interview)
  return (
    <article className="appointment">
      <Fragment>
        {interview ?
          <>
            <Header time={time} />
            <Show
              id={id}
              student={interview.student} 
              interviewer={interview.interviewer.name} />
          </>
          :
          <>
            <Header time={time} />
            <Empty />

          </>
        }
      </Fragment>
    </article>
  );
}


