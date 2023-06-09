(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // var planetsArray = planetstring.split();

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    const planetsArray = planetsString.split(",");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

    const planetsBreak = planetsArray.join("<br/>");
    console.log(planetsBreak);


    /**
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    const unorderedPlanetsList = (arr) =>{
        let planetStringB;
        planetStringB = arr.join(`</li><li>`);
        console.log('Planet String B=>', planetStringB);
        return '<ul><li>${planetStringB}</li><ul></ul>'
    };
console.log(unorderedPlanetsList(planetsArray));
})();