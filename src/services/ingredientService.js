import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/ingredients';

export const create = (recipeId, ingredient) =>
    request.post(baseUrl, { recipeId, text: ingredient });

export const getByRecipeId = (recipeId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`recipeId="${recipeId}"`);

    return request.get(`${baseUrl}?where=${search}&load=${relations}`);
}
