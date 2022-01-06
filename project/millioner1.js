let question = ['Что из этого не является косметическим средством?', 'Кто, в конце концов, скушал Колобка?','Какой шахматной фигуры не существует?','Что означает буква «О» в аббревиатуре ОРТ?','Главный герой в романе Ф. И. Достоевского «Преступление и наказание»','В состав любого органического вещества входит…','Какое слово здесь лишнее?','Как назывался самый младший гражданский чин, присваивавшийся согласно Табели о рангах?','Кто изобрел громоотвод?','Как в России в 15-17вв. назывались феодально-зависимые люди, не имевшие своего хозяйства, жившие и работавшие во дворах крестьян или посадских людей?','В каком городе находится штаб-квартира Microsoft?','При каком правителе к России была присоединена территория Финляндии?','Ричард Львиное Сердце был пленен во время','Известно, что в кириллице многие буквы имели и цифровое значение. Чему равна буква К (како)?','Кто такой «молотоглав»?'],
    answer = ['Помада','Татуировка','Крем','Пудра',  'Дед','Баба','Заяц','Лиса', 'Пешка','Конь','Король','Дама', 'Олигархическое','Объективное','Общественное','Однообразное', 'Расторгуев','Чикатило','Тумбочкин','Раскольников', 'кислород','углерод','водород','азот', 'Автор','Товар ','Отвар','Ворот', 'Синодский регистратор','Провинциальный секретарь','Коллежский регистратор','Кабинетский регистратор', 'Франклин','Рузвельт','Вашингтон','Линкольн', 'Дворовые','Захребетники','Нахлебники','Бестягольные', 'Нью-Йорк','Ричмонд','Новый Орлеан','Сиэтл', 'Петр I','Екатерина II','Павел I','Александр I', 'крестового похода','столетней войны','войны алой и белой розы','войны за независимость', '10','20','70','90', 'Рыба','Птица','Змея','Насекомое'],
    key = [1, 3, 3, 2, 3, 1, 3, 2, 0, 1, 1, 3, 0, 1, 1],
    level = 0;

function begin(level) {
    $('.question').text( question[level] );
    $('label[for=answer1]').text( answer[level*4] );
    $('label[for=answer2]').text( answer[level*4+1] );
    $('label[for=answer3]').text( answer[level*4+2] );
    $('label[for=answer4]').text( answer[level*4+3] );
}

let resultConst = [];
begin(level);
let tr = $('tr');

$('.send').click(
    function(){
        $('.item-label').css('background', 'darkblue');
        if( $('input[name=answer]:checked').val() == key[level] )
    {
        level++;
        begin(level);
    }
    else{gameOver()}

    $('input').prop('checked', false);
    $(tr.removeClass('result'));
    $(tr[tr.length - (level)]).css('color','yellow');
    $(tr[tr.length - (level)]).addClass('result');
})

Math.rand = function(min, max){
    return Math.round(Math.random() * (max-min) + min);
}
var inputLabel = document.getElementsByTagName('label');
$('.fifty').click(
    function()
    {
    var inputAnswer = document.getElementsByName('answer');
    var exp = [];
    var count = 0;
    while(count < 2) {
        var index = Math.rand(0,3);
        if (exp.indexOf(index) == -1 && $(inputAnswer[index]).val() != key[level] )
        {
            $(inputLabel[index]).css('background', 'red');
            count++;
            exp.push(index);
        }
    }
    $(this).off('click');
    $(this).css('background', 'grey');
    })


$('.call').click(
    function()
    {
    $(inputLabel[Math.rand(0,3)]).css('background', 'yellow'),
        $(this).off('click');
    $(this).css('background', 'grey');
})

var result = $('.result');

function hideAll(){
    $(".question").hide();
    $(".send").hide();
    $(".item-input").hide();
    $(".item-label").hide();
    $(".fifty").hide();
    $(".call").hide();
}

function gameOver() {
    if (level >= 5 && level<10)  {
        alert('You loose, but your money is 1000$');
        hideAll();
    }
    else if (level >= 10 && level<15) {
        alert('You loose, but your money is 32000$');
        hideAll();
    }
    else if (level == 15){
        alert('You win! Your money is 1000000$');
        hideAll();
    }
    else {
        alert('You loose...');
        hideAll();
    }
}





