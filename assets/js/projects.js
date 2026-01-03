$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');
    // sort by recency, include course info, truncate list by default
    let projects_obj = [
        {
            image: 'assets/images/wikitext.png',
            link: '',
            title: 'Reinventing Hacker News',
            date: "Fall 2025",
            categories: ['featured'],
            demo: '',
            technologies: ['Python', 'Machine Learning'],
            description: "Used Jaccard similarity and Logistic Regression to improve content recommendation on Hacker News by analyzing user interactions and article metadata.",
            course: "CSE 158 at UC San Diego"
        },
        {
            image: 'assets/images/wikitext.png',
            link: '',
            title: 'Nachos Operating System',
            date: "Fall 2025",
            categories: ['featured'],
            demo: '',
            technologies: ['Java', 'Operating Systems'],
            description: "Recreated components of the Nachos operating system, including threading, synchronization, and virtual memory.",
            course: "CSE 120 at UC San Diego"
        },
        {
            image: 'assets/images/wikitext.png',
            link: 'https://github.com/cieloaloy/wikipedia-text-categorization',
            title: 'Wikipedia Text Categorization',
            date: "Summer 2025",
            categories: ['featured'],
            demo: 'https://github.com/cieloaloy/wikipedia-text-categorization',
            technologies: ['Python', 'Machine Learning'],
            description: "A machine learning experiment that classifies Wikipedia articles using NLP across a Naive Bayes model and SVM.",
            course: "CSE 151A at UC San Diego"
        },
        {
            image: 'assets/images/1111.png',
            link: 'https://github.com/cse110-sp24-group11/cse110-sp24-group11',
            title: '11:11 Dev Journal',
            date: "Fall 2023",
            categories: ['featured'],
            demo: 'https://cse110-sp24-group11.github.io/cse110-sp24-group11/assets/src/front-page/index.html',
            technologies: ['Full-Stack', 'E2E Testing'],
            description: "A built-from-scratch CRUD journaling web app for developers. Uses a CI/CD pipeline via GitHub Actions and a full testing suite via Jest and Puppeteer.",
            course: "CSE 110 at UC San Diego"
        },
        {
            image: 'assets/images/15lab.png',
            link: 'https://cieloaloy.github.io/cse15l-lab-reports/',
            title: 'Software Techniques Labs',
            date: "Spring 2023",
            categories: ['featured'],
            demo: 'https://cieloaloy.github.io/cse15l-lab-reports/',
            technologies: ['Linux', 'Git', 'Terminal Commands'],
            description: "A series of 5 lab reports covering essential software techniques including Git, Linux, and helpful terminal commands.",
            course: "CSE 15L at UC San Diego"
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.demo}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2 class="project-title"><a href="${project.link}">${project.title}</a>
                            ${project.date ? `<span class="post-date">${project.date}</span>` : ''}
                        </h2>

                        <p class="paragraph-text-normal">${project.description}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${(project.technologies || []).map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}

                        ${project.course ? `<p class="paragraph-text-normal"> ${project.course}</p>` : ''}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}