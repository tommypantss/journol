# Journol v1.0.2

The smart logging library you've always wanted

## Introduction

Journol is a logging library that allows you to log events and messages in a smart and efficient way. With Journol, you can keep track of all your logs in one place and easily filter and search through them. In future releases, we plan to add MongoDB integration to make logging even more efficient and organized.
Getting Started

To get started with Journol, simply run the following command in your terminal to install the package:

```
npm install journol
```

Once you have installed Journol, you can start logging your events and messages by importing Journol into your project and creating a log object.

```
const Journol = require('journol');
const log = new Journol();
```

## Configuration

Journol requires a Sentry DSN to be provided in order to log your events and messages. You can find your Sentry DSN in the Sentry dashboard. Simply replace your-sentry-dsn in the following code with your Sentry DSN to configure Journol.

```
log.init({
  dsn: 'your-sentry-dsn',
});
```

## Logging Events and Messages

Once you have configured Journol, you can start logging events and messages by using the log object. You can log events and messages using the following methods:

- log.info(message)
- log.warning(message)
- log.error(message)
- log.debug(message)

For example, you can log an info message as follows:

```
log.info('This is an info message');
```

## Search and Filtering

Journol provides powerful search and filtering functionality that allows you to find the logs you need quickly and easily. You can search and filter logs using the following methods:

- log.search(query)
- log.filterByLevel(level)

For example, you can search for all logs that contain the word "error" as follows:

``
const searchResults = log.search('error');
```

And you can filter logs by level as follows:

```
const filteredResults = log.filterByLevel('error');
```

## Future Releases

We are constantly working to improve Journol and make it even more powerful. In future releases, we plan to add MongoDB integration to allow you to store and manage your logs even more efficiently.
Conclusion

Journol is the smart logging library you've always wanted. With its powerful search and filtering functionality, Journol makes logging events and messages a breeze. Try Journol today and experience the power of smart logging!
