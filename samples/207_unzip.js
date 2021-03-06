// Overview of edge.js: http://tjanczuk.github.com/edge

var edge = require('../lib/edge');

var unzipDirectory = edge.func(function() {/*
    //#r "System.IO.Compression.FileSystem.dll"

    using System;
    using System.Threading.Tasks;
    using System.Collections.Generic;
    using System.IO.Compression;

    class Startup
    {
        public async Task<object> Invoke(IDictionary<string,object> input)
        {
            await Task.Run(async () => {
                ZipFile.ExtractToDirectory((string)input["source"], (string)input["destination"]);
            });

            return null;
        }
    }
*/});

var params = { 
    source: '..\\samples.zip', 
    destination: '..\\samples_tmp' 
};

unzipDirectory(params, function (error) {
    if (error) throw error;
    console.log('The ..\\samples.zip archive has been decompressed to ..\\samples_tmp directory.');
});
