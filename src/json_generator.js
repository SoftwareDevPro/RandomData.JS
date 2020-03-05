
const fs = require("fs");

// the configuration for this generator
const cfg = require("./json_generator.config");

const out_name = cfg.fields.indexOf('name') != -1;
const out_email = cfg.fields.indexOf('email') != -1;
const out_address = cfg.fields.indexOf('address') != -1;
const out_phone = cfg.fields.indexOf('phone') != -1;

// console.log(out_name);
// console.log(out_email);
// console.log(out_address);
// console.log(out_phone);

const random_funcs = require('./random_data');

// console.log(random_funcs.getRandomAddress())
// console.log(random_funcs.getRandomEmail());
// console.log(random_funcs.getRandomName());
// console.log(random_funcs.getRandomPhoneNumber());

// console.log(cfg.number);
// console.log(parseInt(cfg.number))
// console.log(cfg.filename);
// console.log(cfg)

let num = parseInt(cfg.number) || 100;
let json_file = cfg.filename || './db.json';
//console.log(num)

let data = [];

for (let idx = 0; idx < num; idx++) {

    let data_obj = {};

    if (out_name) {
        data_obj['name'] = random_funcs.getRandomName();
    }
    if (out_name) {
        data_obj['address'] = random_funcs.getRandomAddress();
    }
    if (out_phone) {
        data_obj['phone'] = random_funcs.getRandomPhoneNumber();
    }
    if (out_email) {
        data_obj['email'] = random_funcs.getRandomEmail();
    }

    data.push(data_obj);
}

let data_json = JSON.stringify(data);

fs.writeFileSync(json_file, data_json);



