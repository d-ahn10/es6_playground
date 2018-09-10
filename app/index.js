import addToDom from './add_to_dom';
import { subtract } from './math';

// import str, { subtract } from './math';

console.log('Math:', subtract);

addToDom('h1', `52 - 10 = ${subtract(52, 10)}`);

