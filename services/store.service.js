const Stores = require('../models/store.model');

exports.getAllStoresService = async () => {
    const stores = await Stores.find({});
    return stores;
}

exports.createStoreService = async (data) => {
    const store = new Stores(data);
    const result = await store.save();
    return result;
}

exports.updateStoreService = async (storeId, data) => {
    const result = await Stores.updateOne({ _id: storeId }, data, {
        runValidators: true
    })
    return result
}