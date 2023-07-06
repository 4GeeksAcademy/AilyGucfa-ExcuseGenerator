//write your code here
var who = ["The cow", "The dog", "The banana", "My squirrel"];
var how = [
  "stole",
  "decided to become a web developer",
  " started telling jokes ",
  "learned how to ride a bicycle"
];
var what = [
  "my sandwich",
  "during a quiet movie night",
  "at a serious meeting",
  "during a marathon"
];
var when = [
  "during my lunch break",
  "right at the end of the movie",
  "right after the principal's speech",
  "right in the middle of a cow competition"
];
var where = [
  "at the park",
  "on top of my laptop",
  " in the classroom ",
  "in the livestock arena"
];
function generateExcuse() {
  let randomWho = Math.floor(Math.random() * who.length);
  let randomHow = Math.floor(Math.random() * how.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);
  let randomWhere = Math.floor(Math.random() * where.length);

  return (
    who[randomWho] +
    " " +
    how[randomHow] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen] +
    " " +
    where[randomWhere]
  );
}
/*window.onload = function() {
  let excuse = generateExcuse();
  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = excuse;
};*/

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", function() {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};
