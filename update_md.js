import fs from 'fs';
import * as path from 'path'

const mdDir = 'public/assets/md';
const navJsonFile = 'public/assets/js/nav.json';
const files = fs.readdirSync(mdDir);
let navJson = {pages : ['index.md']};
for(let i = 0; i<files.length; i++){
	if(
		files[i].indexOf('.md') !== -1 &&
		files[i]!='index.md'
	){
		navJson.pages.push(files[i]);
	}
}

fs.writeFileSync(navJsonFile, JSON.stringify(navJson));
fs.writeFileSync(
	'index.html', 
	fs.readFileSync('index.html', 'utf8')
);