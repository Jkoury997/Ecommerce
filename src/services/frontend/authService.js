const {Users} = require("../../database/models")
const bcrypt = require("bcrypt")
module.exports = {
    createUser: function(data) {
        const newData =  {
            ...data,
            password: this.encrytedPassword(data.password)
        };

        return Users.create(newData)
    },
    encrytedPassword: function(password) {
        const hashedPassword = bcrypt.hash(password, 12);
        return hashedPassword
    }
}