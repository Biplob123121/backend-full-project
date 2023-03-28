const { getAllStoresService, createStoreService, updateStoreService } = require("../services/store.service")

exports.getAllStores = async (req, res) => {
    try {
        const stores = await getAllStoresService();
        res.status(200).json({
            status: "success",
            data: stores
        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: "Coudn't get the all stores."
        })
    }
}
exports.createStore = async (req, res) => {
    try {
        const result = await createStoreService(req.body);
        res.status(201).json({
            status: "success",
            message: "Store is successfully created"
        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: "Coudn't create the store."
        })
    }
}
exports.updateStore = async (req, res) => {
    try {
        const result = await updateStoreService(req.params.id, req.body);
        res.status(200).json({
            status: "success",
            message: "Store is successfully updated."
        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: "Coudn't update the store."
        })
    }
}