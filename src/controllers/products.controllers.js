import * as service from "../services/product.services.js";

export const getAll = async (req, res, next) => {
    try {
        const {page, limit, title, sort} = req.query;
        const response = await service.getAll(page, limit, title, sort);
        const nextLink = response.hasNextPage ? `http://localhost:8080/products?page=${response.nextPage}&sort=${sort}` : null;
        const prevLink = response.hasPrevPage ? `http://localhost:8080/products?page=${response.prevPage}&sort=${sort}` : null;
        res.status(200).json({
            status: 'success',
            payload: response.docs,
            totalPages: response.totalDocs,
            prevPage: response.prevPage,
            nextPage: response.nextPage,
            page,
            hasNextPage: response.hasNextPage,
            hasPrevPage: response.hasPrevPage,
            prevLink,
            nextLink
        });
    } catch (error) {
        next(error);
    }
}

export const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const prod = await service.getById(id);
        if (!prod) res.status(404).json({ msg: 'Product not found' });
        else res.json(prod);
    } catch (error) {
        next(error);
    }
}

export const create = async (req, res, next) => {
    try {
        const newProd = await service.create(req.body);
        if (!newProd) res.status(404).json({ msg: 'Error create product' });
        else res.json(newProd);
    } catch (error) {
        next(error);
    }
}

export const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const prodUpd = await service.update(id, req.body);
        if (!prodUpd) res.status(404).json({ msg: 'Product not found' });
        else res.json(prodUpd);
    } catch (error) {
        next(error);
    }
}

export const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        const prodDel = await service.remove(id);
        if (!prodDel) res.status(404).json({ msg: 'Product not found' });
        else res.json(prodDel);
    } catch (error) {
        next(error);
    }
}