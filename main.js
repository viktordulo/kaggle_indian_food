$('#files').parse({
    config: {
        delimiter: "auto",
        complete: display(),
    },
    before: function(file, inputElem)
    {
        //console.log("Parsing file...", file);
    },
    error: function(err, file)
    {
        //console.log("ERROR:", err, file);
    },
    complete: function()
    {
        //console.log("Done with all files");
    }
})

function display() {
    console.log('Happy')
}