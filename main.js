function send() {
  const input = document.getElementById("input");
  if (!input.value.trim()) return;

  const msg = document.createElement("div");
  msg.className = "msg";
  msg.innerHTML = "<b>You:</b> " + input.value;

  document.getElementById("messages").appendChild(msg);
  input.value = "";
}
