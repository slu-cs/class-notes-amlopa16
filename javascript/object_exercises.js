// Question 1

const get_course = function(){
  const cs332 = {subject: 'CS', level: 332};
  const cs370 = {subject: 'CS', level: 370};
  const en245 = {subject: 'EN', level: 245};
  const courses = [cs332, cs370, en245];
  let max = 0
  for (const course in courses) {
    console.log(course.level);
    if (course.level > max) {
      max = course
    }
  }
  console.log(max);
};
console.log(get_course(courses));

// Question 2
const Book = function(title, authors){
  this.title = title;
  this.authors = authors;
};

Book.prototype.check_author = function(author) {
  for (const a in this.authors){
    if (a == author){
      return true;
    }
  }
};

// Question 3
const range = function(x, y) {
  const arr = [x];
  for (let i = x; i <= y; i++) {
    arr.push(i);
  }
  return arr;
};
