const about = () => {
    const content = document.querySelector('#content');
    const ab = document.createElement('div');
    const abSec = document.createElement('div');
    const h1 = document.createElement('h1');
    const h4 = document.createElement('h4');

    ab.classList.add('about');
    abSec.classList.add('about-sec');

    h1.textContent = 'About us';
    h4.textContent = 'We are a italian restaurant located in Toronto, Ontario. Our story began with Marie Barone. She always had a dream in sharing her italian culture with the world. We strive to keep that dream alive, and here we are 25 years later still going strong. Come by and try real authentic italian cuisine.'

    abSec.append(h1);
    abSec.append(h4);
    ab.append(abSec);
    content.append(ab);

}

export {about};