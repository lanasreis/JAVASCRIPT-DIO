/*
A instância (subscriber) mantém uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado.

VUE
RxJs
*/


class Observable{
    constructor(){
        this.observers = [];
    }

    subscribe(f){
        this.observers.push(f);
    }

    unsubscribe(f){
        this.observers = this.observers.filter(
            subscribe => subscribe !==f
        );
    }

    notify(data){
        this.observers.forEach(
            observer => observer(data)
        );
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);
const logData4 = data => console.log(`Subscribe 4: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);
o.subscribe(logData4);

o.notify('Notified - 1');
o.notify('Notified - 2');
o.notify('Notified - 3');
 