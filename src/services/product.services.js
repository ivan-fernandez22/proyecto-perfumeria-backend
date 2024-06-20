import ProductDaoMongoDB from '../daos/mongodb/product.dao.js';
const prodDao = new ProductDaoMongoDB();

export const getAll = async (page, limit, title, sort) => {
    try {
        return await prodDao.getAll(page, limit, title, sort);
    } catch (error) {
        throw new Error(error);
    }
};

export const getById = async (id) => {
    try {
        return await prodDao.getById(id);
    } catch (error) {
        throw new Error(error);
    }
};

export const create = async (obj) => {
    try {
        return await prodDao.create(obj);
    } catch (error) {
        throw new Error(error);
    }
};

export const update = async (id, obj) => {
    try {
        return await prodDao.update(id, obj)
    } catch (error) {
        throw new Error(error);
    }
};

export const remove = async (id) => {
    try {
        return await prodDao.delete(id);
    } catch (error) {
        throw new Error(error);
    }
};