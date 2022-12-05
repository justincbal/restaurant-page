const navBar = () => {
    const content = document.querySelector('#content');
    const nav = document.createElement('div');
    const logo = document.createElement('div');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const about = document.createElement('div');

    nav.classList.add("nav");
    logo.classList.add("logo", "link");
    home.classList.add("link", "cl", "homeLink");
    menu.classList.add("link", "cl", 'menuLink');
    about.classList.add("link", "cl", 'aboutLink');

    logo.textContent = "Capri's Cuisine";
    home.textContent = "Home";
    menu.textContent = "Menu";
    about.textContent = "About";

    nav.append(logo);
    nav.append(home);
    nav.append(menu);
    nav.append(about);

    content.append(nav);

}

export { navBar };

