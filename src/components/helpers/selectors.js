

export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find(item => item.name === day);
  if (!filteredDay) {
    return [];
  }
  const filteredAppointments = filteredDay.appointments.map(arrNum => state.appointments[arrNum]);
  // console.log("Filteredapp.interview --> ", filteredAppointments);
  return filteredAppointments;
}

export function getInterview(state, interview) {

  if (!interview) {
    return null;
  }

  const interviewerID = interview.interviewer;
  const result = { student: interview.student, interviewer: state.interviewers[interviewerID] };

  return result;
}

export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.find(item => item.name === day);
  if (!filteredDay) {
    return [];
  }

  const findInterviewerID = filteredDay.interviewers.map(id => state.interviewers[id]);
  // findInterviewerID.map(interviewer => {interviewer})
  
  console.log("findinterviewerID--> ", findInterviewerID)
  console.log("filteredDay-->v",filteredDay)
  
  return findInterviewerID;
}

