app.component("product-display", {
  /* if we want to recive a value from data() in main.js
  we need to add props option in "app.component"
*/
  /*
Step 1.4. Add Props in Component to make allow using props from main.js
*/
  props: {
    premium: {
      /* Option Validation
       premium need to be type "boolean" adn value "true"
      */
      type: Boolean,
      requiered: true,
    },
  },
  template: /* HTML */ /*html*/ `
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:src="image" />
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>

          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>
          <!-- To use vue function or variable in html code
          we have to use {{ double curly brackets }} -->
          <!-- 
          Step 1.1.- Add tag with info;
          - Add double curly brackets
          - add methods in curly brackets.
          Method will manipulate data.
          Data we will get from main.js 
          data() {
            return {
              someProps: someValue,
            };
          },
          -->
          <p>Shipping: {{ newShipping }}</p>
          <ul>
            <!-- <li v-for="detail in details">{{ detail }}</li>-->
            <product-details>
              <p>Details:</p>
            </product-details>
          </ul>

          <div
            v-for="(variant, index) in variants"
            :key="variant.id"
            @mouseover="updateVariant(index)"
            class="color-circle"
            :style="{ backgroundColor: variant.color }"
          ></div>

          <button
            class="button"
            :class="{ disabledButton: !inStock }"
            :disabled="!inStock"
            v-on:click="addToCart"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },

  /* 
  Methods is using for interaction in UI
  */
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  /*
  @Computed methods is using to manage html content
  */
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].image;
    },
    /* Step 1.2.Specify method logic
    The method shows diferent option for Shipping
    */
    newShipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});
