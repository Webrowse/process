const roadmapData = {
    1: {
      title: 'Rust Foundations',
      topics: [
        'Ownership & Borrowing',
        'Structs & Enums',
        'Pattern Matching (match)',
        'Error Handling: Result & Option',
        'Basic File I/O (std::fs)'
      ],
      project: {
        name: 'CLI To-Do List Manager',
        tasks: [
          'Add tasks',
          'List tasks',
          'Mark tasks complete',
          'Save tasks to file (basic persistence)'
        ]
      },
      miniExercises: [
        'Write a Rust program to demonstrate Ownership rules by passing variables to functions and returning them.',
        'Implement a simple borrow checker simulation using Rust functions.',
        'Create a function that attempts to use dangling references and explain the compilation error.',
        'Build a small CLI that uses Structs to model a Book entity with title, author, and ISBN.',
        'Implement a calculator using Enums to represent different operations.',
        'Write a program that matches against various file types using Pattern Matching.',
        'Create a Rust function to handle file errors using Result and Option.',
        'Implement a command-line file reader that handles errors gracefully.',
        'Write a program demonstrating mutable and immutable borrows simultaneously.',
        'Create a basic file I/O program that reads from a file and writes to another file.'
      ],
      interviewQuestions: [
        'What is Ownership in Rust?',
        'Explain Borrowing and how it differs from Ownership.',
        'What are the rules of References in Rust?',
        'How do you avoid dangling references in Rust?',
        'Explain the concept of Pattern Matching in Rust.',
        'What are the key differences between Structs and Enums in Rust?',
        'How is error handling implemented in Rust using Result and Option?',
        'Describe the difference between panic! and Result/Error handling.',
        'What is the difference between Move Semantics and Copy Semantics?',
        'How can you implement custom error types in Rust?'
      ]
    },
  
    2: {
      title: 'Rust Backend Basics',
      topics: [
        'Collections (Vec, HashMap)',
        'Traits & Generics (basics)',
        'Modular Code Structure (mod, pub)',
        'File Persistence (optional)'
      ],
      project: {
        name: 'Mini URL Shortener',
        tasks: [
          'Accept long URL',
          'Generate short code',
          'Retrieve URL by short code',
          'Store in HashMap or file'
        ]
      },
      miniExercises: [
        'Create a HashMap-based key-value store.',
        'Implement a Vec-based stack with push and pop operations.',
        'Write a program to demonstrate basic File I/O using file persistence.',
        'Implement a function that uses Generics to work with multiple data types.',
        'Create a Rust module with public and private functions.',
        'Implement a simple command-line calculator using Traits.',
        'Write a function that reads a file line-by-line and counts word frequencies using HashMap.',
        'Build a Rust module for URL shortening with HashMap-based persistence.',
        'Create a CLI that accepts various data structures (Vec, HashMap) and manipulates them.',
        'Demonstrate how to use Traits to implement a shared behavior between Structs.'
      ],
      interviewQuestions: [
        'What are Collections in Rust and how do they differ?',
        'Explain the concept of Traits and how they are used.',
        'What are Generics and why are they important in Rust?',
        'How do you create and use modules in Rust?',
        'What is the difference between pub and private visibility modifiers?',
        'How does HashMap work internally in Rust?',
        'Explain the concept of ownership when working with collections.',
        'What is the difference between borrowing and cloning data in Rust?',
        'How do you persist data to a file in Rust?',
        'What is the purpose of the Result type when handling files?'
      ]
    },
    3: {
        title: 'Rust Async & Error Handling',
        topics: [
          'Error Propagation',
          'Logging (tracing or log)',
          'Async/Await (basic usage)',
          'HTTP Servers (axum, warp, actix-web)'
        ],
        project: {
          name: 'Tiny Weather API Proxy',
          tasks: [
            'Accept city name (query param)',
            'Fetch weather from external API (async fetch)',
            'Return JSON response',
            'Handle errors gracefully'
          ]
        },
        miniExercises: [
          'Implement basic error propagation using ? operator.',
          'Create a logging system using tracing or log.',
          'Write an async function that performs file read and write.',
          'Implement an HTTP server with basic routing using axum.',
          'Create an async task scheduler.',
          'Write a function that demonstrates async/await with concurrency.',
          'Implement a CLI tool that makes async HTTP requests.',
          'Build a simple JSON API with warp.',
          'Implement graceful error handling in a web server.',
          'Create a weather proxy API that retrieves data from a remote service.'
        ],
        interviewQuestions: [
          'What is async/await in Rust and how does it work?',
          'How is error handling implemented in Rust?',
          'What are the common libraries for building HTTP servers in Rust?',
          'What is the purpose of logging in Rust applications?',
          'Explain the ? operator in Rust.',
          'How does concurrency work in Rust?',
          'What are the differences between threads and async tasks?',
          'What is the difference between panic! and Result/Error handling?',
          'Explain how to use tokio for async programming.',
          'What is a common pattern for error handling in Rust?'  
        ]
      
    }
  };
  
  export default roadmapData;
  