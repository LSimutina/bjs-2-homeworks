function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];

}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
//  if(Object.prototype.hasOwnProperty.call(this, 'marks')) проверка на существование
  if(this.hasOwnProperty('marks')){
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if(this.hasOwnProperty('marks') && this.marks.length > 0){
    return this.marks.reduce( (sum, mark) => sum + mark, 0) / this.marks.length;
  }
  return 0;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}