// Core Module
// File System
const fs = require("fs");

// menuliskan string ke file (synchronus)
// try{
//     fs.writeFileSync('data/test.txt', 'Hello world secara synchronus!');
// }catch(err){
//     console.log(err)
// }

// menuliskan string ke file (asynchronus)
// fs.writeFile('data/test.txt', 'Hello ini asynchrinus!',(err) =>{
//     console.log(err)
// })

// Membaca isi file (synchronus)
// const data = fs.readFileSync('data/test.txt','utf-8')
// console.log(data)

// Membaca isi file (asynchronus)
// fs.readFile('data/test.txt', 'utf-8', (err, data) =>{
//     if(err) throw err;
//     console.log(data);
// })

// Readline
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

rl.question("Siapa nama anda : ", (nama) => {
  rl.question("Brapa umur anda  : ", (umur) => {
    const contact = {
      nama,
      umur,
    };

    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);
    console.log(contact);
    contacts.push(contact);

    fs.writeFile("data/contacts.json", JSON.stringify(contacts), (err) => {});

    rl.close();

    console.log("Terimakah telah mengisi data!");
  });
});
