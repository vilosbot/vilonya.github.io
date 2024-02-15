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


