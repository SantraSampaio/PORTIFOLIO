// const btnmenu= document.querySelector(".icon-menu");




// btnmenu.addEventListener("click", function(){

// // document.querySelector(".menu-nav").style.display="flex";

// //  document.querySelector(".buton-menu").style.display="none";

// //  document.querySelector(".menu-nav").classList.toggle("botao");

// document.querySelector("#bar").classList.toggle("botao");




// }


// )

const menus=document.querySelector(".icon-menu");

menus.addEventListener("click", function()
{
    document.querySelector(".menu-nav").classList.toggle("botao");

    document.querySelector("#bar").classList.toggle("fa-bars");


    document.querySelector("#bar").classList.toggle("fa-xmark");


}
);

