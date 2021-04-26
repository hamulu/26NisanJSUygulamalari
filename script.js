//const eleman=document.querySelector("li:last-child");
//const eleman=document.querySelector("li:first-child");
//const eleman=document.querySelector("li:nth-child(2)");
//eleman.style.backgroundColor="lightgray";
//const eleman=document.querySelector("li:nth-child(odd)");Sadece seçicinin belirttiği ilk elemanı seçer.
const eleman=document.querySelectorAll("li:nth-child(odd)");//Seçicinin belirttiği tüm elemanları seçer. Burada listenin tek elemanlarını seçtik.
eleman.forEach(function(item){//döngü ile dönen dizinin elemanlarına ulaştık.
    item.style.backgroundColor="lightgray";
});
//querySelector ve querySelectorAll içerisinde CSS de olan tüm seçiciler kullanılabilir.

function myFunction() {
    document.querySelector("a[target]").style.border = "10px solid red";//target özelliği olan a'lara kenarlık ekle.
    document.querySelector("a[href='https://www.w3schools.com']").style.color="green";//href özelliğinin değerinie göre seçme işlemi yapıldı.
}
