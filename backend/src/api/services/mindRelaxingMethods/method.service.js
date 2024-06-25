const methodModel = require("../../models/mindRelaxingMethods/method.model");
const asyncHandler = require('express-async-handler');

const storeMethod =  (methodType, category, resouceName, discription,imageURL,resourceURL) => {
    try {
        if (!methodType || !category || !resouceName || !discription ||!imageURL || !resourceURL) {
            throw new Error('Method is incomplete');
        }

        const newMethod =  methodModel.create({
            methodType: methodType,
            category: category,
            resouceName: resouceName,
            discription: discription,
            imageURL: imageURL,
            resourceURL: resourceURL
        });

        return newMethod;
    } catch (error) {
        console.error(error);
        throw new Error('Internal server error');
    }
};



module.exports = {
    storeMethod,
    
    
};
