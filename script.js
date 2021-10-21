const addModal = document.querySelector(".add-modal");
const addUser = document.querySelector(".btn-adduser");



addUser.addEventListener("click", ()=>{
    addModal.classList.add('modal-show');
});
window.addEventListener("click", e => {
    if(e.target === addModal){
        addModal.classList.remove('modal-show');
    }
}); 

//add database

