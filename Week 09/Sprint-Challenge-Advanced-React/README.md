# Sprint Challenge: Advanced React - Women's World Cup

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored class components, custom hooks, and testing. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that consumes data from an API using a custom hook, displays that data on the DOM, and tests your React components.

The data you will get back from the server will be the Women's World Cup players ranked by search interest from Google Trends, June-July 2019, worldwide - https://googletrends.github.io/data/.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency with ReactJS Fundamentals and your command of the concepts and techniques in the Functional Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit the `ANSWERS.md` file to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] Why would you use class component over function components (removing hooks from the question)?

    <b>Answer:</b> While functional components are clean, minimal, and easy to read - class components are still the gold standard when it comes to older code. In the job environment, it is highly likely that most code has still yet to be transferred to functional components with hooks, from class components. If we are referring to functional components <i>without</i> hooks, then class components are advantageous because they used to be the only way to hold state.

- [ ] Name three lifecycle methods and their purposes.

    <b>Answer:</b> 

    - componentWillMount - cWM runs code prior to the components being rendered to the screen. For example, having an API call running, before the page is finished loading up. 

    - componentDidMount - cDM runs code as soon as components are rendered to the screen. This is useful in situations where you may want to grab information during the inital rendering phase, that won't be retrievable after re-renders occur.

    - componentWillUpdate - cWU is one of the more usefull lifecycle methods, as it allows you to run code, depending on a change in state. For example, if you are making an API call based on the user's search input, you can re-render/re-call the API each time the search input has changed.

- [ ] What is the purpose of a custom hook?

    <b>Answer:</b> A custom hook has several advantages, mainly being the reinforcement of the D.R.Y principle. Custom hooks allow you to extract repeated code, into a simple, reusable chunk of code. Additionally, custom hooks can be extracted out of your component's file, giving them a cleaner, more minimal feel.

- [ ] Why is it important to test our apps?

    <b>Answer:</b> Testing apps is important to ensure that the functionality is performing as expected. It also ensures that there are no hidden bugs that are unable to be seen from the user's end. Testing allows a deeper dive into your code which helps in troubleshooting, as well as, acting like documentation for someone else reading through your code. This allows them to understand what is happening within your code, and understanding what broke (if something does), and why.

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [ ] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [ ] Run `yarn` to download dependencies.
- [ ] Run the server using `yarn start` or `node server.js`.
- [ ] In a separate terminal cd into the `client` folder and run `yarn install` to download dependencies.
- [ ] Still inside the `client` folder run `yarn start` to run the client application.
- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] PM then will count the HW as done by merging the branch back into master.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [ ] Class component that fetches data from the server you now have running - the data can be fetched from `http://localhost:5000/api/players`
- [ ] Display the player data you receive from the API
- [ ] Build a custom hook and use it in your app - this can be a localStorage hook, a fetch hook, a dark mode hook, or any other hook you would like
- [ ] Write integration tests for your React components

## Stretch Problems

- [ ] Implement another custom hook
- [ ] Use a graphing library to graph the data you received from the API
