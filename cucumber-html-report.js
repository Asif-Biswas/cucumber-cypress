const fs = require('fs');
function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path+'/'+file).isDirectory();
    });
  }
  
  // print all the directories in the 'cypress/cucumber-html-report' folder
    getDirectories('./reports').forEach(function (folder) {
        console.log(folder);
    });

    //fs.rmSync(dir, { recursive: true, force: true });
    

const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "81",
        },
        device: "Local test machine",
        platform: {
            name: "mac",
            version: "Catalina",
        },
    },
});