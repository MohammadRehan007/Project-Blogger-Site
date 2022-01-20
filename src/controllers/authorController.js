const authorModel = require("../models/authorModel")
//------------------------1.Create Author---------------------------------------------------------
const createAuthor = async function (req, res) {
    try {
        const data = req.body
        const verifyEmail = req.body.email
        const regx = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        if (regx.test(verifyEmail)) {
            let savedData = await authorModel.create(data)
            res.status(201).send({ data: savedData })

        }
        else {
            res.status(400).send({ msg: "Invalid email!" });
        }
    }
    catch (error) {
        res.status(500).send({ message: "Failed", error: error.message });
    }

}
module.exports.createAuthor = createAuthor