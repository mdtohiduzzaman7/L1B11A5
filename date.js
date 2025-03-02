function getFormattedDate() {
  const today = new Date();

  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",

    year: "numeric",
  };
  const formattedDate = today
    .toLocaleDateString("en-US", options)
    .replace(",", "");

  document.getElementById("formatted-date").innerText = formattedDate;
}

getFormattedDate();
