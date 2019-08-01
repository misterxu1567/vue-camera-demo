const myLib = {
    // base64转blob
    convertBase64UrlToBlob(urlData) {
        let arr = urlData.split(',');
        let mime = arr[0].match(/:(.*?);/)[1];
        let bstr = atob(arr[1]);
        let n = bstr.length;
        let u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    },
    // 浏览器类型判断及版本
    judgeBrowser() {
        // 获取IE浏览器版本
        function getIeVersion() {
            let IEMode = document.documentMode;
            let rMsie = /(msie\s|trident.*rv:)([\w.]+)/;
            let ma = navigator.userAgent.toLowerCase();
            let match = rMsie.exec(ma);
            try {
                return match[2];
            } catch (e) {
                return IEMode;
            }
        }
        let System = {};
        let ua = navigator.userAgent.toLowerCase();
        if (ua.match(/msie/) != null || ua.match(/trident/) != null) {
            System.browser = 'IE'
            System.version = getIeVersion()
        } else if (ua.indexOf('ubrowser') > -1) {
            System.browser = 'uc';
            System.version = '';
        } else {
            let re = /(msie|firefox|chrome|opera|version).*?([\d.]+)/;
            let m = ua.match(re);
            System.browser = m[1].replace(/version/, "safari");
            System.version = m[2];
        }
        return System;
    }

};
export default myLib;
