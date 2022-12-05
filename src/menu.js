function menuItem(name, desc, price) {
    const menuI = document.createElement('div');
    const h1 = document.createElement('h1');
    const h4 = document.createElement('h4');
    const h3 = document.createElement('h3');

    menuI.classList.add('menu-item');
    h1.textContent = name;
    h4.textContent = price;
    h3.textContent = desc;

    menuI.append(h1);
    menuI.append(h4);
    menuI.append(h3);

    return menuI;
}

const menu = () => {
    const content = document.querySelector('#content');
    const createMenu = document.createElement('div');
    createMenu.classList.add('menu');

    createMenu.append(menuItem(
        'Nonna Franca', 
        'Spaghetti with broccoli, anchovy paste, pine nuts & raisins topped with toasted bread crumbs & sesame seeds (no changes please)',
        '20'
        )
        );

    createMenu.append(menuItem(
        'Puttanesca',
        'Penne with black olives, capers, anchovies, red wine & diced onions',
        '20'
    ))

    createMenu.append(menuItem(
        'Linguine Marinara',
        'Linguine with fresh mussels, shrimp, cod & calamari in a light tomato sauce (no changes please)',
        '33'
    ))

    createMenu.append(menuItem(
        'Amalia',
        'Spinach & ricotta filled ravioli with prosciutto (cured ham), asparagus & green onions',
        '22'
    ))

    createMenu.append(menuItem(
        'Catrina',
        'Spinach linguine with grilled chicken, spicy pancetta (cured bacon), diced onions & black peppercorns',
        '22'
    ))

    createMenu.append(menuItem(
        'Fettina ai Ferri',
        'Grilled veal cutlet served with an arugula & cherry tomato salad with roasted potatoes',
        '24'
    ))

    createMenu.append(menuItem(
        'Atlantic Salmon',
        'Baked Atlantic salmon served with shredded kale & beet with apples, raisins & radish with a white balsamic vinaigrette & roasted potatoes',
        '31'
    ))


    content.append(createMenu);
}

export { menu, menuItem };