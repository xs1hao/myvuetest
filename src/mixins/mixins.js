export const Person = {
    data() {
        return {
            student: {
                name: '小红红',
                age: 12,
                address: '阿联酋和中国王村三街道四组',
                likeBooks: [
                    { title: '《钢铁是怎样练成的》', author: '列宁' },
                    { title: '《蓝猫淘气三千万》', author: '爱因斯坦' },
                    { title: '《小猪佩奇》', author: '毛泽东' },
                    { title: '《光头强》', author: '王二小' },
                ]
            }
        }
    },
    computed: {
        studentLikeBooks: function() {
            return this.student.likeBooks.map(item => item.title);
        },
        studentName: function() {
            return this.student.name;
        }
    }
}