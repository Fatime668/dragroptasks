let droptarget = document.querySelector('.droptarget')
let items = document.querySelectorAll('.item')

items.forEach(item => {
    item.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('value',getComputedStyle(item).backgroundColor)
    })
});
    droptarget.addEventListener('dragover',function (e) {
        e.preventDefault();
      })    
    droptarget.addEventListener('drop',function(e){
        this.style.backgroundColor = e.dataTransfer.getData('value')
        // console.log("dropped");
    })