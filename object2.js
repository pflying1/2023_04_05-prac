const nameValue = {
  name : "jeong",
  age : 20,
  email : "jeong@gmail.com"
}
let oppend = ["jeong", 20, "jeong@gmail.com"];
let target = [];

function isNameCheck(key, value) {
  if(key === value) {
    return true;
  } else {
    return false;
  }
}

for(let key in nameValue) {
  target.push(nameValue[key]);
}

oppend.forEach((element, index)=> {
  if(target[index]) {
    console.log(isNameCheck(element,target[index]));
  }else {
    console.error("not found");
  }
})