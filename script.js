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
/*Yeni Element Oluşturma*/

function elemanEkle(){
    var yeniEleman=document.createElement("li");
    yeniEleman.className="list-group-item";

    //yeniEleman.innerText="A sixth item";yazı eklemenin 1.yolu
    
    //var icerik=document.createTextNode("A sixth item");//yazı eklemenin 2.yolu
    //yeniEleman.appendChild(icerik);

    yeniEleman.innerHTML="A sixth item<span class='badge badge-primary'>3</span>";//yazı eklemenin 3.yolu, ancak bu yöntemde html etiketleri eklemek mümkün

    document.querySelector("ul.list-group").appendChild(yeniEleman);
}