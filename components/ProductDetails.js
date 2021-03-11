app.component("product-details", {
  props: {
    details: {
      type: Array,
    },
  },
  template: /* HTML */ /*html*/ ` <div v-for="detail in details"></div> `,
});
