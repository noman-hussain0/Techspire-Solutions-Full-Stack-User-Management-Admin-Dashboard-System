require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require('./router/auth-router');
const connectDb = require("./utils/db");
const { default: errorMap } = require("zod/locales/en.js");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-router");
const services = require("./controllers/service-controller");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const adminRouteContact = require("./router/admin-router")

// handling cors policy
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    Credentials: true,
};

app.use(cors(corsOptions));


// to get the json data in express app.
app.use(express.json());


app.use('/api/auth', router);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

// let's define the admin route
app.use("/api/admin", adminRoute);
app.use("/api/admin", adminRouteContact);


app.use(errorMiddleware);


const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`);
    });
});