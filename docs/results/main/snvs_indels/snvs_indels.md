---
sidebar_position: 1
sidebar_label: SNV/Indels
---

# SNV/Indels

Секции "***Соматические SNV/Indels***" и "***Герминальные SNV/Indels***" содержат результаты выявления, соответственно, 
соматических и герминальных однонуклеотидных вариантов (single-nucleotide variants; SNVs) и коротких 
инсерций/делеций (Indels) в образце. Здесь представлены результаты после фильтрации с 
помощью [GATK Best Practices](https://gatk.broadinstitute.org/hc/en-us/sections/360007226651-Best-Practices-Workflows).

***Соматические мутации*** являются приобретенными и характерны для опухолевого процесса. Соответственно, выявление таких
мутаций проводится только для образцов ***опухолевых тканей*** и результаты представлены только на странице образца
опухолевой ткани.

<p align="center">
<img src={require('/img/results/somatic_snvs.png').default} width="800"/>
</p>

***Герминальные мутации*** являются наследуемыми и могут быть обнаружены в любых клетках организма. Соответственно, 
выявляние таких мутаций проводится как для образцов ***опухолевых*** (в случае одиночных
образцов опухолевой ткани без контроля), так и для образцов ***здоровых*** тканей. 
Результаты анализа представлены на страницах обоих образцов.

<p align="center">
<img src={require('/img/results/germline_snvs.png').default} width="800"/>
</p>

Обнаруженные отфильтрованные и аннотированные варианты в обеих секциях представлены в следующем виде:

1. **Variant Viewer** - встроенный модуль для просмотра и анализа вариантов. Подробно описан 
в [соответствующем разделе](/results/main/snvs_indels/variant-viewer). Нажмите на 
кнопку <img src={require('/img/results/vv_btn.png').default} width="120"/>, чтобы воспользоваться модулем.
2. Текстовый файл в формате **CSV** (Comma-Separated Values). Чтобы скачать файл,
нажмите на <img src={require('/img/results/table_btn.png').default} width="90"/>.
3. Файл в формате **[VCF 4.2 (Variant Call Format)](http://samtools.github.io/hts-specs/VCFv4.2.pdf)**
. Чтобы скачать файл, нажмите на <img src={require('/img/results/vcf_btn.png').default} width="45"/>.
4. Файл в **таблицах Google** (может быть показана только часть вариантов). Чтобы открыть файл, нажмите
на <img src={require('/img/results/google_btn.png').default} width="45"/>.
5. **[Integrative Genomics Viewer (IGV)](https://software.broadinstitute.org/software/igv/)** - встроенный модуль 
визуализации вариаций на геноме. Чтобы открыть модуль, нажмите 
на <img src={require('/img/results/igv_btn.png').default} width="45"/>.