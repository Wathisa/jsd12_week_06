// จดรายชื่อแก๊งโปเกมอนที่อยากได้ใส่ Array ไว้
const pokemonTeam = [
  "pikachu",
  "charmander",
  "squirtle",
  "bulbasaur",
  "mewtwo",
];

console.log("🚀 กำลังส่งนกพิราบไปเรียกแก๊งโปเกมอนออกมา...");

// ใช้ .forEach() เพื่อสั่งให้หยิบชื่อมาทีละตัว แล้วส่งไป fetch
pokemonTeam.forEach((name) => {
  // ป้ายชื่อที่อยู่จะถูกเปลี่ยนไปเรื่อยๆ ตามชื่อที่หยิบมาได้ในรอบนั้น
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`หา ${name} ไม่เจอครับ!`);
      }
      return response.json();
    })
    .then((pokemon) => {
      // ดึงรูปร่างหน้าตาของแต่ละตัวออกมา
      const imageUrl = pokemon.sprites.other["official-artwork"].front_default;

      console.log(`\n✨ โปเกมอน: ${pokemon.name.toUpperCase()}`);
      console.log(`🖼️ คลิกลิงก์เพื่อดูรูป: ${imageUrl}`);
    })
    .catch((error) => {
      console.error(error);
    });
});
