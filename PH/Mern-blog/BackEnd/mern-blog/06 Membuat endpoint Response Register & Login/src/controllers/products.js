exports.createProduct = (req, res, next) => {
    // Menggunakan bodyparser untuk mendapatkan request body
    const name = req.body.name
    const price = req.body.price
    res.json(
        {
            message: "Create Product Succes",
            data: {
                id: 1,
                name: name,
                price: price
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