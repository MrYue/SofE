/*
* Kendo UI Web v2013.1.319 (http://kendoui.com)
* Copyright 2013 Telerik AD. All rights reserved.
*
* Kendo UI Web commercial licenses may be obtained at
* https://www.kendoui.com/purchase/license-agreement/kendo-ui-web-commercial.aspx
* If you do not own a commercial license, this file shall be governed by the
* GNU General Public License (GPL) version 3.
* For GPL requirements, please review: http://www.gnu.org/copyleft/gpl.html
*/
﻿(function( window, undefined ) {
    kendo.cultures["zh-HK"] = {
        name: "zh-HK",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": ",",
            ".": ".",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                pattern: ["($n)","$n"],
                decimals: 2,
                ",": ",",
                ".": ".",
                groupSize: [3],
                symbol: "HK$"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
                    namesAbbr: ["週日","週一","週二","週三","週四","週五","週六"],
                    namesShort: ["日","一","二","三","四","五","六"]
                },
                months: {
                    names: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""],
                    namesAbbr: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",""]
                },
                AM: ["上午","上午","上午"],
                PM: ["下午","下午","下午"],
                patterns: {
                    d: "d/M/yyyy",
                    D: "yyyy'年'M'月'd'日'",
                    F: "yyyy'年'M'月'd'日' H:mm:ss",
                    g: "d/M/yyyy H:mm",
                    G: "d/M/yyyy H:mm:ss",
                    m: "M'月'd'日'",
                    M: "M'月'd'日'",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "H:mm",
                    T: "H:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy'年'M'月'",
                    Y: "yyyy'年'M'月'"
                },
                "/": "/",
                ":": ":",
                firstDay: 0
            }
        }
    }
})(this);
