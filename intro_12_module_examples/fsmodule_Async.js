const fs = require('fs');


//read directory
fs.readdir('.', (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }
    console.log('Files in the current directory:', files);
  });


//making a file
const newfilePath = 'file.txt';
const fileContent = 'This is the content of the new file.';

fs.writeFile(newfilePath, fileContent, (err) => {
  if (err) {
    console.error('Error creating file:', err);
    return;
  }
  console.log('File created successfully.');
});


//stats about a file 
fs.stat('file.txt', (err, stats) => {
    if (err) {
      console.error('Error getting file stats:', err);
      return;
    }
    console.log('File size:', stats.size);
    console.log('Is it a directory?', stats.isDirectory());
    console.log('Is it a file?', stats.isFile());
  });




//reading a file
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File content:');
    console.log(data);
  });


//writing on to the file 
fs.writeFiles('file.txt', 'Hello, Node.js!', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('File written successfully.');
  });


//appending the file
fs.appendFile('file.txt', '\nAppended content.', (err) => {
    if (err) {
      console.error('Error appending to file:', err);
      return;
    }
    console.log('Content appended to the file.');
  });


//checking if file exists
const filePath = 'file.txt';

if (fs.existsSync(filePath)) {
  console.log(`${filePath} exists.`);
} else {
  console.log(`${filePath} does not exist.`);
}

//making new directory
const directoryPath = 'new-directory';

fs.mkdir(directoryPath, (err) => {
  if (err) {
    console.error('Error creating directory:', err);
    return;
  }
  console.log('Directory created successfully.');
});



//renaming the file

const newFilePath = 'renamed-file.txt';

fs.rename('file.txt', newFilePath, (err) => {
  if (err) {
    console.error('Error renaming file:', err);
    return;
  }
  console.log('File renamed successfully.');
});


//deleting a file
const filePathToDelete = 'renamed-file.txt';

if (fs.existsSync(filePathToDelete)) {
    fs.unlink(filePathToDelete, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
        return;
      }
      console.log('File deleted successfully.');
    });
  } else {
    console.log('File does not exist.');
  }


//removing a director
const directoryPathToRemove = 'new-directory';

fs.rmdir(directoryPathToRemove, (err) => {
  if (err) {
    console.error('Error removing directory:', err);
    return;
  }
  console.log('Directory removed successfully.');
});