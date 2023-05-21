// File System
const fs = require("fs");


// Readline
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const { resolve } = require("path");
const { rejects } = require("assert");

const rl = readline.createInterface({ input, output });

//membuat folder data
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  // cek jika tidak ada path jalankan kode bawah
  fs.mkdirSync(dirPath); // buatkan path tersebut
}

// membuat file contacts.json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, rejects) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanContact = (nama, email, noHP) => {
    const contact = {
        nama,
        email,
        noHP,
      };
    
      const file = fs.readFileSync("data/contacts.json", "utf-8");
      const contacts = JSON.parse(file);
      console.log(contact);
      contacts.push(contact);
    
      fs.writeFile("data/contacts.json", JSON.stringify(contacts), (err) => {});
    
      console.log("Terimakah telah mengisi data!");
      rl.close();
    
}


module.exports = {simpanContact, tulisPertanyaan}