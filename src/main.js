import './sass/app.scss'
import axios from 'axios';
import {marked} from 'marked';
import {createApp} from "vue/dist/vue.esm-bundler.js";

class Main {
	
	constructor() {
		axios.get('assets/js/nav.json')
		.then(this.init.bind(this))
		.catch((err)=>{
			console.log(err);
		});
	}
	
	init(response) {
		console.log(response.data.pages);
		createApp({
			data() {
				return {
					pages: response.data.pages,
					body: ''
				}
			},
			mounted() {
				document.querySelector('[href="#index"]').click();
			},
			methods : {
				link: function(e){
					const link = e.currentTarget;
					axios.get('assets/md/'+link.dataset.file)
					.then(function(responce){
						document
						.getElementById('markdownBody')
						.innerHTML = marked(responce.data);
					})
					.catch((err)=>{
						console.log(err);
					});
				}
			}
		}).mount('#app');
	}
	
}

new Main();