// CALLBACKS -----------------------------------------------------------------------------

function doSomething(callback){
    setTimeout(function(){
        //did something
        callback('First data')
    }, 1000);
}

function doOtherThing(callback){
    setTimeout(function(){
        //did something
        callback('Second data')
    }, 1000);
}

function doAll(){
    try{
        doSomething(function(data){
            var processeData = data.split(' ');
            
            try{
                doOtherThing(function(data2){
                    var processeData2 = data2.split(' ');
        
                    try{
                        setTimeout(function(){
                            console.log(processeData, processeData2)
                        }, 1000);
                    }
                    catch(err){
                        //handle error
                    }
                });
            }
            catch(err){
                //hendle error
            }
        });
    }
    catch(err){
        //handle error
    }
}

// doAll();




// PROMISES -----------------------------------------------------------------------------
//3 estados:
//Pendent: pendente
//Fulfilled: terminou de executar
//Rejected: tem alum erro 



// const myPromise = new Promise((resolve, reject) => {
//     //
// });

const doSomethingPromise = () => new Promise((resolve, reject) =>{
    // throw new Error('Something went wrong');
    setTimeout(function(){
        //did something
        resolve('First data')
    }, 5000);
});

const doOtherThingPromise = () => new Promise((resolve, reject ) =>{
    // throw new Error('Something went wrong');
    setTimeout(function(){
        //did something
        resolve('Second data')
    }, 1000);
});



Promise.all([doSomethingPromise(), doOtherThingPromise()])
        .then((data) => {
            console.log(data);
        });


Promise.race([doSomethingPromise(), doOtherThingPromise()])
        .then((data) => {
            console.log(data);
        });





doSomethingPromise()
    .then(data => {
        console.log(data.split(' '));
        return doOtherThingPromise()
    })
    .then(data2 => console.log(data2.split(' ')))
    .catch(error => console.log('Ops: ' + error));