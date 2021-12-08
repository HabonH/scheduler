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
- Appointment/Header
- Appointment/Empty
- Appointment/Show
- Appointment/Form
- Appointment/Status
- Appointment/Error
- Appointment/Confirm

### Button

- State: n/a
- Props: 
  - Confirm (uses the confirm prop to apply the .button--confirm modifier class)
  - Danger (uses the danger prop to apply the .button--danger modifier class)
  - Clickable (uses the onClick prop to handle the button click event)
  - Disabled (uses the disabled prop to apply the disabled attribute to the button element)

- Used by: components/Button

### DayList

- State:
- Props:
  - days (Array: a list of day objects. Each object includes an id, name, and spots)
  - day (String: the currently selected day)
  - setDay (Function: accepts the name of the day eg. "Monday", "Tuesday", etc.)
- Used by: components/DayList, it renders a list of components/DayListItem

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
- Used by:

### InterviewerListItem

- State:
- Props:
- Used by:

### Appointment

- State:
- Props:
- Used by:

### Appointment/Header

- State:
- Props:
- Used by:

### Appointment/Empty

- State:
- Props:
- Used by:

### Appointment/Show

- State:
- Props:
- Used by:

### Appointment/Form

- State:
- Props:
- Used by:

### Appointment/Status

- State:
- Props:
- Used by:

### Appointment/Error

- State:
- Props:
- Used by:

### Appointment/Confirm

- State:
- Props:
- Used by: