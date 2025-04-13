import fs from 'fs';
import * as path from 'path';
import markdownit from 'markdown-it';

const mdit = markdownit()
const mdDir = 'public/assets/md/';
const htmlDir = 'public/assets/html/';
const files = fs.readdirSync(mdDir);
const template = fs.readFileSync(htmlDir + '_template.html', 'utf8');
const style = fs.readFileSync(htmlDir + 'style.css', 'utf8');

for(let i = 0; i<files.length; i++){
	if(files[i].indexOf('.md') !== -1){
		let src = mdDir + files[i];
		let filename = files[i].replace('.md','.html');
		let dist = htmlDir + filename;
		let markdown = fs.readFileSync(src, 'utf8');
		let html = template.replace('__TITLE__',filename.replace('.html',''));
		html = html.replace('__STYLE__',style);
		html = html.replace('__BODY__',mdit.render(markdown));
		fs.writeFileSync(dist, html);
	}
}
