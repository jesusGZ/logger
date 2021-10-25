const configV = require("../model/constans/config");
const { createLogger, format, transports, config } = require('winston');

// Import mongodb
require('winston-mongodb');

module.exports = createLogger({
    transports: [

        // File transport
        new transports.File({
            filename: 'logs/server.log',
            format: format.combine(
                format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
                format.align(),
                format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
            )
        }),

        // MongoDB transport
        new transports.MongoDB({
            level: 'error',
            //mongo database connection link
            db: `mongodb://${configV.dbhost}:${configV.dbport}/${configV.db}`,
            options: {
                authSource: 'admin',
                user: `${configV.user}`,
                password: `${configV.pass}`,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            // A collection to save json formatted logs
            collection: 'server_logs',
            format: format.combine(
                format.timestamp(),
                // Convert logs to a json format
                format.json())
        })]
});


const usersLogger = createLogger({
    transports: [
        new transports.File({
            filename: 'users.log',
            levels: 'ghh',
            format: format.combine(
                format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
                format.align(),
                //format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
            )
        }),

        new transports.MongoDB({
            levels: 'error',
            //mongo database connection link
            db: `mongodb://${configV.dbhost}:${configV.dbport}/${configV.db}`,
            options: {
                authSource: 'admin',
                user: `${configV.user}`,
                password: `${configV.pass}`,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            // A collection to save json formatted logs
            collection: 'server_logsPb',
            levels: ['info', 'error'],
            format: format.combine(
                format.timestamp({ format: 'MMM-DD-YYYY'}),
                // Convert logs to a json format
                format.json(),
                format.metadata())
        })
    ]
});

const transactionLogger = createLogger({
    transports: [
        new transports.File({ filename: 'transaction.log' })
    ]
});

module.exports = {
    usersLogger: usersLogger,
    transactionLogger: transactionLogger
};



