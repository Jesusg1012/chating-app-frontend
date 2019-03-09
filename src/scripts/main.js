window.addEventListener('load', function () {
  console.log("Loaded JS");
});

function openNav() {
  document.getElementById("mySidenav").style.width = "240px";
  document.getElementById("navScreen").style.marginLeft = "240px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("navScreen").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

function showClick() {
  let click = document.getElementById("showmore");
  let list = document.getElementById("list");
  if (list.style.display === "block") {
    list.style.display = "none";
    click.innerHTML = "show more <i class='fas'>&#xf078;</i>";
  } else {
    list.style.display = "block";
    click.innerHTML = "show less <i class='fas'>&#xf077;</i>";
  }
}

function showClick2() {
  let click = document.getElementById("showmore2");
  let list = document.getElementById("list2");
  if (list.style.display === "block") {
    list.style.display = "none";
    click.innerHTML = "show more <i class='fas'>&#xf078;</i>";
  } else {
    list.style.display = "block";
    click.innerHTML = "show less <i class='fas'>&#xf077;</i>";
  }
}

function showClick3() {
  let click = document.getElementById("showmore3");
  let list = document.getElementById("list3");
  if (list.style.display === "block") {
    list.style.display = "none";
    click.innerHTML = "show more <i class='fas'>&#xf078;</i>";
  } else {
    list.style.display = "block";
    click.innerHTML = "show less <i class='fas'>&#xf077;</i>";
  }
}