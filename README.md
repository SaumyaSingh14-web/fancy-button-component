Steps for running the project.

Clone the repository
run 'npm install' in terminal
run 'npm start' in terminal
Open your browser and enter 'localhost:3000'

run 'npm run storybook' in terminal
Open your browser and enter 'localhost:6006'

---

The styling is done using tailwind css.

There are total five features provided in this "Button" :-
1.TEXT - to modify button name.
2.BUTTONTYPE - to modify button design.
3.SUBMISSONINPROGRESS - to modify boolean value when button is clicked and submission is in progress (the boolean value is set 'true' and a loading symbol is shown on the button otherwise nothing will happen if boolean value is set to 'false').
4.THEME - to modify color theme of the button.
5.TYPE - to modify type of button (button type, submit type, reset type).

The "Button" component is created with several states and types in a real world application :-
->to avoid code repetition
->to reduce code complexity
->to make it understandable for new developers
->making a generic button using storybook helps in proper UI testing also a third developer can understand it without looking at the code
