const { timeStamp } = require('console');
const fs = require('fs');
const path = require('path');

const action = process.argv[2];
const input = process.argv.slice(3).join(' ');

const filepath = path.join(__dirname, 'notes.json');

if(!fs.existsSync(filepath)) {
  fs.writeFileSync(filepath, JSON.stringify([]));
}

const notes = JSON.parse(fs.readFileSync(filepath, 'utf8'));

if (action === 'add') {
  notes.push({ id: notes.length + 1, note: input, timeStamp: new Date().toISOString() });
  fs.writeFileSync(filepath, JSON.stringify(notes, null, 2));
  console.log('Note added successfully');
}

else if (action === 'view') {
  if (notes.length === 0) {
    console.log('No notes found');
  }
  else {
    notes.forEach((note, index) => {
      console.log(`${index + 1}: ${note.note} (added on ${new Date(note.timeStamp).toLocaleString()})`);
    });
  }
} else if (action === 'delete') {
  fs.writeFileSync(filepath, JSON.stringify([]));
  console.log('All notes deleted successfully');
} else {  
  console.log('Invalid action. Use "add", "view", or "delete".');
 }