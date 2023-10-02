const elementOpenModal = document.getElementById("OpenModal");
const elementModal = document.getElementById("Modal");
const elementClose = document.getElementById("CloseModal");

elementOpenModal.addEventListener('click',function(){
    if(elementModal.style.display === "none" || elementModal.style.display === ""){
        elementModal.style.display = "block";
    }
    else{
        elementModal.style.display === "none";
    }
});

elementClose.addEventListener('click',function(){
    if(elementModal.style.display === "block"){
        elementModal.style.display = "none";
    }
    else{
        elementModal.style.display === "block";
    }
})