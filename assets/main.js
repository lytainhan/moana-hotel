const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Begin Menu Mobile
const menu = $('.menu_content')
const iconMenuOpen = $('.icon_menu-open');
const iconMenuClose = $('.icon_menu-close');


iconMenuOpen.onclick = function() {
    iconMenuClose.classList.remove('close')
    iconMenuOpen.classList.add('close')
    menu.classList.add('menu_content_close')
}

iconMenuClose.onclick = function() {
    iconMenuClose.classList.add('close')
    iconMenuOpen.classList.remove('close')
    menu.classList.remove('menu_content_close')
}
// Begin Menu Mobile
const optionLanguages = $$('.language_class')
optionLanguages.forEach((optionlanguge, index) => {
    optionlanguge.onlick = function() {
    console.log(optionLanguages);   
    }
})

// Begin Best Rooms
const bestRoomdots = $$('.best_room_dot_next');
const bestRoomInfos = $$('.best_room_info');
// const dotActive = $('.best_room_dot_next.best_room_dot_acticon')

bestRoomdots.forEach((clickDot, index) => {
    const bestRoomInfo = bestRoomInfos[index];
    clickDot.onclick = function() {
        
        $('.best_room_dot_next.best_room_dot_acticon').classList.remove('best_room_dot_acticon');
        $('.best_room_info.best_room_info_active').classList.remove('best_room_info_active');

        this.classList.add('best_room_dot_acticon');
        bestRoomInfo.classList.add('best_room_info_active');
    }
})
// End Best Rooms


 