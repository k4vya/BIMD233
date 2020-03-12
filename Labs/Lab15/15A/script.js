var companyArray = [];
companyArray.push(["Microsoft", 381.7, 86, 22, 128000]);
companyArray.push(["Symetra", 2.7, 2.2, 254.2, 1400]);
companyArray.push(["Micron", 38, 1.7, 300, 30400]);
companyArray.push(["F5", 9.5, 1.6, 311, 3800]);
companyArray.push(["Expedia", 10.8, 5.8, 398, 18210]);

var el = document.getElementById("dataset");

function hitEvent() {
  buildTableBody();
}

function buildTableBody() {
  companyArray.forEach(buildRows);
}

function buildRows(value, index) {
  if (index == 0) {
    el.innerHTML = rowBuilder(value);
  } else {
    el.innerHTML = el.innerHTML + rowBuilder(value);
  }
}

function rowBuilder(x) {
  console.log(x);
  var s =
    "<tr><td>{1}</td><td>{2}</td><td>{3}</td><td>{4}</td><td>{5}</td></tr>";
  s = s.replace("{1}", x[0]);
  s = s.replace("{2}", x[1]);
  s = s.replace("{3}", x[2]);
  s = s.replace("{4}", x[3]);
  s = s.replace("{5}", x[4]);
  return s;
}