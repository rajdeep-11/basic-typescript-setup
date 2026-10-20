import express from 'express';

const v2Router = express.Router();

v2Router.use('/hello', (req, res) => {
    res.status(200)
        .json({
            message: "hello from v2"
        });
});

export default v2Router;