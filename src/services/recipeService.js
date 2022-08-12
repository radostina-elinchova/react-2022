import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/recipes';

export const getAll = () => request.get(baseUrl);

export const getMyAll = (ownerId) => request.get(`${baseUrl}?where=_ownerId%3D%22${ownerId}%22`);

export const getOne = (recipeId) => request.get(`${baseUrl}/${recipeId}`);

export const create = (recipeData) => request.post(baseUrl, recipeData);

export const edit = (recipeId, recipeData) => request.put(`${baseUrl}/${recipeId}`, recipeData);

export const remove = (recipeId) => request.del(`${baseUrl}/${recipeId}`);
