export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      header: {
        home: "Home",
        employees: "Employees",
        about: "About",
        catalog: "Catalog",
        hottours: "Hot Tours",
        contacts: "Contacts",
        logo: "Company logo",
        navigation: "Main navigation",
        mainPage: "Main page",
        employeesPage: "Employees page",
        aboutPage: "About page",
        contactsInfo: "Contacts info",
        language: "Switch to English language",
      },
    },
    ru: {
      header: {
        home: "Главная",
        employees: "Сотрудники",
        about: "О компании",
        catalog: "Каталог туров",
        hottours: "Горящие туры",
        contacts: "Контакты",
        logo: "Логотип компании",
        navigation: "Главная навигация",
        mainPage: "Главная страница",
        employeesPage: "Страница сотрудников",
        aboutPage: "Информация о компании",
        contactsInfo: "Контактная информация",
        language: "Переключить на русский язык",
      },
    },
  },
}));
