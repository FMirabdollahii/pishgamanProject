const app = Vue.createApp({
    data(){
        return{
            fruits: [
                {title :"Apple" , subject : "An apple is an edible fruit produced by an apple tree" ,image :"2.png" , isFav : false},
                {title: "Orange", subject : "An orange is a fruit of various citrus species in the family Rutaceae",image : "1.png",isFav: true},
                {title: "Grape", subject :"Grapes are a type of fruit that grow in clusters of 15 to 300",image :"3.png",isFav : false},
            ]
            
            
        }
    },
    methods: {
        changeFav(fruit){
            fruit.isFav= !fruit.isFav;
        },
    },
    computed :{
        filterFruits(){
            return this.fruitS.filter(fruit => fruit.isFav)
        }
    }
})

app.mount("#app")