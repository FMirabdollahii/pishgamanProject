const app = Vue.createApp({
    
    data(){
        return{
            showBooks : true,
            subject :"bof koor",
            author : "Sadegh Hedayat",
            age : 45
            
        }
    },
    methods: {
        changeShowBooks(){
            this.showBooks = !this.showBooks
        },

        handleEvent () {
            console.log("event");
        }
    }
        
    }
)


app.mount("#app")