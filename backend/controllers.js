const signup = (req,res) => {
    res.send("from controllers")
}
const signin = (req,res) => {
    res.send("from controller in sign")
}

module.exports = {signup,signin};