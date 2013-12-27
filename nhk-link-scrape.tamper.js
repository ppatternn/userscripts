// ==UserScript==
// @name       nhk-link-scrape
// @namespace  http://robertflorance.com/
// @version    0.3
// @description  Gets the links in the monthly section and writes them to the console.
// @match      http://www3.nhk.or.jp/news/easy/*
// @copyright  N/A
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function() {
    console.log("NNWELS userscript appending button...");
    $('body').append('<input type="button" value="getlinks" id="trigger"></input>');
    $("#trigger").css("position", "fixed").css("top", 0).css("left", 0);
    $('#trigger').click(function(){
        console.log("#trigger clicked");
        var links = new Array();
        try {
            var h = document.evaluate("//*[@id='monthly']/ul/child::*/span/a/@href", document, null, XPathResult.ANY_TYPE, null);
            var node;
            var baseurl = 'www3.nhk.or.jp/news/easy';
            while ((node = h.iterateNext()) != null) { 
                var link = node.value.substr(1);
                var url = baseurl + link;
                links.push(url);
            }
        }catch (e){
            console.log(e);
        }
        $.each(links, function(index, value) {
            console.log(links[index]);
        });
    });
    console.log("NNWELS userscript button appended!");
});