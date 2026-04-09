// 🐾 Animal = แบบฟอร์มสัตว์ (แม่แบบ)
// เหมือนบัตรประชาชนของสัตว์ ว่าต้องมีอะไรบ้าง
class Animal {
  constructor(name, species) {
    this.name = name;       // ชื่อสัตว์
    this.species = species; // ประเภท เช่น สิงโต นก
  }

  // เสียงพื้นฐาน (ถ้ายังไม่ได้กำหนดเฉพาะ)
  makeSound() {
    console.log(`${this.name} makes a sound`);
  }
}

// 🐦 Bird = สัตว์ประเภทนก
// เอาแบบฟอร์ม Animal มาใช้ แล้วเพิ่มของนกเข้าไป
class Bird extends Animal {
  constructor(name, species, wingspan) {
    super(name, species); // เอาข้อมูลจาก Animal มาใช้
    this.wingspan = wingspan; // เพิ่มความยาวปีก
  }

  // นกมีเสียงเฉพาะของตัวเอง
  makeSound() {
    console.log(`${this.name} chirps: Tweet! Tweet!`);
  }
}

// 🦁 Mammal = สัตว์เลี้ยงลูกด้วยนม (เช่น สิงโต)
class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species);
    this.furColor = furColor; // สีขน
  }

  // เสียงเฉพาะของสัตว์ชนิดนี้
  makeSound() {
    console.log(${this.name} growls);
  }
}

// 🏢 Zoo = สวนสัตว์
// เหมือน "กล่องใหญ่" ที่เอาสัตว์หลายตัวมาเก็บรวมกัน
class Zoo {
  constructor(zooName) {
    this.zooName = zooName; // ชื่อสวนสัตว์
    this.animals = [];      // กล่องเก็บสัตว์ (เริ่มต้นยังว่าง)
  }

  // เพิ่มสัตว์เข้าไปในสวนสัตว์
  addAnimal(animal) {
    this.animals.push(animal); // เอาสัตว์ใส่เข้าไปในกล่อง
    console.log(Added ${animal.name} to the ${this.zooName});
  }

  // แสดงสัตว์ทั้งหมดในสวนสัตว์
  showAllAnimals() {
    console.log(\nAnimals in ${this.zooName}:);

    // วนดูสัตว์ทีละตัว
    this.animals.forEach((animal) => {
      console.log(- ${animal.name} (${animal.species}));

      // ให้สัตว์แต่ละตัว "ส่งเสียงของตัวเอง"
      // ถึงจะเรียกคำสั่งเดียวกัน แต่เสียงไม่เหมือนกัน
      animal.makeSound();
    });
  }
}

//////////////////////////////////////////////////
// 🚀 เริ่มใช้งานจริง

// สร้างนกชื่อ Zazu
const zazu = new Bird("Zazu", "Hornbill", "2 feet");

// สร้างสิงโตชื่อ Leo
const leo = new Mammal("Leo", "Lion", "Golden");

// สร้างสวนสัตว์
const myZoo = new Zoo("The JS Terminal Zoo");

// เอาสัตว์เข้าไปในสวนสัตว์
myZoo.addAnimal(zazu);
myZoo.addAnimal(leo);

// แสดงสัตว์ทั้งหมด
myZoo.showAllAnimals();