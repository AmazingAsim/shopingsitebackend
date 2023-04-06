
let postUser = async (req,res)=>{
    console.log(req.body);
    res.send('post user')
}

module.exports = {postUser}