class Page{
    init(){
        const myForm = document.querySelector('form#myForm');
        const myInput = document.querySelector('input[name=nameInput]');
        window.globalVariable = 10;

        myInput.addEventListener('keyup', (e)=>{
            console.log(globalVariable);
        })
    }
}

const page = new Page();
page.init();