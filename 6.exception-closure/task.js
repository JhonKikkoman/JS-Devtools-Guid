function parseCount(argX) {
    const result = parseFloat(argX);
    if (isNaN(result)) {
        throw new Error ('Невалидное значение');
    }
    return result;
} 

function validateCount(argY) {
    try {
        return parseCount(argY);  
    } catch (error) {
        return error;
    }

}

class Triangle {
    constructor (sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        if ((sideA + sideB) < sideC || (sideB + sideC) < sideA || (sideA + sideC) < sideB) {
            throw new Error ("Треугольник с такими сторонами не существует");
        } 
    }
    getPerimeter() {
        return (this.sideA + this.sideB + this.sideC);
    }
    getArea() {
        const area = (this.sideA + this.sideB + this.sideC) / 2;
        return Number(Math.sqrt(area * ((area - this.sideA) * (area - this.sideB) * (area - this.sideC))).toFixed(3));
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch (error) {
        return {getArea() {return "Ошибка! Треугольник не существует"}, 
                getPerimeter() {return "Ошибка! Треугольник не существует"}};
    }
    
}