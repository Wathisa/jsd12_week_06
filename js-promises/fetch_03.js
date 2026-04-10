function getAllAnimalsByLetter(letter) {
  let offset = 0;
  let allResults = [];

  const url = `https://api.api-ninjas.com/v1/animals?name=${letter}&offset=${offset}`;
  return fetch(url, {
    headers: { "X-Api-Key": "XBPbyNXHwwUyuf8lPWEFAkP2g7CmkjnuxMmtGm8z" },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        allResults.push(...data);
        offset += 20; // Move to the next "page"
      }

      console.log(
        `Found ${allResults.length} animals containing the letter ${letter}`,
      );
      console.log(allResults);
    });
}

getAllAnimalsByLetter("a");

// นี่ค้าบถ้าอยากดึงข้อมูล ตำแหน่ง 0 ถึง 20 ครับ ดึงมาแค่ 20 obj ครับ
// .then((data) => {
//       if (data.length > 0) {
//          const limitedData = data.slice(0, 20);
//          allResults.push(...limitedData);

//       }
