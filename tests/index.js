const { config } = require('dotenv');

(async () => {
    config();

    const testMethod = process.argv[2];
    if (!testMethod) {
        console.log('no test parameter', '\n');
        return;
    }

    const dateStart = Date.now();
    let resp;

    const connectDB = require('../src/utils/db');
    await connectDB();

    switch (testMethod) {
        case 'test-connect':
            console.log('test connect');
            break;
        case 'test-create':
            var Company = require('../src/models/company');
            var company = new Company({ name: 'PT C' });
            await company.save();
            break;
        case 'test-list':
            var Company = require('../src/models/company');
            resp = await Company.find();
            break;
        default:
            break;
    }

    const duration = Date.now() - dateStart;

    if (resp) console.log(resp);
    console.log('-- duration --', duration);
    process.exit(0);
})();
