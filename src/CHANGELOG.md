# Changelog

All notable changes to this project will be documented in this file.

## [v1.2.5](https://github.com/GNS-Science/kororaa/compare/v1.2.4...v1.2.5) - 2024-07-19

### Changed
 - higher floating point precision for csv files of hazard curves and UHS


## [v1.2.4](https://github.com/GNS-Science/kororaa/compare/v1.2.3...v1.2.4) - 2024-07-02

### Changed
 - updated package dependencies, with associated test and code changes
 - /HazardCurves page has improved latitude/longitude error messages for user.

## [v1.2.3](https://github.com/GNS-Science/kororaa/compare/v1.2.2...v1.2.3)

### Added

Hazard map opacity slider;

### Changed
Hazard curve charts update;
Hazard curve line colour synced;
Dynamic TechInfo page;
Adds Error boundary to hazard charts page;

## [v1.2.2](https://github.com/GNS-Science/kororaa/compare/v1.2.0...v1.2.2) - 2023-11-02

### Merged

- Fix/410 hazard tooltips [`#412`](https://github.com/GNS-Science/kororaa/pull/412)
- move cypress fix to right test; [`#409`](https://github.com/GNS-Science/kororaa/pull/409)
- Feature/406 hazard poe [`#408`](https://github.com/GNS-Science/kororaa/pull/408)
- update hazard curve poe controls; [`#407`](https://github.com/GNS-Science/kororaa/pull/407)
- Feature/401 hazard button feedback [`#402`](https://github.com/GNS-Science/kororaa/pull/402)
- Feature/398 time scales [`#400`](https://github.com/GNS-Science/kororaa/pull/400)
- fix chrome not scrolling to hash links; [`#397`](https://github.com/GNS-Science/kororaa/pull/397)
- Feature/390 fault label [`#394`](https://github.com/GNS-Science/kororaa/pull/394)
- change rate label; [`#391`](https://github.com/GNS-Science/kororaa/pull/391)
- feature/389 rate tooltip [`#390`](https://github.com/GNS-Science/kororaa/pull/390)
- Fix/386 menu caps [`#387`](https://github.com/GNS-Science/kororaa/pull/387)
- update rupture map tooltips; format geojson downloads; reformat tech info page; add ids to tech info headers;   [`#380`](https://github.com/GNS-Science/kororaa/pull/380)

### Commits

- fix cypress tests; [`df848f7`](https://github.com/GNS-Science/kororaa/commit/df848f7a39b3a6e30364be33d04cb4d0431f4d71)
- skip tests; [`8cc347a`](https://github.com/GNS-Science/kororaa/commit/8cc347a67680fa73efefbfa0850a18ab3ec19e58)
- add tooltip to rupture map rate control; update mock for cypress; [`094a4ad`](https://github.com/GNS-Science/kororaa/commit/094a4ad10070f5cdaf02eea953f6cad93eb76110)

## [v1.2.0](https://github.com/GNS-Science/kororaa/compare/v1.1.0...v1.2.0) - 2023-07-25

## [v1.1.0](https://github.com/GNS-Science/kororaa/compare/v1.0.7...v1.1.0) - 2023-07-25

### Merged

- Feature/372 UI update [`#378`](https://github.com/GNS-Science/kororaa/pull/378)
- Feature/multi fault [`#371`](https://github.com/GNS-Science/kororaa/pull/371)
- MFD bar chart [`#370`](https://github.com/GNS-Science/kororaa/pull/370)
- Feature/365 Animation Sort/View Menu Change [`#367`](https://github.com/GNS-Science/kororaa/pull/367)
- Feature/358 combo rupture view pt2 [`#363`](https://github.com/GNS-Science/kororaa/pull/363)
- Feature/358 combo rupture view rebased [`#360`](https://github.com/GNS-Science/kororaa/pull/360)
- NSHM_v1.0.4 release [`#362`](https://github.com/GNS-Science/kororaa/pull/362)
- Promote latest to PROD [`#336`](https://github.com/GNS-Science/kororaa/pull/336)
- Deploy test [`#314`](https://github.com/GNS-Science/kororaa/pull/314)
- Fix/UHS CSV (#309) [`#311`](https://github.com/GNS-Science/kororaa/pull/311)
- Deploy test [`#306`](https://github.com/GNS-Science/kororaa/pull/306)

### Commits

- Rupture info circular progress instead of broken text; [`c2b9db3`](https://github.com/GNS-Science/kororaa/commit/c2b9db35de59ee26010c6f3a1c0b016170f03a9c)
- cypress tests fixed; [`cda112b`](https://github.com/GNS-Science/kororaa/commit/cda112bb524409af33919c75becd9b1ac0599f47)
- refactoring; [`b996663`](https://github.com/GNS-Science/kororaa/commit/b99666325c72a6d9984c587e8467ac7ed6501d46)

## [v1.0.7](https://github.com/GNS-Science/kororaa/compare/v1.0.6...v1.0.7) - 2023-01-05

### Merged

- Fix/Arcgis Basemap [`#313`](https://github.com/GNS-Science/kororaa/pull/313)

### Commits

- update nest; fixes hazard map arcgis basemap; [`d44b160`](https://github.com/GNS-Science/kororaa/commit/d44b1603434ab04585aa1ebb1f8a9498a8838023)

## [v1.0.6](https://github.com/GNS-Science/kororaa/compare/v1.0.5...v1.0.6) - 2022-12-13

### Merged

- Fix/310 Sort SA CSV [`#312`](https://github.com/GNS-Science/kororaa/pull/312)
- Fix/UHS CSV [`#309`](https://github.com/GNS-Science/kororaa/pull/309)

### Commits

- sort hazard curve CSV SA; [`a370396`](https://github.com/GNS-Science/kororaa/commit/a370396ff63530cc2ad872ce67623008c95a6013)

## [v1.0.5](https://github.com/GNS-Science/kororaa/compare/v1.0.4...v1.0.5) - 2022-12-07

### Merged

- Fix/Cypress MSW [`#307`](https://github.com/GNS-Science/kororaa/pull/307)
- Feature/301 disagg csv [`#305`](https://github.com/GNS-Science/kororaa/pull/305)
- update tech info text; [`#304`](https://github.com/GNS-Science/kororaa/pull/304)
- Feature/290 model versioning [`#298`](https://github.com/GNS-Science/kororaa/pull/298)
- Deploy test [`#296`](https://github.com/GNS-Science/kororaa/pull/296)

### Commits

- update hazard curve MSW mocks; [`3d91e53`](https://github.com/GNS-Science/kororaa/commit/3d91e534a8142158a342b967a12e76c952f797eb)

## [v1.0.4](https://github.com/GNS-Science/kororaa/compare/v1.0.3...v1.0.4) - 2022-11-16

### Merged

- Feature/287 Nested Hamburger [`#295`](https://github.com/GNS-Science/kororaa/pull/295)
- Feature/289_hazard_controls_errors [`#291`](https://github.com/GNS-Science/kororaa/pull/291)
- Deploy test [`#286`](https://github.com/GNS-Science/kororaa/pull/286)

## [v1.0.3](https://github.com/GNS-Science/kororaa/compare/v1.0.2...v1.0.3) - 2022-11-10

### Merged

- removes changelog text from start of changelog page; adds new intro text; [`#285`](https://github.com/GNS-Science/kororaa/pull/285)
- Fix/cypress tests [`#284`](https://github.com/GNS-Science/kororaa/pull/284)
- feature/238_PGA_boxplot [`#281`](https://github.com/GNS-Science/kororaa/pull/281)
- Feature/280 Model Components [`#282`](https://github.com/GNS-Science/kororaa/pull/282)
- hazard chart automcomplete expands horizontally; [`#279`](https://github.com/GNS-Science/kororaa/pull/279)
- Feature/277 Other Reports [`#278`](https://github.com/GNS-Science/kororaa/pull/278)
- Deploy test [`#276`](https://github.com/GNS-Science/kororaa/pull/276)

## [v1.0.2](https://github.com/GNS-Science/kororaa/compare/v1.0.1...v1.0.2) - 2022-10-26

### Merged

- hazard chart and UHS chart both use "Acceleration (g)"; hazard map CSV shows cov if statistic is cov; [`#271`](https://github.com/GNS-Science/kororaa/pull/271)
- Feature/242 changelog [`#269`](https://github.com/GNS-Science/kororaa/pull/269)

### Commits

- update nest; add cov property to map component; adds tooltip to map; [`2b14a0d`](https://github.com/GNS-Science/kororaa/commit/2b14a0d7b50917fa8f3196b16dda2bcbb27e90f6)

## [v1.0.1](https://github.com/GNS-Science/kororaa/compare/v1.0.0...v1.0.1) - 2022-10-20

### Merged

-  - Fix/120 webpack warnings (#257) [`#266`](https://github.com/GNS-Science/kororaa/pull/266)
- new GA4 code for GNS Science org; [`#265`](https://github.com/GNS-Science/kororaa/pull/265)

### Commits

- changelog page styling; [`5c1141c`](https://github.com/GNS-Science/kororaa/commit/5c1141c22a49fa0aa670f4cbdf162396f9ab5612)
- alter version path in package.json; [`7002af9`](https://github.com/GNS-Science/kororaa/commit/7002af9d4d86c14a62c2763cf68d69dfb7083592)
- add release workflow; change changelog template; [`adddb15`](https://github.com/GNS-Science/kororaa/commit/adddb1532ff1a0286d3990ac53c16449a13cb155)

## v1.0.0 - 2022-10-17

### Merged

- Feature/241 ga tracking [`#263`](https://github.com/GNS-Science/kororaa/pull/263)
- Feature/241_ga_tracking [`#262`](https://github.com/GNS-Science/kororaa/pull/262)
- fix cypress; [`#261`](https://github.com/GNS-Science/kororaa/pull/261)
- Feature/256 sorted legends [`#260`](https://github.com/GNS-Science/kororaa/pull/260)
- Fix/255 cypress catchup [`#258`](https://github.com/GNS-Science/kororaa/pull/258)
- Fix/120 webpack warnings [`#257`](https://github.com/GNS-Science/kororaa/pull/257)
- set vs30 configuration for next deployment [`#254`](https://github.com/GNS-Science/kororaa/pull/254)
- city name in hazard legend, changed order of legend string (#248) [`#251`](https://github.com/GNS-Science/kororaa/pull/251)
- Fix/eqc logo (#244) [`#247`](https://github.com/GNS-Science/kororaa/pull/247)
- Promote to PROD [`#235`](https://github.com/GNS-Science/kororaa/pull/235)
- remove unwanted fields from publications list; (#229) [`#230`](https://github.com/GNS-Science/kororaa/pull/230)
- promote latest to PROD [`#228`](https://github.com/GNS-Science/kororaa/pull/228)
- squash NZ-NSHM; adjust header padding; [`#223`](https://github.com/GNS-Science/kororaa/pull/223)
- update vs30 info in tooltips [`#224`](https://github.com/GNS-Science/kororaa/pull/224)
- Feature/home page tweaks [`#222`](https://github.com/GNS-Science/kororaa/pull/222)
- update contacts and fix up alignments [`#219`](https://github.com/GNS-Science/kororaa/pull/219)
- Feature/169-image-not-found [`#218`](https://github.com/GNS-Science/kororaa/pull/218)
- Feature/197 r and m 5 squash rebase [`#216`](https://github.com/GNS-Science/kororaa/pull/216)
- disclaiming footer & links [`#205`](https://github.com/GNS-Science/kororaa/pull/205)
- forget DRY with layerd SECRETS for now; [`#212`](https://github.com/GNS-Science/kororaa/pull/212)
- add missing env secrets [`#211`](https://github.com/GNS-Science/kororaa/pull/211)
- refactor secrets setup; [`#210`](https://github.com/GNS-Science/kororaa/pull/210)
- refactor deployment scripts for DRY [`#209`](https://github.com/GNS-Science/kororaa/pull/209)
- Feature/201 science report downloads [`#204`](https://github.com/GNS-Science/kororaa/pull/204)
- Feature/61 about and help [`#200`](https://github.com/GNS-Science/kororaa/pull/200)
- Feature/197 rats and mice 5 [`#202`](https://github.com/GNS-Science/kororaa/pull/202)
- Feature/181 fab button [`#199`](https://github.com/GNS-Science/kororaa/pull/199)
- first draft [`#198`](https://github.com/GNS-Science/kororaa/pull/198)
- Feature/149 contact email [`#196`](https://github.com/GNS-Science/kororaa/pull/196)
- Feature/190 info tile [`#194`](https://github.com/GNS-Science/kororaa/pull/194)
- make iframe reports use https; [`#195`](https://github.com/GNS-Science/kororaa/pull/195)
- added new SimpleBackdrop common component; added to API query views; [`#192`](https://github.com/GNS-Science/kororaa/pull/192)
- hazard map has new map options; [`#193`](https://github.com/GNS-Science/kororaa/pull/193)
- Feature/coming features updates [`#189`](https://github.com/GNS-Science/kororaa/pull/189)
- Feature/tooltip placement [`#188`](https://github.com/GNS-Science/kororaa/pull/188)
- Feature/161 r and m 4 [`#185`](https://github.com/GNS-Science/kororaa/pull/185)
- Fix/147 missing location codes [`#184`](https://github.com/GNS-Science/kororaa/pull/184)
- Feature/176 Uncertainty Bounds [`#183`](https://github.com/GNS-Science/kororaa/pull/183)
- feature/162 Spectral periods  [`#175`](https://github.com/GNS-Science/kororaa/pull/175)
- Feature/167 collab logos update [`#174`](https://github.com/GNS-Science/kororaa/pull/174)
- Feature/CSV formatting [`#173`](https://github.com/GNS-Science/kororaa/pull/173)
- Feature/home titles rats n  mice [`#163`](https://github.com/GNS-Science/kororaa/pull/163)
- Feature/150 download [`#160`](https://github.com/GNS-Science/kororaa/pull/160)
- Feature/home page revisions rebase [`#159`](https://github.com/GNS-Science/kororaa/pull/159)
- Fix/157 faster gridded hazard [`#158`](https://github.com/GNS-Science/kororaa/pull/158)
- Feature/146 Missing spectra plots [`#155`](https://github.com/GNS-Science/kororaa/pull/155)
- add colourScaleNormalise to hazard maps query; [`#154`](https://github.com/GNS-Science/kororaa/pull/154)
- Feature/140 hazard map title [`#152`](https://github.com/GNS-Science/kororaa/pull/152)
- Feature/116 Help content Markdown [`#151`](https://github.com/GNS-Science/kororaa/pull/151)
- Feature/137 spectral pga [`#145`](https://github.com/GNS-Science/kororaa/pull/145)
- make pageContainer styles more consistent; stop Title jittering; [`#141`](https://github.com/GNS-Science/kororaa/pull/141)
- solve merge conflicts; [`#139`](https://github.com/GNS-Science/kororaa/pull/139)
- Fix/133 linear spectra xscale [`#138`](https://github.com/GNS-Science/kororaa/pull/138)
- fix styling; [`#135`](https://github.com/GNS-Science/kororaa/pull/135)
- Feature/31 disagg rebase [`#134`](https://github.com/GNS-Science/kororaa/pull/134)
- Feature/117 science reports [`#130`](https://github.com/GNS-Science/kororaa/pull/130)
- Feature/rats and mice [`#129`](https://github.com/GNS-Science/kororaa/pull/129)
- updated colobar with heading and background [`#127`](https://github.com/GNS-Science/kororaa/pull/127)
- Feature/52 dynamic y scale [`#111`](https://github.com/GNS-Science/kororaa/pull/111)
- disable close on select [`#124`](https://github.com/GNS-Science/kororaa/pull/124)
- Feature/104 navbar improvements part1 [`#126`](https://github.com/GNS-Science/kororaa/pull/126)
- Feature/105 help markdown [`#121`](https://github.com/GNS-Science/kororaa/pull/121)
- add suspense and delete unused log [`#123`](https://github.com/GNS-Science/kororaa/pull/123)
- log/linear toggle for spectra [`#122`](https://github.com/GNS-Science/kororaa/pull/122)
- Feature/54 download img [`#118`](https://github.com/GNS-Science/kororaa/pull/118)
- move to MUI Grid for card layout; make styling similar to /Previews; [`#114`](https://github.com/GNS-Science/kororaa/pull/114)
- Feature/107 feature preview page [`#112`](https://github.com/GNS-Science/kororaa/pull/112)
- Fix/97 jitter [`#109`](https://github.com/GNS-Science/kororaa/pull/109)
- Headings are now GNS_BLUE [`#110`](https://github.com/GNS-Science/kororaa/pull/110)
- Fix/96 dynamic colormap [`#102`](https://github.com/GNS-Science/kororaa/pull/102)
- Feature/80 revise theme colours 2 [`#108`](https://github.com/GNS-Science/kororaa/pull/108)
- fix spectral legend for arbitrary latlons; [`#101`](https://github.com/GNS-Science/kororaa/pull/101)
- Fix/86 spectral named legend [`#100`](https://github.com/GNS-Science/kororaa/pull/100)
- fix scrambled spectral [`#99`](https://github.com/GNS-Science/kororaa/pull/99)
- Colobar feature on Hazard Map - big squash-rebase [`#98`](https://github.com/GNS-Science/kororaa/pull/98)
- feature/53 Page Description [`#93`](https://github.com/GNS-Science/kororaa/pull/93)
- Feature/83 download in drawer [`#91`](https://github.com/GNS-Science/kororaa/pull/91)
- Fix/68 curve colors [`#92`](https://github.com/GNS-Science/kororaa/pull/92)
- change favicon and title; [`#84`](https://github.com/GNS-Science/kororaa/pull/84)
- Feature/64 move hazard controls v2 [`#77`](https://github.com/GNS-Science/kororaa/pull/77)
- Feature/51 map colorbar v2 [`#79`](https://github.com/GNS-Science/kororaa/pull/79)
- Feature/60 info page - WIP  [`#76`](https://github.com/GNS-Science/kororaa/pull/76)
- Feature/55 map data download [`#74`](https://github.com/GNS-Science/kororaa/pull/74)
- fix cypress test for latlon; [`#73`](https://github.com/GNS-Science/kororaa/pull/73)
- fix fussy latlon; [`#72`](https://github.com/GNS-Science/kororaa/pull/72)
- add download csv function; [`#70`](https://github.com/GNS-Science/kororaa/pull/70)
- Feature/59 hazard map properties [`#69`](https://github.com/GNS-Science/kororaa/pull/69)
- Feature/58 Named Legend [`#66`](https://github.com/GNS-Science/kororaa/pull/66)
- update toshi nest to 3.1.1 [`#65`](https://github.com/GNS-Science/kororaa/pull/65)
- fix input bug; fix cypress tests; [`#56`](https://github.com/GNS-Science/kororaa/pull/56)
- Feature/40 gridded hazard map [`#48`](https://github.com/GNS-Science/kororaa/pull/48)
- Fix/latlon format [`#51`](https://github.com/GNS-Science/kororaa/pull/51)
- remove resolution; [`#50`](https://github.com/GNS-Science/kororaa/pull/50)
- change autoprefixer; [`#49`](https://github.com/GNS-Science/kororaa/pull/49)
- fix cypress tests; [`#47`](https://github.com/GNS-Science/kororaa/pull/47)
- Fix/latlon format [`#45`](https://github.com/GNS-Science/kororaa/pull/45)
- add new test deployment script; [`#46`](https://github.com/GNS-Science/kororaa/pull/46)
- Feature/23 hazard curve latlon [`#42`](https://github.com/GNS-Science/kororaa/pull/42)
- Feature/uncertainty spectra [`#38`](https://github.com/GNS-Science/kororaa/pull/38)
- Fix/cypress test update [`#37`](https://github.com/GNS-Science/kororaa/pull/37)
- Feature/hazard uncertainty [`#36`](https://github.com/GNS-Science/kororaa/pull/36)
- fix github actions; [`#35`](https://github.com/GNS-Science/kororaa/pull/35)
- Feature/cypress rebase [`#34`](https://github.com/GNS-Science/kororaa/pull/34)
- Feature/26 any poe [`#33`](https://github.com/GNS-Science/kororaa/pull/33)
- Feature/hazard curve improvements [`#28`](https://github.com/GNS-Science/kororaa/pull/28)
- Feature/hazard curves with api [`#22`](https://github.com/GNS-Science/kororaa/pull/22)
- add border to footer; grammar changes; [`#21`](https://github.com/GNS-Science/kororaa/pull/21)
- rupture sets page [`#20`](https://github.com/GNS-Science/kororaa/pull/20)
- Feature/13 hazard page improvements [`#15`](https://github.com/GNS-Science/kororaa/pull/15)
- Feature/9 hazard curves [`#12`](https://github.com/GNS-Science/kororaa/pull/12)
- Feature/3 landing page [`#6`](https://github.com/GNS-Science/kororaa/pull/6)

### Commits

- create react app [`7503457`](https://github.com/GNS-Science/kororaa/commit/7503457296c34bc74b9a3fd4354d548b66a1ef34)
- add named legend; update schema; add hazard model and resolution env; update msw data; fix cypress tests; [`8661b0a`](https://github.com/GNS-Science/kororaa/commit/8661b0a73d5de523c32173459a0548dce3dd2957)
- add hazard curves view [`f1c7af5`](https://github.com/GNS-Science/kororaa/commit/f1c7af5b484195e5bd57c786a6c6b1a46c6c2704)
