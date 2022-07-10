//our services
const servicesTab = $('.services__tab');
let servicesTabName;
let servicesTargetText;
servicesTab.on('click', function (event) {
    servicesTab.removeClass('services__tab-active');
    $(event.target).addClass('services__tab-active');

    servicesTabName = $(event.target).text()
    servicesTargetText = $(`.services__content[title='${servicesTabName}']`);

    $('.services__content').css('display', 'none');
    $(servicesTargetText).css('display', 'flex');
});

//Sort our works
const worksTab = $('.our-work__tab');
let worksTabName = 'All';
let worksTargetPicture;
if ($('.our-work__tab-active').text() === 'All') {
    $('.our-work__picture').css('display', 'none');
    $('.our-work__pictures > li.our-work__picture:nth-of-type(-n + 12)').css('display', 'flex');
}
worksTab.on('click', function (event) {
    worksTab.removeClass('our-work__tab-active');
    $(event.target).addClass('our-work__tab-active');
    worksTabName = $(event.target).text();
    worksTargetPicture = $(`.our-work__picture[title='${worksTabName}']:lt(12)`);
    if ($(event.target).text() === 'All') {
        if (clickCounter[0] === 'All' && clickCounter[1] === 1) {
            $('.our-work__picture').css('display', 'none');
            $('.our-work__pictures > li.our-work__picture:nth-of-type(-n + 12)').css('display', 'flex');
            $('.our-work__picture:nth-of-type(n + 12):not(:nth-last-of-type(-n + 12))').css('display', 'flex');
        } else if (clickCounter[0] === 'All' && clickCounter[1] === 2) {
            $('.our-work__picture').css('display', 'none');
            $('.our-work__pictures > li.our-work__picture:nth-of-type(-n + 12)').css('display', 'flex');
            $('.our-work__picture:nth-of-type(n + 12)').css('display', 'flex');
        } else {
            $('.our-work__picture').css('display', 'none');
            $('.our-work__pictures > li.our-work__picture:nth-of-type(-n + 12)').css('display', 'flex');
        }
    }
    else {
        if (clickCounter[0] === worksTabName && clickCounter[1] === 1) {
            $('.our-work__picture').css('display', 'none');
            $(worksTargetPicture).css('display', 'flex');
            $(`.our-work__picture[title='${worksTabName}']:nth-of-type(n + 12)`).css('display', 'flex');
        } else if (clickCounter[0] === worksTabName && clickCounter[1] === 2) {
            $('.our-work__picture').css('display', 'none');
            $(worksTargetPicture).css('display', 'flex');
            $(`.our-work__picture[title='${worksTabName}']:nth-of-type(n + 12)`).css('display', 'flex');
        }
        else {
            $('.our-work__picture').css('display', 'none');
            $(worksTargetPicture).css('display', 'flex');
        }
    }
});

//load more
let loadButton = $('.our-work__container > .load-more-btn');
let clickCounter = [0, null];
loadButton.on('click', function () {
    clickCounter[0] = $('.our-work__tab-active').text();
    clickCounter[1] += 1;
    console.log(clickCounter)
    loadButton.css('background-color', '#78CEBD');
    if (clickCounter[1] === 1) {
        setTimeout(function () {
            if (worksTabName === 'All') $('.our-work__picture:nth-of-type(n + 12):not(:nth-last-of-type(-n + 12))').css('display', 'flex');
            else $(`.our-work__picture[title='${worksTabName}']:nth-last-of-type(-n + 12)`).css('display', 'flex');
            loadButton.css('background-color', '#18CFAB');
        }, 1000);
    } else if (clickCounter[1] === 2) {
        setTimeout(function () {
            if (worksTabName === 'All') $('.our-work__picture:nth-last-of-type(-n + 12)').css('display', 'flex');
            else $(`.our-work__picture[title='${worksTabName}']:nth-last-of-type(-n + 12)`).css('display', 'flex');
            loadButton.css('display', 'none');
        }, 1000);
    }
});

//Clients comments
const leftScroll = $('.clients-comments__scroll-persons > svg:first-of-type');
const rightScroll = $('.clients-comments__scroll-persons > svg:last-of-type');
const selectPerson = $('.clients-comments__person');
let indexSelectedPerson = $('.clients-comments__person-active').index();
const allPersonsInfo = $('.clients-comments__person-info');
let personPhoto;
let personInfo;
let slidePersonInfo = function () {
    personPhoto = $(`.clients-comments__person-active`).attr('title')
    personInfo = $(`.clients-comments__person-info[title='${personPhoto}']`)

    allPersonsInfo.fadeTo(100, 0.2).css('display', 'none');
    personInfo.fadeTo(800, 1).css('display', 'flex');
}
leftScroll.on('click', function () {
    selectPerson.removeClass('clients-comments__person-active');
    indexSelectedPerson--;
    if (indexSelectedPerson === -1) indexSelectedPerson = selectPerson.length - 1;
    selectPerson.eq(indexSelectedPerson).addClass('clients-comments__person-active');

    slidePersonInfo();
});
rightScroll.on('click', function () {
    selectPerson.removeClass('clients-comments__person-active');
    indexSelectedPerson++;
    if (indexSelectedPerson === selectPerson.length) indexSelectedPerson = 0;
    selectPerson.eq(indexSelectedPerson).addClass('clients-comments__person-active');

    slidePersonInfo();
});
selectPerson.on('click', function (event) {
    selectPerson.removeClass('clients-comments__person-active');
    indexSelectedPerson = $(event.target).index();
    $(event.target).addClass('clients-comments__person-active');

    slidePersonInfo();
});



