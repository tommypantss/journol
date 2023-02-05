# Journol

Journol is a logging library for logging events and messages. It makes use of Winston and Sentry to provide a powerful logging solution for your applications.

## Installation

You can install Journol using npm:

```
npm install journol
```

## Usage

To use Journol, you need to include it in your project and initialize it with your Sentry DSN:

```
const journol = require('journol');

journol.logMessage('Hello, Journol!', 'info', 'https://your-sentry-dsn');
```

In this example, logMessage is used to log a message to Journol, and the dsn parameter is used to specify your Sentry DSN.

You can also use Journol to search and filter your logs:

```
const logs = journol.searchLogs('Hello');
console.log(logs);
```

In this example, searchLogs is used to search for logs that include the word "Hello" in the message. The filtered logs are then logged to the console.

For more information and detailed usage examples, please visit our documentation.

## License

Journol is licensed under the MIT License.