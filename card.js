document.getElementById("btn1").addEventListener("click", function () {
  showAlert();

  document.getElementById("btn1").disabled = true;

  const text = document.getElementById("card-title1").innerText;
  console.log(text);
  const container = document.getElementById("container");

  const div = document.createElement("div");

  let currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  div.innerHTML = `  
    <h1 class=" p-3 mb-2 bg-gray-100  rounded-md">You have completed the task ${text} at ${currentTime}</h1>
    `;

  container.appendChild(div);

 
});
document.getElementById("btn2").addEventListener("click", function () {
  showAlert();

  document.getElementById("btn2").disabled = true;

  const text = document.getElementById("card-title2").innerText;
  console.log(text);
  const container = document.getElementById("container");

  const div = document.createElement("div");

  let currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  div.innerHTML = `  
    <h1 class=" p-3 mb-2 bg-gray-100  rounded-md">You have completed the task ${text} at ${currentTime}</h1>
    `;

  container.appendChild(div);

 
});
document.getElementById("btn3").addEventListener("click", function () {
  showAlert();
  document.getElementById("btn3").disabled = true;

  const text = document.getElementById("card-title3").innerText;
  console.log(text);
  const container = document.getElementById("container");

  const div = document.createElement("div");

  let currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  div.innerHTML = `  
    <h1 class=" p-3 mb-2 bg-gray-100  rounded-md">You have completed the task ${text} at ${currentTime}</h1>
    `;

  container.appendChild(div);
});
document.getElementById("btn4").addEventListener("click", function () {
  showAlert();
  document.getElementById("btn4").disabled = true;

  const text = document.getElementById("card-title4").innerText;
  console.log(text);
  const container = document.getElementById("container");

  const div = document.createElement("div");

  let currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  div.innerHTML = `  
    <h1 class=" p-3 mb-2 bg-gray-100  rounded-md">You have completed the task ${text} at ${currentTime}</h1>
    `;

  container.appendChild(div);
});
document.getElementById("btn5").addEventListener("click", function () {
  showAlert();
  document.getElementById("btn5").disabled = true;

  const text = document.getElementById("card-title5").innerText;
  console.log(text);
  const container = document.getElementById("container");

  const div = document.createElement("div");

  let currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  div.innerHTML = `  
    <h1 class=" p-3 mb-2 bg-gray-100  rounded-md">You have completed the task ${text} at ${currentTime}</h1>
    `;

  container.appendChild(div);
});

document.getElementById("btn6").addEventListener("click", function () {
  showAlert();
  document.getElementById("btn6").disabled = true;

  const text = document.getElementById("card-title6").innerText;
  console.log(text);
  const container = document.getElementById("container");

  const div = document.createElement("div");

  let currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  div.innerHTML = `  
    <h1 class=" p-3 mb-2 bg-gray-100  rounded-md">You have completed the task ${text} at ${currentTime}</h1>
    `;

  container.appendChild(div);
});

// card Title
