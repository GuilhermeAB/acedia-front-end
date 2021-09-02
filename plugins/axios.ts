export default function ({app, $axios}: any): any {
  $axios.onRequest(() => {
    app.store.dispatch('Loading/toggleLoading', {value: true});
  });

  $axios.onResponse((response: any) => {
    app.store.dispatch('Loading/toggleLoading', {value: false});

    if (response && response.data && response.data.messages) {
      const {
        information,
        informations,
        warning,
        warnings
      } = response.data.messages;

      if (app.$toast) {
        if (warnings) {
          warnings.forEach((item: Record<string, any>) => {
            app.$toast.warning(app.i18n.t(item.code as string, item.details));
          });
        }
        if (warning) {
          app.$toast.warning(app.i18n.t(warning.code as string, warning.details));
        }
        if (informations) {
          informations.forEach((item: Record<string, any>) => {
            app.$toast.success(app.i18n.t(item.code as string, item.details));
          });
        }
        if (information) {
          app.$toast.success(app.i18n.t(information.code as string, information.details));
        }
      }
    }
  });

  $axios.onError(({response}: any) => {
    app.store.dispatch('Loading/toggleLoading', {value: false});

    if (response && response.data && response.data.messages) {
      const {
        error,
        errors
      } = response.data.messages;

      if (app.$toast && app.i18n.t) {
        if (errors) {
          errors.forEach((item: Record<string, any>) => {
            app.$toast.error(app.i18n.t(item.code as string, item.details));
          });
        }
        if (error) {
          app.$toast.error(app.i18n.t(error.code as string, error.details));
        }
      }
    }
  });
}
