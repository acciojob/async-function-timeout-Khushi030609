//your JS code here. If required.
const btn = document.getElementById("btn");
const output = document.getElementById("output");

// helper to create delay
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

btn.addEventListener("click", async (e) => {
  e.preventDefault(); 

  const text = document.getElementById("text").value.trim();
  const delayVal = document.getElementById("delay").value.trim();

  if (text === "" || delayVal === "" || isNaN(delayVal) || Number(delayVal) < 0) {
    output.innerText = "";
    alert("Please enter valid details.");
    return;
  }
  const delay = Number(delayVal);
  output.innerText = "";
  await wait(delay);
  output.innerText = text;
});