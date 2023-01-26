function parseCount(argX) {
    if (isNaN(parseFloat(argX))) {
        throw new Error ('Невалидное значение');
    }
    return parseFloat(argX)
} 

function validateCount(argY) {
    try {
        return parseCount(argY);  
    } catch (error) {
        throw new Error(error);
    }

}
console.log(parseCount('wads'));

class Triangle {
    constructor (sideA, sideB, sideC) {
        if ((sideA + sideB) < sideC || (sideB + sideC) < sideA || (sideA + sideC) < sideB) {
            throw new Error ("Треугольник с такими сторонами не существует");
        } 
    }
    getPerimeter() {
        let perimeter = sideA + sideB + sideC;
    }
    getArea() {
        let area = (sideA + sideB + sideC) / 2;
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle;
    } catch (error) {
        throw new Triangle.getArea().getPerimeter()("Ошибка! Треугольник не существует");
    }
    
}