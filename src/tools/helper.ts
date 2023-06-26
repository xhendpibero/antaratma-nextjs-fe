
export const descTrim = (desc: string) => {
    return desc.length < 60 ? desc : desc.slice(0, 57) + '...'
}

export const setCookie = (cname: string | number, cvalue: string | number, exdays = 1) => {
    const d = new Date()
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
    let expires = "expires=" + d.toUTCString()
    if (typeof window === 'object') document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

export const getCookie = (cname: string | number) => {
    if (typeof window === 'object') {
        let name = cname + "="
        let ca = document.cookie.split(";")
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i]
            while (c.charAt(0) == " ") {
                c = c.substring(1)
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length)
            }
        }
    }
    return ""
}

export const config = {
    headers: {
        Authorization: `Bearer ${getCookie("token")}`,
    },
}