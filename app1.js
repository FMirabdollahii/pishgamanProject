const app = Vue.createApp({
    // createApp create object that its property can be data , function , template 
    data(){// this function return object
        return{
            subject :"bof koor",
            author : "Sadegh Hedayat",
            age : 45,
            // these are property
        }
    },
        methods: {
            changeTitel(title){
                this.subject = title
            },

            
        }



    }
)


app.mount("#app")