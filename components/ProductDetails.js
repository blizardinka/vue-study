app.component("product-details", {
  props: {
    details: {
      type: String,
    },
  },
  template: /* HTML */ /*html*/ `
    <div class="product-details">
      <p>Details: {{ showDetails }}</p>
    </div>
  `,
  computed: {
    showDetails() {
      return this.details;
    },
  },
});
