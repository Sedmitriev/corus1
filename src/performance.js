export default class Performance {
    constructor(data, plays) {
        this._data = data;
        this._plays = plays;
    }

    get audience() {
        return this._data.audience;
    }
      
    get playId() {
        return this._data.playId;
    }

    get play() {
        return this._plays[this.playId];
    }

    get amount() {
        let thisAmount = 0;
        switch (this.play.type) {
            case "tragedy":
                thisAmount = 40000;
                if (this.audience > 30) {
                    thisAmount += 1000 * (this.audience - 30);
                }
                return thisAmount;
            case "comedy":
                thisAmount = 30000;
                if (this.audience > 20) {
                    thisAmount += 10000 + 500 * (this.audience - 20);
                }
                thisAmount += 300 * this.audience;
                return thisAmount;
            default:
                throw new Error(`неизвестный тип: ${this.play.type}`);
        }
    }

    get volumeCredits() {
        let bonusPoints = 0
        // Добавление бонусов
        bonusPoints += this.audience - 30;

        // Дополнительный бонус за каждые 10 комедий
        if (this.play.type === "comedy") bonusPoints += Math.floor(this.audience / 5);

        return bonusPoints;
    }
}