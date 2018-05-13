'use strict';

$(function () {
 console.log('Run k-link!')
 $('#pull_request_title').val(create_pull_requset_title_template_text())
 $('#pull_request_body').text(create_pull_requset_body_template_text())

 $('button.js-preview-tab').click()
 $('button.js-write-tab').click()
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