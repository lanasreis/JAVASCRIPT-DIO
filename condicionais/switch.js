const fruit = 'pera';

switch (fruit){
    case 'banana':
        console.log('R$ 3.00/kg');
        break;
    case 'pera':
    case 'mamao':
        console.log('R$ 2.00/kg');
        break;
    default:
        console.log('Não existe');
        break;
}