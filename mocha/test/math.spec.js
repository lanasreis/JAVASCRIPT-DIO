const assert = require('assert');
// const expect = require('chai').expect;
const Math = require('../src/math.js');

describe('Math class', function(){
    // hooks - formas de executar código e evitar repetição
    beforeEach(function () {
        value = 0;
    })


    it('Sum two numbers', function(done){
        const math = new Math();

        this.timeout(3000);
        value = 5;
        // throw new Error('Oh, no!');
        
        try{
            math.sum(5, 5, (value) => {
                assert.equal(value, 10);
                // expect(value).to.equal(10); //chai não deu certo

                done(); //gerante que p teste vai aguardar
            })
        }
        catch(err){
            console.log(err);
        }
    });

    // it.only('Multiply two numbers', function(){ // executa apenas esse teste
    // it.skip('Multiply two numbers', function(){ // ignora o teste
    it('Multiply two numbers', function(){
        const math = new Math();

        assert.equal(math.multiply(value, 5), 0);
    })
});