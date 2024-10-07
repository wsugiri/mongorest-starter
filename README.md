# mongorest-starter
NodeMongoose-Kit is a boilerplate starter project designed to simplify the development of RESTful APIs using Node.js and Mongoose. This project provides a solid foundation for building scalable and efficient web applications, making it ideal for developers looking to quickly set up a server-side application with MongoDB integration

## Available Test Cases

This project supports several test cases for managing company data through different operations. You can run these test cases using `npm` commands. Below is a list of the available test cases and their descriptions.

### How to Run Test Cases

To run a specific test case, use the following command:

```bash
npm test <test-case>
```

### Test Cases

#### test-connect:
 - Description: Tests the connection.
 - Command: npm test test-connect

#### test-create:
 - Description: Creates a new company record with a predefined sample.
 - Command: npm test test-create
 - Example output: Adds a company with the name "PT Sample 02" and some sample data.

#### test-list:
 - Description: Retrieves a list of all companies and logs their names.
 - Command: npm test test-list
 - Example output: A list of company names.

#### test-detail:
 - Description: Retrieves the details of a specific company using its ID.
 - Command: npm test test-detail
 - Example output: Logs the company's ID, name, and value.

#### test-update:
 - Description: Updates a specific company record using its ID.
 - Command: npm test test-update
 - Example output: Updates the company name to "PT Sample 02 Update v4".

#### test-delete:
 - Description: Deletes a specific company record using its ID.
 - Command: npm test test-delete
 - Example output: Deletes the company with the ID '67035e4c7431ad7f8c8d3993'.

## Notes
 - Make sure the MongoDB connection is properly set up and running.
 - Replace the sample IDs in the commands with real IDs from your database where necessary.