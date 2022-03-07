exports.createBook = (req, res, next) => {
    // const judul = req.body.judul
    // const pengarang = req.body.pengarang
    // const harga = req.harga.harga
    // const stock = req.body.stock
    res.json(
        {
            message: "Create Book Succes",
            data: {
                post_id: 1,
                judul: 'Onepiece',
                pengarang: 'Lorem Ipmsunm',
                harga: '5000',
                stock: '6'
            }
        }
    )
    next()
}

exports.getAllBooks = (req, res, next) => {
    res.json(
        {
            message: 'Get All Boooks Succes',
            id: 1,
            judul: 'Naruto',
            pengarang: 'Lorem Ipmsunm',
            harga: '5000',
            stock: '6'
        }
    )
    next()
}