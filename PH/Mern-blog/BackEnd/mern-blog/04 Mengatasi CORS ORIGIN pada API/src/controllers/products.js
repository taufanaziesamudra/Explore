exports.createProduct = (req, res, next) => {
    res.json(
        {
            message: "Create Product Succes",
            data: {
                id: 1,
                name: 'Sari Gandum',
                price: 8000
            }
        }
    )
    next()
}

exports.getAllProducts = (req, res, next) => {
    res.json(
        {
            message: "Get All Products Succes",
            id: 1,
            name: "Sari Gandum",
            price: 90000
        }
    )
    next()
}