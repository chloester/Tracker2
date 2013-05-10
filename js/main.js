$(document).ready(function() {

    //select all data

    // each object is a row {}

    // each object array contains dates with 1's. No date means 0.


    var data = [
        {name: "Fitbit",     hasData: ["Yes","Yes","Yes","No","No","Yes","Yes"]   },
        {name: "Foursquare", hasData: ["Yes","No","No","Yes","No","Yes","Yes"]    },
        {name: "Basis",      hasData: ["Yes","Yes","Yes","Yes","Yes","Yes","Yes"] },
        {name: "Lift",       hasData: ["No","No","No","No","No","No","No"]        },
    ];

    // make card from each service
    // cards align in a div grid, or randomly on screen
    var width = window.width,
        height = window.height,
        gridSize = 24;

    var grid = d3.select("section")
      .append("div")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "chart");

    var services = grid.selectAll(".service")
        .data(data)
      .enter().append("div")
        .attr("class", "service");

    var names = d3.selectAll(".service")
      .append("div")
        .attr("class", "name")
        .text(function (d) { return d.name; });

    var values = d3.selectAll(".service")
        .data(data.hasData)
      .enter().append("div")
        .attr("class", "value")
        .text(function (d,i) { return d[i]; });


});