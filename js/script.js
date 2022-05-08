var checkbox = document.querySelector('.theme-switch__checkbox');

checkbox.addEventListener('change', function() {
    transition();
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})

function transition() {
    document.documentElement.classList.add('transition');
    setTimeout(function() {
        document.documentElement.classList.remove('transition');
    },
        250)
}
var en = {
    'a1': 'SwiftBook basics of programming.',
    'achievements': '<h3>My achievements</h3>',
    'skills': '<h3>Skills</h3>',
    'serov_place': 'Serov, Russia',
    'special_serov': 'Computer networks',
    'serov': 'Serov Metallurgical College',
    'ekb_place': 'Yekaterinburg, Russia',
    'special_ekb': 'Technician-Programmer',
    'ekb': 'Ural Polytechnic College',
    'education': '<h3>Education</h3>',
    'q8': 'Focus on results.',
    'q7': 'Thinking over solutions to the problem before writing code.',
    'q6': 'Sociability and openness.',
    'q5': 'Passion for iOS development.',
    'q4': 'Attention to detail.',
    'q3': 'Ability to plan their work and self-organization.',
    'q2': 'Working with MySQL databases.',
    'q1': 'Writing technical documentation for developed functional.',
    'description_text': 'Key skills and responsibilities:',
    'description': '<b>About me:</b> I have no experience in commercial development, but I have experience of passing a semiannual internship as part of a development team.',
    'name': '<h1>Daniil Shutkin</h1><h2>iOS developer</h2>',
    'theme': '<span>Dark Mode</span>',
    'language': '<span>Language</span>',
}; var ru = {
    'a1': 'SwiftBook основы программирования',
    'achievements': '<h3>Мои достижения</h3>',
    'skills': '<h3>Навыки</h3>',
    'serov_place': 'Серов, Россия',
    'special_serov': 'Компьютерные сети',
    'serov': 'СМТ',
    'ekb_place': 'Екатеринбург, Россия',
    'special_ekb': 'Техник-программист',
    'ekb': 'УПК МЦК',
    'education': '<h3>Образование</h3>',
    'q8': 'Нацеленность на результат.',
    'q7': 'Обдумывание решений проблемы перед написанием кода.',
    'q6': 'Коммуникабельность и открытость.',
    'q5': 'Увлеченность разработкой на iOS.',
    'q4': 'Внимание к мелочам.',
    'q3': 'Способность к планированию своей работы и самоорганизация.',
    'q2': 'Работа с базами данных MySQL.',
    'q1': 'Написание технической документации для разрабатываемого функционала.',
    'description_text': 'Ключевые навыки и обязанности:',
    'description': '<b>О себе:</b> нет опыта в коммерческой разработке, но есть опыт прохождения полугодовой практики в составе команды разработчиков.',
    'name':'<h1>Даниил Шуткин</h1><h2>iOS разработчик</h2>',
    'theme': '<span>Dark Mode</span>',
    'language': '<span>Language</span>',
}; 
changeLagnuage();
function changeLagnuage() {
    let language = lang.checked ? ru: en; document.querySelectorAll('[text], [data-text]').forEach(el => {
    var attr = el.hasAttribute('data-text') ? 'data-text' : 'text';
    el.innerHTML = language[el.getAttribute(attr)];
    })
}
