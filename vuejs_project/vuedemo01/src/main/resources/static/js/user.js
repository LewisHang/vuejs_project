new Vue({
    el: "#app",
    data:{
        user:{
            id:"",
            username:"",
            password:"",
            email:"",
            age:"",
            sex:""
        },
        userList:[]
    },
    methods:{
        findAll:function () {
            var _this = this;
            axios.get("user/findAll")
                .then(function (response) {
                    _this.userList = response.data;
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        findById:function (userid) {
            var _this = this;
            axios.get("user/findById",{params:{id:userid}})
                .then(function (response) {
                    _this.user = response.data;
                    $("#myModal").modal("show");
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
        update:function (user) {
            var _this = this;
            axios.post("user/updateUser" , user)
                .then(function (response) {
                    _this.findAll();
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
    created:function() {//当我们页面加载的时候触发请求，查询所有
        this.findAll();
    }
});