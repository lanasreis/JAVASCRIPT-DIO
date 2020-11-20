// const não tem hosting

class CustomError extends Error{
    constructor({ message, data }){
        super(message);
        this.data = data;
    }
}

try{
    const name = 'Celso Henrique';

    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });
    throw myError;
} catch (err){
    console.log('Error: ', err);
    console.log(err.data);

    // if(err.data.type === 'Server error'){

    // }else

} finally{
    console.log('Keep going....');
}
