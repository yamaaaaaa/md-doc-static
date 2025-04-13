import fs from 'fs';
import * as path from 'path';
import {mdToPdf} from 'md-to-pdf';

const mdDir = 'public/assets/md/';
const pdfDir = 'public/assets/pdf/';
const navJsonFile = 'public/assets/js/nav.json';
const files = fs.readdirSync(mdDir);
for(let i = 0; i<files.length; i++){
	if(files[i].indexOf('.md') !== -1){
		let src = mdDir + files[i];
		let dist = pdfDir + files[i].replace('.md','.pdf');
		(async () => {
			const pdf = await mdToPdf({ path: src }).catch(console.error);
			if (pdf) {
				fs.writeFileSync(dist, pdf.content);
			}
		})();
	}
}
