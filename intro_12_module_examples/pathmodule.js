const path = require('path')


// Path Manipulation
console.log('Basename:', path.basename('C:\\temp\\hello.html'));
console.log('Dirname:', path.dirname('C:\\temp\\hello.html'));
console.log('Extension:', path.extname('C:\\temp\\hello.html'));

// Path Manipulation for Current File (__filename)
console.log('Basename for current file:', path.basename(__filename));
console.log('Dirname for current file:', path.dirname(__filename));
console.log('Extension for current file:', path.extname(__filename));

// Joining Paths
const joinedPath = path.join('/user', 'documents', 'files', 'document.txt');
console.log('Joined Path:', joinedPath);

// Resolving Paths
const resolvedPath = path.resolve('app.js');
console.log('Resolved Path:', resolvedPath);

// Normalizing Paths
const normalizedPath = path.normalize('C:\\Users\\John\\..\\Documents\\file.txt');
console.log('Normalized Path:', normalizedPath);

// Checking if a Path is Absolute
console.log('Is Absolute Path:', path.isAbsolute('/user/documents/file.txt'));
console.log('Is Absolute Path:', path.isAbsolute('user/documents/file.txt'));

// Parsing a Path
const parsedPath = path.parse('/user/documents/file.txt');
console.log('Parsed Path:');
console.log(parsedPath);

// Formatting a Path from Parsed Parts
const formattedPath = path.format({
  root: '/',
  dir: '/user/documents',
  base: 'file.txt',
});
console.log('Formatted Path:', formattedPath);

// Getting the Relative Path between two Paths
const fromPath = '/user/documents/photos';
const toPath = '/user/documents/files';
const relativePath = path.relative(fromPath, toPath);
console.log('Relative Path:', relativePath);

// Checking if Paths are the Same
const path1 = '/user/documents/file.txt';
const path2 = '/user/documents/file.txt';
const arePathsSame = path1 === path2; // Direct comparison
console.log('Are Paths the Same:', arePathsSame);

// Getting the Platform-Specific Path Separator
const pathSeparator = path.sep;
console.log('Path Separator:', pathSeparator);