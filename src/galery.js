import './galery.css';

export function galeryPageLoading(content) {
    const galerypage = document.createElement('div'); //Main page
    galerypage.id = "galerypage";

    const gridGlery = document.createElement("div");
    gridGlery.id = "gridGalery";
    const p1 = document.createElement("div");
    p1.id = "p1";
    const p2 = document.createElement("div");
    p2.id = "p2";
    const p3 = document.createElement("div");
    p3.id = "p3";
    const p4 = document.createElement("div");
    p4.id = "p4";
    const p5 = document.createElement("div");
    p5.id = "p5";
    const p6 = document.createElement("div");
    p6.id = "p6";
    const p7 = document.createElement("div");
    p7.id = "p7";
    const p8 = document.createElement("div");
    p8.id = "p8";
    const p9 = document.createElement("div");
    p9.id = "p9";
    gridGlery.appendChild(p1);
    gridGlery.appendChild(p2);
    gridGlery.appendChild(p3);
    gridGlery.appendChild(p4);
    gridGlery.appendChild(p5);
    gridGlery.appendChild(p6);
    gridGlery.appendChild(p7);
    gridGlery.appendChild(p8);
    gridGlery.appendChild(p9);

    galerypage.appendChild(gridGlery);

    content.appendChild(galerypage); // add main div to outer div 
}