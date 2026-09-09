# Multi-step Form
A responsive multi-step form built with React and TypeScript. It was created as the first project for my developer portfolio.

## Tech stack
- Vite
- React 19
- TypeScript
- HTML
- CSS
- Material UI Date Picker
- Day.js

## Features
- Three steps:
    1. Personal information
    2. Address and contact information
    3. Data summary
- Step progress indicator
- Form validation before moving to the next step:
    - Required fields and checkbox
    - Date format and validity, including prevention of future dates
    - Italian fiscal code format
    - Phone number format
    - E-mail format
- Material UI Date Picker for a consistent date selection experience across browsers
- Confirmation modal after submission
- Responsive layout for desktop and mobile

## Project structure
```text
src/
├── components/     Components 
├── constants/      Configuration and static data
├── layouts/        Layouts 
├── types/          TypeScript types 
├── validators/     Validators
```

## What I practiced
- Implementing a multi-step form
- Managing form state with React useState
- Creating reusable form components
- Handling controlled inputs
- Organizing validation logic into reusable functions
- Working with Material UI Date Picker and Day.js
- Creating a confirmation modal with React Portal
- Responsive layout with CSS
- Type-safe development with TypeScript