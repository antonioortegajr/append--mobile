data = require("sdk/self").data
require("sdk/widget").Widget({
  id: "append_mobile”,
  label: “mobile”,
  contentURL: data.url("icon-19.png"),
});

exports.main = function() {    
    var data = require("sdk/self").data;
    var simplePrefs = require('sdk/simple-prefs');
    var pageMod = require("sdk/page-mod");
    var Tab = pageMod.PageMod({
        include: "*.com",
        contentScriptWhen: 'start', 
        contentScriptFile: data.url("background.js"),
        
        
    });
    
    
    
    simplePrefs.on("html5", function() {
        Tab.destroy();
        Tab = pageMod.PageMod({
            include: "*.com",
            contentScriptWhen: 'start',
            contentScriptFile: data.url("backgroud.js"),
            
        });
    });
};