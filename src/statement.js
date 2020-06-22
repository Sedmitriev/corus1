import Invoice from './invoice';
import {invoice, plays} from './mock';
import {getNumberFormat} from './utils';

const statement = (invoiceArg, plays) => {
    const invoice = new Invoice(invoiceArg, plays);
    let result = `<h1>Счет для ${invoice.customer}</h1>\n`;
    result += "<table>\n";
    const format = getNumberFormat().format;

    for (let perf of invoice.performance) {
        // Вывод строки счета  
        result += ` <tr><td>${perf.play.name} (${perf.audience} мест)</td>
                    <td>${getNumberFormat().format(perf.amount / 100)}</td></tr>`;
    }
    result += "</table>\n";
    result += `<p>Итого с вас ${format(invoice.amount/100)}</p>\n`;
    result += `<p>Вы заработали ${invoice.volumeCredits} бонусов</p>\n`;
    return result;
}

const htmlStatement = statement(invoice, plays);
const element = document.createElement('div');
element.innerHTML = htmlStatement;
document.body.append(element);
