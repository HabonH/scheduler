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

# Scheduler project breakdown

## Components

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

- State: n/a
- Props: 
  - Confirm (uses the confirm prop to apply the .button--confirm modifier class)
  - Danger (uses the danger prop to apply the .button--danger modifier class)
  - Clickable (uses the onClick prop to handle the button click event)
  - Disabled (uses the disabled prop to apply the disabled attribute to the button element)

- Used by: components/Button, Appointment/Confirm, 

### DayList

- State:
- Props:
  - days (Array: a list of day objects. Each object includes an id, name, and spots)
  - day (String: the currently selected day)
  - setDay (Function: accepts the name of the day eg. "Monday", "Tuesday", etc.)
- Used by: components/App and components/DayList, they render a list of components/DayListItem

### DayListItem

- State:
- Props:
  - name (String: the name of the day)
  - spots (Number: the number of spots remaining and to determine if the day is full ie. if props.spots is 0, the day is full)
  - selected (Boolean: true or false declaring that this day is selected)
  - setDay (Function: accepts the name of the day eg. "Monday", "Tuesday", etc.)
- Used by: components/DayListItem 

### InterviewerList

- State:
- Props:
  - interviewers (Array: an array of objects as seen above)
  - setInterviewer (Function: a function that accepts an interviewer id. This function will simply be passed down to the InterviewerListItem)
  - interviewer (Number: a number that represents the id of the currently selected interviewer)
- Used by:

### InterviewerListItem

- State:
- Props:
  - id (Number: the id of the interviewer)
  - name (String: the name of the interviewer)
  - avatar (URL: a url to an image of the interviewer)
  - selected (Boolean: determines if an interviewer is selected or not and displays the name and applies appropriate styles if selected.)
  - setInterviewer (Function: is run when the InterviewerListItem is clicked. This function receives the interviewer's id as an argument. It sets the selected
  interviewer.)
- Used by: 

### Appointment

- State:
- Props:
- Used by: Header, Empty, Show, Form, Status, Error and Confirm components

### Appointment/Header

- State:
- Props: 
  - time (String: the time of the appointment (e.g "12pm"))
- Used by: component/Appointment

### Appointment/Empty

- State:
- Props: onAdd (Function: to be called when the user clicks to edit an interview)
- Used by: component/Appointment

### Appointment/Show

- State:
- Props:
  - student (String: eg. "Lydia Miller-Jones")
  - interviewer (Object: we can use the interview object that already exists in stories/index.js for this)
  - onEdit (Function: to be called when the user clicks the Edit button)
  - onDelete (Function: to be called when the user clicks the Delete button)
- Used by:

### Appointment/Form

- State:
- Props:
  For Edit story, Form uses:
  - student (String)
  - interviewers (Array)
  - interviewer (Number)
  - onSave (Function)
  - onCancel (Function)
  For Create story, Form uses:
  - interviewers (Array)
  - onSave (Function)
  - onCancel (Function)
- Used by:

### Appointment/Status

- State:
- Props: message (String: eg. "Deleting")
- Used by: 

### Appointment/Error

- State:
- Props:
  - message (String: eg. "Could not delete appointment.")
  - onClose (Function: to be called when the user clicks the Close button)
- Used by:

### Appointment/Confirm

- State:
- Props:
  - message (String: eg. "Delete the appointment?")
  - onConfirm (Function: to be called when the user clicks the Confirm button)
  - onCancel (Function: to be called when the user clicks the Cancel button)
- Used by: component/Appointment