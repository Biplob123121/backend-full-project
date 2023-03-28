const Brands = require('../models/brand.model')

exports.createBrandService = async (data) => {
    const brand = new Brands(data);
    const result = await brand.save();
    return result;
}

exports.getAllBrandService = async () => {
    const brands = await Brands.find({}).select('-products -suppliers');
    return brands;
}

exports.getBrandByIdService = async (brandId) => {
    const brand = await Brands.findOne({ _id: brandId })
    return brand;
}

exports.updateBrandByIdService = async (brandId, data) => {
    const result = await Brands.updateOne({ _id: brandId }, data, {
        runValidators: true
    })
    return result;
}