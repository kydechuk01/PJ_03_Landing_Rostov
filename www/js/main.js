const projects_prev_arrow = document.querySelector('#projects_prev_arrow'); // стрелка влево
const projects_next_arrow = document.querySelector('#projects_next_arrow'); // стрелка вправо

const projectLocation = document.querySelector('#prj_location'); // точка записи инфо по проекту
const projectTime = document.querySelector('#prj_time'); // точка записи инфо по проекту
const projectSize = document.querySelector('#prj_size'); // точка записи инфо по проекту

const projectsImgBoxes = document.querySelectorAll('.ch2_project_image_box'); // контейнеры картинки текущего проекта
const projectsLinks = document.querySelectorAll('.ch2_project_list_item'); // ссылки на проекты
const projectDots = document.querySelectorAll('.big_dot'); // точки-индикаторы текущего проекта


let projectIndex = 1; //Rostov admiral

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

// обработчик стрелки на следующий проект
projects_next_arrow.addEventListener('click', () => {

    projectIndex++;
    if (projectIndex > projectsInfo.length) {
        projectIndex = 1;
    };
    updateProjectInfo(projectIndex);

});

// обработчик стрелки на предыдущий проект
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
