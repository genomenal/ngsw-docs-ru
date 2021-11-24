---
sidebar_position: 3
sidebar_label: Знакомство с сервисом
---

# Знакомство с сервисом

Впервые открыв Genomenal, Вы увидите страницу входа. Введите свой логин и пароль, если у Вас уже есть аккаунт, или зарегистрируйтесь.

После входа в систему Вы попадете на основную страницу сервиса **“Все пациенты”**.
Если Вы ранее не пользовались сервисом, страница будет пустой, впоследствии здесь Вы увидите всех пациентов, добавленных в этот аккаунт на данный момент.
Сверху есть поле поиска, которое поможет Вам ориентироваться во множестве карточек пациентов.

<p align="center">
<img src={require('/img/version_1.02/1-all-patients-page.png').default} width="1000"/>
</p>

Слева, на панели навигации Вы видите различные разделы сервиса. Здесь можно перейти на вкладку **“Обрабатывается”**, 
где будут только те пациенты, для которых есть образцы в процессе обработки, в раздел **“Проблемы”**, где только те пациенты, для которых возникли проблемы при обработке данных. В **“Архив”** можно перенести неактуальные данные или данные, которые впоследствии необходимо будет удалить.

Пациентов можно объединять в **когорты**, например, по типу патологии или источнику данных. Выбрав когорту на панели навигации слева, можно увидеть только пациентов, принадлежащих к этой когорте.

Если Вы хотите указать собственные параметры для обработки, анализа и аннотации данных, то раздел **“Настройки”** создан как раз для этого.
Здесь Вы можете создавать наборы генов, которые в дальнейшем будут доступны для фильтрации результатов анализа (**“Панели генов”**). При создании панели можно выбрать гены из списка всех генов, либо импортировать подготовленный список в виде текста (например TP53, BRCA1, EGFR). Кроме того, можно выбрать панель из библиотеки самых распространенных клинических панелей, и гены будут импортированы оттуда автоматически. Это может значительно ускорить дальнейшую интерпретацию данных, если Вам интересен лишь узкий набор генов в рамках конкретной патологии или группы патологий.

Если вы анализируете данные, полученные секвенированием с обогащением определенных участков на базе одного из 
распространенных наборов ведущих производителей, то сервис автоматически определит какой именно набор для обогащения 
был использован. Но для ускорения обработки или в случае использования кастомного набора с уникальными регионами 
обогащения вы можете указать в разделе **“Реагенты Capture Kit”** свой набор, выбрав его из списка, или загрузив 
предоставляемую производителем разметку обогащенных регионов в формате bed  (убедитесь, что верно указали сборку 
референсного генома при загрузке bed-файла ).

Если Вы анализируете данные, полученные секвенированием с обогащением определенных участков на базе одного из распространенных наборов ведущих производителей, то сервис автоматически определит, какой именно набор для обогащения был использован. Но для ускорения обработки или в случае использования кастомного набора с уникальными регионами обогащения Вы можете загрузить предоставляемую производителем разметку обогащенных регионов в формате BED в разделе **“Реагенты Capture Kit”** (убедитесь, что верно указали сборку референсного генома при загрузке BED-файла).