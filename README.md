# aggergion-angularjs-app
С помощью angular и angular-material https://material.angularjs.org/ вывести список сущностей каталога (книги) в виде плитки, по клику на плитку переходить на страницу с подробным описанием книги.

В плитке вывести обложку книги и название. На странице книги вывести остальные поля, которые возвращает API, и список бандлов (файлов) книги, для вывода параметров книги можно использовать компонент списка.

Плитки: https://material.angularjs.org/latest/demo/gridList
Список: https://material.angularjs.org/latest/demo/list

Описание API здесь: https://github.com/AggregionPublic/apidocs/blob/master/Distribution/API.md#group-public
https://confluence.aggregion.com/display/UG/Content+public+services
/public/catalog - список книг
/public/catalog/{id} - информацию о книги по id

Ссылки на обложки и previewImages представлены в виде resourceId, для получения файлов по которым нужно использовать ссылку:

storage.aggregion.com/api/files/{resourceId}/shared/data

Если обложка для книги недоступна, необходимо использовать

https://storage.aggregion.com/api/files/12ce171be47031a58f6d12ddefca93d52bda709b1b720d50cf48747d6cd44cb6/shared/data

Для выполнения задания использовать: angular, ui-router, angular-material

Ui-router должен работать в режиме html5Mode (урлы без хэша #), не забыть сделать страницу 404 (когда роута не существует или API возвращает 404).

API обернуть в resource.
Информацию о книге и список бандлов получать в секции resolve ui-router: https://github.com/angular-ui/ui-router/wiki#resolve

Зависимости в bower. Сборку проекта сделать на gulp. Можно написать свои gulp-задачи или взять готовый генератор, например https://github.com/Swiip/generator-gulp-angular (на свой вкус).
Не забыть сделать gulp-задачу serve, для удобного запуска проекта. Разбить код на компоненты, лучше в соответствии с стайлгайдом (ссылка ниже).

https://github.com/johnpapa/angular-styleguide/blob/master/a1/i18n/ru-RU.md 
