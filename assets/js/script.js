//task 2
let p = document.querySelector('p') 

let source = document.createElement("a")
source.innerHTML = "source"
source.style.color = "green"
source.style.fontSize = "30px"
source.style.cursor = "pointer"
source.style.padding = "15px"
source.onclick = function(e){
    window.open ("https://www.lipsum.com/")
}
p.append(source)
console.log(p);

//Task4
let list = document.querySelector('.list')
let li = document.querySelectorAll('li')
let button = document.querySelector('.btn')
button.addEventListener('click',function(){
    li.forEach(item => {
        item.style.color = 'blue'
        let check = document.createElement('i')
        check.setAttribute('class','fa-solid fa-check')
        item.append(check)
    });
})
//Task3
let box= document.querySelector('.box')
let txt= document.querySelector('#txt')
let num= document.querySelector('#num')
let mybtn= document.querySelector('.mybtn')
box.style.backgroundColor = 'red'
box.style.width = '300px'
box.style.height = '300px'
mybtn.onclick = function () {
//    box.style.backgroundColor = txt.nodeValue
}


