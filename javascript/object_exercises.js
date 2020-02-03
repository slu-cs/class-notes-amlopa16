// Question 1

const get_course = function(){
  const cs332 = {subject: 'CS', level: 332};
  const cs370 = {subject: 'CS', level: 370};
  const en245 = {subject: 'EN', level: 245};
  const courses = [cs332, cs370, en245];
  let max = 0
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].level > max) {
      max = courses[i].level;
      max_course = courses[i];
    }
  }
  return max_course;
};
console.log(get_course());

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
  const arr = [];
  for (let i = x; i < y; i++) {
    arr.push(i);
  }
  return arr;
};
console.log(range(2, 8));
