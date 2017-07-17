//var idioma;
//var langStore;
var LANG;

//cambia idioma
function setLang(lang) {
	//idioma = lang;
	if (lang === "esp"){
		localStorage.setItem("lang", "esp");
		LANG = "ES";
	} else {
		localStorage.setItem("lang", "eng");
		LANG = "EN";
	}
	
}
// recupera idioma
var langStore;
if (typeof(Storage) !== "undefined") {  		
	langStore = localStorage.getItem("lang");
	if (langStore === "esp"){
		document.getElementById("radioEs").checked = true;
		LANG = "ES";
	} else {
		document.getElementById("radioEn").checked = true;
		LANG = "EN";		

		var clasePo = document.getElementsByClassName("po");	
		var i;
		for (i = 0; i < clasePo.length; i++) {    	
			var texto = clasePo[i].firstChild.data;
			switch (texto) {
		    	case "Ajustes":
		    		clasePo[i].innerHTML = "Settings"; 
		    		break;
		    	case "Acerca de":
		    		clasePo[i].innerHTML = "About";
		    		break;
		    	case "Créditos":
		    		clasePo[i].innerHTML = "Credits";
		    		break;
		    	case "Proyecto en":
		    		clasePo[i].innerHTML = "Project on";
		    		break;
		    	case "Cerrar":
		    		clasePo[i].innerHTML = "Close";
		    		break;        			             
		    	case "Guardar":
		    		clasePo[i].innerHTML = "Save";
		    		break; 
		    	case "Fondo":
		    		clasePo[i].innerHTML = "Background";
		    		break;
			    case "Herramientas":
		    		clasePo[i].innerHTML = "Tools";
		    		break;		    	
		    	case "Idioma":
		    		clasePo[i].innerHTML = "Language";
		    		break; 
		    	case "Nombre":
		    		clasePo[i].innerHTML = "Name";
		    		break;
		    	case "Imagen":
		    		clasePo[i].innerHTML = "Image";
		    		break;
		    	case "Seleccione su idioma:":
		    		clasePo[i].innerHTML = "Select your language:";
		    		break;
		    	case "Español":
		    		clasePo[i].innerHTML = "Spanish";
		    		break;
		    	case "Inglés":
		    		clasePo[i].innerHTML = "English";
		    		break;
		    	case "Las imágenes deben estar en el directorio HP/images para ser mostradas":
		    		clasePo[i].innerHTML = "The images must be in the HP/images directory to be displayed";
		    		break;
		    	case "Guarda los nuevos datos en cada pestaña":
		    		clasePo[i].innerHTML = "Save the new data in each tab";
		    		break;
		    	case "La acción de eliminar es automáticamente guardada":
		    		clasePo[i].innerHTML = "The delete action is automatically saved";
		    		break;
		    	case "Los cambios se muestran después de cerrar esta ventana":
		    		clasePo[i].innerHTML = "The changes are displayed after closing this window";
		    		break;
		    	case "es software libre":
		    		clasePo[i].innerHTML = "is free software";
		    		break;
		    	case "distribuido con la esperanza de que sea útil":
		    		clasePo[i].innerHTML = "distributed in the hope that it will be useful";
		    		break;
		    	case "pero SIN NINGUNA GARANTÍA":
		    		clasePo[i].innerHTML = "but WITHOUT ANY WARRANTY";
		    		break;
		    	case "Versión":
		    		clasePo[i].innerHTML = "Version";
		    		break;
		    	case "Todos los errores reservados":
		    		clasePo[i].innerHTML = "All Wrongs Reserved";
		    		break;
		    	case "Características":
		    		clasePo[i].innerHTML = "Features";
		    		break;
		    	case "Ayuda":
		    		clasePo[i].innerHTML = "Help";
		    		break;
		    	case "Requisitos":
		    		clasePo[i].innerHTML = "Required";
		    		break;
		    	case "¡Bienvenido a HomePage!":
		    		clasePo[i].innerHTML = "Welcome to HomePage!";
		    		break;
		    	case "permite crear de manera rápida y fácil una página de inicio personalizada con tus enlaces preferidos agrupados por temas":
		    		clasePo[i].innerHTML = "allows you to quickly and easily create a personalized homepage with your favorite links grouped by topic";
		    		break;
		    	case "No requiere instalar nada: Simplemente descarga, descomprime y abre el archivo":
		    		clasePo[i].innerHTML = "No need to install anything: Simply download, unzip and open";
		    		break;
		    	case "con tu navegador":
		    		clasePo[i].innerHTML = "file with your browser";
		    		break;
		    	case "Después crea los temas que más te interesan y añade a cada tema los enlaces a tus webs preferidas.":
		    		clasePo[i].innerHTML = "Then create the topics that interest you, and add to each topic links to your favorite websites.";
		    		break;
		    	case "Dale un toque de diseño personal a los temas, a los enlaces y al fondo.":
		    		clasePo[i].innerHTML = "Give a personal design touch to themes, links and background.";
		    		break;
		    	case "Guarda todos los cambios y pon esa página como página de inicio en tu navegador.":
		    		clasePo[i].innerHTML = "Save all changes and put that page as your home page in your browser.";
		    		break;
		    	case "Crea tu página web de inicio con unos pocos clics del ratón.":
		    		clasePo[i].innerHTML = "Create your home page with just a few mouse clicks.";		    		
		    		break;	    				    		
		    	case "Práctico":
		    		clasePo[i].innerHTML = "Easy";
		    		break;
		    	case "Presenta tus enlaces preferidos organizados por temas en la página de inicio del navegador.":
		    		clasePo[i].innerHTML = "Show your preferred links organized by topic on the browser home page.";
		    		break;		    				    		
		    	case "Personalizable":
		    		clasePo[i].innerHTML = "Custom";
		    		break;
		    	case "Organiza tus enlaces preferidos por temas y cambia el diseño de la página con imágenes y colores.":
		    		clasePo[i].innerHTML = "Organize your favorite links by themes and change the layout of the page with images and colors.";
		    		break;	    			    				    		
		    	case "Multiplataforma":
		    		clasePo[i].innerHTML = "Cross-platform";
		    		break;
		    	case "No requiere instalar nada. Simplemente utiliza tu navegador para ejecutarlo.":
		    		clasePo[i].innerHTML = "No installation required. Just use your browser to run it.";
		    		break;
		    	case "Rápido":
		    		clasePo[i].innerHTML = "Fast";
		    		break;
		    	case "Inicia tu navegador más rápido al arrancar con un archivo local que no requiere conexión.":
		    		clasePo[i].innerHTML = "Start your browser faster when booting with a local file that does not require a connection.";
		    		break;	    				    		
		    	case "Diseño web adaptativo":
		    		clasePo[i].innerHTML = "Responsive web design";
		    		break;
		    	case "Utiliza la página web en distintos dispositivos.":
		    		clasePo[i].innerHTML = "Use the website on different devices.";
		    		break;	    		
		    	case "Seguro":
		    		clasePo[i].innerHTML = "Security";
		    		break;		    		
		    	case "Respeta tu privacidad. No requiere conexión a internet y todos los datos se almacenan de manera local. Software libre de código abierto.":
		    		clasePo[i].innerHTML = "Respect your privacy. No internet connection required and all data is stored locally. Free and open-source software.";
		    		break;
		    	case "Multiidioma":
		    		clasePo[i].innerHTML = "Multi-language";
		    		break;		    		
		    	case "Actualmente disponible en inglés y español. Pronto más traduciones disponibles.":
		    		clasePo[i].innerHTML = "Currently available in English and Spanish. Soon more translations available.";
		    		break;		    		
		    	case "Ejecución":
		    		clasePo[i].innerHTML = "Start";
		    		break;
		    	case "no necesita instalación. Para ejecutarlo:":
		    		clasePo[i].innerHTML = "no installation required. To run it:";
		    		break;
		    	case "Descarga y descomprime en tu sistema.":
		    		clasePo[i].innerHTML = "Download and decompress on your system.";
		    		break;
		    	case "Abre el archivo":
		    		clasePo[i].innerHTML = "Open";
		    		break;	    				    		
		    	case "con tu navegador (ver Requisitos). ¡Listo!":
		    		clasePo[i].innerHTML = "file with your browser (see Requirements). Ready!";
		    		break;
		    	case "Primeros pasos":
		    		clasePo[i].innerHTML = "First steps";
		    		break;	    		
		    	case "Para acceder rápidamente, en los ajustes del navegador, establece esa página como página de inicio.":
		    		clasePo[i].innerHTML = "For quick access, in the browser settings, set that page as the start page.";
		    		break;		    		
		    	case "Copia las imágenes que quieres utilizar para tus temas y enlaces en el directorio HP/images.":
		    		clasePo[i].innerHTML = "Copy the images you want to use for your themes and links in the HP/images directory.";
		    		break;
		    	case "Desde la ventana principal de la aplicación, abre el menú con el icono que hay en la esquina superior derecha de la pantalla.":
		    		clasePo[i].innerHTML = "From the main application window, open the menu with the icon in the upper right corner of the screen.";
		    		break;		    		
		    	case "Selecciona el idioma de la aplicación.":
		    		clasePo[i].innerHTML = "Select the language of the application.";
		    		break;
		    	case "Crear, editar y eliminar temas":
		    		clasePo[i].innerHTML = "Create, edit and delete themes";
		    		break;
		    	case "Desde los Ajustes puedes crear seis grupos o temas, por ejemplo: Noticias, Juegos, Linux, Bancos, Compras... El nombre es opcional pero la imagen es necesaria.":
		    		clasePo[i].innerHTML = "From the Settings you can create six groups or themes, e.g. News, Games, Linux, Banks, Shopping... The name is optional but the image is necessary.";
		    		break;
		    	case "La imagen admite la mayoría de formatos: png, jpg, gif, svg (incluso imágenes animadas). Ten en cuenta que las imágenes pueden cortarse de manera distinta para ajustarse a distintos tamaños de pantalla.":
		    		clasePo[i].innerHTML = "The image supports most formats: png, jpg, gif, svg (even animated images). Please note that images can be cropped differently to fit different screen sizes.";
		    		break;	    				    		
		    	case "Todas las imágenes deben estar en el directorio HP/images para ser mostradas.":
		    		clasePo[i].innerHTML = "All images must be in the HP/images directory to be displayed.";
		    		break;
		    	case "No olvides salvar los cambios. Cierra la ventana para ver los cambios.":
		    		clasePo[i].innerHTML = "Do not forget to save the changes. Close the window to see the changes.";
		    		break;	    		    		
		    	case "Desde Ajustes puedes editar los temas creados cambiando el nombre y la imagen. Guarda los nuevos datos y cierra la ventana para ver los cambios.":
		    		clasePo[i].innerHTML = "From Settings you can edit the themes created by changing the name and the image. Save the new data and close the window to see the changes.";
		    		break;
		    	case "Al eliminar un tema se eliminan también todos los enlaces que contiene.":
		    		clasePo[i].innerHTML = "Deleting a topic also removes all the links it contains.";
		    		break;		    		
		    	case "Personalizar el fondo":
		    		clasePo[i].innerHTML = "Customize background";
		    		break;
		    	case "Desde Ajustes también puedes cambiar el diseño del fondo añadiendo un color o una imagen (o ambos, pero la imagen siempre se superpone al color del fondo). Si la imagen no ocupa toda la pantalla, ésta aparece centrada, y entonces puedes combinar una imagen con distintos colores del fondo de pantalla. Guarda y cierra la ventana para ver los cambios.":
		    		clasePo[i].innerHTML = "From Settings you can also change the background layout by adding a color or an image (or both, but the image always overlays the background color). If the image does not fill the entire screen, the screen appears centered, and then you can combine an image with different colors of the wallpaper. Save and close the window to see the changes.";
		    		break;
		    	case "Crear y eliminar enlaces":
		    		clasePo[i].innerHTML = "Create and remove links";
		    		break;
		    	case "En la pantalla principal de la aplicación, selecciona un tema y crea un enlace con un nombre, una dirección y una imagen (todos los campos son requeridos). Recuerda que todas las imágenes deben estar en el directorio HP/images. Crea tantos enlaces como quieras. Cierra la ventana.":
		    		clasePo[i].innerHTML = "On the main application screen, select a theme and create a link with a name, an address and an image (all fields are required). Remember that all images must be in the HP / images directory. Create as many links as you want. Close the window.";
		    		break;	    				    		
		    	case "Para eliminar un enlace, abre el grupo selecciona el enlace que quieres borrar.":
		    		clasePo[i].innerHTML = "To delete a link, open the group select the link you want to delete.";
		    		break;
		    	case "Herramientas":
		    		clasePo[i].innerHTML = "Tools";
		    		break;
		    	case "Exportar":
		    		clasePo[i].innerHTML = "Export";
		    		break;		    		
		    	case "Importar":
		    		clasePo[i].innerHTML = "Import";
		    		break;   				    		   		    		
		    	case "Desde Herramientas, se puede exportar la configuración actual (próximamente) e importar otra configuración (próximamente). También se puede reinicar la aplicación a su estado de inicio (las imágenes copiadas en la carpeta HP/images no se pierden).":
		    		clasePo[i].innerHTML = "From Tools, you can export the current configuration (coming soon) and import another configuration (coming soon). You can also reset the application to its startup state (images copied to the HP / images folder are not lost).";
		    		break;
		    	case "La herramienta Reset elimina toda la configuración actual, y todos los grupos y enlaces creados se pierden de manera definitiva.":
		    		clasePo[i].innerHTML = "The Reset tool removes all current settings, and all created groups and links are permanently lost.";
		    		break;		    		
		    	case "solo utiliza HTML, CSS y JavaScript. No requiere conexión a internet.":
		    		clasePo[i].innerHTML = "only uses HTML, CSS and JavaScript. No internet connection required.";
		    		break;
		    	case "Almacena todos los datos en tu propio navegador de manera local. Para ello utiliza dos modernas propiedades de HTML5 compatibles con la mayoría de navegadores: IndexedDB y LocalStorage.":
		    		clasePo[i].innerHTML = "Store all data in your own browser locally. To do this uses two modern HTML5 properties compatible with most browsers: IndexedDB and LocalStorage.";
		    		break;
		    	case "La aplicación comprueba autómaticamente y alerta si tu navegador no soporta estos métodos (posiblemente si no te ha avisado ya, tu navegador es compatible).":
		    		clasePo[i].innerHTML = "The application automatically checks and alerts you if your browser does not support these methods (possibly if it has not already warned you, your browser is compatible).";
		    		break;		    		
		    	case "En general, todos los navegadores modernos ofrecen soporte para estas funciones, a excepción de IE y Edge (con soporte parcial para IndexedDB) y Opera Mini (que no soporta ninguna de las dos). Más información sobre los navegadores que soportan":
		    		clasePo[i].innerHTML = "In general, all modern browsers offer support for these functions, except for IE and Edge (with partial support for IndexedDB) and Opera Mini (which does not support either). More information about browsers that support";
		    		break;
		    	case "y":
		    		clasePo[i].innerHTML = "and";
		    		break;
		    	case "También puedes comprobar en estos botones la compatibilidad actual de tu navegador con estos tipos de almacenamiento local:":
		    		clasePo[i].innerHTML = "You can also check these buttons for the current compatibility of your browser with these types of local storage:";
		    		break;		    		
		    	case "En algunos navegadores (por ejemplo, Chrome y similares), la configuración puede bloquear el funcionamiento de este tipo de almacenamiento local aunque sí lo soportan. Para desbloquearlo hay que ir a Configuración o Ajustes, y en el apartado de Cookies, desactivar 'Bloquear cookies de terceros'.":
		    		clasePo[i].innerHTML = "In some browsers (for example, Chrome and the like), the settings can block the operation of this type of local storage, although they do support it. To unlock it, go to Settings, and in the Cookies section, disable 'Block third-party cookies'.";
		    		break;

		    	case "Eliminar enlace":
		    		clasePo[i].innerHTML = "Delete Link";
		    		break;
		    	case "Selecciona el enlace para eliminar":
		    		clasePo[i].innerHTML = "Select the link to remove";
		    		break;		    		
		    	case "Eliminar":
		    		clasePo[i].innerHTML = "Remove";
		    		break;
		    	case "Nuevo enlace":
		    		clasePo[i].innerHTML = "New Link";
		    		break;
		    	case "Perfecto":
		    		clasePo[i].innerHTML = "All right!";
		    		break;		    		
		    	case "Tu navegador soporta\nalmacenamiento local con indexedDB.":
		    		clasePo[i].innerHTML = "Your browser supports local\nstorage with indexedDB.";
		    		break;
		    	case "Abrir":
		    		clasePo[i].innerHTML = "Open";
		    		break;
			}        
		}		
	}		
} else {		
	alert("Sorry, your browser does not support Web Storage.");
}


//var idioma = getActiveStyleSheet();

//if (langStore === "esp"){
//	document.getElementById("radioEs").checked = true;	
//	
//} else {
//	document.getElementById("radioEn").checked = true;

//	var clasePo = document.getElementsByClassName("po");	
//	var i;
//    for (i = 0; i < clasePo.length; i++) {    	
//    	var texto = clasePo[i].firstChild.data;
//        switch (texto) {
//        	case "Ajustes":
//        		clasePo[i].innerHTML = "Settings"; 
//        		break;
//        	case "Acerca de":
//        		clasePo[i].innerHTML = "About";
//        		break;
//        	case "Créditos":
//        		clasePo[i].innerHTML = "Credits";
//        		break;
//        	case "Proyecto en":
//        		clasePo[i].innerHTML = "Project on";
//        		break;
//        	case "Cerrar":
//        		clasePo[i].innerHTML = "Close";
//        		break;        			             
//        	case "Fondo":
//        		clasePo[i].innerHTML = "Background";
//        		break;
//        	case "Idioma":
//        		clasePo[i].innerHTML = "Language";
//        		break; 
//        	case "Nombre":
//        		clasePo[i].innerHTML = "Name";
//        		break;
//        	case "Imagen":
//        		clasePo[i].innerHTML = "Image";
//        		break;
//        	case "Seleccione su idioma:":
//        		clasePo[i].innerHTML = "Select your language:";
//        		break;
//        	case "Español":
//        		clasePo[i].innerHTML = "Spanish";
//        		break;
//        	case "Inglés":
//        		clasePo[i].innerHTML = "English";
//        		break;
//        	case "Las imágenes deben estar en el directorio HP/images para ser mostradas":
//        		clasePo[i].innerHTML = "The images must be in the HP/images directory to be displayed";
//        		break;
//        	case "Guarda los nuevos datos en cada pestaña":
//        		clasePo[i].innerHTML = "Save the new data in each tab";
//        		break;
//        	case "La acción de eliminar es automáticamente guardada":
//        		clasePo[i].innerHTML = "The delete action is automatically saved";
//        		break;
//        	case "Los cambios se muestran después de cerrar esta ventana":
//        		clasePo[i].innerHTML = "The changes are displayed after closing this window";
//        		break;
//        	case "HomePage es software libre":
//        		clasePo[i].innerHTML = "HomePage is free software";
//        		break;
//        	case "distribuido con la esperanza de que sea útil":
//        		clasePo[i].innerHTML = "distributed in the hope that it will be useful";
//        		break;
//        	case "pero SIN NINGUNA GARANTÍA":
//        		clasePo[i].innerHTML = "but WITHOUT ANY WARRANTY";
//        		break;
//        	case "Versión":
//        		clasePo[i].innerHTML = "Version";
//        		break;
//        	case "Todos los errores reservados":
//        		clasePo[i].innerHTML = "All Wrongs Reserved";
//        		break;
//        }        
//    }
//}


