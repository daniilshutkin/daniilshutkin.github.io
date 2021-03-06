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
    'name_one_company' : '????????????????????????????????????????????',
    'special_one_company' : '???????????????????? ?????????? ???????????????????????? ??????????????????????',
    'one_place' : '????????????????????????, ????????????',
    'experience_work' : '????????',
    'a1': 'Harvard - CS50.',
    'a2': 'Stepik - ???????????????? ?? Kotlin JVM.',
    'a3': 'SwiftBook - ???????????? ????????????????????????????????.',
    'achievements': '<h3>?????? ????????????????????</h3>',
    'skills': '<h3>????????????</h3>',
    'serov_place': '??????????, ????????????',
    'special_serov': '???????????????????????? ????????',
    'serov': '??????',
    'ekb_place': '????????????????????????, ????????????',
    'special_ekb': '????????????-??????????????????????',
    'ekb': '?????? ??????',
    'education': '<h3>??????????????????????</h3>',
    'q9': '???????????????????????? ???? ??????????????????.',
    'q8': '?????????????????????? ?????????????? ???????????????? ?????????? ???????????????????? ????????.',
    'q7': '???????????????????????????????????? ?? ????????????????????.',
    'q6': '???????????? ???????????????? ?? UIkit ?? SwiftUI.',
    'q5': '???????????????????????? ?????????????????????? ???? iOS.',
    'q4': '???????????????? ?? ??????????????.',
    'q3': '?????????????????????? ?? ???????????????????????? ?????????? ???????????? ?? ??????????????????????????????.',
    'q2': '???????????? ?? ???????????? ???????????? MySQL.',
    'q1': '?????????????????? ?????????????????????? ???????????????????????? ?????? ???????????????????????????????? ??????????????????????.',
    'description_text': '???????????????? ???????????? ?? ??????????????????????:',
    'description': '<b>?? ????????:</b> ?? ???????? ???????? ???????? ?????????????????????? ?????????????????????????? ???????????????????? ?? ?????????????? ??????-???????????????????? ?? ?????????????? ??????????????. ?? ?????????????????? ?????????????? ?? ???? ???????? ?????????????? ????????????????. ?? ???????????????????????????? ???????????? ???????????????????? iOS, ?????????? ???????????? ???? LeetCode.',
    'name':'<h1>???????????? ????????????</h1><h2>iOS ??????????????????????</h2>',
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
