function parseCount(argX) {
    if (parseInt(argX) === NaN) {
        throw 'Невалидное значение'
    }
    return parseInt(argX)
} 

function validateCount(argY) {
    try {
       return parseCount(argY);  
    } catch (error) {
        console.error(error);
    }

}
console.log(parseCount('wads'));

class Triangle {
    constructor (sideA, sideB, sideC) {
        if ((sideA + sideB) < sideC || (sideB + sideC) < sideA || (sideA + sideC) < sideB) {
            throw "Треугольник с такими сторонами не существует"
        }
        
    }
}