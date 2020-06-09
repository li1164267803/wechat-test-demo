// pages/demo04/demo04.js
Page({
    data: {
        num: 34,
    },
    handleInput(e) {
        console.log(e.detail.value);
        this.setData({
            num: e.detail.value / 1
        })
    },
    handletap(e) {
        console.log(e.currentTarget.dataset.operation);
        let num = e.currentTarget.dataset.operation
        this.setData({
            num: this.data.num + num
        })
    },
});