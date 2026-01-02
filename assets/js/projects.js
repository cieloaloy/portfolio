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
            image: 'assets/images/mentors.jpg',
            link: 'https://github.com/cse110-sp24-group11/cse110-sp24-group11',
            title: '11:11 Dev Journal',
            date: "Fall 2023",
            categories: ['featured'],
            demo: 'https://cse110-sp24-group11.github.io/cse110-sp24-group11/assets/src/calendar/index.html',
            technologies: ['Full-Stack', 'E2E Testing'],
            description: "A built-from-scratch CRUD journaling web app for developers. Uses a CI/CD pipeline via GitHub Actions and a full testing suite via Jest and Puppeteer.",
            course: "CSE 110 at UC San Diego"
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
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2 class="project-title"><a href="${project.link}">${project.title}</a>
                            ${project.date ? `<span class="post-date">${project.date}</span>` : ''}
                        </h2>

                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>

                        ${project.course ? `<p class="paragraph-text-normal"><strong>Course:</strong> ${project.course}</p>` : ''}

                        ${project.categories && project.categories.length ? `<div class="project-tags">${project.categories.map(cat => `<span class="project-tag-item">${cat}</span>`).join('')}</div>` : ''}
                    </article>

                                
                    <div class="card__meta">
                        ${(project.technologies || []).map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}