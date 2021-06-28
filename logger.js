const winston = require('winston');

const logConfiguration = {
    'transports': [
        new winston.transports.Console()
    ]
};

const logger = winston.createLogger(logConfiguration);

// Log a message
logger.log({
    // Message to be logged
        message: 'Hello, Winston!',
    
    // Level of the message logging
        level: 'info'
    });
    // Log a message
    logger.info('Hello, Winston!');
    