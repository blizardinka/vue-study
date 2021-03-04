const app = Vue.createApp({
    data() {
        return {
            solar_system: 'sun',
            planet_1: 'mercury',
            planet_2: "venus",
            plaent_3: "earth",
            description_mercury
        }
    }
})

var description_mercury = "Mercury (0.4 AU from the Sun) is the closest planet to the Sun and on average, all seven other planets.[78][79] The smallest planet in the Solar System (0.055 M⊕), Mercury has no natural satellites."

//Так делать низя 3
const app_1 = Vue.createApp({
    data() {
        return {
            venus: 'Cool Stuff'
        }
    }
})
