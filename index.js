// Import stylesheets
import './style.css';

// Write Javascript code!
let q = 'abcdefas';
let res = longStringFinder(q);
function longStringFinder(q) {
  let longStr = '';
  let strArr = [];
  let arr = [];
  for (let i = 0; i < q.length; i++) {
    if (!arr.includes(q[i])) {
      arr.push(q[i]);
      longStr += q[i];
      console.log(arr);
    } else {
      strArr.push(longStr);
      longStr = '';
      arr = [];
    }
  }

  let size = 0;
  let index = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > size) {
      size = strArr[i].length;
      index = i;
    }
  }
  console.log(strArr);

  return strArr[index];
}
const appDiv = document.getElementById('app');
appDiv.innerHTML = res;
// appDiv.innerHTML = `<h1>JS Starter</h1>`;
