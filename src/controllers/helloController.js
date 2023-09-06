exports.hello=(req,res)=>{
    res.status(200).json({
        name:"get",
        status:"200"
    })
}

exports.helloPost=(req,res)=>{
    res.status(200).json({
        name:"post",
        status:"200"
    })
}