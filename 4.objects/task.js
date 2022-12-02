function Student(name, gender, age) {
  this.setSubject();
  this.addMark();
}

Student.prototype.setSubject = function (subjectName) {
  return subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  const marks = [];
  if(this.marks === undefined){ 
    marks.push(mark);
    } else {
      marks.push(mark);
    }
}

Student.prototype.addMarks = function (...args) {
  //ваш код
}

Student.prototype.getAverage = function () {
  // const averSum =
}

Student.prototype.exclude = function (reason) {
  delete Student.subject;
  delete Student.marks;
  return this.exclude = excluded(reason);
}

let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);