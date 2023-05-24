const app = Vue.createApp({
    
    data(){
        return{
            x : 0,
            y : 0,

            showBooks : true,
            subject :"bof koor",
            author : "Sadegh Hedayat",
            age : 45 ,
            
            // this is Array
            books: [
                {title : "Atomic Habits" , subject : "This book is about success"},
                {title: "Man Advardo Nistam", subject : "This book is about life of good rich man"}
            ]
            
        }
    },
    methods: {
        changeShowBooks(){
            this.showBooks = !this.showBooks
        },

        handleEvent () {
            console.log("event");
        },
        
        handleMoseMove(e){
            this.x= e.offsetX;
            this.y= e.offsetY;
        }

    }
        
    }
)


app.mount("#app")