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
    'name_one_company' : 'Promenergosafety',
    'special_one_company' : 'Development of enterprise equipment website',
    'one_place' : 'Yekaterinburg, Russia',
    'experience_work' : 'Experience',
    'a1': 'Harvard - CS50.',
    'a2': 'Stepik - Introduction to Kotlin JVM.',
    'a3': 'SwiftBook - basics of programming.',
    'achievements': '<h3>My achievements</h3>',
    'skills': '<h3>Skills</h3>',
    'serov_place': 'Serov, Russia',
    'special_serov': 'Computer networks',
    'serov': 'Serov Metallurgical College',
    'ekb_place': 'Yekaterinburg, Russia',
    'special_ekb': 'Technician-Programmer',
    'ekb': 'Ural Polytechnic College',
    'education': '<h3>Education</h3>',
    'q9': 'Focus on results.',
    'q8': 'Thinking over solutions to the problem before writing code.',
    'q7': 'Sociability and openness.',
    'q6': 'Ability to work with UIkit and SwiftUI.',
    'q5': 'Passion for iOS development.',
    'q4': 'Attention to detail.',
    'q3': 'Ability to plan their work and self-organization.',
    'q2': 'Working with MySQL databases.',
    'q1': 'Writing technical documentation for developed functional.',
    'description_text': 'Key skills and responsibilities:',
    'description': '<b>About me:</b> I have experience of passing a six-month internship in web development as part of a team. I do sports and have no bad habits. I study iOS development on my own, solve tasks on LeetCode.',
    'name': '<h1>Daniil Shutkin</h1><h2>iOS developer</h2>',
    'theme': '<span>Dark Mode</span>',
    'language': '<span>Language</span>',
}; var ru = {
    'name_one_company' : 'Промэнергобезопасность',
    'special_one_company' : 'Разработка сайта оборудования предприятия',
    'one_place' : 'Екатеринбург, Россия',
    'experience_work' : 'Опыт',
    'a1': 'Harvard - CS50.',
    'a2': 'Stepik - Введение в Kotlin JVM.',
    'a3': 'SwiftBook - основы программирования.',
    'achievements': '<h3>Мои достижения</h3>',
    'skills': '<h3>Навыки</h3>',
    'serov_place': 'Серов, Россия',
    'special_serov': 'Компьютерные сети',
    'serov': 'СМТ',
    'ekb_place': 'Екатеринбург, Россия',
    'special_ekb': 'Техник-программист',
    'ekb': 'УПК МЦК',
    'education': '<h3>Образование</h3>',
    'q9': 'Нацеленность на результат.',
    'q8': 'Обдумывание решений проблемы перед написанием кода.',
    'q7': 'Коммуникабельность и открытость.',
    'q6': 'Умение работать с UIkit и SwiftUI.',
    'q5': 'Увлеченность разработкой на iOS.',
    'q4': 'Внимание к мелочам.',
    'q3': 'Способность к планированию своей работы и самоорганизация.',
    'q2': 'Работа с базами данных MySQL.',
    'q1': 'Написание технической документации для разрабатываемого функционала.',
    'description_text': 'Ключевые навыки и обязанности:',
    'description': '<b>О себе:</b> У меня есть опыт прохождения шестимесячной стажировки в области веб-разработки в составе команды. Я занимаюсь спортом и не имею вредных привычек. Я самостоятельно изучаю разработку iOS, решаю задачи на LeetCode.',
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
