async function fetchData() {
  const options = {
    method: "GET",
  };
  const res = await fetch("https://demo8895593.mockable.io/cs_mvp_extension_2");
  const record = await res.json();
  console.log("record", record);

  document.getElementById("nameList").innerHTML = record.list
    .map((item) => `<li>${item}</li>`)
    .join("");
}
fetchData();
