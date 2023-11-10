// Сообщение о загрузке скрипта
console.log('Script is loaded');

// Объявление переменных HTML классы элементов
const QuestionDiv = document.querySelector('.questions_cards_side');
const pointsOfCorrectAnswers = [];


// Создаваемые элементы в DOM
let veryEasyQuestions = document.querySelector('.very_easy_questions');
let easyQuestions = document.querySelector('.easy_questions');
let middleQuestions = document.querySelector('.middle_questions');
let middleHardQuestions = document.querySelector('.middle_hard_questions');
let HardQuestions = document.querySelector('.hard_questions');
let PopUpWindow = document.querySelector('#popup_main_1');
let closePopUpButton = document.querySelector('#close_popup_button_1');
let correctMarkerPlace = document.querySelector('#correct_marker_1');
let mainBtnPlc = document.querySelector('#main_buttons_1')

// Вытаскиваем ID кнопок из HTML
let pointsOfAttempt = 10;
let parseQuestionPlace = document.querySelector('#text_question_1');
let pointsOfAttemptPlace = document.querySelector('#points_of_attempt_1');
let popupsPart = document.querySelector('#popup_answers_1');
let questionsPlaceAdd = document.querySelector('#question_number_1')
let mainWindow = document.querySelector('.main_window')

// Массив с вопросами
let mainQuestions = [
    {
        text: 'Выберите, к какому типу относиться эта производственная  ситуация.',
        right: [1,],
        type: 1,
        points: 100,
        answers: ['конфликтная ситуация','дисциплинарное мероприятие','разногласия на работе'],
    },
];

let numberOfQuestion = 7; 
let numberOfQuestionSum = 13;




// Цикл создающий модальные окна, также пушит вопросы и ответы
for (i = 0; i < mainQuestions.length; i++){


    let popUpPlace = document.createElement('div');
    popUpPlace.classList.add('popup' , 'closed');

    popUpPlace.id = 'popup' + '_' + i;
    popupsPart.appendChild(popUpPlace);

    let popUpBody = document.createElement('div');
    popUpBody.classList.add('popup_body');
    popUpBody.id = 'popup_body_' + '_' + i;

    popUpPlace.appendChild(popUpBody);
    
    let popUpContentWindow = document.createElement('div');
    popUpContentWindow.classList.add('popup_content');
    popUpContentWindow.id = 'popup_content' + '_' + i;

    popUpBody.appendChild(popUpContentWindow);

    let closePopupButton = document.createElement('div');
    closePopupButton.classList.add('close_popup');
    

    let questionsPlace = document.createElement('div');
    questionsPlace.classList.add('questions');
    questionsPlace.id = 'question_number' + '_' + i;
    questionsPlace.innerHTML = '<div>' +'<span>' + numberOfQuestion + '. ' + '</span>' + mainQuestions[i].text + '</div>';
    
    

    popUpContentWindow.appendChild(closePopupButton);

    questionsPlaceAdd.appendChild(questionsPlace);


    let answerPlace = document.createElement('div');
    answerPlace.classList.add('answers_btn');
    answerPlace.id = 'answers_buttons' + '_' + i;

    mainWindow.appendChild(answerPlace);

//Один ответ без картинки 
    if(mainQuestions[i].type == 1){

        let form = document.createElement('form');
        form.classList.add('answer_form');
        form.id = 'answer_form_' + i;
        
        answerPlace.appendChild(form);
        form.dataset.right = mainQuestions[i].right;
    
        for (let answer of mainQuestions[i].answers) {
            let j = 0;
            let divInp = document.createElement('div');
            divInp.classList = ('answer_div');
            form.appendChild(divInp);
    
            let input = document.createElement('input');
            input.type = 'radio';
            input.name = j++;
            divInp.appendChild(input);
            let answ = document.createElement('p');
            answ.innerHTML = answer;
            divInp.appendChild(answ);
            if (mainQuestions[i].answers.length > 4){
                divInp.classList.add('small');
            }
        };
    };

//Подозреваю, что несколько ответов и картинка
    if(mainQuestions[i].type == 2){
        let mainWindow = document.createElement('div');
        mainWindow.classList = ('second_type_questions');
        mainWindow.id = 'second_type_question_' + i;
        answerPlace.appendChild(mainWindow);

        let secondTypeImg = document.createElement('img');
        secondTypeImg.src = mainQuestions[i].sourceImg
        mainWindow.appendChild(secondTypeImg);

        let form = document.createElement('form');
        form.classList.add('answer_form');
        form.id = 'answer_form_' + i;
        mainWindow.appendChild(form)
        form.dataset.right = mainQuestions[i].right;

        for (let answer of mainQuestions[i].answers) {
            let j = 0;
            let divInp = document.createElement('div');
            divInp.classList = ('answer_div');
            form.appendChild(divInp);
    
            let input = document.createElement('input');
            input.
            input.type = 'radio';
            input.name = j++;
            divInp.appendChild(input);
            let answ = document.createElement('p');
            answ.innerHTML = answer;
            divInp.appendChild(answ);
            if (mainQuestions[i].answers.length > 4){
                divInp.classList.add('small');
            }
        };
    };

//Несколько ответов без картинки
    if(mainQuestions[i].type == 3){
        let form = document.createElement('form');
        form.classList.add('answer_form');
        form.id = 'answer_form_' + i;
        answerPlace.appendChild(form);
        form.dataset.right = mainQuestions[i].right;
    
        for (let answer of mainQuestions[i].answers) {
            let j = 0;
            let divInp = document.createElement('div');
            divInp.classList = ('answer_div');
            form.appendChild(divInp);
    
            let input = document.createElement('input');
            input.type = 'checkbox';
            input.name = j++;
            divInp.appendChild(input);
            let answ = document.createElement('p');
            answ.innerHTML = answer;
            divInp.appendChild(answ);
            if (mainQuestions[i].answers.length > 4){
                divInp.classList.add('small');
            }
        };
    };


    //Один ответ одна картинка
    if(mainQuestions[i].type == 4){
        let mainWindow = document.createElement('div');
        mainWindow.classList = ('second_type_questions');
        mainWindow.id = 'second_type_question_' + i;
        answerPlace.appendChild(mainWindow);

        let secondTypeImg = document.createElement('img');
        secondTypeImg.src = mainQuestions[i].sourceImg
        mainWindow.appendChild(secondTypeImg);

        let form = document.createElement('form');
        form.classList.add('answer_form');
        form.id = 'answer_form_' + i;
        mainWindow.appendChild(form);
        form.dataset.right = mainQuestions[i].right;

        for (let answer of mainQuestions[i].answers) {
            let j = 0;
            let divInp = document.createElement('div');
            divInp.classList = ('answer_div');
            form.appendChild(divInp);
    
            let input = document.createElement('input');
            input.type = 'checkbox';
            input.name = j++;
            divInp.appendChild(input);
            let answ = document.createElement('p');
            answ.innerHTML = answer;
            divInp.appendChild(answ);
            if (mainQuestions[i].answers.length > 4){
                divInp.classList.add('small');
            }
        };
    };


    let mainButtonsPlace = document.createElement('div');
    mainButtonsPlace.classList.add('main_buttons');
    answerPlace.appendChild(mainButtonsPlace);

    


    let checkAnswerBtn = document.createElement('button');
    checkAnswerBtn.classList.add('check_button');
    checkAnswerBtn.id = 'check_button' + '_' + i;
    checkAnswerBtn.innerHTML = 'Ответить';

    let divBtn = document.createElement('div')
    divBtn.classList.add('main_btn')
    mainButtonsPlace.appendChild(divBtn);
    

    let stepMarkerPlc = document.createElement('div')
    stepMarkerPlc.classList.add('step_markers')
    mainButtonsPlace.appendChild(stepMarkerPlc);


    let stepMarkerPlace = document.querySelector('.step_markers');
    console.log("stepMarkerPlace")
    for (let i = 0; i < numberOfQuestion; i++){
        let markers = document.createElement('img');
        markers.src = "./content/radio_button_blue.svg";
        stepMarkerPlace.appendChild(markers);
    }

    for (let i = 0; i < numberOfQuestionSum-numberOfQuestion; i++){
        let markers = document.createElement('img');
        markers.src = "./content/radio_button.svg";
        stepMarkerPlace.appendChild(markers);
    }



    

    let stepPlaceDescription = document.querySelector('.number_description');
    stepPlaceDescription.innerHTML = '<b>' + numberOfQuestion + '/' + numberOfQuestionSum + '</b>';


    let nextBtn1 = document.createElement('button')
    nextBtn1.id = 'check_button_1'
    nextBtn1.innerText = 'Назад'
    nextBtn1.setAttribute('onclick', `location.href='../javascript_quiz_app_${numberOfQuestion-1}/index.html'`)
    divBtn.appendChild(nextBtn1)


    let nextBtn2 = document.createElement('button')
    nextBtn2.id = 'check_button_2'
    nextBtn2.innerText = 'Повторить'
    nextBtn2.classList.add('disabled_button')
    nextBtn2.setAttribute('onclick', "window.location.reload();")
    divBtn.appendChild(nextBtn2)


    mainButtonsPlace.appendChild(checkAnswerBtn)



    let nextBtn = document.createElement('button')
    nextBtn.id = 'check_button_3'
    nextBtn.innerText = 'Далее'
    nextBtn.classList.add('disabled_button')
    nextBtn.setAttribute('onclick', `location.href='../javascript_quiz_app_${numberOfQuestion+1}/index.html'`)

    divBtn.appendChild(nextBtn)




    //Добавление ивента для проверки ответов

    checkAnswerBtn.addEventListener('click',function(event)
    {
        let inputsBlock = document.querySelectorAll('.answer_div')
        inputsBlock.forEach(inputs =>{
            localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: false}));
            nextBtn.classList.remove('disabled_button')
            nextBtn2.classList.remove('disabled_button')
            checkAnswerBtn.classList.add('disabled_button')
            inputs.children[0].disabled = true
        })
        let rightcheck = false
        //Получения номера вопроса и блока вопросов
        let questionsblock = event.target.parentNode.parentNode.firstElementChild
        let question_number = questionsblock.id.split('_')
        question_number=question_number[question_number.length-1]
        //Проверка чекбоксов на пустой ответ
        for (let elem of questionsblock.querySelectorAll(".answer_div")) 
		{
            if(elem.firstElementChild.checked)
            {
                rightcheck=true
                break
            }
        }
        if (!rightcheck){
            return 0;
        }
        pointsOfAttempt-=1

        
        
        if (pointsOfAttempt < 0)
        { 
            return 0;//добавлено, чтобы после измены html кода disabled , проверка ответа не происходила. (простыми словами завершение функции)
        }


        if (pointsOfAttempt < 1)
        {
            //Отключение кнопок ответа
            for(let elem of document.querySelectorAll('.check_button')){

                elem.disabled = true;
                elem.classList.add('disable_answer_btn');
                
            }
            // Отключение кнопок вопросов 
            for(let i = 0; i < 5; i++){
                for(let j = 0; j < 3; j++){
                    cardsPlace.children[i].children[j].disabled = true;
                }
            }
            
        }





        //Обработка
        let counter=0 // Для получения порядкового номера
        for (let elem of questionsblock.querySelectorAll(".answer_div")) 
		{
            if(elem.firstElementChild.checked){
                // Проверка есть ли в массиве правильных ответов этот вариант ответа(counter)
                if (mainQuestions[question_number].right.indexOf(counter) != -1){
                    
                    elem.classList.add('correct')
                    nextBtn.classList.remove('disabled_button')
                    nextBtn2.classList.remove('disabled_button')
                    checkAnswerBtn.classList.add('disabled_button')
                }
                else
                {
                    localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: false}));
                    elem.classList.add('incorrect')
                    rightcheck=false
                    nextBtn.classList.remove('disabled_button')
                    nextBtn2.classList.remove('disabled_button')
                    checkAnswerBtn.classList.add('disabled_button')

                }
            }
            else{
                
                //Выделение правильных ответов, если они не выбраны
                if (mainQuestions[question_number].right.indexOf(counter) != -1){
                    localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: false}));
                    elem.classList.add('correct')
                }
            }
            counter++
        }
        //Создание кнопки закрытия
        let popUpPlace = document.getElementById('popup_' + question_number);
        let closeButton = document.createElement('button');
        closeButton.addEventListener('click', function(){
            popUpPlace.classList.add('closed');
            popUpPlace.classList.remove('open');
        });

        closeButton.classList.add('close_popup_button');
        closeButton.id = 'close_popup_button' + '_' + i;
        closeButton.innerHTML = '<img src="./content/close.svg" alt="close_popup">';
        document.getElementById('popup_content_'+question_number).firstElementChild.appendChild(closeButton);

        




    })



}; 
//--------------------------------
localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: true}));

// Новые переменные связанные с созданными Модальными окнами
let PopUp1 = document.querySelector('#popup_0');
let PopUp2 = document.querySelector('#popup_1');
let PopUp3 = document.querySelector('#popup_2');
let PopUp4 = document.querySelector('#popup_3');
let PopUp5 = document.querySelector('#popup_4');
let PopUp6 = document.querySelector('#popup_5');
let PopUp7 = document.querySelector('#popup_6');
let PopUp8 = document.querySelector('#popup_7');
let PopUp9 = document.querySelector('#popup_8');
let PopUp10 = document.querySelector('#popup_9');
let PopUp11 = document.querySelector('#popup_10');
let PopUp12 = document.querySelector('#popup_11');
let PopUp13 = document.querySelector('#popup_12');
let PopUp14 = document.querySelector('#popup_13');
let PopUp15 = document.querySelector('#popup_14');


// Пушим переменные модальных окон в массив для удобного вызова функции
popUpArr = [PopUp1, PopUp2, PopUp3, PopUp4, PopUp5, PopUp6, PopUp7, 
PopUp8, PopUp9, PopUp10, PopUp11, PopUp12, PopUp13, PopUp14, PopUp15,];


// Функция вызова модальных окон привязка по onclick html
function showQuestion(i){
    popUpArr[i].classList.remove('closed');  
};



//Сложение очков, для получения счёта( я не знаю зачем тут нужен был массив)



let openPopUpButton2 = document.querySelector('#open_popup_button')
let closePopUpButton2 = document.querySelector('#close_popup_button_1')
let popUpWindow2 = document.querySelector('#popup1')


openPopUpButton2.addEventListener('click', function(){
    popUpWindow2.classList.remove('close')
})

closePopUpButton.addEventListener('click', function(){
    popUpWindow2.classList.add('close')
})

let openPopUpButton3 = document.querySelector('#open_popup_button_2')
let closePopUpButton3 = document.querySelector('#close_popup_button_2')
let popUpWindow3 = document.querySelector('#popup2')


openPopUpButton3.addEventListener('click', function(){
    popUpWindow3.classList.remove('close')
})

closePopUpButton3.addEventListener('click', function(){
    popUpWindow3.classList.add('close')
})




