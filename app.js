// رفتن به اپ
document.getElementById("startBtn").onclick = function () {
  document.getElementById("home").style.display = "none";
  document.getElementById("app").classList.remove("hidden");
};

// اضافه کردن تسک
document.getElementById("addTask").onclick = function () {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  li.onclick = function () {
    li.style.textDecoration = "line-through";
  };

  document.getElementById("taskList").appendChild(li);

  input.value = "";
};

// تایمر
let time = 1500;
let running = false;

document.getElementById("startTimer").onclick = function () {
  if (running) return;

  running = true;

  const interval = setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = time % 60;

    document.getElementById("time").textContent =
      `${min}:${sec < 10 ? "0" + sec : sec}`;

    time--;

    if (time < 0) {
      clearInterval(interval);
      alert("⏰ زمان تموم شد!");
      time = 1500;
      running = false;
    }
  }, 1000);
};
