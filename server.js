const express = require('express');

const app = express();
const products = [];

app.get('/', (req, res) => {
    res.send(products);
});

app.put('/', (req, res) => {
    const product = {
        id: products.length,
        ...req.body
    }
    products.push(product);
    return product;
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server listening on port ${port}`));