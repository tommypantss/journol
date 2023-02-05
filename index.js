// Import Winston and Sentry
const winston = require('winston');
const Sentry = require('@sentry/node');

// Create a Winston logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ],
  exceptionHandlers: [
    new winston.transports.Console(),
    new Sentry.Handlers.Sentry({
      level: 'error'
    })
  ]
});

// Create a log object
class Log {
  constructor(message, level) {
    this.message = message;
    this.level = level;
    this.timestamp = new Date().toISOString();
  }
}

// Log a message
const logMessage = (message, level, dsn) => {
  if (dsn) {
    Sentry.init({ dsn: dsn });
  }
  const log = new Log(message, level);
  logger.log(level, log);
}

// Search logs
const searchLogs = (searchTerm) => {
  const filteredLogs = logger.transports.console.write.filter(log => log.message.includes(searchTerm));
  return filteredLogs;
}

// Export the logMessage and searchLogs functions
module.exports = {
  logMessage,
  searchLogs
};