const dayjs = require("dayjs");

const getTime = 'Posted on ' + dayjs().month() + '/' + dayjs().day() + '/' + dayjs().year() + ' at ' + dayjs().hour() + ':' + dayjs().minute()

module.exports = getTime;