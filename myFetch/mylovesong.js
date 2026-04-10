// ดึงรายชื่อเพลงมา 30 เพลง
const url = "https://itunes.apple.com/search?term=dindin&entity=song&limit=30";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("🎧 สุ่มรายชื่อเพลงมา 5 เพลง:");

    // สลับตำแหน่งข้อมูลใน Array แบบสุ่ม
    const shuffledSongs = data.results.sort(() => Math.random() - 0.5);
    // คำสั่ง .sort() เอาไว้เรียงลำดับ (เช่น a-z หรือ 1-10)
    // แต่พอเราใส่ Math.random() - 0.5 เข้าไปข้างใน มันคือสั่งในคนๆสลับๆข้อมูล
    // ส่วน .slice(0, 5) คือให้ตัดเอาข้อมูลแค่ลำดับที่ 0-5 มาใช้งาน

    // เอาแค่ 5 เพลงแรกที่อยู่บนสุด
    const randomFiveSongs = shuffledSongs.slice(0, 5);

    // ใช้ .map() ดึงมาแค่ชื่อเพลง
    const songNames = randomFiveSongs.map((song) => song.trackName);

    console.log(songNames);
  })
  .catch((error) => {
    console.error("หาเพลงไม่เจอค่ะ:", error);
  });
