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

    const { connectDB } = require('../src/utils/db');
    await connectDB();

    switch (testMethod) {
        case 'test-connect':
            console.log('test connect');
            break;
        case 'test-create':
            resp = await require('../src/handlers/master/company').addCompany({
                body: {
                    name: 'PT Sample 02',
                    value: { info: 'sample 002' }
                }
            });
            console.log(resp);
            break;
            break;
        case 'test-list':
            resp = await require('../src/handlers/master/company').listCompany();
            console.log(resp.map(m => m.name));
            break;
        case 'test-detail':
            resp = await require('../src/handlers/master/company').detailCompany({ params: { id: '670463743430cf9f1431b1dd' } });
            console.log(resp.id, resp.name, resp.value);
            break;
        case 'test-update':
            resp = await require('../src/handlers/master/company').updateCompany({
                params: { id: '670463743430cf9f1431b1dd' },
                body: {
                    name: 'PT Sample 02 Update v4',
                }
            });
            console.log(resp);
            break;
        case 'test-delete':
            resp = await require('../src/handlers/master/company').deleteCompany({ params: { id: '67035e4c7431ad7f8c8d3993' } });
            break;
        default:
            break;
    }

    const duration = Date.now() - dateStart;

    if (resp) console.log(resp);
    console.log('-- duration --', duration);
    process.exit(0);
})();
