const url = require('url');


console.log("==========Parsing a URL============")

let urlString = 'https://www.example.com:8080/path/to/resource?query=example&id=1';

let parsedUrl = url.parse(urlString, true);

console.log('Protocol:', parsedUrl.protocol); // 'https:'
console.log('Host:', parsedUrl.host); // 'www.example.com:8080'
console.log('Path:', parsedUrl.pathname); // '/path/to/resource'
console.log('Query:', parsedUrl.query); // { query: 'example' }



console.log("\n\n==========Formatting a URL============")

 parsedUrl = {
    protocol: 'https:',
    host: 'www.example.com',
    pathname: '/path/to/resource',
    query: { query: 'example' },
  };
  
let formattedUrl = url.format(parsedUrl);
  
console.log('Formatted URL:', formattedUrl); // 'https://www.example.com/path/to/resource?query=example'


console.log("\n\n==========Resolving Relative URLs============")


let baseUrl = 'https://www.example.com/path/';
let relativeUrl = '../to/another/resource';

let resolvedUrl = url.resolve(baseUrl, relativeUrl);

console.log('Resolved URL:', resolvedUrl); // 'https://www.example.com/to/another/resource'



console.log("\n\n==========URL Object Properties============")


 urlString = 'https://www.example.com:8080/path/to/resource?query=example';

 parsedUrl = url.parse(urlString);

console.log('Protocol:', parsedUrl.protocol); // 'https:'
console.log('Host:', parsedUrl.host); // 'www.example.com:8080'
console.log('Hostname:', parsedUrl.hostname); // 'www.example.com'
console.log('Port:', parsedUrl.port); // '8080'
console.log('Path:', parsedUrl.pathname); // '/path/to/resource'
console.log('Query:', parsedUrl.query); // 'query=example'



console.log("\n\n==========Extracting Query Params============")


 urlString = 'https://www.example.com/path?name=John&age=30';

 parsedUrl = url.parse(urlString, true);

console.log('Query Parameters:', parsedUrl.query);
console.log('Name:', parsedUrl.query.name); // 'John'
console.log('Age:', parsedUrl.query.age); // '30'



console.log("\n\n==========Resolving Paths in URLs============")

 baseUrl = 'https://www.example.com/users/';
 userId = '123';

 resolvedUrl = url.resolve(baseUrl, userId);

console.log('Resolved URL:', resolvedUrl);


