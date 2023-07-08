const moment = require("./extensãoPSOfficeAgile/moment");

var exemplo = ['00:45', '00:30', '00:30', '00:15', '00:30', '01:00', '00:30', '01:00', '01:00', '00:30', '00:30',
    '01:00', '01:00', '00:30', '00:30', '00:30', '03:30', '01:00', '01:00', '03:30', '08:40'];

let total = moment.duration(0);

exemplo.forEach(element => {
    total.add(moment.duration(element))
});

console.log(`${Math.trunc(total.asHours()).toString().padStart(2, '0')}:${total.minutes().toString().padStart(2, '0')}`)