const projects_prev_arrow = document.querySelector('#projects_prev_arrow'); // стрелка влево
const projects_next_arrow = document.querySelector('#projects_next_arrow'); // стрелка вправо
const projects_prev_mobile  = document.querySelector('.ch2_project_mobile_btn--prev'); // мобильная стрелка влево
const projects_next_mobile  = document.querySelector('.ch2_project_mobile_btn--next'); // мобильная стрелка вправо
const fantasies_prev_mobile  = document.querySelector('.ch6_project_mobile_btn--prev'); // мобильная стрелка влево
const fantasies_next_mobile  = document.querySelector('.ch6_project_mobile_btn--next'); // мобильная стрелка вправо


const projectLocation = document.querySelector('#prj_location'); // точка записи инфо по проекту
const projectTime = document.querySelector('#prj_time'); // точка записи инфо по проекту
const projectSize = document.querySelector('#prj_size'); // точка записи инфо по проекту

const projectsImgBoxes = document.querySelectorAll('.ch2_project_image_box'); // контейнеры картинки текущего проекта
const fantasiesImgBoxes = document.querySelectorAll('.ch6_mobile_photo_box'); // картинки фантазий
const projectsLinks = document.querySelectorAll('.ch2_project_list_item'); // ссылки на проекты
const projectDots = document.querySelectorAll('.big_dot'); // точки-индикаторы текущего проекта


let projectIndex = 1; //Rostov admiral
let fantasiesIndex = 1; // first picture

/* Массив проектов */
let projectsInfo = [{
    "location": "Rostov-on-Don<br>LCD admiral",
    "time": "3.5 months",
    "size": "81 m2",
    }, {
    "location": "Sochi<br>Thieves",
    "time": "5 months",
    "size": "120 m2",
    }, {
    "location": "Rostov-on-Don<br>Patriotic",
    "time": "9 months",
    "size": "275 m2",
}];

/* Обновление блока информации о проекте, на входе номер проекта */

function updateProjectInfo (index=1) {
    
    // заполняем данные о проекте
    projectLocation.innerHTML = projectsInfo[index - 1].location;
    projectTime.innerHTML = projectsInfo[index - 1].time;
    projectSize.innerHTML = projectsInfo[index - 1].size;
    
    // показываем контейнер изображения проекта с номером index,
    // остальные контейнеры скрываем
    projectsImgBoxes[index-1].style.display = 'block';
    projectsImgBoxes.forEach((element, key) => {
        if (key != index - 1) element.style.display = 'none'; 
    });

    // проходим массив ссылок на проекты:
    // к ссылке элемента ссылки на текущий проект включеем стиль highlight,
    // у остальных - отключаем
    projectsLinks.forEach((element,key) => {
        if (key == index - 1) element.classList.add('ch2_project_list_item_highlight');  
        else element.classList.remove('ch2_project_list_item_highlight'); 
    });

    // todo: обновление буллета между стрелками
    projectDots.forEach((element,key) => {
        if (key == index - 1) element.classList.add('big_dot_active');  
        else element.classList.remove('big_dot_active');
    });
}

function updateFantasyImg (index=1) {
    // показываем контейнер изображения проекта с номером index,
    // остальные контейнеры скрываем
    fantasiesImgBoxes[index-1].style.display = 'block';
    fantasiesImgBoxes.forEach((element, key) => {
        if (key != index - 1) element.style.display = 'none'; 
    });
};

// обработчик десктопной стрелки на следующий проект
projects_next_arrow.addEventListener('click', () => {

    projectIndex++;
    if (projectIndex > projectsInfo.length) {
        projectIndex = 1;
    };
    updateProjectInfo(projectIndex);

});

// обработчик десктопной стрелки на предыдущий проект
projects_prev_arrow.addEventListener('click', () => {

    projectIndex--;
    if (projectIndex < 1) {
        projectIndex = projectsInfo.length
    };
    updateProjectInfo(projectIndex);

});

// обработчики ссылок на заголовках проектов по их номеру
projectsLinks.forEach((element,key)  =>  {

    element.addEventListener('click', () =>  {
        projectIndex  =  key + 1;
        updateProjectInfo(projectIndex);
    });

});

// обработчик мобильной стрелки на следующий проект
projects_next_mobile.addEventListener('click', () => {

    projectIndex++;
    if (projectIndex > projectsInfo.length) {
        projectIndex = 1;
    };
    updateProjectInfo(projectIndex);

});

// обработчик мобильной стрелки на предыдущий проект
projects_prev_mobile.addEventListener('click', () => {

    projectIndex--;
    if (projectIndex < 1) {
        projectIndex = projectsInfo.length
    };
    updateProjectInfo(projectIndex);

});

// обработчик мобильной стрелки на следующее фото фантазии
fantasies_next_mobile.addEventListener('click', () => {

    fantasiesIndex++;
    if (fantasiesIndex > fantasiesImgBoxes.length) {
        fantasiesIndex = 1;
    };
    updateFantasyImg(fantasiesIndex);

});

// обработчик мобильной стрелки на предыдущее фото фантазии
fantasies_prev_mobile.addEventListener('click', () => {

    fantasiesIndex--;
    if (fantasiesIndex < 1) {
        fantasiesIndex = fantasiesImgBoxes.length
    };
    updateFantasyImg(fantasiesIndex);

});