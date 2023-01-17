function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.setSubject = subjectName;
}

Student.prototype.addMark = function (mark) {
  this.marks = mark;
  if(this.marks === undefined){ 
    marks = [mark];
    } else {
      marks.push(mark);
    }
}

Student.prototype.addMarks = function (...args) {
  this.marks = [...args];
}

Student.prototype.getAverage = function () {
  for (let element in this.marks) {
    sum = element++;
    return sum / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);