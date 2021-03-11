app.component("product-details", {
  props: {
    details: {
      type: Array,
    },
  },
  template: /* HTML */ /*html*/ `
    <div class="product-details">
      <p>{{ showDetails }}</p>
    </div>
  `,
  computed: {
    showDetails() {
      this.details.array.forEach((detail) => {
        return detail;
      });
    },
  },
});
