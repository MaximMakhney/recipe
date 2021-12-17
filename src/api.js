import { API_URL } from "./config";

const getMealById = async (mealId) => {
    const response = await fetch(API_URL +'lookup.php?i='+ mealId)
    .catch(err => console.log('Error get Meal by ID'));
    return await response.json();
}

const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php')
    .catch(err => console.log('Error get Categoties'));
    return await response.json();
}

const getFilteredCategory = async (catName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + catName)
    .catch(err => console.log('Error Filter'));
    return await response.json();
    
}

export {getMealById, getAllCategories, getFilteredCategory};