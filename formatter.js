const button_sub = document.querySelector("#submit");
const button_copy = document.querySelector("#copy");
const textarea = document.querySelector("textarea");

button_sub.onclick = function(e) {
  e.preventDefault();
  text = textarea.value;
  text = text.split("\n");
  textarea.value = text.join(" ");
};

button_copy.addEventListener("click", function(e) {
  e.preventDefault();
  let range = new Range();
  range.selectNode(textarea);
  window.getSelection().addRange(range);
  //пытаемся скопировать текст в буфер обмена
  try {
    document.execCommand("copy");
  } catch (err) {
    console.log("Can`t copy, boss");
  }
  //очистим выделение текста, чтобы пользователь "не парился"
  document.getSelection().removeAllRanges();
});
