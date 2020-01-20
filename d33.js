
function colorpicker(d){
  if (d>0& d<61){
return"#006400";
  }
  else if (d<360 & d>61){
    return "#666666";
  }else{
    return "#f00";
  }
}
var data = [60, 86, 168, 281, 303, 365,250];

d3.select(".chart")
  .selectAll("div")
  .data(data)
    .enter()
    .append("div")
    .style("width", function(d) { return d + "px"; })
    .style("background-color",function(d){return colorpicker(d)}).style("height","30px").append("p")
    .text(function(d) { return "R: "+ d; }).style("text-align","right").style("color","white").style("font-weight","bold");


    var width = 600,
    height = 800;

        var svg = d3.select(".container")
                .append("svg")
                .attr("width", width)
                .attr("height", height);
    var xscale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width - 100]);

var yscale = d3.scaleLinear()
        .domain([0, 1000])
        .range([height/2, 0]);

var x_axis = d3.axisBottom()
        .scale(xscale);

var y_axis = d3.axisLeft()
        .scale(yscale);

    svg.append("g")
       .attr("transform", "translate(50, 10)")
       .call(y_axis);

var xAxisTranslate = height/2 + 10;

    svg.append("g")
            .attr("transform", "translate(50, " + xAxisTranslate  +")")
            .call(x_axis)