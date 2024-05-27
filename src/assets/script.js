const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});


document.querySelector(".theme-toggle").addEventListener("click",() => {
    toggleLocalStorage();
    toggleRootClass();
});


function toggleRootClass(){
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current == 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme',inverted);
}


function toggleLocalStorage(){
    if(isLight()){
        localStorage.removeItem("light");
    }else{
        localStorage.setItem("light","set");
    }
}


function isLight(){
    return localStorage.getItem("light");
}


if(isLight()){
    toggleRootClass();
}


//Teste paginação ajax
document.addEventListener('DOMContentLoaded', function() {
    var linkProduto = document.getElementById('linkProduto');
    var linkVendas = document.getElementById('linkVendas');
    var produto = document.getElementById('produto');
    var vendas = document.getElementById('vendas');


    if (linkProduto && linkVendas && produto && vendas) {
        linkProduto.addEventListener('click', function(event) {
            event.preventDefault();
            mostrarPagina('produto');
        });


        linkVendas.addEventListener('click', function(event) {
            event.preventDefault();
            mostrarPagina('vendas');
        });
    } else {
        console.error('Um ou mais elementos não foram encontrados.');
    }


    function mostrarPagina(pagina) {
        if (pagina === 'produto') {
            produto.style.display = 'block';
            vendas.style.display = 'none';
        } else if (pagina === 'vendas') {
            produto.style.display = 'none';
            vendas.style.display = 'block';
        }
    }


    // Mostrar a página de produto por padrão
    mostrarPagina('produto');
});
