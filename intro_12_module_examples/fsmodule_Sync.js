const fs = require('fs');

try {
  // Read directory (synchronous)
  const files = fs.readdirSync('.');
  console.log('Files in the current directory:', files);

  // Create a file (synchronous)
  const newFilePath = 'file.txt';
  const fileContent = 'This is the content of the new file.';
  fs.writeFileSync(newFilePath, fileContent);
  console.log('File created successfully.');

  // Get file stats (synchronous)
  const stats = fs.statSync('file.txt');
  console.log('File size:', stats.size);
  console.log('Is it a directory?', stats.isDirectory());
  console.log('Is it a file?', stats.isFile());

  // Read a file (synchronous)
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log('File content:');
  console.log(data);

  // Write to a file (synchronous)
  fs.writeFileSync('file.txt', 'Hello, Node.js!');
  console.log('File written successfully.');

  // Append to a file (synchronous)
  fs.appendFileSync('file.txt', '\nAppended content.');
  console.log('Content appended to the file.');

  // Check if a file exists (synchronous)
  const filePath = 'file.txt';
  if (fs.existsSync(filePath)) {
    console.log(`${filePath} exists.`);
  } else {
    console.log(`${filePath} does not exist.`);
  }

  // Create a new directory (synchronous)
  const directoryPath = 'new-directory';
  fs.mkdirSync(directoryPath);
  console.log('Directory created successfully.');

  // Rename a file (synchronous)
  const newFilePath2 = 'renamed-file.txt';
  fs.renameSync('file.txt', newFilePath2);
  console.log('File renamed successfully.');

  // Delete a file (synchronous)
  const filePathToDelete = 'renamed-file.txt';
  if (fs.existsSync(filePathToDelete)) {
    fs.unlinkSync(filePathToDelete);
    console.log('File deleted successfully.');
  } else {
    console.log('File does not exist.');
  }

  // Remove a directory (synchronous)
  const directoryPathToRemove = 'new-directory';
  fs.rmdirSync(directoryPathToRemove);
  console.log('Directory removed successfully.');
} catch (err) {
  console.error('Error:', err);
}
