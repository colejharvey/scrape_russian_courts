var url ='https://sudact.ru/regular/doc/2JG5mRo6Z3b8/?regular-txt=&regular-case_doc=2%D0%90-9188%2F2019&regular-lawchunkinfo=&regular-date_from=01.01.2000&regular-date_to=&regular-workflow_stage=&regular-area=&regular-court=&regular-judge=&_=1648761343661';
var page = new WebPage()
var fs = require('fs');


page.open(url, function (status) {
        just_wait();
});

function just_wait() {
    setTimeout(function() {
fs.write('1.html', page.content, 'w');
            phantom.exit();
    }, 5500);
}
