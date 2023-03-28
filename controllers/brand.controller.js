const Brands = require('../models/brand.model');
const { createBrandService, getAllBrandService, getBrandByIdService, updateBrandByIdService } = require('../services/brand.service');

const createBrand = async (req, res) => {
    try {
        const result = await createBrandService(req.body);
        res.status(201).json({
            status: "success",
            message: "Brand is successfully created."
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Couldn't created the brand."
        })
    }
}

const getAllBrands = async (req, res) => {
    try {
        const brands = await getAllBrandService();
        res.status(200).json({
            status: "success",
            data: brands
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the brands."
        })
    }
}

const getBrandById = async (req, res) => {
    try {
        const brand = await getBrandByIdService(req.params.id);
        res.status(200).json({
            status: "success",
            data: brand
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the brands."
        })
    }
}

const updateBrandById = async (req, res) => {
    try {
        const result = await updateBrandByIdService(req.params.id, req.body);
        res.status(200).json({
            status: "success",
            message: "Brand is successfully updated."
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Couldn't update the brands."
        })
    }
}


module.exports = { createBrand, getAllBrands, getBrandById, updateBrandById }