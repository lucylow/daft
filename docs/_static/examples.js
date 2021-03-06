function shuffle(array) {
    // Based on: http://d3js.org
    var m = array.length, t, i;

    // While there remain elements to shuffle
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

function show_examples(static_path, examples_path, N) {
    d3.json(static_path + "/examples.json", function (examples) {
        var k, names = [];
        for (k in examples) {
            names.push(k);
        }

        if (typeof (N) !== "undefined")
            names = shuffle(names).slice(0, N);

        d3.select("#examples").selectAll(".example")
            .data(names)
            .enter().append("a")
            .attr("class", "example")
            .attr("href", function (d) { return examples_path + "/" + d + "/"; })
            .append("img")
            .attr("src", function (d) { return static_path + "/examples/" + d + "-thumb.png"; });
    });
}
