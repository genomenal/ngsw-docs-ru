---
sidebar_position: 3
sidebar_label: Панель детальной информации о варианте
---

# Панель детальной информации о варианте

Нажмите на строку варианта, чтобы увидите панель с детальной информацией о варианте внизу таблицы:

<p align="center">
<img src={require('/img/vv/details_panel.png').default} width="900"/>
</p>

Размер панели можно менять, наведя курсор на верхнюю границу панели и потянув вниз или вверх. 
Также панель можно скрыть и развернуть, нажав на соответствующие 
стрелки <img src={require('/img/vv/collapse.png').default} width="30"/> 
или <img src={require('/img/vv/expand.png').default} width="30"/>.

<details>
<summary>Нажмите, чтобы посмотреть на вкладки панели</summary>

## Вкладки панели детальной информации

### Common - основная информация о варианте:

1. **Ген** - данные о гене, в котором располагается вариант:
- ***Полное название гена***. При наведении курсора на название гена можно увидеть, откуда оно было взято:

<p align="center">
<img src={require('/img/vv/gene_source.png').default} width="300"/>
</p>

- ***Ссылки*** на страницы с информацией о гене в различных базах данных 
([Ensembl](https://www.ensembl.org/Homo_sapiens/Info/Index), [UniProt](https://www.uniprot.org/uniprot/), 
[GTEx](https://www.gtexportal.org/home/), [OMIM](https://www.omim.org/), [NCBI](https://www.ncbi.nlm.nih.gov/gene/)).
2. **Транскрипты** - данные о транскриптах гена, в которых располагается вариант:
- ***Идентификатор транскрипта*** из базы [Ensembl](https://www.ensembl.org/Homo_sapiens/Info/Index). 
Открыть страницу транскрипта можно, нажав на идентификатор. Основной транскрипт данного гена выделен рамкой.
- ***IMPACT*** - предсказанное значение эффекта варианта на белок (см. 
[таблицу со значениями эффектов варианта в аннотации](/results/main/snvs_indels/variant-viewer#описание-колонок-таблицы)).
- ***HGVSp*** - аминокислотная замена в [номенклатуре HGVS](https://varnomen.hgvs.org/) (префикс “p.” (protein) + 
референсная аминокислота + позиция аминокислоты в белке + новая аминокислота, получившаяся в результате замены).
- ***HGVSc*** - нуклеотидная замена в [номенклатуре HGVS](https://varnomen.hgvs.org/) (геномная позиция замещенного 
нуклеотида + референсный нуклеотид > альтернативный аллель). Начинается с префикса: “c.” (coding; для замены в 
кодирующей последовательности ДНК), “n.” (non-coding; для замены в некодирующей последовательности ДНК).
3. **Информация об образцах**:
- ***Имя образца***, в результате анализа которого был выявлен вариант.
- ***Генотип*** - значения аллеля для данного образца (0 - референсный аллель, 1 - первый альтернативный аллель, 2 - 
второй альтернативный аллель и т.д.), разделенные ”/” (для нефазированного генотипа) или “|” (для фазированного 
генотипа).
- ***Глубина секвенирования*** - общее количество прочтений последовательности, перекрывающих позицию варианта, для 
данного образца.
- ***Ref count*** - количество раз, когда в последовательности считывался референсный нуклеотид для данного образца.
- ***Alt count*** - количество раз, когда в последовательности считывался альтернативный нуклеотид для данного образца.
- ***AF*** - частота альтернативного аллеля для данного образца.

### ClinVar - данные о фенотипической значимости варианта из базы [ClinVar](https://www.ncbi.nlm.nih.gov/clinvar/):

1. **Haplotype phenotypes** - раздел присутствует, если вариант является часть гаплотипа:
* ***Variant Haplotype ID*** - ссылка на генотип, включающий данный вариант.
* ***Phenotype*** - название фенотипа (со ссылками на различные базы данных).
* ***Clinical Significance*** - клиническая значимость фенотипа (определение значений можно посмотреть 
[тут](https://preview.ncbi.nlm.nih.gov/clinvar/docs/clinsig/#clinsig_scv)).
* ***Review status*** - оценка источника данных, в котором заявлена клиническая значимость фенотипа. Определение оценок 
можно посмотреть [тут](https://preview.ncbi.nlm.nih.gov/clinvar/docs/variation_report/#review_status).
2. **Phenotypes** - данные о фенотипической значимости варианта:
* ***Clinical significance*** - клиническая значимость фенотипа (определение значений можно посмотреть 
[тут](https://preview.ncbi.nlm.nih.gov/clinvar/docs/clinsig/#clinsig_scv)). Приведена как суммарная фенотипическая 
значимость для варианта (слева), так и значимость каждого фенотипа варианта (справа в таблице).
* ***ClinVar ID*** - ссылка на вариант в базе [ClinVar](https://www.ncbi.nlm.nih.gov/clinvar/).
* ***Review status*** - оценка источника данных, в котором заявлена клиническая значимость фенотипа. Определение оценок 
можно посмотреть [тут](https://preview.ncbi.nlm.nih.gov/clinvar/docs/variation_report/#review_status). Приведена как 
суммарная оценка источника данных для варианта (слева), так и оценка источника каждого фенотипа варианта (справа в 
таблице).
* ***Allele ID*** - идентификатор ClinVar для аллельной замены.
* ***Allele origin*** - происхождение аллеля варианта.
* ***Cross references*** - ссылки на вариант в различных базах.
* ***Phenotype*** - фенотипический признак или заболевание, ассоциированные с вариантом (со ссылками на различные базы 
данных).

### GnomAD - данные об аллельных частотах варианта из базы [gnomAD](https://gnomad.broadinstitute.org/):

* ***Allele frequency*** - суммарная частота аллеля в gnomAD.
* ***Coverage*** - средняя глубина покрытия по основаниям (диапазоны &lt;10, 10-100, ⩾100).
* ***Number of Homozygotes*** - количество людей, гомозиготных по этому варианту.
* ***Частоты в различных популяциях*** (Ashkenazi Jewish, Amish, African/African American, European (Finnish), South 
Asian, Latino/Admixed American, European (non-Finnish), East Asian, Middle Eastern, Other). Для каждой популяции 
приведены суммарная частота аллеля, частоты в подпопуляциях XX, XY и количество гомозигот.

### ExAC - данные об аллельных частотах варианта из базы [ExAC](http://exac.broadinstitute.org/):

- Частоты и количество аллеля в различных популяциях (African/African American, American, East Asian, Finnish, European 
(non-Finnish), South Asian). Кроме того, здесь приведены частоты аллеля в когортах non-TCGA и non-Psych.

### Other frequencies

- Данные об аллельных частотах варианта из [проекта 1000 Genomes](https://www.internationalgenome.org/) и в 
комбинированных генотипах в когорте UK10K из [проекта UK10K](https://www.uk10k.org/).

### Conservation - данные о консервативности варианта:

* ***Ancestral allele*** - предковый аллель, предсказанный 
[EPO](https://www.ensembl.org/info/genome/compara/epo_anchors_info.html).
* ***Генотипы*** Altai Neanderthal, Denisova, Vindijia Neandertal.
* ***Консервативные скоры***, полученные c помощью предсказания различными программами 
([FitCons](http://compgen.cshl.edu/fitCons/), [GERP++](http://mendel.stanford.edu/sidowlab/downloads/gerp/index.html),
[PhyloP](https://ccg.epfl.ch/mga/hg19/phylop/phylop.html),
[PhastCons](http://compgen.cshl.edu/phast/phastCons-HOWTO.html), 
[SiPhy](http://portals.broadinstitute.org/genome_bio/siphy/documentation.html), BStatistic).

### Protein function effect

- Результаты предсказания эффекта аминокислотной замены на функцию белка, полученные с помощью алгоритмов и программ 
[SIFT](https://sift.bii.a-star.edu.sg/), [Polyphen](http://genetics.bwh.harvard.edu/pph/pph_help.html), 
[SIFT4G](https://sift.bii.a-star.edu.sg/sift4g/), LRT, MutationAssessor, [FAtHMM](http://fathmm.biocompute.org.uk/), 
[Provean](http://provean.jcvi.org/index.php), [Meta SVM](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5270233/), 
Meta LR, [M-CAP](http://bejerano.stanford.edu/mcap/), [MutPred](http://mutpred.mutdb.org/), 
[MVP](https://www.nature.com/articles/s41467-020-20847-0), 
[Primate AI](https://illumina.github.io/NirvanaDocumentation/3.14/data-sources/primate-ai/), MPC, DEOGEN2, DANN, Eigen.

### Other - дополнительная информация о варианте

### Custom annotation sources

- Значения колонок из пользовательских аннотаций, соответствующие найденному варианту. Добавить пользовательские 
аннотации можно на странице **Настройки** -> **Пользовательские аннотации** (подробнее о том, как это сделать, можно 
почитать [здесь](/custom-annotations)).

</details>