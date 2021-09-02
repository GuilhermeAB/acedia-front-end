<template>
  <v-container fluid fill-height style='max-height: 100vh;'>
    <v-row justify='center'>
      <v-col cols='12' sm='12' md='6'>
        <v-form>
          <v-text-field
            v-model='name'
            :label='$t("NAME")'
            hide-details
            outlined
            dense
            class='mb-3'
          />

          <birth-date-picker
            v-model='birthDate'
            :label='$t("BIRTH_DATE")'
          />

          <person-gender-select v-model='gender' class='mt-3' />
        </v-form>

        <v-btn block color='primary' class='mt-3' @click='savePerson'>
          {{$t('SAVE_PERSON')}}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Index',
    components: {
      BirthDatePicker: () => import('~/components/Core/input/BirthDatePicker.vue'),
      PersonGenderSelect: () => import('~/components/PersonGender/PersonGenderSelect.vue'),
    },
    data: function () {
      return {
        name: undefined,
        birthDate: undefined,
        gender: undefined,
      };
    },
    methods: {
      savePerson: async function () {
        await this.$axios({
          url: '/acedia/person',
          method: 'POST',
          data: {
            name: this.name,
            birthDate: this.birthDate,
            genderId: this.gender,
          },
        });
      },
    },
  };
</script>
