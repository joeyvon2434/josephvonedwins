$(document).ready(function () {

    ////////////////////////////////////////
    //On Load Functions
    //////////////////////////////////////

    $('#social-bar').fadeIn(2000);

    ////////////////////////////////////////
    //Clicked Functions
    ////////////////////////////////////////

    //Function to toggle display of Menu
    ////////////////////////////////////
    $('#menu-button').on('click', function (event) {
        event.preventDefault();

        $(".menu-toggle").slideToggle();
    }); //End menu toggle function

    //Menu Links click function
    ////////////////////////////////////
    $(document).on('click', '.menu-item-nav', function (event) {
        hideShowcase();
        var navElement = $(this).attr('data-value');
        showClicked(navElement);
    });

    //Showcase Links Click Function
    ////////////////////////////////
    $(document).on('click', '.link-block', function (event) {
        event.preventDefault();
        hideShowcase();
        var navElement = $(this).attr('data-value');
        showClicked(navElement);

    });//end showcase links function

}); //Close document Ready



////////////////////////////////////////
//Called Functions
///////////////////////////////////////


//hides showcase section
function hideShowcase() {
    $('#main-showcase-display').removeClass('show-showcase');
    $('#main-showcase-display').addClass('hide-showcase');
    $('#main-showcase-display').removeClass('position-a');
    $('#main-showcase-display').addClass('position-b');
    $('#name-card').removeClass('position-c');
    $('#name-card').addClass('position-d');
};

//shows shocase section
function showShowcase() {
    $('#main-showcase-display').removeClass('hide-showcase');
    $('#main-showcase-display').addClass('show-showcase');
    $('#main-showcase-display').removeClass('position-b');
    $('#main-showcase-display').addClass('position-a');
    $('#name-card').removeClass('position-d');
    $('#name-card').addClass('position-c');

    hideAll();

};

//determines what to show base on click
function showClicked(navElement) {
    console.log(navElement);

    if (navElement == 'portfolio') {
        hideAll();
        showPortfolio();
    } else if (navElement == 'bio') {
        hideAll();
        showBio();
    } else if (navElement == 'contact') {
        hideAll();
        showContact();
    } else if (navElement == 'social') {
        hideAll();
        showSocial();
    } else if (navElement == 'home') {
        hideAll();
        showShowcase();
    } else { }
};

//hides everyting in the except home
function hideAll() {
    hidePortfolio();
    hideBio();
    hideSocial();
};



//shows portfolio if it is chosen
function showPortfolio() {
    $('#project-1').delay(500).fadeIn(1500);
    $('#project-2').delay(700).fadeIn(1500);
    $('#project-3').delay(900).fadeIn(1500);
    $('#project-4').delay(1100).fadeIn(1500);
    $('#project-5').delay(1300).fadeIn(1500);
};

//hides portfolio

function hidePortfolio() {
    $('.portfolio-background').fadeOut(1000);
};


//shows bio section
function showBio() {
    $('#bio').show();
    $('#bio').removeClass('position-e');
    $('#bio').addClass('position-f');
};

//hides bio section
function hideBio() {
    $('#bio').removeClass('position-f');
    $('#bio').addClass('position-e');
};


//show social
function showSocial() {
    $('#social-bar').removeClass('position-g');
    $('#social-bar').addClass('position-h');
};

//hide social
function hideSocial() {
    $('#social-bar').removeClass('position-h');
    $('#social-bar').addClass('position-g');
};