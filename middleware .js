

const my =(req,res,next)=>{
    console.log('the date is',new Date());
    console.log(req.url);
    next(); 
}

module.exports ={my};