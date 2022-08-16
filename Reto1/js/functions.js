function main() {
  let classes = initializeClasses();
  let ans;
  do {
    ans = findCourses(classes);
  } while (checkHours(ans));
  showClass(ans)
}
/* Funtion that returns the Class object */
function createClass(name, hours) {
  return {
    name: name,
    hours: hours,
  };
}

/* Code with initial info about classes and courses */
function initializeClasses() {
  return [
    10,
    createClass("Inteligencia Artificial", 4),
    createClass("Investigación de Procesos", 2),
    createClass("Dispositivos Móviles", 4),
    createClass("Proyecto de Desarrollo", 3),
  ];
}

function checkHours(array) {
  classes = structuredClone(array);

  let maxVal = classes.shift();
  let i;
  for (const c in classes) {
    i =+ c.hours;
  }
  if (i <= maxVal) {
    return true;
  } else {
    return false;
  }

}

/* Checks for the max hours in the array and returns them */
function findCourses(array) {
  classes = structuredClone(array);

  let maxVal = classes.shift();

  let maxClass1 = Math.max(...classes.map((o) => o.hours));
  let obj1 = classes.find((element) => (element.hours = maxClass1));
  let index1 = classes.indexOf(obj1);
  classes.splice(index1, 1);

  let maxClass2 = Math.max(...classes.map((o) => o.hours));
  let obj2 = classes.find((element) => (element.hours = maxClass2));
  let index2 = classes.indexOf(obj1);
  classes.splice(index2, 1);

  return [obj1, obj2];
}

/* Show Classes */
function showClass(arr) {
    array = structuredClone(arr);
    let msj= [];
    for (const i of array) {
        msj.push(String(i.name))
        
    }
    
    document.getElementById("output").innerHTML = msj.toString();
}
