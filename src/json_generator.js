
const fs = require("fs");

// the configuration for this generator
const cfg = require("./json_generator.config");

const out_name = cfg.fields.indexOf('name') != -1;
const out_email = cfg.fields.indexOf('email') != -1;
const out_address = cfg.fields.indexOf('address') != -1;
const out_phone = cfg.fields.indexOf('phone') != -1;

const random_funcs = require('./random_data');

let num = parseInt(cfg.number) || 100;
let json_file = cfg.filename || './db.json';

let data = {
    data: []
};

for (let idx = 0; idx < num; idx++) {

    let data_obj = {};
    data_obj["id"] = idx + 1;

    if (out_name) {
        data_obj['name'] = random_funcs.getRandomName();
    }
    if (out_address) {
        data_obj['address'] = random_funcs.getRandomAddress();
    }
    if (out_phone) {
        data_obj['phone'] = random_funcs.getRandomPhoneNumber();
    }
    if (out_email) {
        data_obj['email'] = random_funcs.getRandomEmail();
    }

    data["data"].push(data_obj);
}

let data_json = JSON.stringify(data);
fs.writeFileSync(json_file, data_json);





