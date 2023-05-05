!function (i) {
    "use strict";
    i(document).ready(function () {
        var i = [{
            lat: 16.306652,
            lon: 80.436539,
            title: "GUNTUR",
            html:
                [   
                    "<ul>" +
                    "<li><i class='fa fa-home'></i>  LIC Housing finance Buliding Ground Floor,Arundal Pet-9/2, Guntur ,Andhra pradesh</li>" +
                    "<li><i class='fa fa-phone'></i> (+91) 9951221717</li>" +
                    "<li><i class='fa fa-fax'></i>  (+91)9493221717</li>" +
                    "</ul>"].join(""),
            icon: "images/icons/ic-location.png",
            animation: google.maps.Animation.DROP,
            zoom: 10
        },   {
            lat: 17.497730,
            lon:  78.358030,
            title: "HYDERABAD",
            html:
                [   
                    "<ul>" +
                    "<li><i class='fa fa-home'></i> Flat No 101, The Orchids, Mathrusree Nagar,Miyapur,Hyderabad</li>" +
                    // "<li><i class='fa fa-phone'></i>  (+1) 96 716 6879</li>" +
                    // "<li><i class='fa fa-fax'></i>  (+1) 96 716 6879</li>" +
                    "</ul>"].join(""),
            icon: "images/icons/ic-location.png",
            animation: google.maps.Animation.DROP,
            zoom: 10
        }];

        new Maplace({
            locations: i,
            map_div: "#google_map",
            controls_div: '#controls-tabs',
            view_all: false,
            controls_type: "list",
            controls_on_map: !1,
            map_options: {scrollwheel: !1},
            start: 1,
           
        }).Load()
    })
}(jQuery);