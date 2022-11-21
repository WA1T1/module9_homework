const parser = new DOMParser();
// 
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studDOM = xmlDOM.querySelectorAll("student");
console.log(studDOM);
const student1 = studDOM[0]
const listNode = xmlDOM.querySelector("list");
const studentNode = student1.querySelector("student");
const nameNode = student1.querySelector("name");
const firstNode = student1.querySelector("first");
const secondNode = student1.querySelector("second");
const ageNode = student1.querySelector("age");
const profNode = student1.querySelector("prof");
const student2 = studDOM[1]
const studentTwoNode = student2.querySelector("student");
const nameTwoNode = student2.querySelector("name");
const firstTwoNode = student2.querySelector("first");
const secondTwoNode = student2.querySelector("second");
const ageTwoNode = student2.querySelector("age");
const profTwoNode = student2.querySelector("prof");
// 
const nameAttr = nameNode.getAttribute('lang');
console.log(nameAttr)
const nameTwoAttr = nameTwoNode.getAttribute('lang');
// 
const result = {
  name: firstNode.textContent,
  second : secondNode.textContent,
  age: Number(ageNode.textContent),
  prof: profNode.textContent,
  lang: nameAttr,
};
const resultTwo = {
  name: firstTwoNode.textContent,
  second : secondTwoNode.textContent,
  age: Number(ageTwoNode.textContent),
  prof: profTwoNode.textContent,
  lang: nameTwoAttr,
};
console.log('list', result, resultTwo);