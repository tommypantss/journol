# Journol

## v1.1.2

Added winston exception handling, improved performance and updated documentation.

–––2023/2/7

Journol is the smart logging library you've always wanted. It allows you to log your messages with a high level of accuracy and ease, while also providing advanced searching capabilities and log visualization. With Journol, you can ensure that your logs are well-organized, easily accessible and presented in a manner that is both clear and comprehensive.

[Journol NPM](https://www.npmjs.com/package/journol)

[Journol Github](https://github.com/tommypantss/journol)

## Features

- Logging messages with different levels of severity (error, warn, info, verbose, debug, silly)
- Integration with Sentry for error reporting and tracking
- Advanced log searching with support for full-text search, case sensitivity, and regex patterns
- Log visualization using Chart.js for easy analysis and unde
rstanding of log data
- Ability to search logs by timestamp and level of severity
## Getting Started

To get started with Journol, simply run `npm i journol` in your terminal.

## Using Journol

Journol is easy to use, with just two main functions: logMessage and searchLogs.

`logMessage`

The logMessage function logs a message and the log level. It takes three parameters: message, level, and dsn. The message parameter is the message you want to log. The level parameter is the log level - you can use any of the log levels supported by Winston (error, warn, info, verbose, debug, silly). The dsn parameter is the Sentry DSN (Data Source Name) - if you want to use Sentry to report errors, you need to pass the DSN here. If you don't want to use Sentry, simply pass null or undefined.

Here's an example of how to use the logMessage function:

```
const journol = require('journol');
journol.logMessage('This is a log message', 'info', null);
```

`searchLogs`

The searchLogs function is used to search for logs. It takes one parameter: searchTerm. The searchTerm parameter is the term you want to search for in the logs. The function returns an array of logs that contain the search term.

Here's an example of how to use the searchLogs function:

```
const journol = require('journol');
const logs = journol.searchLogs('error');
console.log(logs);
```

## Log Visualization

Journol uses Chart.js to visualize logs. To use the log visualization feature, you'll need to include Chart.js in your project. Once you've done that, simply pass the logs you want to visualize to Chart.js and it will generate the charts for you.

Here's an example of how to use the log visualization feature:

```
const journol = require('journol');
const logs = journol.searchLogs('error');
const chart = new Chart(logs);
chart.render();
```

## Exception Handling

Journol uses Winston's exception handling to catch and log errors. The errors are logged with the error log level and sent to Sentry (if the Sentry DSN is provided).

Here's an example of how to use the exception handling feature:

```
const journol = require('journol');
try {
  throw new Error('This is an error');
} catch (error) {
  journol.logMessage(error.message, 'error', process.env.SENTRY_DSN);
}
```



## Requirements

    Node.js 8.0.0 or later
    Winston 3.2.0 or later
    Sentry 6.4.0 or later
    Chart.js 2.9.3 or later
    Lodash 4.17.15 or later

## License

Journol is licensed under the MIT license.
