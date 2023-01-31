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
        throw error;
    }

}
console.log(parseCount('wads'));

class Triangle {
    constructor (sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.perimeter = perimeter;
        this.area = area;
        if ((sideA + sideB) < sideC || (sideB + sideC) < sideA || (sideA + sideC) < sideB) {
            throw new Error ("Треугольник с такими сторонами не существует");
        } 
    }
    getPerimeter() {
        return this.perimeter = sideA + sideB + sideC;
    }
    getArea() {
        this.area = (sideA + sideB + sideC) / 2;
        return this.area * ((this.area - this.sideA) * (this.area - this.sideB) * (this.area - this.sideC));
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch (error) {
        throw this.getArea = ("Ошибка! Треугольник не существует"),
              this.getPerimeter = ("Ошибка! Треугольник не существует");
    }
    
}