// Error handling to act accordingly in time

export const errorHandling = (error, page = null) => {
    if(error.message == 401)
        console.log(error)
    else if(error.message == 403)
        console.log(error)
    else if(error.message == 404)
        console.log(error)
    else if(error.message == 500){
        console.log(error)
    }else{
        console.log(error)
    }
        
}