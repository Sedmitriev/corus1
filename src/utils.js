export const getNumberFormat = () => {
    return new Intl.NumberFormat("ru-RU",
    { 
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 2
    })
}