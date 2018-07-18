$(document).ready(function () {

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
    $(document).on('click', '.menu-item', function(event) {
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
};

//determines what to show base on click
function showClicked(navElement) {
    console.log(navElement);
    
    if (navElement == 'portfolio') {
        showPortfolio();
    } else if (navElement == 'bio') {
        showBio();
    } else if (navElement == 'contact') {
        showContact();
    } else if (navElement == 'social') {
        showSocial();
    } else if (navElement == 'home') {
        showShowcase();
    }
};


//shows portfolio if it is chosen
function showPortfolio() {
    $('#project-1').delay(500).fadeIn(1500);
    $('#project-2').delay(700).fadeIn(1500);
    $('#project-3').delay(900).fadeIn(1500);
    $('#project-4').delay(1100).fadeIn(1500);
    $('#project-5').delay(1300).fadeIn(1500);
};