import Performance from './performance';

export default class Invoice {
    constructor(data, plays) {
        this._data = data;
        this._plays = plays;
    }
    
    get customer() {
        return this._data.customer;
    }

    get performance() { 
        return this._data.performance.map(perf => new Performance(perf, this._plays));
    }

    get amount() {
        return this.performance
        .reduce((total, perf) => total + perf.amount, 0);
    }

    get volumeCredits() {
        return this.performance
        .map((perf) => perf.volumeCredits)
        .reduce((a, b) => a + b);
    }
}