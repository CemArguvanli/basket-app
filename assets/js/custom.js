var products = [
	{
		name : "T-shirt",
		description : "bla bla",
		size : "Medium",
		price : "5.99",
		id : 0
	},
	{
		name : "Sweat-shirt",
		description : "bla bla",
		size : "Medium",
		price : "8.99",
		id : 1
	},
	{
		name : "Pants",
		description : "bla bla",
		size : "Small",
		price : "9.99",
		id : 2
	},
	{
		name : "Skirt",
		description : "bla bla",
		size : "XXL",
		price : "10.99",
		id : 3
	}
];

function putProductsInToHtml(){
	for (var i = 0, len = products.length; i < len; i++ ){ // += olanı tut yanına ekle!
		document.getElementById('wrapper').innerHTML += "<div class='product'><div class='product-image'><img src='http://placehold.it/200x150' /></div><h3 class='product-name'><a href='#''>"+products[i]["name"]+"</a></h3><p class='product-info'>"+products[i]["description"]+"</p><div class='quantity'><input id='quantity-"+products[i]["id"]+"' type='text' value='1'>  <button id='increase-quantity-"+products[i]["id"]+"' data-id='"+products[i]["id"]+"'>+</button><button id='decrease-quantity-"+products[i]["id"]+"' data-id='"+products[i]["id"]+"'>-</button></div><p class='product-price'>"+products[i]["price"]+" TL</p><div class='buttonRight'><div class='buton' type='button'>Add to Basket</div></div></div>"
	}
}

function addEvent(element, event, fn){
  function listenHandler(e) {
    var ret = fn.apply(this, arguments);
    if (ret === false) {
      e.stopPropagation();
      e.preventDefault();
    }
    return(ret);
  }
  if (element.addEventListener) {
    element.addEventListener(event, listenHandler, false);
  } else if (element.attachEvent) {
    element.attachEvent ("on" + type, fn);
  }
}

function delegateButtonEvents(){
	var buttons = document.getElementsByTagName("button");
	for (a = 0, len = buttons.length; a < len; a++){
		addEvent(buttons[a], "click", function(e){
			var nodeValue = e.target.attributes["id"]["nodeValue"];
			var currentId = nodeValue.split("-")[2];
			var inputVal = parseInt(document.getElementById("quantity-"+currentId).value);
			var buttonIdStarter = e.target.attributes[0]["value"];
			if (buttonIdStarter.indexOf("increase-quantity") > -1) {
				inputVal += 1;  
			} else if (buttonIdStarter.indexOf("decrease-quantity") > -1) {
				if (inputVal > 1) {
					inputVal -= 1;
				}
			}
			document.getElementById("quantity-"+currentId).value = inputVal;
			console.log(inputVal);
		});	

	}
}

function init(){
	putProductsInToHtml();
	delegateButtonEvents();
}

init();
