const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know ally, I still think about you sometimes.\n\nik this is short,\n\nI hope you're doing okay and wish you the best in every aspect of your life,i will keep cheering and cherishing you from afar silently,take care my greatest love,well the moon is beautiful isn't it ^^?`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
