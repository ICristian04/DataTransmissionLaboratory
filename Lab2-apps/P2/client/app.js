
var app = new Vue({
    el: '#app',
    data: {
        users: [],
        usersService: null,
        modifyIndex: -1,

    },
    created: function () {
        this.usersService = users();
        this.usersService.get().then(response => (this.users = response.data));
    },
    methods: {
        del(index){
            this.users.splice(index,1);
        },
        add(){
            var name = this.$refs.name.value;
            var city = this.$refs.city.value;
            
            var newUser = {
                name: name,
                city: city
            };

            
            this.users.push(newUser);
            
            this.$refs.name.value = '';
            this.$refs.city.value = '';
        },

        toggleModify(index) {
            if(this.modifyIndex === index) {
              this.modifyIndex = -1;
            }  else {
              this.modifyIndex = index;
            }
        },

        // updateUser(index) {
           
        //     var newUser = {
        //         name: this.updateName,
        //         city: this.updateCity
        //     };

        //     this.users.splice(index,1,newUser);
        //     this.$refs.name.value = '';
        //     this.$refs.city.value = '';
        //     this.modifyIndex = -1;        
        // }
    }
    }
  
)