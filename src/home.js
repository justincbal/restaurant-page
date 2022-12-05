const home = () => {
    const content = document.querySelector('#content');
    const home = document.createElement('div');
    const h2 = document.createElement('h2');
    const h1 = document.createElement('h1');
    const buttons = document.createElement('div');
    const b1 = document.createElement('button'); 
    const b2 = document.createElement('button');

    home.classList.add('home');
    buttons.classList.add('buttons');

    h2.textContent = "Welcome to";
    h1.textContent = "Capri's Cuisine";
    b1.textContent = "Order online";
    b2.textContent = "Reserve a table";

    buttons.append(b1);
    buttons.append(b2);

    home.append(h2);
    home.append(h1);
    home.append(buttons);

    content.append(home);
}

export {home};