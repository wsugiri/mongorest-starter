const { connectDB } = require('../../utils/db');
const Company = require('../../models/company');

exports.addCompany = async (event) => {
    try {
        await connectDB();
        const company = new Company(event?.body);
        return company.save();
    } catch (err) {
        throw err;
    }
};

exports.listCompany = async (event) => {
    try {
        await connectDB();
        return Company.find();
    } catch (err) {
        throw err;
    }
};

exports.detailCompany = async (event) => {
    try {
        await connectDB();
        return Company.findById(event.params?.id);
    } catch (err) {
        throw err;
    }
};

exports.updateCompany = async (event) => {
    try {
        await connectDB();
        return Company.findByIdAndUpdate(event.params.id, event.body, { new: true });
    } catch (err) {
        throw err;
    }
};

exports.deleteCompany = async (event) => {
    try {
        await connectDB();
        return Company.findOneAndDelete(event.params.id);
    } catch (err) {
        throw err;
    }
};

exports.deleteMany = async (event) => {
    try {
        await connectDB();
        return Company.deleteMany(event.body);
    } catch (err) {
        throw err;
    }
};
