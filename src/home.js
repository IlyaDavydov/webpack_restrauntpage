import './home.css';

export function homePageLoading(content) {
    const homepage = document.createElement('div'); //Main page
    homepage.id = "homepage";

    const chef = document.createElement("div"); //Chef
    chef.id = "chef";
    const chefSignature = document.createElement("p");
    chefSignature.id = "chefsignature";
    chefSignature.textContent = "Our chef"
    const chefPhoto = document.createElement("div");
    chefPhoto.id = "chefphoto";
    const chefName = document.createElement("p");
    chefName.id = "chefname";
    chefName.textContent = "Remy"
    chef.appendChild(chefSignature);
    chef.appendChild(chefPhoto);
    chef.appendChild(chefName);

    const restrauntInfo = document.createElement("div"); //Restraunt information
    restrauntInfo.id = "restrauntInfo";
    const restrauntSignature = document.createElement("p");
    restrauntSignature.id = "restrauntsignature";
    restrauntSignature.textContent = "About Global Palate"
    const aboutRestraunt = document.createElement("p");
    aboutRestraunt.id = "aboutrestraunt";
    aboutRestraunt.textContent = "Welcome to Global Palate restaurant, where we offer our guests unique lunch sets from around the world. Our restaurant prides itself on providing quality dishes inspired by world cuisines. From hearty to sweet, our sets will satisfy any taste preference. Join us for an unforgettable culinary journey through different cultures. Whether you crave cozy comfort food or seek adventure, we have the perfect set for you. Come and enjoy the world on a plate at our restaurant"
    restrauntInfo.appendChild(restrauntSignature);
    restrauntInfo.appendChild(aboutRestraunt);

    homepage.appendChild(chef); //add divs to main div
    homepage.appendChild(restrauntInfo);

    content.appendChild(homepage); // add main div to outer div 
}