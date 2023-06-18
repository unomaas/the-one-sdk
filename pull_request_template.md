Please answer the following questions about your work:


0 - What language did you program in?
- TypeScript.  TypeScript is ideal for projects like this one because it provides static types, making the code more robust and easier to debug, and is ideal in any sized-scale of projects.


1 - Have you manually tested the SDK?
Of course!  `One does not simply walk`... I mean, one does not confirm that it's working without testing it first.  I tested the SDK by running the demo app locally and compiling with TypeScript: `sudo npm link ../sdk-demo` --> `tsc` --> `node dist/app.js`. 


2 - Did you add a test suite? If so, how will we use it? If not, why?
I did!	I used Jest to add unit tests the SDK.  You can run the tests with `npm run test`. 


3 - Did you use any 3rd party library? Why did you use it? What are the tradeoffs?
Yes, third-party libraries like 'microbundle' and 'isomorphic-unfetch' were used in the SDK to enable bundling the SDK in different formats and to make HTTP requests in both Node.js and browser environments, respectively. The tradeoff is that 'microbundle' might not be as flexible as other bundlers like Webpack, and 'isomorphic-unfetch' might not be as feature-rich as other HTTP libraries like Axios.


4 - Do you feel this SDK makes it easier to interact with the API?
Absolutely.  The SDK provides a streamlined, method-based approach to interact with the API, making it easier to understand, test, and use -- as all SDK's should.


5 - If you had more time, what else would you add?
I would've really loved to add API testing with Supertest or Cypress, to confirm the API endpoints are functional.  I would've also liked to have hosted a Next.js web demo that uses the SDK with simple buttons to call and display the data.  


6 - What would you change in your current SDK solution?
I would really have liked to have the JSDoc comments carry through to the client-end with the npm install, but I'll settle for clear documentation in my README.md file.  I would also like to have added more testing, as mentioned above, but I think I covered the most important ones.


7 - On a scale of 1 to 10 (10 being the highest), how would you rate this solution?
At the risk of not wanting to hit perfection, I'd give it a 8-9.  I'm really proud of the work I did, but I know there's always room for improvement.  The current implementation is a very clean, easy-to-use, and minimalistic SDK that I think serves the demo's purpose well.


8 - Anything else we should keep in mind when we evaluate the project?
I actually had a blast doing this, thank you for the opportunity!  I really enjoy making agnostic tooling and considering every possible use case; which is why I created methods for all API endpoints, and not just the two in the instructions.  I hope you enjoy reviewing my work as much as I enjoyed making it.  Cheers! 
