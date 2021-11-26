import express from 'express'
import User from '../model/schema.js'
const router = express.Router()
router.post("/login ",(req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successfull", user: user })
            }
            else {
                res.send("Invalid Password")
            }
        } else {
            res.send({ message: "User Not registered" })
        }
    })

})

router.post("/register ", (req, res) => {
    const { name, email, password, place } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "Existing User" })
        } else {
            const user = new User({
                name,
                email,
                password,
                place
            })
            user.save(err => {
                if (err) {
                    res.send(error)
                }
                else {
                    res.send({ message: "Registration Successfull" })
                }

            })
        }
    })
})

export default router