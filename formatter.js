const button_sub = document.querySelector("#convert");
const button_copy = document.querySelector("#copy");
const button_clear = document.querySelector("#clear");

const textarea = document.querySelector("textarea");

button_sub.onclick = function(e) {
  e.preventDefault();
  text = textarea.value;
  text = text.split(/[\n\s]+/);
  console.log("%O", text);
  textarea.value = text.join(" ");
};

button_copy.addEventListener("click", function(e) {
  textarea.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    alert("Ошибка при копировании. Повторите попытку");
  }
  //   очистим выделение текста, чтобы пользователь "не парился"
  document.getSelection().removeAllRanges();
  alert("Ваш текст скопирован в буфер обмена!");
});

button_clear.addEventListener("click", function(e) {
  textarea.select();
//   try {
//     document.execCommand("copy");
//   } catch (err) {
//     alert("Ошибка при копировании. Повторите попытку");
//     return "Error"
//   }
  //   очистим выделение текста, чтобы пользователь "не парился"
  document.getSelection().removeAllRanges();
  textarea.value = "";
});
