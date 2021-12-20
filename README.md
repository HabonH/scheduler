# Interview Scheduler

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Functional Requirements
- Development focuses on a single page application (SPA) called Interview Scheduler, built using React.
- Data is persisted by the API server using a PostgreSQL database.
- The client application communicates with an API server over HTTP, using the JSON format.
- Jest tests are used through the development of the project.

## Behavioural Requirements
- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
- A user can cancel an existing interview.
- A user can edit the details of an existing interview.
- The list of days informs the user how many slots are available for each day.
- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is presented with a confirmation when they attempt to cancel an interview.
- A user is shown an error if an interview cannot be saved or deleted.
- A user is shown a status indicator while asynchronous operations are in progress.
- When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
- The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Technical Specifications
- React
- Webpack, Babel
- Axios
- Storybook, Webpack Dev Server, Jest, Testing Library

The Scheduler client application created using Create React App. Express is the basis for the Scheduler API server application.

Both servers run concurrently; requests are proxied from the Webpack development server to the [API server](https://github.com/HabonH/scheduler-api).


## Scheduler project breakdown

### Components

- Button
- DayList
- DayListItem
- InterviewerList
- InterviewerListItem
- Appointment
- Appointment/Header: displays the time for the appointment
- Appointment/Empty: allows a user to choose which time slot to book
- Appointment/Show: allows a user to see an existing appointment
- Appointment/Form: 
- Appointment/Status: informs the user that an operation is in progress
- Appointment/Error: informs the user when an error occurs
- Appointment/Confirm: allows a user to confirm a destructive action

### Button

- State: none
- Props: 
  - Confirm (uses the confirm prop to apply the .button--confirm modifier class)
  - Danger (uses the danger prop to apply the .button--danger modifier class)
  - Clickable (uses the onClick prop to handle the button click event)
  - Disabled (uses the disabled prop to apply the disabled attribute to the button element)
- Used by: components/App and components/Form

### DayList

- State: none
- Props:
  - days (Array: a list of day objects. Each object includes an id, name, and spots)
  - value (Attribute: used to determine name and interviewer state from input handle)
  - onChange (Function: used as an event handler to setName of event target (i.e. value) and to set state for interviewer)
- Used by: components/App

### DayListItem

- State: none
- Props:
  - name (String: the name of the day)
  - spots (Number: the number of spots remaining and to determine if the day is full ie. if props.spots is 0, the day is full)
  - selected (Boolean: true or false declaring that this day is selected)
  - setDay (Function: accepts the name of the day eg. "Monday", "Tuesday", etc.)
- Used by: components/DayList

### InterviewerList

- State: none
- Props:
  - interviewers (Array: an array of objects as seen above)
  - onChange (Function: a function that accepts an interviewer id to setInterviewer.)
  - interviewer (Number: a number that represents the id of the currently selected interviewer)
- Used by: components/Form

### InterviewerListItem

- State: none
- Props:
  - id (Number: the id of the interviewer)
  - name (String: the name of the interviewer)
  - avatar (URL: a url to an image of the interviewer)
  - selected (Boolean: determines if an interviewer is selected or not and displays the name and applies appropriate styles if selected.)
  - setInterviewer (Function: is run when the InterviewerListItem is clicked. This function receives the interviewer's id as an argument. It sets the selected
  interviewer.)
- Used by: components/InterviewerList

### Appointment

- State: none
- Props: 
  - id (Number)
  - time (String: the time of the appointment (e.g "12pm"))
  - interview (Object: used by save function to save name of student and interviewer)
- Used by: Header, Empty, Show, Form, Status, Error and Confirm components

### Appointment/Header

- State: none
- Props: 
  - time (String)
- Used by: components/Appointment

### Appointment/Empty

- State: none
- Props: onAdd (Function: to be called when the user clicks to edit an interview)
- Used by: components/Appointment

### Appointment/Show

- State: none
- Props:
  - student (String: eg. "Lydia Miller-Jones")
  - interviewer (Object: we can use the interview object that already exists in stories/index.js for this)
  - onEdit (Function: to be called when the user clicks the Edit button)
  - onDelete (Function: to be called when the user clicks the Delete button)
- Used by: components/Appointment

### Appointment/Form

- State: name, setName, interviewer, setInterviewer, error, setError
- Props:
  - student (String)
  - interviewers (Array)
  - interviewer (Number)
  - onSave (Function)
  - onCancel (Function)
- Used by: components/Appointment

### Appointment/Status

- State: none
- Props: message (String: eg. "Deleting")
- Used by: components/Appointment

### Appointment/Error

- State: none
- Props:
  - message (String: eg. "Could not delete appointment.")
  - onClose (Function: to be called when the user clicks the Close button)
- Used by: components/Appointment

### Appointment/Confirm

- State: none
- Props:
  - message (String: eg. "Delete the appointment?")
  - onConfirm (Function: to be called when the user clicks the Confirm button)
  - onCancel (Function: to be called when the user clicks the Cancel button)
- Used by: components/Appointment