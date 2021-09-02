<template>
  <v-select
    v-model='genderSelected'
    :items='list'
    outlined
    dense
    hide-details
    :label='$t("GENDER")'
    v-bind='$attrs'
  />
</template>

<script>
  export default {
    name: 'PersonGenderSelect',
    props: {
      value: {
        type: String,
        required: false,
        default: undefined,
      },
    },
    data: function () {
      return {
        genderSelected: undefined,
        list: [],
      };
    },
    fetch: async function () {
      const { data } = await this.$axios.get('/acedia/person-gender');
      const list = data && data.genders;
      if (list) {
        this.list = list.map(item => ({
          value: item._id,
          text: this.$t(item.code),
        }));
      }
    },
    watch: {
      genderSelected: function () {
        if (this.value !== this.genderSelected) {
          this.$emit('input', this.genderSelected);
        }
      },
    },
    mounted: function () {
      this.genderSelected = this.value;
    },
  };
</script>
