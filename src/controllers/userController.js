const User = require("../app/models/User");
const { v4: uuid } = require("uuid");

const users = {
    async get(req, res) {
        return res.json({ hello: "world" });
    },
    async postUser(req, res) {
        const { name, email } = req.body;
        try {
            const user = await User.create({
                id: uuid().toLocaleUpperCase(),
                name: name.toLocaleUpperCase(),
                email: email.toLocaleUpperCase(),
            });
            return res
                .status(201)
                .json({ message: "User sucessfull creted!", user });
        } catch (error) {
            return res
                .status(500)
                .json({ error: "Unable to register user!", error });
        }
    },
};

module.exports = users;
