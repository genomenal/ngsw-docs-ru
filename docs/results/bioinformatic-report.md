---
sidebar_position: 4
sidebar_label: Биоинформатический отчет
---

# Биоинформатический отчет

Биоинформатический отчет собрал в себе основные метрики, которые помогут оценить качество исходных данных и качество картирования. Отчет может быть экспортирован в PDF.

![Bioinformatic report](/img/rus/35-bioinformatic-report.png)

## Вкладка биоинформатического отчета

### Статистика файла

Количество прочтений и их длина до и после очистки и фракция прочтений, сохраненная после очистки. Большое количество отфильтрованных прочтений и значительное уменьшение длины говорит о низком качестве исходных данных. Рекомендуется рассмотреть возможность повторного секвенирования материала.

### Отчет о качестве

Отчет по метрикам качества прочтений, рассчитываемым на стадии “Проверка качества и очистка” пайплайна.
Подробный отчет по метрикам с визуализацией можно скачать во вкладке **“Детали процесса анализа” -> “Проверка качества и очистка” -> “Проверка качества” -> “Файлы с результатами”**

**Описание метрик и пороги**

<table>
  <tr>
   <td>Метрика
   </td>
   <td>Описание
   </td>
   <td>Порог
   </td>
  </tr>
  <tr>
   <td>Total sequences
   </td>
   <td>Число прочтений
   </td>
   <td>>200 000
   </td>
  </tr>
  <tr>
   <td>Length distribution
   </td>
   <td>Распределение длин прочтений
   </td>
   <td>Коротких прочтений менее 25%. Длина короткого прочтения ≤ 20
   </td>
  </tr>
  <tr>
   <td>Tiles sequence quality
   </td>
   <td>Качество тайлов
   </td>
   <td>Количество плохих ячеек в тайле с максимальным отклонением 1,165 менее 7
   </td>
  </tr>
  <tr>
   <td>First base sequence quality
   </td>
   <td>Качество начальных нуклеотидов
   </td>
   <td>10% наименее качественных начальных нуклеотидов (3 нуклеотида) имеют качество > 20
   </td>
  </tr>
  <tr>
   <td>Middle base sequence quality
   </td>
   <td>Качество средних нуклеотидов
   </td>
   <td>10% наименее качественных средних нуклеотидов имеют качество > 20
   </td>
  </tr>
  <tr>
   <td>Last base sequence quality
   </td>
   <td>Качество конечных нуклеотидов
   </td>
   <td>10% наименее качественных конечных нуклеотидов (3 нуклеотида) имеют качество > 20
   </td>
  </tr>
  <tr>
   <td>Overrepresented sequences
   </td>
   <td>Перепредставленные последовательности
   </td>
   <td>Процент перепредставленных последовательностей менее 1%
   </td>
  </tr>
  <tr>
   <td>Adapter contaminated
   </td>
   <td>Контаминация адаптерными последовательностями
   </td>
   <td>Не более 1% контаминированных последовательностей
   </td>
  </tr>
  <tr>
   <td>Base N content
   </td>
   <td>Количество N среди нуклеотидов
   </td>
   <td>Не более 20% N среди нуклеотидов
   </td>
  </tr>
  <tr>
   <td>GC content
   </td>
   <td>Содержание GC
   </td>
   <td>Наличие одного пика GC
   </td>
  </tr>
  <tr>
   <td>Base sequence content
   </td>
   <td>Соотношение AT/GC
   </td>
   <td>Средняя разница AT менее 1%, максимальная разница менее 20%, средняя разница GC менее 1%, максимальная разница GC менее 20%
   </td>
  </tr>
</table>


### Отчет по выравниванию

Метрики, описывающие качество картирования. При большом количестве ошибок секвенирования, неполных данных, высоком уровне контаминации или неверном определении источника (организма) образца метрики укажут на возможную проблему.