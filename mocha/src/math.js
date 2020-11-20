class Math{
    sum(a, b, callbcak) {
        setTimeout(() => {
            callbcak(a+b);
        }, 2500);
    }
    multiply(a, b){
        return a*b;
    }
    printSum(request, response, a, b){
        response.load('index', , a+b);
    }
}


module.exports = Math;