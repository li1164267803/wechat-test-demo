//Page Object
Page({
    data: {
        gender: ''
    },
    handleChange(e) {
        // 1 获取单选框中的值
        let gender = e.detail.value;
        // 2 把值 赋值给 data中的数据
        this.setData({
            gender
        })

    }
});