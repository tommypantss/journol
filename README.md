# Journol

Journol is the smart logging library you've always wanted. It allows you to log your messages with a high level of accuracy and ease, while also providing advanced searching capabilities and log visualization. With Journol, you can ensure that your logs are well-organized, easily accessible and presented in a manner that is both clear and comprehensive.

[Journol NPM](https://www.npmjs.com/package/journol)

[Journol Github](https://github.com/tommypantss/journol)

# Features

- Logging messages with different levels of severity (error, warn, info, verbose, debug, silly)
- Integration with Sentry for error reporting and tracking
- Advanced log searching with support for full-text search, case sensitivity, and regex patterns
- Log visualization using Chart.js for easy analysis and understanding of log data
- Ability to search logs by timestamp and level of severity

# Installation

```
npm install journol
```

# Usage
## Logging a message

To log a message with Journol, you can use the logMessage function, which accepts three arguments: message, level, and dsn. message is the text that you want to log, level is the severity level of the message (error, warn, info, verbose, debug, silly), and dsn is the Sentry DSN key (optional).

```
const journol = require('journol');

journol.logMessage('This is a test log message', 'info');
```

## Searching logs

Journol provides advanced searching capabilities that allow you to search your logs using full-text search, case sensitivity, and regex patterns. You can search logs using the searchLogs function, which accepts a single argument, searchTerm.

```
const journol = require('journol');

const logs = journol.searchLogs('test');
console.log(logs);
```

## Log visualization

Journol also provides log visualization through the use of Chart.js. This feature allows you to easily analyze and understand your log data. To use this feature, simply pass the logs returned from the searchLogs function to the Chart.js library.

```
const logs = journol.searchLogs('test');
const chartData = {
  labels: logs.map(log => log.timestamp),
  datasets: [
    {
      label: 'Test Logs',
      data: logs.map(log => log.message),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }
  ]
};

const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: chartData
});
```

## Requirements

    Node.js 8.0.0 or later
    Winston 3.2.0 or later
    Sentry 6.4.0 or later
    Chart.js 2.9.3 or later
    Lodash 4.17.15 or later

## License

Journol is licensed under the MIT license.
