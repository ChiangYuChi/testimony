(function () {
    let buttons = document.querySelectorAll('.btn');
    let customerName = document.querySelector('#customer-name');
    let customerImg = document.querySelector('#customer-img');
    let customerText = document.querySelector('#customer-text');
    let customers = [];
    let index = 0;

    function Customer(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }


    function createCustomer(img, name, text) {
        let fullImg = `./img/customer-${img}.jpg`;
        let customer = new Customer(fullImg, name, text);
        customers.push(customer);
    }
    createCustomer(0, "John", "講解的很用心 範例也很多");
    createCustomer(1, "Alvin", "課程淺顯易懂, 很好理解");
    createCustomer(2, "Faye", "完整的解說 Vue強大之處以及應用，非常推薦");

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (e.target.parentElement.classList.contains('prevBtn')) {

                if (index === 0) {
                    index = customers.length;
                }
                index--;

                customerImg.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].text;

            }
            if (e.target.parentElement.classList.contains('nextBtn')) {
                index++;
                if (index === customers.length) {
                    index = 0;
                }
                customerImg.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].text;

            }


        })
    })


})();