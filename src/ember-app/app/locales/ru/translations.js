import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPyatnКодБрониLForm from './forms/i-i-s-pyatn-код-брони-l';
import IISPyatnМестоНаРейсLForm from './forms/i-i-s-pyatn-место-на-рейс-l';
import IISPyatnОператорLForm from './forms/i-i-s-pyatn-оператор-l';
import IISPyatnПассажирLForm from './forms/i-i-s-pyatn-пассажир-l';
import IISPyatnПосадТалонLForm from './forms/i-i-s-pyatn-посад-талон-l';
import IISPyatnПроверкаLForm from './forms/i-i-s-pyatn-проверка-l';
import IISPyatnРейсLForm from './forms/i-i-s-pyatn-рейс-l';
import IISPyatnТерминалLForm from './forms/i-i-s-pyatn-терминал-l';
import IISPyatnКодБрониEForm from './forms/i-i-s-pyatn-код-брони-e';
import IISPyatnМестоНаРейсEForm from './forms/i-i-s-pyatn-место-на-рейс-e';
import IISPyatnОператорEForm from './forms/i-i-s-pyatn-оператор-e';
import IISPyatnПассажирEForm from './forms/i-i-s-pyatn-пассажир-e';
import IISPyatnПосадТалонEForm from './forms/i-i-s-pyatn-посад-талон-e';
import IISPyatnПроверкаEForm from './forms/i-i-s-pyatn-проверка-e';
import IISPyatnРейсEForm from './forms/i-i-s-pyatn-рейс-e';
import IISPyatnТерминалEForm from './forms/i-i-s-pyatn-терминал-e';
import IISPyatnИнфБронModel from './models/i-i-s-pyatn-инф-брон';
import IISPyatnКодБрониModel from './models/i-i-s-pyatn-код-брони';
import IISPyatnМестоНаРейсModel from './models/i-i-s-pyatn-место-на-рейс';
import IISPyatnОператорModel from './models/i-i-s-pyatn-оператор';
import IISPyatnПассажирModel from './models/i-i-s-pyatn-пассажир';
import IISPyatnПосадТалонModel from './models/i-i-s-pyatn-посад-талон';
import IISPyatnПроверкаModel from './models/i-i-s-pyatn-проверка';
import IISPyatnРейсModel from './models/i-i-s-pyatn-рейс';
import IISPyatnТерминалModel from './models/i-i-s-pyatn-терминал';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-pyatn-инф-брон': IISPyatnИнфБронModel,
    'i-i-s-pyatn-код-брони': IISPyatnКодБрониModel,
    'i-i-s-pyatn-место-на-рейс': IISPyatnМестоНаРейсModel,
    'i-i-s-pyatn-оператор': IISPyatnОператорModel,
    'i-i-s-pyatn-пассажир': IISPyatnПассажирModel,
    'i-i-s-pyatn-посад-талон': IISPyatnПосадТалонModel,
    'i-i-s-pyatn-проверка': IISPyatnПроверкаModel,
    'i-i-s-pyatn-рейс': IISPyatnРейсModel,
    'i-i-s-pyatn-терминал': IISPyatnТерминалModel
  },

  'application-name': 'Терминал',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Терминал',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Терминал',
          title: 'Терминал'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        терминал: {
          caption: 'Терминал',
          title: 'Терминал',
          'i-i-s-pyatn-проверка-l': {
            caption: 'Проверка',
            title: ''
          },
          'i-i-s-pyatn-рейс-l': {
            caption: 'Рейс',
            title: ''
          },
          'i-i-s-pyatn-код-брони-l': {
            caption: 'Код бронирования',
            title: ''
          },
          'i-i-s-pyatn-место-на-рейс-l': {
            caption: 'Место на рейс',
            title: ''
          },
          'i-i-s-pyatn-терминал-l': {
            caption: 'Терминал',
            title: ''
          },
          'i-i-s-pyatn-оператор-l': {
            caption: 'Оператор',
            title: ''
          },
          'i-i-s-pyatn-посад-талон-l': {
            caption: 'Посадочный талон',
            title: ''
          },
          'i-i-s-pyatn-пассажир-l': {
            caption: 'Пассажир',
            title: ''
          }
        },
        pyatn: {
          caption: 'Pyatn',
          title: 'Pyatn',
          'i-i-s-pyatn-проверка-l': {
            caption: 'Проверка',
            title: ''
          },
          'i-i-s-pyatn-рейс-l': {
            caption: 'Рейс',
            title: ''
          },
          'i-i-s-pyatn-код-брони-l': {
            caption: 'Код бронирования',
            title: ''
          },
          'i-i-s-pyatn-место-на-рейс-l': {
            caption: 'Место на рейс',
            title: ''
          },
          'i-i-s-pyatn-терминал-l': {
            caption: 'Терминал',
            title: ''
          },
          'i-i-s-pyatn-оператор-l': {
            caption: 'Оператор',
            title: ''
          },
          'i-i-s-pyatn-посад-талон-l': {
            caption: 'Посадочный талон',
            title: ''
          },
          'i-i-s-pyatn-пассажир-l': {
            caption: 'Пассажир',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-pyatn-код-брони-l': IISPyatnКодБрониLForm,
    'i-i-s-pyatn-место-на-рейс-l': IISPyatnМестоНаРейсLForm,
    'i-i-s-pyatn-оператор-l': IISPyatnОператорLForm,
    'i-i-s-pyatn-пассажир-l': IISPyatnПассажирLForm,
    'i-i-s-pyatn-посад-талон-l': IISPyatnПосадТалонLForm,
    'i-i-s-pyatn-проверка-l': IISPyatnПроверкаLForm,
    'i-i-s-pyatn-рейс-l': IISPyatnРейсLForm,
    'i-i-s-pyatn-терминал-l': IISPyatnТерминалLForm,
    'i-i-s-pyatn-код-брони-e': IISPyatnКодБрониEForm,
    'i-i-s-pyatn-место-на-рейс-e': IISPyatnМестоНаРейсEForm,
    'i-i-s-pyatn-оператор-e': IISPyatnОператорEForm,
    'i-i-s-pyatn-пассажир-e': IISPyatnПассажирEForm,
    'i-i-s-pyatn-посад-талон-e': IISPyatnПосадТалонEForm,
    'i-i-s-pyatn-проверка-e': IISPyatnПроверкаEForm,
    'i-i-s-pyatn-рейс-e': IISPyatnРейсEForm,
    'i-i-s-pyatn-терминал-e': IISPyatnТерминалEForm
  },

});

export default translations;
