let m1 = document.getElementById("m1")
let m2 = document.getElementById("m2")
let m3 = document.getElementById("m3")
let m4 = document.getElementById("m4")
let m5 = document.getElementById("m5")
let m6 = document.getElementById("m6")
let m7 = document.getElementById("m7")

let mainpack = document.getElementById("mainpack")
let woodlogs = document.getElementById("woodlogs")
let stones = document.getElementById("stones")
let saplings = document.getElementById("saplings")
let seeds = document.getElementById("seeds")
let foods = document.getElementById("foods")
let mobs = document.getElementById("mobs")

let rules = document.getElementById("rules")
let ex = document.getElementById("ex")
let forward1 = document.getElementById("forward1")
let back2 = document.getElementById("back2")

let book = document.getElementById("book")
let text1 = document.getElementById("text1")

let placeholder = document.getElementById("placeholder")
let page = document.getElementById("page")
let inf = document.getElementById("inf")
var a = 0;

forward1.addEventListener("click",()=>{
    a++;
    filler(a)
})

back2.addEventListener("click",()=>{
    a--;
    filler(a)
})
ex.addEventListener("click",()=>{
    book.style.display="none"
})
rules.addEventListener("click",()=>{
    book.style.display="flex"
})


function filler(t) {
    switch (t) {
        case 1:
            page.innerHTML="Page 2 of 7"
            inf.innerHTML = `KURALLAR <br>
            1. Twitch topluluk ve kanalın genel sohbet, davranış kuralları sunucu içerisinde de geçerlidir. <br>
            <br>
            2. Sunucuda başkalarının oyun keyfini azaltabileceğini düşündüğünüz tüm aksiyonlardan kaçının. 

                    ->`
            break;
        case 2:
            page.innerHTML="Page 3 of 7"
            inf.innerHTML=`3. Vilonya MC Sunucusu özel bir sunucudur. İnşa ettiğiniz alanları güvenli hale getirmek için bit bağışı karşılığında arazi bloğu alıp arazinizi
            güvenli hale getirebilirsiniz. Arazi sahibi kişilerin eşyalarına ve yapılarına zarar veremiyor olmanız, arazisi olmayan oyuncuların yapılarına ->
             `
            break;
        case 3:
            page.innerHTML="Page 4 of 7"
            inf.innerHTML=` zarar verebileceğiniz anlamına gelmez. Bu yüzden her oyuncuya karşı eşit ve adaletli davrandığınızdan ve emeğe saygı gösterdiğinizden emin olun. <br>
            <br>
            4. Sunucunun çevre düzenini korumak için inşaat kısıtlamalarını dikkate alın.->
            <br>
            <br>`
            break;
        case 4:
            page.innerHTML="Page 5 of 7"
            inf.innerHTML=`KISITLAMALAR: <br>
            - Vadide max. 2 katlı yapılar yapmaya, tarla ve bahçelerinizi optimum genişlikte tutmaya çalışın.
            Çiftliklerinizdeki hayvan sayısının yakınlardaki evlerde gürültüye sebep olmadığından emin olun. <br>
            Vadide modern/fütüristik yapılardan kaçının. ->`
            break;
        case 5:
            page.innerHTML="Page 6 of 7"
            inf.innerHTML=`Bu tür yapılar için merkezden görünmeyecek uzaklıkta yerleri tercih edin. Vadide gösterişli maden girişlerinden kaçının ya da evinizin altından giriş yapın.
            Uzun maden maceraları için vadiden uzak alanlara bakın. Vadi ve etrafı oyuncuların yaşam alanıdır. `
            break;
        case 6:
            page.innerHTML="Page 7 of 7"
            inf.innerHTML=`Bu yüzden doğal dokusunu korumaya özen gösterin. Göz alıcı 
            blok, renk ve aydınlatmalar kullanmaktan kaçının.
            <br>
            Kurallara uyan her oyuncuya şimdiden teşekkürler. Vilonya'da kalbi iyilik için atan herkese her zaman yer var. 
            <br>
            <br>`
            break;

        default:
            break;
    }

    if(t<=0){
        back2.style.display="none"
        placeholder.style.display="block"
        page.innerHTML="Page 1 of 7"
        inf.innerHTML=`Sevgi, barış ve doğaya saygının hüküm sürdüğü Vilonya'mızda yeni bir başlangıç
        yapmadan önce her oyuncunun kuralları okuyup anladığından emin olması gerekir.
        Lütfen 2 dakikanızı ayırarak sunucunun daha iyi bir yer olmasını sağlayacak kurallara göz atın.
                ->`
    }
    if (t>0 && t<6) {
        back2.style.display="block"
        placeholder.style.display="none"
    }

    if(t>=6){
        forward1.style.display = "none"
        
    }else{
        forward1.style.display = "block"
    }
}



m1.addEventListener("click",()=>{
    console.log("tıklandı")
    m1.classList.add("active")
    m2.classList.remove("active")
    m3.classList.remove("active")
    m4.classList.remove("active")
    m5.classList.remove("active")
    m6.classList.remove("active")
    m7.classList.remove("active")

    mainpack.style.display="flex"
    woodlogs.style.display="none"
    stones.style.display="none"
    saplings.style.display="none"
    seeds.style.display="none"
    foods.style.display="none"
    mobs.style.display="none"
})
m2.addEventListener("click",()=>{
    console.log("tıklandı")
    m2.classList.add("active")
    m1.classList.remove("active")
    m3.classList.remove("active")
    m4.classList.remove("active")
    m5.classList.remove("active")
    m6.classList.remove("active")
    m7.classList.remove("active")
    
    woodlogs.style.display="flex"
    mainpack.style.display="none"
    stones.style.display="none"
    saplings.style.display="none"
    seeds.style.display="none"
    foods.style.display="none"
    mobs.style.display="none"
})
m3.addEventListener("click",()=>{
    console.log("tıklandı")
    m3.classList.add("active")
    m2.classList.remove("active")
    m1.classList.remove("active")
    m4.classList.remove("active")
    m5.classList.remove("active")
    m6.classList.remove("active")
    m7.classList.remove("active")

    stones.style.display="flex"
    mainpack.style.display="none"
    woodlogs.style.display="none"
    saplings.style.display="none"
    seeds.style.display="none"
    foods.style.display="none"
    mobs.style.display="none"
    
})
m4.addEventListener("click",()=>{
    console.log("tıklandı")
    m4.classList.add("active")
    m2.classList.remove("active")
    m3.classList.remove("active")
    m1.classList.remove("active")
    m5.classList.remove("active")
    m6.classList.remove("active")
    m7.classList.remove("active")

    saplings.style.display="flex"
    mainpack.style.display="none"
    woodlogs.style.display="none"
    stones.style.display="none"
    seeds.style.display="none"
    foods.style.display="none"
    mobs.style.display="none"
})
m5.addEventListener("click",()=>{
    console.log("tıklandı")
    m5.classList.add("active")
    m2.classList.remove("active")
    m3.classList.remove("active")
    m4.classList.remove("active")
    m1.classList.remove("active")
    m6.classList.remove("active")
    m7.classList.remove("active")

    seeds.style.display="flex"
    mainpack.style.display="none"
    woodlogs.style.display="none"
    stones.style.display="none"
    saplings.style.display="none"
    foods.style.display="none"
    mobs.style.display="none"
})
m6.addEventListener("click",()=>{
    console.log("tıklandı")
    m6.classList.add("active")
    m2.classList.remove("active")
    m3.classList.remove("active")
    m4.classList.remove("active")
    m5.classList.remove("active")
    m1.classList.remove("active")
    m7.classList.remove("active")

    foods.style.display="flex"
    mainpack.style.display="none"
    woodlogs.style.display="none"
    stones.style.display="none"
    saplings.style.display="none"
    seeds.style.display="none"
    mobs.style.display="none"
})
m7.addEventListener("click",()=>{
    console.log("tıklandı")
    m7.classList.add("active")
    m2.classList.remove("active")
    m3.classList.remove("active")
    m4.classList.remove("active")
    m5.classList.remove("active")
    m6.classList.remove("active")
    m1.classList.remove("active")

    mobs.style.display="flex"
    mainpack.style.display="none"
    woodlogs.style.display="none"
    stones.style.display="none"
    saplings.style.display="none"
    seeds.style.display="none"
    foods.style.display="none"
})


