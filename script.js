//const eleman=document.querySelector("li:last-child");
//const eleman=document.querySelector("li:first-child");
//const eleman=document.querySelector("li:nth-child(2)");
//eleman.style.backgroundColor="lightgray";
//const eleman=document.querySelector("li:nth-child(odd)");Sadece seçicinin belirttiği ilk elemanı seçer.
/*const eleman = document.querySelectorAll("li:nth-child(odd)");//Seçicinin belirttiği tüm elemanları seçer. Burada listenin tek elemanlarını seçtik.
eleman.forEach(function (item) {//döngü ile dönen dizinin elemanlarına ulaştık.
    item.style.backgroundColor = "lightgray";
});
//querySelector ve querySelectorAll içerisinde CSS de olan tüm seçiciler kullanılabilir.

function myFunction() {
    document.querySelector("a[target]").style.border = "10px solid red";//target özelliği olan a'lara kenarlık ekle.
    document.querySelector("a[href='https://www.w3schools.com']").style.color = "green";//href özelliğinin değerinie göre seçme işlemi yapıldı.
}
/*Yeni Element Oluşturma*/
/*
function elemanEkle() {
    let yeniEleman = document.createElement("li");
    yeniEleman.className = "list-group-item";

    //yeniEleman.innerText="A sixth item";yazı eklemenin 1.yolu

    //var icerik=document.createTextNode("A sixth item");//yazı eklemenin 2.yolu
    //yeniEleman.appendChild(icerik);

    yeniEleman.innerHTML = "A sixth item<span class='badge badge-primary'>3</span>";//yazı eklemenin 3.yolu, ancak bu yöntemde html etiketleri eklemek mümkün

    //document.querySelector("ul.list-group").appendChild(yeniEleman);//hep sona ekler.
    const liste = document.querySelector("ul.list-group");
    liste.insertBefore(yeniEleman, liste.children[0]);//insertBefore ile sadece sona değil, her yere eleman ekleyebiliriz.

}
/* Varolan Elementi Silme */
/*
function elemanSil() {
    const liste = document.querySelector("ul.list-group");
    const listeninCocuklari = liste.children;
    //listeninCocuklari[listeninCocuklari.length-1].remove();Eleman Silme 1. Yöntem
    if (listeninCocuklari.length > 0) {//çocuğu varsa sil, yoksa uyarı ver.
        liste.removeChild(listeninCocuklari[listeninCocuklari.length - 1]);//Eleman Silme 2.Yöntem
    }
    else {
        alert("Listenin tüm elemanları zaten silindi.");
    }
}

/* Element Değiştirme */
/*
function elemanGuncelle(){
    /*let yeniEleman=document.createElement("li");
    yeniEleman.innerHTML="Ben yeni li etiketiyim";
    yeniEleman.className="list-group-item";

    let liste=document.querySelector(".list-group");
    //console.log(liste.firstChild);
    //liste.replaceChild(yeniEleman,liste.firstElementChild);

    var eleman=document.querySelector(".list-group").firstElementChild;
    //eleman.removeAttribute("class");//etikete ait bir özellik silindi.
    eleman.setAttribute("id","ilkEleman");//tanımlanmış bir özellik ve değerini kullanabiliriz.
    eleman.setAttribute("selam","hello");//kendi isteiğimize göre hiç olmayan bir özellik ve değeri oluşturabiliriz.
    alert(eleman.getAttribute("id"));//getAttribute ile bir özellik alınır.
    console.log(eleman.getAttributeNames());
    console.log(eleman.hasAttribute("class"));
}
*/
/* Olaylar */
const ilkEleman=document.querySelector(".list-group").firstElementChild;
ilkEleman.onclick =function(){
    alert("bana tıklandı");
}
ilkEleman.onmouseover=function(){
    alert("benim üzerime gelindi");
}

//addEventListener metodu
// document.addEventListener("keypress",function(e){
//     console.log(e.keyCode);
// });

document.addEventListener("keypress",uyariGoster);

function uyariGoster(e){
    var tus=e;
  console.log(tus.keyCode);
}