import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.pyatn.caption'),
          title: i18n.t('forms.application.sitemap.pyatn.title'),
          children: [{
            link: 'i-i-s-pyatn-проверка-l',
            caption: i18n.t('forms.application.sitemap.pyatn.i-i-s-pyatn-проверка-l.caption'),
            title: i18n.t('forms.application.sitemap.pyatn.i-i-s-pyatn-проверка-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-pyatn-рейс-l',
            caption: i18n.t('forms.application.sitemap.pyatn.i-i-s-pyatn-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.pyatn.i-i-s-pyatn-рейс-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-pyatn-код-брони-l',
            caption: i18n.t('forms.application.sitemap.pyatn.i-i-s-pyatn-код-брони-l.caption'),
            title: i18n.t('forms.application.sitemap.pyatn.i-i-s-pyatn-код-брони-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-pyatn-место-на-рейс-l',
            caption: i18n.t('forms.application.sitemap.pyatn.i-i-s-pyatn-место-на-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.pyatn.i-i-s-pyatn-место-на-рейс-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-pyatn-терминал-l',
            caption: i18n.t('forms.application.sitemap.pyatn.i-i-s-pyatn-терминал-l.caption'),
            title: i18n.t('forms.application.sitemap.pyatn.i-i-s-pyatn-терминал-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-pyatn-оператор-l',
            caption: i18n.t('forms.application.sitemap.pyatn.i-i-s-pyatn-оператор-l.caption'),
            title: i18n.t('forms.application.sitemap.pyatn.i-i-s-pyatn-оператор-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-pyatn-посад-талон-l',
            caption: i18n.t('forms.application.sitemap.pyatn.i-i-s-pyatn-посад-талон-l.caption'),
            title: i18n.t('forms.application.sitemap.pyatn.i-i-s-pyatn-посад-талон-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-pyatn-пассажир-l',
            caption: i18n.t('forms.application.sitemap.pyatn.i-i-s-pyatn-пассажир-l.caption'),
            title: i18n.t('forms.application.sitemap.pyatn.i-i-s-pyatn-пассажир-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})