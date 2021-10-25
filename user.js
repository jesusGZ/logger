const {usersLogger, transactionLogger} = require('./utils/logger');

usersLogger.info('User created!',
     {user_id: `xx`,
     user_name: `rtgtgr`,
     user_email: `egt@feg`});

usersLogger.error(`Unable to find user: Sql error`);

