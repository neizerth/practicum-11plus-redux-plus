const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
// const products = [];
const products = [
    { title: 'Vegemite', price: 1.39, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOSIPZtdfcujVO0RiFv29KWj1WwOTxnqYdA&usqp=CAU' },
    { title: 'Buzz Lightyear', price: 11.99, img: 'https://static.wikia.nocookie.net/disney/images/7/74/Profile_-_Buzz_Lightyear.jpeg' },
    { title: 'Boston Celtics Vintage Cap', price: 2.50, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzWivcwCbCtTsIMaKHTySYBx8hKkCMLor9g&usqp=CAU' },
    { title: 'Mario Kart Vintage', price: 2.19, img: 'https://sc01.alicdn.com/kf/Hcf5a987813f64603a231d52fe32c241en/234774818/Hcf5a987813f64603a231d52fe32c241en.jpg_.webp' }
];

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