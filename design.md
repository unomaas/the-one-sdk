Include details about your SDK design in this file.  


Absolutely, I'm happy to detail some key aspects of the design!  

# Modular Design: 
The SDK was designed with modularity in mind.  Each resource of the LOTR API (Chapters, Characters, Movies, Quotes) has its own TypeScript class within the SDK.  This makes the code easier to maintain and extend in the future.  It also means developers can import and use only what they need from the SDK, leading to potentially leaner applications.

# TypeScript Types: 
For each resource, a TypeScript type was declared (e.g. Character, Chapter, Movie, Quote).  This leverages TypeScript's static type-checking feature, enabling better development-time error checking and more robust code.  TypeScript's types are a powerful way to document what kind of data structures are expected and returned from the SDK's methods.

# Promise-based methods: 
All the SDK methods are Promise-based, meaning they can be used with async/await for easier asynchronous code.  This aligns with modern JavaScript and TypeScript best practices.

# Isomorphic SDK: 
The SDK was designed to work both in a Node.js and a browser environment.  This is achieved through the use of isomorphic libraries like 'isomorphic-unfetch'.  This makes the SDK more versatile and able to be used in a wider range of applications.

# Method Documentation: 
Every method in the SDK has JSDoc comments, which are used to describe the purpose of the method, its parameters, return type, and provide an example of use.  This is crucial for maintaining a good developer experience, as it aids in understanding the functionality and usage of the methods.

# Bundling and Distribution: 
'microbundle' was used to bundle the SDK into multiple formats including CommonJS, UMD, and ESM.  This ensures compatibility with various module loading systems in different environments.

# Error Handling: 
Proper error handling should be implemented when using the SDK.  As of now, the SDK is relying on the error handling provided by 'isomorphic-unfetch', but for a production-ready SDK, error handling could be enhanced to provide more granular and specific errors based on the API responses.