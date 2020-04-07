// ==UserScript==
// @name              PC端下载MIUI 主题
// @namespace         https://github.com/LittleControl/DownloadMIUITheme
// @version           1.0
// @icon              http://www.xiaomi.com/favicon.ico`
// @description       恢复 MIUI 主题官网的下载按钮
// @author            https://github.com/LittleControl
// @supportURL        https://github.com/LittleControl/DownloadMIUITheme/issues
// @match             *zhuti.xiaomi.com/detail/*
// ==/UserScript==

(() => {
    'use strict';
    let arr = location.href.split('/')
    let tag = arr[arr.length - 1]
    let url = 'http://thm.market.xiaomi.com/thm/download/' + tag
    $('#J-downWrap').append(
        `
            <form class="detail-buy" action="${url}">
                <button class="btn-buy J_Push" type="submit">下载</button>
            </form>
        `
    )
})();