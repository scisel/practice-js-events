const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */

const pElements = document.querySelectorAll('.text');
pElements.forEach(p => {
    p.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.dataset.id;
        if (e.target.tagName.includes("P")) {
            if (typeof stats.paragraphs[id] === 'undefined') {
                console.log('tego nie rejestruję')
            } else {
                stats.paragraphs[id]++
            }
        }

        const href = e.target.getAttribute('href');
        if (e.target.className === 'link' && e.currentTarget.dataset.id === 'p1') {
            if (typeof stats.links[href] === 'undefined') {
                console.log('tego nie rejestruję')
            } else {
                stats.links[href]++;
            }
        }
    })
})

/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function (element, name) {
    // console.log(element, '=>', name);

    const event = new CustomEvent(name, {
        bubbles: true,
    });

    element.dispatchEvent(event);
}

const renderStats = function (data, element) {
    let html = '';
    for (let elementType in data) {
        html += '<ul>';

        for (let key in data[elementType]) {

            html += '<li>';
            html += key + ' -> ' + data[elementType][key];
            html += '</li>';
        }

        html += '</ul>'
    }

    element.innerHTML = html;
}


document.addEventListener('click', function (e) {
    const tagName = e.target.tagName;
    if (tagName.includes('P') || tagName.includes('A')) {
        fireCustomEvent(statsElement, 'render');
    }
});
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));
document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'));

