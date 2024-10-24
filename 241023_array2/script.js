const studyMember01 = ["지수", "지선", "예지", "혜정", "령희", "승연"];
const studyMember02 = ["보경", "정하", "예림", "희진", "다은"];

studyMember01.push("리아");
console.log(studyMember01);

studyMember02.unshift("리아");
console.log(studyMember02);

studyMember01.pop();
console.log(studyMember01);

studyMember02.shift();
console.log(studyMember02);

studyMember01.reverse();
console.log(studyMember01);

const studyMember03 = studyMember01.concat(studyMember02);
studyMember03.unshift("리아");
console.log(studyMember03);

console.log(studyMember03.join("+"));
