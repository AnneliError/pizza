window.alert("U bent nu bij de Pizzawinkel") // begroeten
window.alert("Welkom bij onze shop,") // nogsteeds
window.alert("Als U er geen eentje wil vul dan een 0 in")// instructie
var PizzaKLein = prompt ("Kleine Pizza's $3,-, aantal invullen") // kleine pizza + prijs + aantal
var PizzaMiddel = prompt ("Middel Pizza's $5,-, aantal invullen") // middel pizza + prjis + aantal
var PizzaGroot = prompt ("Grote Pizza's $7.50, aantal invullen") // grote pizza + prijs + aantal
document.write('PizzaKLein : '+ PizzaKLein); // uiteindelijk ding
document.write('<br/>')
document.write('PizzaMiddel : ' + PizzaMiddel); //uiteindelijk ding
document.write('<br/>')
document.write('PizzaGroot : ' + PizzaGroot); // uiteindelijk ding
document.write('<br/>')
var pizzatotaal = PizzaKLein * 1 + PizzaMiddel * 1 + PizzaGroot * 1;
document.write('<br/>')
document.write("aantal bestelde pizzas " + pizzatotaal)
document.write('<br/>')
document.write('<br/>')
document.write("PizzaKLein " + PizzaKLein * 3 + "$"); // Prijs berekenen
document.write('<br/>')
document.write("PizzaMiddel " + PizzaMiddel * 5 + "$"); // prijs berekenen
document.write('<br/>')
document.write("PizzaGroot " + PizzaGroot * 7.50 + "$"); // prijs berekenen
document.write('<br/>')
document.write('<br/>')
var total = PizzaKLein * 3 + PizzaMiddel * 5 + PizzaGroot *7.50; //totaal
document.write("totaal " + total + "$"); // totale prijs
document.write('<br/>')
document.write('<br/>')
document.write("Bedankt voor de bestelling")