const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan Gaji and perjam : ', (salary) => {
    rl.question('Masukkan Jam Kerja : ', (workHours) => {
      console.log("Gaji yang anda terima adalah : " + calculateSalary(salary, workHours));
      rl.close();
    });
  });

  function calculateSalary(salary, workHours) {
    let extratime = 0;
    if (workHours > 40) {
        extratime = workHours - 40
        salary = (salary*workHours) + (salary*extratime*1.5);
    } else {
        salary = salary * workHours;
    }
    return salary;
}