import './menu.css';
import france from './assets/france.svg';

export function menuPageLoading(content) {
    const menupage = document.createElement('div'); //Main page
    menupage.id = "menupage";

    const row1 = document.createElement('div'); //First row
    row1.id = "row1";

    const lunch1 = document.createElement('div'); //lunch 1
    lunch1.classList.add("lunch");
    lunch1.id = "lunch1";
    const img1 = document.createElement('div');
    img1.id = "img1";
    const signature1 = document.createElement('p');
    signature1.id = "signature1";
    signature1.textContent = "Italian set";
    lunch1.appendChild(img1);
    lunch1.appendChild(signature1);

    const lunch2 = document.createElement('div'); //lunch 2
    lunch2.classList.add("lunch");
    lunch2.id = "lunch2";
    const img2 = document.createElement('div');
    img2.id = "img2";
    const signature2 = document.createElement('p');
    signature2.id = "signature2";
    signature2.textContent = "Chinese set";
    lunch2.appendChild(img2);
    lunch2.appendChild(signature2);

    const lunch3 = document.createElement('div'); //lunch 3
    lunch3.classList.add("lunch");
    lunch3.id = "lunch3";
    const img3 = document.createElement('div');
    img3.id = "img3";
    const signature3 = document.createElement('p');
    signature3.id = "signature3";
    signature3.textContent = "German set";
    lunch3.appendChild(img3);
    lunch3.appendChild(signature3);

    const lunch4 = document.createElement('div'); //lunch 4
    lunch4.classList.add("lunch");
    lunch4.id = "lunch4";
    const img4 = document.createElement('div');
    img4.id = "img4";
    const signature4 = document.createElement('p');
    signature4.id = "signature4";
    signature4.textContent = "Uzbek set";
    lunch4.appendChild(img4);
    lunch4.appendChild(signature4);

    row1.appendChild(lunch1); //Add lunch1, lunch2, lunch3, lunch4 to row1
    row1.appendChild(lunch2);
    row1.appendChild(lunch3);
    row1.appendChild(lunch4);

    const row2 = document.createElement('div'); //Second row
    row2.id = "row2";

    const lunch5 = document.createElement('div'); //lunch 5
    lunch5.classList.add("lunch");
    lunch5.id = "lunch5";
    const img5 = document.createElement('div');
    img5.id = "img5";
    const signature5 = document.createElement('p');
    signature5.id = "signature5";
    signature5.textContent = "Georgian set";
    lunch5.appendChild(img5);
    lunch5.appendChild(signature5);

    const lunch6 = document.createElement('div'); //lunch 6
    lunch6.classList.add("lunch");
    lunch6.id = "lunch6";
    const img6 = document.createElement('div');
    img6.id = "img6";
    const signature6 = document.createElement('p');
    signature6.id = "signature6";
    signature6.textContent = "Ingrian set";
    lunch6.appendChild(img6);
    lunch6.appendChild(signature6);

    const lunch7 = document.createElement('div'); //lunch 7
    lunch7.classList.add("lunch");
    lunch7.id = "lunch7";
    const img7 = document.createElement('div');
    img7.id = "img7";
    const signature7 = document.createElement('p');
    signature7.id = "signature7";
    signature7.textContent = "Indian set";
    lunch7.appendChild(img7);
    lunch7.appendChild(signature7);

    const lunch8 = document.createElement('div'); //lunch 8
    lunch8.classList.add("lunch");
    lunch8.id = "lunch8";
    const img8 = document.createElement('div');
    img8.id = "img8";
    const signature8 = document.createElement('p');
    signature8.id = "signature8";
    signature8.textContent = "French set";
    lunch8.appendChild(img8);
    lunch8.appendChild(signature8);
    console.log(img8.src);

    row2.appendChild(lunch5); //Add lunch5, lunch6, lunch7, lunch8 to row2
    row2.appendChild(lunch6);
    row2.appendChild(lunch7);
    row2.appendChild(lunch8);

    menupage.appendChild(row1); 
    menupage.appendChild(row2);
    
    content.appendChild(menupage);

    function setDescription(lunch, signature, text, text2) {
        lunch.addEventListener('mouseover', function() {
            signature.textContent = text;
            signature.style.fontSize = "15px";
            signature.style.textAlign = "center";
          });
        lunch.addEventListener('mouseout', function() {
            signature.textContent = text2;
            signature.style.fontSize = "24px";
          });  
    }

    setDescription(lunch1, signature1, "Bruschetta with Tomato and Basil, Spaghetti Carbonara, Limoncello Spritz, Tiramisu", "Italian set");
    setDescription(lunch2, signature2, "Spring Rolls, Kung Pao Chicken with Steamed Rice, Jasmine Tea, Mango Pudding", "Chinese set");
    setDescription(lunch3, signature3, "Pretzel with Mustard Dip, Schnitzel with Potato Salad, Pilsner, Black Forest Cake", "German set");
    setDescription(lunch4, signature4, "Samsa, Plov, Ayran, Halva", "Uzbek set");
    setDescription(lunch5, signature5, "Khachapuri, Khinkali, Saperavi, Churchkhela", "Georgian set");
    setDescription(lunch6, signature6, "Trout soup, Beef Stroganoff with Buckwheat, Berry Ingrian Kvass, Ptichye Moloko", "Ingrian set");
    setDescription(lunch7, signature7, "Samosa with Tamarind Chutney, Chicken Tikka Masala with Naan Bread, Lassi, Gulab Jamun", "Indian set");
    setDescription(lunch8, signature8, "French Onion Soup, Coq au Vin with Ratatouille, Red Bordeaux Wine, Crème Brûlée", "French set");
}