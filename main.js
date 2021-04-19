$(document).ready(function(){
     //primo metodo,dichiaro le referenze con delle variabili

   /*  var menu_ham= $('.hamburger-menu');
    var icona_ham=$('header .header-right>a');
    var close_menu=$('.hamburger-menu a.close');

    //usando la variabile creata prima vado a dire che quando effettuerò il click farà apparire il menu con un'animazione di 1 secondo
    icona_ham.click(function(){
            menu_ham.show(1000);
    });

    //usando la variabile creata prima vado a dire che quando effettuerò il click farà scomparire il menu con un'animazione di 1 secondo
    close_menu.click(function(){
        menu_ham.hide(1000)
    })
 */
    //---------------------------------------------------------------------------------------

    // secondo metodo,qui creo una funzione unica per far apparire e scomparire il menu
    
    //chiamata alla funzione
    visualizzaMenu();
    //definisco la funzione
    function visualizzaMenu(){

        var menu_ham= $('.hamburger-menu');
        var icona_ham=$('header .header-right>a');
        var close_menu=$('.hamburger-menu a.close');

        icona_ham.click(function(){
            menu_ham.show(1000);
        });
        close_menu.click(function(){
        menu_ham.hide(1000);
        })
    }
})