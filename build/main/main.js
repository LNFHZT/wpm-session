"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dtime = '_deadtime';
let instance;
class Session {
    constructor() {
        if (instance) {
            return instance;
        }
        instance = this;
    }
    install(Wpm) {
        Wpm.prototype.$session = this;
    }
    put(k, v, t) {
        wx.setStorageSync(k, v);
        var seconds = parseInt(t);
        if (seconds > 0) {
            // @ts-ignore
            var timestamp = Date.parse(new Date());
            timestamp = timestamp / 1000 + seconds;
            wx.setStorageSync(`${k}${dtime}`, timestamp);
        }
        else {
            wx.removeStorageSync(`${k}${dtime}`);
        }
    }
    get(k, data) {
        var time = parseInt(wx.getStorageSync(`${k}${dtime}`));
        if (time) {
            // @ts-ignore
            if (parseInt(time) < Date.parse(new Date()) / 1000) {
                if (data != undefined && data != null) {
                    return data;
                }
                else {
                    return;
                }
            }
        }
        var res = wx.getStorageSync(k);
        if (res) {
            return res;
        }
        else {
            return data;
        }
    }
    remove(k) {
        wx.removeStorageSync(k);
        wx.removeStorageSync(`${k}${dtime}`);
    }
    clear() {
        wx.clearStorageSync();
    }
}
exports.default = new Session();
