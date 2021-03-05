const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: "green"},
                {id: 2235, color: "blue"},
            ],
            sizes: [
                {id:1234, variant: "35-38" },
                {id:1235, variant: "39-42"}
            ],
            hearthstone: true,
            cards: ["murloc", "elem", "dragon"],
        }
    }
})
