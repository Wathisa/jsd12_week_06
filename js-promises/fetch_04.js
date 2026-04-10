function getAllAnimalsByLetter(letter) {
  let allResults = [];
  let offset = 0; // เพิ่มตัวแปรนี้เพื่อบอกว่าเราจะดึงข้อมูลหน้าไหน

  function fetchNextPage() {
    // ต้องเอา offset ไปต่อท้าย URL ด้วยค่ะ
    const url = `https://api.api-ninjas.com/v1/animals?name=${letter}&offset=${offset}`;

    return fetch(url, {
      headers: { "X-Api-Key": "XBPbyNXHwwUyuf8lPWEFAkP2g7CmkjnuxMmtGm8z" },
    })
      .then((response) => response.json())
      .then((data) => {
        // ถ้าไม่มีข้อมูลส่งกลับมาแล้ว คือดึงครบทุกหน้าแล้ว
        if (data.length === 0) {
          console.log(
            `Found ${allResults.length} animals containing the letter ${letter}`,
          );
          console.log(allResults);
          return allResults; // คืนค่าข้อมูลทั้งหมดกลับไป
        }

        // เอาข้อมูลหน้าที่ดึงได้ล่าสุด ไปต่อท้ายในกล่อง
        allResults.push(...data);
        return allResults;
      });
  }

  return fetchNextPage();
}

getAllAnimalsByLetter("a")
  .then((animals) => {
    console.log("Finished fetching all pages.");
    console.log(animals.map((animal) => animal.name));
  })
  .catch((error) => {
    console.error("Something went wrong!", error);
  });
