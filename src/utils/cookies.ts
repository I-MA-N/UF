function getCookie(cname: string) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function setCookie(name: string, value: string, timestamp: number) {
    const date = new Date();
    const expireTime = date.getTime() + timestamp;
    date.setTime(expireTime)
    const expireString = date.toUTCString();
    document.cookie = `${name}=${value};expires=${expireString};`;
}


function deleteAllCookies() {
    const cookies = document.cookie.split("; ");
    for (let c = 0; c < cookies.length; c++) {
        const d = window.location.hostname.split(".");
        while (d.length > 0) {
            const cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
            const p = location.pathname.split('/');
            document.cookie = cookieBase + '/';
            while (p.length > 0) {
                document.cookie = cookieBase + p.join('/');
                p.pop();
            }
            d.shift();
        }
    }
}

export { getCookie, setCookie, deleteAllCookies }