'use strict';

$(function () {
    console.log('Run k-link!')
    $('#pull_request_title').val(create_pull_requset_title_template_text())
    $('#pull_request_body').text(create_pull_requset_body_template_text())

    $('button.js-preview-tab').click()
    $('button.js-write-tab').click()

    openNewTab('https://github.com/yusuke-can');
});

/**
 * プルリクエストタイトルテンプレートコメント生成
 */
function create_pull_requset_title_template_text() {
    return 'title template';
}
/**
 * PRテンプレートコメント生成
 */
function create_pull_requset_body_template_text() {
    　return 'body template';
}

/**
 * 新規タブを開く
 */
function openNewTab(url) {
    var childWindow = window.open('about:blank');
    childWindow.location.href = url;
    childWindow.close();
    childWindow = null;
}

// TODO tabsをパーミッションに追加しているのになぜかchrome.tabs.createが有効にならない
// function onClicker() {
//     var url = 'http://www.google.com/';
//     chrome.tabs.create({'url':url});
//  }