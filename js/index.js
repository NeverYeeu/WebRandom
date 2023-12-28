import {api} from "./api.js"
console.log(api)
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
let arrApi = api.comics;
let comicId = $('#comic-id');
let comicName = $('.comic-name');
let title = $('title');
/* ---------------------------------------------------------------------------- */
let listImg = $('#web-img > .web-col');
let getRandom = Math.floor(Math.random() * arrApi.length);
let currentComic = arrApi[getRandom];
let imgLength = currentComic.imageLength;
function hanldeComics(){
	function renderComic(){
		title.innerText = "Reading: " + currentComic.nameComic;
		comicName.innerText = currentComic.nameComic;
		comicId.setAttribute('value', +getRandom + 1)
	} renderComic()
} hanldeComics();

function renderImages() {
	for (let i = 1; i < imgLength; i++){
		let img = document.createElement('img');
		img.src = 'img/'+ currentComic.nameImage +'/'+ currentComic.nameImage +' ('+ i + ').jpg';
		listImg.appendChild(img);
	}
} renderImages();