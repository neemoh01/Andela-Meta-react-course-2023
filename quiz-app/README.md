# Quiz App Tasks

Create a new file in src/ named Quiz.js. Note: unless otherwise noted, the rest of the tasks in this module happen in the file Quiz.js.

In the first line of the file, add the line import React, { Component } from 'react' to make React functions available in this file.

On the third line of the file, add the statement let quizData = require('./quiz_data.json')

Create a class named Quiz that extends Component. After that component is created, add export default Quiz as the last line of the file.

Add a render() method to the Quiz class that returns a single <div>. For now, inside of that div, add the text Quiz.

Add a constructor() function to the Quiz class that has props as a parameter. Inside of that constructor, call the super() method and pass props as an argument.

Still inside of the constructor() function, set this.state equal to {quiz_position: 1}.

Now that we've got some data available in the component's state, inside of the single div in the render function of the component, remove the text Quiz, and replace it with a child <div> that has a className of QuizQuestion.

Inside of that div with a className of QuizQuestion, access the first element in the quiz_questions property of the quizData object, and display the instruction_text value.

Now that the Quiz component is displaying something, open up App.js, and import Quiz from ./Quiz.js.

Finally, still in app.js, in the render() function's return statement, replace the <div /> with a <Quiz /> component. Now when you run npm start and visit localhost:3000 in a web browser, you should see the text of the first question.

Create a new file in src/ named QuizQuestion.js.

Still in QuizQuestion.js, at the top of the file, import the React module and Component class from react.

Still in QuizQuestion.js, create a class named QuizQuestion that extends Component. After that component is created, add export default QuizQuestion as the last line of the file.

There's many ways that we can display HTML, but in this project we'd like your HTML to follow this structure, so feel free to copy and paste this into the return of the render() function: <main> <section> <p>// instruction text goes here</p> </section> <section className="buttons"> <ul> //quiz question button logic goes here </ul> </section> </main>

Before we get too far into this file, let's flip back over to Quiz.js and send over the quiz question data as a prop. To start, in Quiz.js import QuizQuestion from ./QuizQuestion.js at the top of the file near your other imports.

Still in Quiz.js, replace the entire div with a className of QuizQuestion with the <QuizQuestion /> component.

In that <QuizQuestion /> component, add a prop named quiz_question that passes the value of the quizData.quiz_questions array at the state's quiz_position minus 1. If you do this right, this will send data for the first question over to the QuizQuestion component.

Back in QuizQuestion.js, in the ul tag, add an li tag that displays the value of this.props.quiz_question.answer_options[0].

Finally, in the first section's paragraph tag, display the instruction_text from this.props. Now when you run npm start and visit localhost:3000 in a web browser, you should see the text of the first question and the text of one of the answer options.

Create a new file in src/ named QuizQuestionButton.js.

In QuizQuestionButton.js, at the top of the file, import the React module and Component class from react.

Still in QuizQuestionButton.js, create a class named QuizQuestionButton that extends Component. After that component is created, add export default QuizQuestionButton as the last line of the file.

Still in QuizQuestionButton.js, in the return of the render() function, create a single li tag that has a single <button> tag as a child. Remember, the parent component has a ul, so you only need the li and button.

Flip back over to QuizQuestion.js and import QuizQuestionButton from ./QuizQuestionButton.js at the top of the file near your other imports.

Still in QuizQuestion.js, replace the li tag and value with the <QuizQuestionButton /> component.

Add a prop named button_text on that QuizQuestionButton component, and send this.props.quiz_question.answer_options[0] as the value.

Now that you're sending button_text as a prop, access that in QuizQuestionButton.js and place it as the text content of the <button> tag.

Create a new file in src/ named QuizEnd.js.

In QuizEnd.js, at the top of the file, import the React module and Component class from react.

Still in QuizEnd.js, create a class named QuizEnd that extends Component. After that component is created, add export default QuizEnd as the last line of the file.

Still in QuizEnd.js, in the return of the render() function, add the following HTML <div> <p>Thanks for playing!</p> <a href=''>Reset Quiz</a> </div>

Now that we've got the QuizEnd component, open up Quiz.js again and import QuizEnd from ./QuizEnd.js at the top of the file near your other imports.

In the render() method's return statement, add the QuizEnd component on the line before the QuizQuestion component (but still a child of the main div).

We only want the QuizEnd component to display when the last quiz question has been answered. We can determine if we're at the last question by checking if the state's quiz_position minus 1 is identical to quizData.quiz_questions.length. Save the result of that check on a single line in a const named isQuizEnd NOTE: that const should be declared inside of the render() method, but above the return statement.

Write a condition in JSX that displays QuizEnd component if the isQuizEnd constant is true. If it is false, display QuizQuestion component keeping the quiz_question prop that's already there. Note: until we get the full logic set up, you can test if this is working by manually setting isQuizEnd to true or false.

The QuizQuestion component is currently only displaying a single button, but we'd like it to iterate through a list of all possible quiz answers and display buttons for each. Start in QuizQuestion.js by finding the ul tag in the render() method. Inside of that ul tag, iterate through each of the quiz_question prop's answer_options by using a map that captures the answer_option and index as local variables.

Inside of the body of that map function, return a QuizQuestionButton component with 2 props: - key with a value of the captured index variable. - button_text with a value of the captured answer_option variable. (replace the existing value that calls this.props...) Make sure that what you're returning doesn't contain an li tag, since that's a part of the QuizQuestionButton component. When you refresh the app, you should now see multiple answer buttons for the first quiz question.

Pressing the buttons still doesn't do anything, so let's work on the logic that advances the question if a button is pressed, and displays the QuizEnd component when no more questions are left. To start, in QuizQuestionButton.js, add a method named handleClick that takes no parameters, and then add an onClick event handler to the button tag, and set the value equal to this.handleClick.bind(this).

Now we need to open QuizQuestion.js and add a method named handleClick that has a parameter named buttonText. Then, add a clickHandler prop to the QuizQuestionButton component, and set the value of that prop to this.handleClick.bind(this).

Next, open up Quiz.js and add a method named showNextQuestion. Then, add a showNextQuestionHandler prop to the QuizQuestion component, and set the value of that prop to this.showNextQuestion.bind(this).

Now that the chain of events is set up, go back to the QuizQuestionButton component's handleClick method, call this.props.clickHandler() and pass in the value of the button_text prop.

In the QuizQuestion component's handleClick() method, write a conditional that checks if the buttonText argument's is identical to this.props.quiz_question.answer, and if it is then call this.props.showNextQuestionHandler().

Finally, back in the Quiz component inside of showNextQuestion method, call this.setState and set the quiz_position key to the current position plus 1.

With the logic we have right now, clicking on an incorrect answer does nothing, so we can add some logic to display an error message. Start in QuizQuestion.js by adding a constructor() function that has props as a parameter and calls the super() method and pass props as an argument.

In QuizQuestion's constructor() function, set the state equal to a JavaScript object with the key incorrectAnswer set to false. We'll use this state to track if the question has been answered correctly.

In the QuizQuestion component's handleClick() method, use this.setState() to set incorrectAnswer to false in the true condition, and true in the false condition.

In between the </section> and </main> tags, add a single line ternary conditional that checks this.state.incorrectAnswer. If true, display a paragraph tag with className='error' and the text Sorry, that's not right. If false, just write null. Now, when you view the working quiz and click on an incorrect answer, the browser should display an error message with red text.

The quiz component is working great, but there's still one missing piece - the Reset Quiz button doesn't currently do anything. We'd like for that button to display the very first quiz question when clicked and start the quiz over. To start, open up QuizEnd.js and add a method named handleResetClick that takes no parameters, and then add an onClick event handler to the a tag, and set the value equal to this.handleResetClick.bind(this).

Now we need to open Quiz.js and add a method named handleResetClick. Then, add a resetClickHandler prop to the QuizEnd component, and set the value of that prop to this.handleResetClick.bind(this).

In the QuizEnd component's handleResetClick() method, call this.props.resetClickHandler().

In the Quiz component's handleResetClick method, use this.setState() to set the quiz_position to 1. Now when you view the quiz in the browser, that Reset Quiz link should take you back to the first quiz question. Congratulations on making it to the end!
