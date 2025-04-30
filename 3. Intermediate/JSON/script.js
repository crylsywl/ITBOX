const fs = require('fs');

const data = fs.readFileSync('./data.json', 'utf8');
const parsedData = JSON.parse(data);

console.log('list data: ');
parsedData.forEach(data => {
    console.log(`${data.id}. ${data.name}, ${data.email}`)
})
