var app = new Vue({
	el: '#app',
	data: {
		count : 0
	},
	methods:{
		increment: function(){
			if(this.count < 10){
				this.count++;
			}
		},
		decrement: function(){
			if(this.count > 0){
				this.count--;
			}
		}
	}
})