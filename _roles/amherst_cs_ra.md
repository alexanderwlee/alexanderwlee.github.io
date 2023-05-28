---
org_id: amherst_cs
title: Research Assistant
start_date: 2020-12-01
end_date: 2022-05-01
---

{% assign links = site.data.links %}
{% assign pubs = site.data.publications %}
{% assign rohan = pubs | where: "id", "rohan" | first %}
{% assign cube = pubs | where: "id", "cube" | first %}

I conducted research as a member of the [Amherst College Data* Mammoths]({{
links.acdmammoths }}) and co-authored two papers:

1. [{{ rohan.title }}]({{ rohan.paper_link }}). This work introduces a novel
   class of null models for the statistical validation of results obtained from
   binary transactional and sequence datasets. It presents an algorithmic
   framework for efficiently sampling datasets from these null models, which is
   a necessary step for the resampling-based [statistical hypothesis tests]({{
   links.hypothesis_testing }}) employed to validate the results. The paper was
   accepted for publication in [{{ rohan.publisher }}]({{ rohan.publisher_link
   }}), and I will be co-presenting at [ECML PKDD 2023]({{ links.ecml_pkdd }}).
   See [GitHub repo]({{ rohan.repo_link }}).
1. [{{ cube.title }}]({{ cube.paper_link }}). This work presents a novel
   parallel algorithm for drawing balanced samples from large populations based
   on a variant of the [cube method for stratified populations]({{
   links.strat_cube_method }}). The paper was accepted for publication to the
   [{{ cube.publisher }}]({{ cube.publisher_link }}), and I co-presented to
   various experts in the field. See [GitHub repo]({{ cube.repo_link }}).
