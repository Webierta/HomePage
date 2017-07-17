
var S1, S2, S3, S4, S5, S6;
var LINK;
var LANG;

// 	ALMACEN LOCAL

// Carga o crea almacen local indexedDB
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
if (!indexedDB) {
	if (LANG === "ES"){
		alert("\t¡Error!\n\nSu navegador no soporta indexedDB.\nLa aplicación se detendrá.");
	} else {
		alert("\tError!\n\nYour browser does not support indexedDB.\nThe application will stop.");
	}        
    window.stop();    
}

var dataBase = indexedDB.open("HomePage", 1);
dataBase.onerror = function (event)  {
	if (LANG === "ES"){
		alert("\t¡Error!\n\nError de acceso al almacen local:\n" + event.target.message);
	} else {
		alert("\tError!\n\nAccess to local store failed:\n" + event.target.message);
	} 	
}

dataBase.onupgradeneeded = function () {
	var active = dataBase.result;
	var setObj = active.createObjectStore("SET", { keyPath : 'id', autoIncrement : false });
	var nameSet = setObj.createIndex('by_nameSet', 'nameSet', { unique : false });
	var imgSet = setObj.createIndex('by_imgSet', 'imgSet', { unique : false });	
	
	var bgObj = active.createObjectStore("BG", { keyPath : 'bg', autoIncrement : false });
	var colorBg = bgObj.createIndex('by_colorBg', 'colorBg', { unique : false });
	var imgBg = bgObj.createIndex('by_imgBg', 'imgBg', { unique : false });
	
	var linkObj = active.createObjectStore("LINK", { keyPath : 'idLink', autoIncrement : true });
	var sLink = linkObj.createIndex('by_sLink', 'sLink', { unique : false });
	var nLink = linkObj.createIndex('by_nLink', 'nLink', { unique : false });
	var uLink = linkObj.createIndex('by_uLink', 'uLink', { unique : false });
	var iLink = linkObj.createIndex('by_iLink', 'iLink', { unique : false });
	
	// valores iniciales	
	//setObj.put({id: 1, nameSet: "Cosas", imgSet: "Koffie.svg"});
	//linkObj.put({idLink: 1, nLink: "Cosas", uLink: "", iLink: "Koffie.svg"});
}

dataBase.onsuccess = function() {
	active = dataBase.result;
	recuperarSet(1, 'set1', 'set1Lab', 'tab1Name', 'tab1Img', 'set1Img', 'tab1Content', 'tab1Bnew', 'tab1Bdel');
	recuperarSet(2, 'set2', 'set2Lab', 'tab2Name', 'tab2Img', 'set2Img', 'tab2Content', 'tab2Bnew', 'tab2Bdel');
	recuperarSet(3, 'set3', 'set3Lab', 'tab3Name', 'tab3Img', 'set3Img', 'tab3Content', 'tab3Bnew', 'tab3Bdel');
	recuperarSet(4, 'set4', 'set4Lab', 'tab4Name', 'tab4Img', 'set4Img', 'tab4Content', 'tab4Bnew', 'tab4Bdel');
	recuperarSet(5, 'set5', 'set5Lab', 'tab5Name', 'tab5Img', 'set5Img', 'tab5Content', 'tab5Bnew', 'tab5Bdel');
	recuperarSet(6, 'set6', 'set6Lab', 'tab6Name', 'tab6Img', 'set6Img', 'tab6Content', 'tab6Bnew', 'tab6Bdel');
	recuperarBG();
	recuperarLink();
	//recuperarLang();
}

// Recupera datos (si exiten)
function recuperarSet(nx, setx, setxLab, tabxName, tabxImg, setxImg, tabxContent, tabxBnew, tabxBdel){	

	var active = dataBase.result;
	var dataSet = active.transaction("SET", "readonly");
	var objectSet = dataSet.objectStore("SET");
	
	var requestSet = objectSet.get(nx);	
	//var requestSet = objectSet.openCursor();	
	
	requestSet.onsuccess = function () {
	//requestSet.onsuccess = function (event) {
		var result = requestSet.result;
		//var result = event.target.result;

		if (result !== undefined) {
		//if (result) {
			
			document.getElementById(setx).style.display='block';
			//document.getElementById(setx).setAttribute("class", "fade");
			
			//document.getElementById('tab1Lab').innerHTML = result.nameSet;
			document.getElementById(setxLab).innerHTML = result.nameSet;			
			
			document.getElementById(tabxName).placeholder = result.nameSet;
			
			//document.getElementById(setxImg).src = result.imgSet;
			var urlImg = "url(" + result.imgSet + ")";
			document.getElementById(setxImg).style.backgroundImage = urlImg;
			
			document.getElementById(tabxImg).innerHTML = result.imgSet;
			//document.getElementById(tabxImg).innerHTML = "(" + result.imgSet + ")";
			//result.id
			document.getElementById(tabxContent).style.display = "block";
			document.getElementById(tabxBnew).disabled = true;
			//document.getElementById(tabxBsav).disabled = false;
			document.getElementById(tabxBdel).disabled = false;
			//document.getElementById('tab1Save').style.display='block';			
			if (nx === 1){
				S1 = true;
				if(result.nameSet == ""){result.nameSet = "Set 1";}
				document.getElementById('set1Link').innerHTML = result.nameSet;
			}
			if (nx === 2){
				S2 = true;
				if(result.nameSet == ""){result.nameSet = "Set 2";}
				document.getElementById('set2Link').innerHTML = result.nameSet;
			}
			if (nx === 3){
				S3 = true;
				if(result.nameSet == ""){result.nameSet = "Set 3";}
				document.getElementById('set3Link').innerHTML = result.nameSet;
			}
			if (nx === 4){
				S4 = true;
				if(result.nameSet == ""){result.nameSet = "Set 4";}
				document.getElementById('set4Link').innerHTML = result.nameSet;
			}
			if (nx === 5){
				S5 = true;
				if(result.nameSet == ""){result.nameSet = "Set 5";}
				document.getElementById('set5Link').innerHTML = result.nameSet;}
			if (nx === 6){
				S6 = true;
				if(result.nameSet == ""){result.nameSet = "Set 6";}
				document.getElementById('set6Link').innerHTML = result.nameSet;}
			
			//result.continue();
			
		} else {
			document.getElementById(tabxBnew).disabled = false;
			//document.getElementById(tabxBsav).disabled = true;
			document.getElementById(tabxBdel).disabled = true;			
		}
	}
}	

function recuperarBG () {
	var active = dataBase.result;
	var dataBG = active.transaction("BG", "readonly");
	var objectBG = dataBG.objectStore("BG");
	var requestBG = objectBG.get(1);	
	requestBG.onsuccess = function () {
		var result = requestBG.result;
		if (result !== undefined) {			
			document.getElementById('bgForm').reset();

			var colorRec = result.colorBg;
			var invertColor = invertirColor(colorRec);			
			colorRec = "#" + invertColor;			
									
			document.getElementById('colorH').placeholder = result.colorBg;
			document.getElementById('colorF').innerHTML = result.colorBg;		
			document.getElementById('colorH').style.backgroundColor = result.colorBg;
			document.getElementById('colorH').style.color = colorRec;
			document.body.style.backgroundColor = result.colorBg;
			
			var img_url = "url('" + result.imgBg + "')";
			document.body.style.backgroundImage = img_url;
			if (result.imgBg != "images/"){
				document.getElementById('imagenFondo').innerHTML = result.imgBg;
			}
		}
	}
}               

function recuperarLink(){
	var active = dataBase.result;
	var dataLink = active.transaction("LINK", "readonly");
	var objectLink = dataLink.objectStore("LINK");
	
	var requestLink = objectLink.openCursor();
	requestLink.onsuccess = function (event) {
		var cursor = event.target.result;
		if (cursor){						
			crearLink(cursor.value.sLink, cursor.value.nLink, cursor.value.uLink, cursor.value.iLink);
			cursor.continue();		
		}		
	}	
}

function crearLink(set, name, url, img){
	var link = document.createElement('a');
	link.setAttribute("href", url);	
	
	var elem = document.createElement('img');
	elem.src = img;
	//elem.setAttribute("src", imgLink);
	elem.setAttribute("height", "50px");
	elem.setAttribute("width", "50px");
	elem.style.borderRadius = '80%';
	elem.setAttribute("class", "w3-margin");
	elem.setAttribute("title", name);	
	link.appendChild(elem);
	
	if (set === 1){document.getElementById("contImg1").appendChild(link);}
	if (set === 2){document.getElementById("contImg2").appendChild(link);}
	if (set === 3){document.getElementById("contImg3").appendChild(link);}
	if (set === 4){document.getElementById("contImg4").appendChild(link);}
	if (set === 5){document.getElementById("contImg5").appendChild(link);}
	if (set === 6){document.getElementById("contImg6").appendChild(link);}
}

// MENU
// Menu abre
function menu_open(){
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
// Menu cierra
function menu_close(){
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none"; 
}

// INFO
// Info abre
function info_open() {
	menu_close();
	document.getElementById('info').style.display='block';
}
// Info cierra
function info_close() {
	document.getElementById('info').style.display='none';
}
// Tabs
function openInfo(evt, helpName) {
	var i, x, tabinfos;
	x = document.getElementsByClassName("inf");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	tabinfos = document.getElementsByClassName("tabinfo");
	for (i = 0; i < x.length; i++) {
		tabinfos[i].classList.remove("w3-theme");
	}
	document.getElementById(helpName).style.display = "block";
	evt.currentTarget.classList.add("w3-theme");	
}

// LANG
// Lang abre
function lang_open() {
	menu_close();
	document.getElementById('lang').style.display='block';
}
//Lang cierra
function lang_close() {
	document.getElementById('lang').style.display='none';
	location.replace(location.hostname);  
}

// TOOLS
function tools_open() {
	menu_close();
	document.getElementById('tools').style.display='block';
}

// ABOUT
// About abre
function about_open() {
	menu_close();
	document.getElementById('about').style.display='block';
}
// About cierra
function about_close() {
	document.getElementById('about').style.display='none';  
}
// Credits
function acordeon(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

// SETTINGS
// Settings abre
function settings_open() {
	menu_close();
	document.getElementById('settings').style.display='block';
}
// Settings cierra sin guardar
function settings_close() {
	document.getElementById('settings').style.display='none';
	//recuperarDatos();
	location.replace(location.hostname);
}

// Tab
function openTab(evt, tabx) {
	var i, x, tablinks;
	x = document.getElementsByClassName("set_all");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" w3-theme", "");
	}
	document.getElementById(tabx).style.display = "block";
	evt.currentTarget.className += " w3-theme";
}

// Ventana de pestañas

// Set crear
function newSet(tabxBnew, tabxBdel,tabxContent){
	document.getElementById(tabxBnew).disabled = true;
	//document.getElementById(tabxBsav).disabled = false;
	document.getElementById(tabxBdel).disabled = false;
	document.getElementById(tabxContent).style.display='block';
	//document.getElementById('tab1Save').style.display='block';
	
	switch (tabxBnew) {
		case 'tab1Bnew':
			S1 = true;
			break;
		case 'tab2Bnew':
			S2 = true;
			break;
		case 'tab3Bnew':
			S3 = true;
			break;
		case 'tab4Bnew':
			S4 = true;
			break;			
		case 'tab5Bnew':
			S5 = true;
			break;
		case 'tab6Bnew':
			S6 = true;
	}
}

// Set eliminar
function deleteSet(tabxBnew, tabxBdel, tabxContent, tabxForm, setx){
	document.getElementById(tabxBnew).disabled = false;
	//document.getElementById(tabxBsav).disabled = true;
	document.getElementById(tabxBdel).disabled = true;
	document.getElementById(tabxContent).style.display='none';
	//document.getElementById('tabxSave').style.display='none';
	document.getElementById(tabxForm).reset();
	
	switch (tabxBnew) {
		case 'tab1Bnew':
			S1 = false;
			break;
		case 'tab2Bnew':
			S2 = false;
			break;
		case 'tab3Bnew':
			S3 = false;
			break;
		case 'tab4Bnew':
			S4 = false;
			break;			
		case 'tab5Bnew':
			S5 = false;
			break;
		case 'tab6Bnew':
			S6 = false;
	}
			
	var active = dataBase.result;	
	var dataSet = active.transaction("SET", "readwrite");
	var objectSet = dataSet.objectStore("SET");
	var removeSet = objectSet.delete(setx);
	//var removeSet = objectSet.clear();   // elimina todos los objetos del almacen
	
	//eliminar todos los links del Set	
	var dataLink = active.transaction("LINK", "readwrite");
	var objectLink = dataLink.objectStore("LINK");
	var index = objectLink.index("by_sLink");
	var requestLink = index.openCursor(IDBKeyRange.only(setx));
	requestLink.onsuccess = function (event) {
		var cursor = event.target.result;
		if (cursor){
			cursor.delete(setx);
			cursor.continue();
		}
	}	
	//var removeLinks = objectLink.clear();
	//var deleteLinks = objectLink.delete();
}

function delete_imgBg() {
	document.getElementById('colorF').innerHTML = "#FFFFFF";
	document.getElementById('colorH').placeholder = "#FFFFFF";
	document.getElementById('colorH').style.backgroundColor = "#FFFFFF";
	document.getElementById('colorH').style.color = "#000000";
	document.getElementById('colorH').value = "#FFFFFF";
	document.body.style.backgroundColor = '#FFFFFF';	
	
	document.getElementById('imagenFondo').innerHTML = "";
	document.getElementById('bgForm').reset();
	document.body.style.backgroundImage='none';
	var active = dataBase.result;
	var dataBG = active.transaction("BG", "readwrite");
	var objectBG = dataBG.objectStore("BG");
	var removeBG = objectBG.clear();	
}

// Gardar datos
function saveSet(tabxImg, tabxLogo, setx, tabxName){
	
	var active = dataBase.result;	
	var dataSet = active.transaction("SET", "readwrite");
	var objectSet = dataSet.objectStore("SET");	
	
	var nameNew;
	if (!document.getElementById(tabxName).value){
		nameNew = document.getElementById(tabxName).placeholder;
	} else {
		nameNew = document.getElementById(tabxName).value;
	}

	var imgNew;
	if (!document.getElementById(tabxLogo).value){
		
		if(!document.getElementById(tabxImg).innerHTML){
			alert ("Imagen requerida");
			return;								
		} else {		
			imgNew = document.getElementById(tabxImg).innerHTML;
		}
	} else {
		//imgNew = document.getElementById(tabxLogo).value;
		imgNew = document.getElementById(tabxLogo).files[0].name; 
		imgNew = "images/" + imgNew;		
	}

	//if (imgNew != undefined){
	var writeSet = objectSet.put({id: setx, nameSet: nameNew, imgSet: imgNew});		
	writeSet.onerror = function (e) {
		alert(request.error.name + '\n\n' + request.error.message);
	}	
}

function saveBG(){
	var active = dataBase.result;
	var dataBG = active.transaction("BG", "readwrite");
	var objectBG = dataBG.objectStore("BG");
	var removeBG = objectBG.clear();
		
	var colorNew;
//	if (!document.getElementById('colorfondo').value){
//		colorNew = document.getElementById('colorF').placeholder;
//	} else {
//		colorNew = document.getElementById('colorfondo').value;
//	}
	colorNew = document.getElementById('colorH').placeholder;
	
	//alert(document.getElementById('colorfondoW3').value);
	//colorNew = document.getElementById('colorfondoW3').value;
			
	var imgBgNew;
	if (!document.getElementById('imgfondo').value){
		imgBgNew = document.getElementById('imagenFondo').innerHTML;
	} else {
		//imgBgNew = document.getElementById('imgfondo').value;
		imgBgNew = document.getElementById('imgfondo').files[0].name;
		imgBgNew = "images/" + imgBgNew;
	}
		
	var fondoImg = document.getElementById('imgfondo').value;
	//var fondoImg = document.getElementById('imgfondo').files[0].name;
	fondoImg = "images/" + fondoImg;
	var writeBG = objectBG.put({bg: 1, colorBg: colorNew, imgBg: imgBgNew});
	writeBG.onerror = function (e) {
		alert(request.error.name + '\n\n' + request.error.message);
	}
}
	
// Gardar datos
function save (){
	if (S1 === true) {saveSet('tab1Img', 'tab1Logo', 1, 'tab1Name');}
	if (S2 === true) {saveSet('tab2Img', 'tab2Logo', 2, 'tab2Name');}
	if (S3 === true) {saveSet('tab3Img', 'tab3Logo', 3, 'tab3Name');} 
	if (S4 === true) {saveSet('tab4Img', 'tab4Logo', 4, 'tab4Name');}
	if (S5 === true) {saveSet('tab5Img', 'tab5Logo', 5, 'tab5Name');}
	if (S6 === true) {saveSet('tab6Img', 'tab6Logo', 6, 'tab6Name');}

	saveBG();

	if (LANG === "ES"){
		alert("\t¡DATOS GUARDADOS!\n\nCierra la ventana para ver los cambios.");
	} else {
		alert("\tSAVED DATA!\n\nClose the window to see the changes.");
	}	
	//settings_close();  // ERROR EN CHROME
}

function invertirColor (colorHex){
	
	colorHex = colorHex.slice(1,7);
	colorHex = colorHex.toUpperCase();
	var carCode = colorHex.split("");
	var numCode = ["F", "E", "D", "C", "B", "A", "9", "8", "7", "6"];
	var letCode = {A:"5", B:"4", C:"3", D:"2", E:"1", F:"0"};	
	var i;
	var invertHex = "";
	for (i = 0; i < 6; i++){
		// si es un número
		if (!isNaN(carCode[i])) {
			invertHex += numCode[carCode[i]];
		// si no es un número	
		} else if (letCode[carCode[i]]){
			invertHex += letCode[carCode[i]]; 
		} else {			
			return false;
		}
	}	
	return invertHex;
}

function colorLive (now){
	//colorNow = document.getElementById('colorfondo').value;
	colorNow = now.value;
	document.getElementById('colorH').placeholder = colorNow;
	document.getElementById('colorH').style.backgroundColor = colorNow;
	
	//colorNumber = colorNow.slice(1,7);
	var invertColor = invertirColor(colorNow);
	
	document.getElementById('colorH').style.color = "#" + invertColor;
}

function saveLink(setx){

	var nameLink = document.getElementById('linkName').value;
	var urlLink = document.getElementById('linkUrl').value;
	//var imgLink = document.getElementById('linkLogo').value;  ERROR EN CHROME Y GNOME

	if (!nameLink || !urlLink || !document.getElementById('linkLogo').value) {
		if (LANG === "ES"){
			alert("\t¡Error!\n\nTodos los campos requeridos");
		} else {
			alert("\tError!\n\nAll fields are required.");
		}		
		return;
	}
	var imgLink = document.getElementById('linkLogo').files[0].name;
	imgLink = "images/" + imgLink;	
	
	var link = document.createElement('a');
	link.setAttribute("href", urlLink);
	//link.setAttribute('draggable', true);
	//link.setAttribute("class", "droptarget");
		
	var elem = document.createElement('img');
	elem.src = imgLink;
	//elem.setAttribute("src", imgLink);
	elem.setAttribute("height", "50px");
	elem.setAttribute("width", "50px");
	elem.style.borderRadius = '80%';
	elem.setAttribute("class", "w3-margin");
	elem.setAttribute("title", nameLink);
	link.appendChild(elem);
	
	//document.getElementById("contImg1").appendChild(link);	
	
	if (setx === 1){document.getElementById("contImg1").appendChild(link);}
	if (setx === 2){document.getElementById("contImg2").appendChild(link);}
	if (setx === 3){document.getElementById("contImg3").appendChild(link);}
	if (setx === 4){document.getElementById("contImg4").appendChild(link);}	
	if (setx === 5){document.getElementById("contImg5").appendChild(link);}
	if (setx === 6){document.getElementById("contImg6").appendChild(link);}	
	
	document.getElementById('linkEdit').style.display='none';	
	
	var active = dataBase.result;
	var dataLink = active.transaction("LINK", "readwrite");
	var objectLink = dataLink.objectStore("LINK");
	var writeLink = objectLink.put({sLink: setx, nLink: nameLink, uLink: urlLink, iLink: imgLink});
	writeLink.onerror = function (e) {
		alert(request.error.name + '\n\n' + request.error.message);
	}	
}

function moreLink(linkx){	
	document.getElementById('linkForm').reset();
	document.getElementById('linkEdit').style.display='block';
	
	if(linkx === "link1"){LINK = 1;}
	if(linkx === "link2"){LINK = 2;}
	if(linkx === "link3"){LINK = 3;}
	if(linkx === "link4"){LINK = 4;}
	if(linkx === "link5"){LINK = 5;}
	if(linkx === "link6"){LINK = 6;}	
}

function lessLink(linkx){
	
	document.getElementById('linkSelect').options.length = 1;

	var active = dataBase.result;
	var dataLink = active.transaction("LINK", "readonly");
	var objectLink = dataLink.objectStore("LINK");
	
	var index = objectLink.index("by_sLink");
	
	if(linkx === "link1"){LINK = 1;}
	if(linkx === "link2"){LINK = 2;}
	if(linkx === "link3"){LINK = 3;}
	if(linkx === "link4"){LINK = 4;}
	if(linkx === "link5"){LINK = 5;}
	if(linkx === "link6"){LINK = 6;}
	
	var requestLink = index.openCursor(IDBKeyRange.only(LINK));
	
	//var requestLink = objectLink.openCursor();
	requestLink.onsuccess = function (event) {
		var cursor = event.target.result;
		if (cursor){	
			recuperarOption(cursor.value.nLink);
			cursor.continue();		
		}		
	}
	document.getElementById('linkDel').style.display='block';		
}

function recuperarOption(nombreLink){
	var x = document.getElementById("linkSelect");
	var option = document.createElement("option");
	option.text = nombreLink;
	x.add(option);
}	
		
function deleteLink(setx){
	var x = document.getElementById("linkSelect");
	//x.options[x.selectedIndex].disabled = true;
	
	var active = dataBase.result;
	var dataLink = active.transaction("LINK", "readwrite");
	var objectLink = dataLink.objectStore("LINK");
	
	var index = objectLink.index("by_sLink");
	
	var requestLink = index.openCursor(IDBKeyRange.only(setx));
	
	requestLink.onsuccess = function (event) {
		var cursor = event.target.result;
		if (cursor){
			if (cursor.value.nLink === x.value){
				var removeLink = cursor.delete(setx);
				x.remove(x.selectedIndex);
				//x.options[x.selectedIndex].disabled = true;
			} else {
				cursor.continue();
			}
		}
	}	
}

function exitLink(){
	document.getElementById('linkDel').style.display='none';
	//location.replace(location.hostname);
	
	var activoLink;
	var setLink;
	
	if (document.getElementById('link1').style.display === 'block'){
		activoLink = "contImg1";
		setLink = 1;
	}	
	if (document.getElementById('link2').style.display === 'block'){
		activoLink = "contImg2";
		setLink = 2;
	}
	if (document.getElementById('link3').style.display === 'block'){
		activoLink = "contImg3";
		setLink = 3;
	}	
	if (document.getElementById('link4').style.display === 'block'){
		activoLink = "contImg4";
		setLink = 4;
	}	
	if (document.getElementById('link5').style.display === 'block'){
		activoLink = "contImg5";
		setLink = 5;
	}	
	if (document.getElementById('link6').style.display === 'block'){
		activoLink = "contImg6";
		setLink = 6;
	}
		
	var listaLink;
	listaLink = document.getElementById(activoLink).getElementsByClassName("w3-margin");
	var i;
	for (i = 0; i < listaLink.length; i++) {
		listaLink[i].style.display = "none";         
	}

	var active = dataBase.result;
	var dataLink = active.transaction("LINK", "readonly");
	var objectLink = dataLink.objectStore("LINK");
		
	var index = objectLink.index("by_sLink");	

	var requestLink = index.openCursor(IDBKeyRange.only(setLink));
	requestLink.onsuccess = function (event) {
		var cursor = event.target.result;
		if (cursor){						
			crearLink(cursor.value.sLink, cursor.value.nLink, cursor.value.uLink, cursor.value.iLink);
			cursor.continue();		
		}		
	}	
}

// CHECK localStorage
//function checkLocalStorage() {
//	if (localStorage) {
//		alert('Tu navegador acepta almacenamiento local con LocalStorage'); 
//	} else {
//		alert('Lo siento, pero tu navegador no acepta almacenamiento local con LocalStorage.\nRevisa la Ayuda para más información.');
//	}
//}

function checkLocalStorage(){
	if (typeof(Storage) !== "undefined") {
		if (LANG === "ES"){
			alert("\t¡PERFECTO!\n\nTu navegador soporta\nalmacenamiento local con LocalStorage.");
		} else {
			alert("\tALL RIGHT!\n\nYour browser supports local\nstorage with LocalStorage.");
		}				
	} else {
		if (LANG === "ES"){
			alert("\t¡ERROR!\n\nTu navegador no soporta\nalmacenamiento local con LocalStorage.");
		} else {
			alert("\tERROR!\n\nYour browser does not accept\nlocal storage with LocalStorage.");
		}		
	}	
}

//function checkLocalStorage(){
//    var test = 'test';
//    try {
//        localStorage.setItem(test, test);
//        localStorage.removeItem(test);
//        alert('Tu navegador acepta almacenamiento local con LocalStorage');         
//    } catch(e) {
//    	alert('Lo siento, tu navegador no acepta almacenamiento local con LocalStorage. \nRevisa la Ayuda para más información.');
//    }
//}


//function alerta(){return "Hola";}


// CHECK IndexedDB
function checkIndexedDB(){

	var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
	if (!indexedDB) {
		if (LANG === "ES"){
			alert("\t¡Error!\n\nSu navegador no soporta indexedDB.");
		} else {
			alert("\tError!\n\nYour browser does not support indexedDB.");
		}				 
	} else {
		if (LANG === "ES"){
			alert("\t¡PERFECTO!\n\nTu navegador soporta\nalmacenamiento local\ncon indexedDB.");
		} else {
			alert("\tALL RIGHT!\n\nYour browser supports local\nstorage with indexedDB.");
		}		
	}
}

// RESET
function reset(){
	
	var msgConfirm;
	if (LANG === "ES"){
		msgConfirm = "\tAVISO\n\n¡Esto borrará todos los datos\ny reiniciará la aplicación!\n\n\t¿Continuar?";
	} else {
		msgConfirm = "\tWARNING\n\nThis will erase all data\nand restart the application!\n\n\tContinue?";
	}
	
	if (confirm(msgConfirm) == true) {

		var active = dataBase.result;
	
		var dataSet = active.transaction("SET", "readwrite");
		var objectSet = dataSet.objectStore("SET");	
	
		var dataLink = active.transaction("LINK", "readwrite");
		var objectLink = dataLink.objectStore("LINK");
	
		var dataBG = active.transaction("BG", "readwrite");
		var objectBG = dataBG.objectStore("BG");
	
		var removeSet = objectSet.clear();
		var removeLink = objectLink.clear();
		var removeBG = objectBG.clear();
	
		active.close();
		
		localStorage.removeItem('lang');
		//localStorage.clear();
		location.replace(location.hostname);        
        
	} else {
		return;
	}
}

// ERROR EN FIREFOX	
//	var deleteDbRequest = indexedDB.deleteDatabase('HomePage');
//	deleteDbRequest.onsuccess = function (event) {
//		// database deleted successfully
//		console.log("Database Delete");
//	};
//	deleteDbRequest.onerror = function (e) {
//	console.log("Database error: " + e.target.errorCode);
//	};
		

