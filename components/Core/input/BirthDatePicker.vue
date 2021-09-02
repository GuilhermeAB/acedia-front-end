<template>
  <div>
    <v-menu
      ref='menuDate'
      v-model='menuDate'
      :close-on-content-click='false'
      transition='scale-transition'
      offset-y
      min-width='auto'
    >
      <template #activator='{ on, attrs }'>
        <v-text-field
          v-model='selectedDate'
          readonly
          outlined
          dense
          hide-details
          v-bind='{...attrs, ...$attrs}'
          v-on='on'
          @focus='showMenu'
        >
          <template v-if='optional' #label>
            <div>
              {{$attrs.label}} <small>{{$t('(OPTIONAL)')}}</small>
            </div>
          </template>
        </v-text-field>
      </template>
      <v-date-picker
        v-model='selectedDate'
        :active-picker.sync='activeDatePicker'
        :max='new Date().toISOString().substr(0, 10)'
        @change='saveDate'
      />
    </v-menu>
  </div>
</template>

<script>
  export default {
    name: 'BirthDatePicker',
    props: {
      value: {
        type: String,
        required: false,
        default: undefined,
      },
      optional: {
        type: Boolean,
        default: false,
      },
    },
    data: function () {
      return {
        menuDate: false,
        activeDatePicker: undefined,
        selectedDate: undefined,
      };
    },
    watch: {
      menuDate: function (val) {
        val && setTimeout(() => (this.activeDatePicker = 'YEAR'));
      },
      selectedDate: function () {
        if (this.value !== this.selectedDate) {
          this.$emit('input', this.selectedDate);
        }
      },
    },
    mounted: function () {
      this.selectedDate = this.value;
    },
    methods: {
      saveDate: function (date) {
        this.$refs.menuDate.save(date);
      },
      showMenu: function () {
        setTimeout(() => {
          this.menuDate = true;
        }, 300);
      },
    },
  };
</script>
