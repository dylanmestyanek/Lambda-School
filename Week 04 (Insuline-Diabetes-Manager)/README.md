# Web-UI

This is a marketing page for a Diabetes Manager Application. This application is responsible for tracking, monitoring, and predicting the user's future bloodsugar levels. The website features three pages: Home, About, and Sign Up.

## <u> HTML Files </u>

All main pages `html` files are found in the file with their name. For example, `sign-up.html` houses the Sign Up Page.



## <u> CSS Files </u>
Each section is chunked into it's own `.less` file. The following `.less` files are shared amongst <strong>all</strong> `.html` files: 

    - variables.less
    - mixins.less
    - normalize.less
    - global.less
    - navigation.less
    - footer.less

The following `.less` files are specific to <strong>only</strong> their named `.html` files:

    - home-header.less
    - home-main-content.less
    - about-main-content.less

<strong> Please Note: </strong> All CSS keyframe animations, as well as, classes added to elements through JavaScript will be found within the `mixins.less` file. 

## <u> JavaScript File </u>
The `index.js` is responsible for two visual effects. 

1) Home page images fade in from the left and right when the bottom of the user's screen reaches the top of the image.

2) Count down fade-in effect, within the final paragraph on the home page. 

