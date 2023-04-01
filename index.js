const akula = document.querySelector("#akula");

fetch('https://northwind.vercel.app/api/customers/')

  .then(getResponse)
  .then(getJSONData);

function getResponse(res) {
  return res.json();
}

function getJSONData(data) {
  for (let i = 0; i < data.length; i++) {
    var productRaw = document.createElement("tr");
    var productcompanyNameTd = document.createElement("td");
    var productcontactNameTd = document.createElement("td");
    var productcontactTitleTd = document.createElement("td");
    var productaddressTd= document.createElement("td");

    productcompanyNameTd.textContent = data[i].companyName;

    productcontactNameTd.textContent = data[i].contactName;

    productcontactTitleTd.textContent = data[i].contactTitle;

    
    productaddressTd.textContent = data[i].address.street + ", " + data[i].address.country;

    productRaw.append(productcompanyNameTd ,productcontactNameTd ,productcontactTitleTd,productaddressTd);
    akula.append(productRaw);
 }
}