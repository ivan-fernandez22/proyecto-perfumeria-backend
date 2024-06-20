import { ProductModel } from "./models/product.model.js";

export default class ProductDaoMongoDB {
    async getAll(page = 1, limit = 10, title, sort) {
        try {
            const filter = title ? { 'title' : title } : {};
            let sortOrder = {};
            if(sort) sortOrder.price = sort === 'asc' ? 1 : sort === 'desc' ? -1 : null;
            const response = await ProductModel.paginate(filter, {page, limit, sort : sortOrder});
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getById(id) {
        try {
            return await ProductModel.findById(id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async create(obj) {
        try {
            const response = await ProductModel.create(obj);
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(id, obj) {
        try {
            const response = await ProductModel.findByIdAndUpdate(id, obj, {
                new: true,
            });
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

    async delete(id) {
        try {
            const response = await ProductModel.findByIdAndDelete(id);
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
}