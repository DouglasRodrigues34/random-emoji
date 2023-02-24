const buttonRandom = document.getElementById("btn");
const emojiNameRandom = document.getElementById("emoji-name");

const emoji = [];

// API
async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1"
  );

  data = await response.json();

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

buttonRandom.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  buttonRandom.innerText = emoji[randomNum].emojiName;
  emojiNameRandom.innerText = emoji[randomNum].emojiCode;
});
