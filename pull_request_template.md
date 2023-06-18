Please answer the following questions about your work:

0 - What language did you program in?
- TypeScript.
-- I chose TypeScript because it is a superset of JavaScript, which is the language I am most familiar with. TypeScript also has a lot of great features that make it easier to write and maintain code, providing a better developer experience, especially when working with a large codebase.

1 - Have you manually tested the SDK?
- Of course!  One can't confirm that it's working without testing it first.  
-- I tested the SDK by running the demo app locally and compiling with TypeScript:
--- `sudo npm link ../sdk-demo` --> `tsc` --> `node dist/app.js`

2 - Did you add a test suite? If so, how will we use it? If not, why?

3 - Did you use any 3rd party library? Why did you use it? What are the tradeoffs?
- Yes, I used a few 3rd party libraries described below:
-- I used 'microbundle', a lightweight library to bundle my code with.  I chose this to bundle the SDK into multiple formats, including CommonJS, UMD, and ESM.  This allows the SDK to be used in a variety of environments.  The tradeoff is that it's not as flexible as other bundlers, such as Webpack, but it's a good choice for a small project like this.
-- I used 'isomorphic-unfetch' to make HTTP requests.  I chose this library because it is a lightweight library that works in both Node.js and the browser, allowing developers to use similar syntax throughout the app, and leading to a better developer experience.  The tradeoff is that it is not as feature-rich as other HTTP request libraries, such as Axios, but it's a good choice for a small project like this.

4 - Do you feel this SDK makes it easier to interact with the API?

5 - If you had more time, what else would you add?

6 - What would you change in your current SDK solution?

7 - On a scale of 1 to 10 (10 being the highest), how would you rate this solution?

8 - Anything else we should keep in mind when we evaluate the project?
