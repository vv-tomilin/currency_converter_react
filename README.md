# Конвертер валют

Посмотреть работающий проект (деплой на Heroku): 
https://react-curr-converter.herokuapp.com/

**Stack:**
- React + хуки
- Redux
- Axios
- Redux Thunk

Ссылка на использованный REST API с курсами валют: https://github.com/fawazahmed0/currency-api

Приложение состоит из двух страниц:
- **Первая страница** - это сам конвертер с полем ввода строки для конвертации.
Строку надо вводить в формате ***[сумма валюты] пробел [конвертируемая валюта] пробел [in] пробел [валюта в которую конвертируем].***
Регистр вводимых символов значения не имеет. Не допустимы лишние пробелы.
**Для примера:**
_Валидны следующие значения_: 15 usd in rub, 15 USD IN RUB, 15 uSd iN RuB и т.д. 

- **Вторая страница** - это курсы валют по отношению к базовой валюте, с возможностью изменения базовой валюты*
Базовая валюта по умолчанию устанавливается в зависимости от языка браузера, к примеру если в вашем браузере установлен русский язык то по умолчанию базовая валюта будет равна **RUB**, если установлен английский или какой либо другой язык, то базовая валюта по умолчанию будет равна **USD**;

****СПРАВКА:*** В данном приложении для конвертации валюты и просмотра курсов доступно 5 валют _(USD EUR RUB GBP JPY)_.
Так же возможно увеличение количества валют до более чем 150. Для этого необходим ***Fork*** приложения либо клонирование, после чего в компоненте **App.jsx** необходимо найти массив ***currencys*** со списком валют и добавить туда необходимые вам валюты из списка возможных (из списка использованного в приложении API указанного выше). Затем произвести деплой приложения на кокой либо сервис или развернуть приложенеи на своем сервере, не нарушая нишеизложенную лицензию.
 
&#128077; **Спасибо за то, что посетили мой проект!**
.
.
.

&#128073; <<<===== Дата публикации: 05.11.2021 (19:00 по московскому времени)

***License agreement:***

Как **автор** данного web приложения (далее **ПО**):

***Запрещаю:***
- Выдавать данное ПО за результат интелектуальной деятельности любого третьего лица, кроме автора **ПО** (т.е. меня);
- Использовать дизайн приложения в похожем **ПО** или выдавать его за результат интелектуальной деятельности любого третьего лица, кроме автора **ПО**;

***Разрешаю:***
- Любое использование всего програмного кода приложения в любых целях (образовательной, ознакомительной, преподавательской и т.д.) в том числе коммерческой;
- Любое публичное распространение данного **ПО** с объязательным указанием ссылки на GitHub репозиторий данного **ПО**;
- Использование в учебных, ознакомительных или преподавательских целях дизайна **ПО** с объязательным указанием авторства (ссылка на мой GitHub) и ссылки на GitHub репозиторий данного **ПО**

**Оставляю за собой право вносить в данное лицензионное соглашение любые изменения, которые не будут иметь обратной силы, то есть любые изменения будут действовать только с того момента как будут опубликованны в данном описании с указанием даты публикации.**

======>>> &#128072;
