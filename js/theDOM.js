function myFunction(){
    var x = document.getElementById('myDIV');
    if (x.style.visibility === 'visible') {
      x.style.visibility = 'hidden';
    } else {
      x.style.visibility = 'visible';
    }
}

function myFunction2(){
    var x = document.getElementById('myDIV2');
    if (x.style.visibility === 'visible') {
      x.style.visibility = 'hidden';
    } else {
      x.style.visibility = 'visible';
    }
}

function on(tagId) {
  document.getElementById(tagId).style.opacity = 1;
}

function off(tagId) {
  document.getElementById(tagId).style.opacity = 0;
}

function offSeveral(tagList) {
  off(tagList[0]);
  off(tagList[1]);
}