import { Router } from "express";
import { fork } from "child_process"

const router = new Router();

router.get("/", (req, res) => {
    const cant = +req.query.cant || 100000000;

    const forked = fork("./src/routes/computo.js")
    forked.send(cant)

    forked.on("message", count => {
        res.json(count)
    })
})

export default router;