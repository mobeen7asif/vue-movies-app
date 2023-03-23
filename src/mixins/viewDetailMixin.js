import store from "@/store";

export const viewDetailMixin = {
  methods: {
    viewDetailInfo(id, type) {
      try {
        store.dispatch('getItem', { id, type });
        this.$emit('open-modal');
      } catch (e) {
        this.error = e;
      }
    }
  }
};
