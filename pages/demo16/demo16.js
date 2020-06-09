//Page Object
Page({
    data: {
        list: [{
                id: 1,
                name: '苹果',
                value: 'apple'
            },
            {
                id: 1,
                name: '葡萄',
                value: 'yellow'
            },
            {
                id: 1,
                name: '香蕉',
                value: 'banner'
            }
        ],
        checkedList: []
    },
    handleItemChange(e) {
        let checkedList = e.detail.value;
        this.setData({
            checkedList
        })
    }
});