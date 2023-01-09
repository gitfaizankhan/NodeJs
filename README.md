# NodeJs

**Node.js has a built-in module system that allows you to split your code into smaller, reusable pieces.** 
**A module is a JavaScript file that exports one or more values, such as functions, objects, or primitive values.**


# what is package.json file in nodejs
""
    **The package.json file is a JSON file that contains metadata about a Node.js project. It is used to manage dependencies and scripts for**      
    **building, testing, and running the project.**
    **The file should be located in the root of your project directory. It should contain information such as the project's name, version, and** 
    **dependencies.**
""

# Node.js is single threaded

**Node.js is a single-threaded runtime, which means that it runs on a single thread and uses a single CPU. However, it is designed to support asynchronous, non-blocking I/O, which allows it to handle many concurrent connections efficiently.
In a traditional, blocking I/O model, a thread is occupied while waiting for an I/O operation to complete. This can lead to performance issues when handling a high number of concurrent connections, because each thread can only process one request at a time.
In contrast, the non-blocking I/O model of Node.js allows it to handle many concurrent connections without the need for creating additional threads. When an I/O operation is initiated, the thread sends the request and then continues to execute the next line of code, rather than waiting for the response. When the response is received, an event is triggered, and a callback function is executed to handle the response.
This allows Node.js to efficiently handle a high number of concurrent connections, but it also means that it is not well suited for certain types of tasks that are computationally intensive or that block the thread for a long time.**

# what is nodemon package in Node.js

**nodemon is a utility that automatically restarts a Node.js application when file changes are detected. It is designed to simplify the development process by eliminating the need to manually restart the application after making changes to the code.**

## To use nodemon, you need to install it as a development dependency in your project:
### npm install --save-dev nodemon


## Once it is installed, you can use it to run your Node.js application by using the nodemon command instead of the node command:
### nodemon index.js

**nodemon will run your application and then monitor the files in your project for changes. When a change is detected, it will automatically restart the application. This can save you a lot of time and effort during development, as you don't have to manually stop and restart the application every time you make a change.**

## You can also specify which files or directories should be monitored by nodemon using the --watch flag. For example:
### nodemon --watch src index.js

***This will cause nodemon to only restart the application when changes are made to files in the src directory.***