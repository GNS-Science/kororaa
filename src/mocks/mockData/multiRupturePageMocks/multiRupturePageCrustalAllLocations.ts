export const multiRupturePageCrustalAllLocations = {
  SOLVIS_locations_by_id: {
    edges: [],
  },
  textual_content: {
    ok: true,
    content: [
      {
        index: 'rupture_map.md',
        content_type: 'Markdown',
        text: 'Interrogate and view the ruptures in the inversion fault model (IFM) portion of the seismicity rate model (SRM).\n\nThe SRM includes both an IFM and a distributed seismicity model (DSM); this tool allows you to view the IFM portion of the SRM. The NSHM uses multiple IFMs in its logic tree; the ruptures shown here include all ruptures from all IFMs in the logic tree. Each IFM in the logic tree has a different subset of ruptures with different rates; the rupture rate shown is the weighed mean rate from the various branches of the logic tree.\n\n### Filters\n- Select a fault system from the list of "Crustal", "Hikurangi-Kermadec Interface", and "Puysegur Inteface".\n- The Crustal fault system can be filtered on specific faults in the fault model to get the subset of ruptures that those faults participate in. Select more than one fault to get all ruptures that any of the faults chosen participate in (the union of all ruptures). Filtering by fault is not possible for the subduction interface fault systems as they comprise only one fault.\n- Filter on location from a list of population centres. Select a Location and a Radius to get all ruptures that pass within a desired distance of a population centre (distance is calculated in three dimensions). Select multiple locations to get only the ruptures that are near all locations selected (the intersection of all ruptures).\n- Filter on magnitude and rupture rate. Rupture rates are given in powers of 10 per year.\n- After selecting filter options, click "SUBMIT" to display the ruptures that meet the filter criteria.\n\n### Display\n- The details drawn on the map can be changed using MAP OPTIONS\n\n### Animation\nThe ruptures can be viewed one at a time using the animation feature\n- Each rupture is highlighted in red, one at a time.\n- The play buttons and slider in the lower right can backup, play, advance, and change the rate of the animation.\n- The properties of the highlighted rupture are shown in the upper right.\n- The sorting of the animation can be controlled with ANIMATION OPTIONS. Weighted mean rate is described above. Maximum and minimum rate are the extrema rates for each rupture taken from all IFMs in the logic tree.\n\n### Downloads\nYou can download the map, fault traces, fault surfaces, and MFD data using the download icon',
        created: '2023-07-20T00:00:00',
        author: 'Chris DiCaprio',
        tags: ['help'],
        status: 'Draft',
      },
    ],
  },
  SOLVIS_filter_rupture_sections: {
    model_id: 'NSHM_v1.0.4',
    section_count: 2267,
    fault_surfaces:
    fault_traces:
    color_scale: {
      name: 'inferno',
      min_value: 3.0995778388387407e-7,
      max_value: 0.003938381094485521,
      color_map: {
        levels: [1e-7, 5e-7, 0.000001, 0.000005, 0.00001, 0.00005, 0.0001, 0.0005, 0.001],
        hexrgbs: ['#000004', '#360961', '#57106e', '#9d2964', '#bc3754', '#ef6c23', '#f98e09', '#f3e35a', '#fcffa4'],
      },
    },
    mfd_histogram: [
      {
        bin_center: 6.85,
        rate: 0,
        cumulative_rate: 0.0324946753680706,
      },
      {
        bin_center: 6.95,
        rate: 0.003841149853542447,
        cumulative_rate: 0.0324946753680706,
      },
      {
        bin_center: 7.05,
        rate: 0.0037209494039416313,
        cumulative_rate: 0.028653524816036224,
      },
      {
        bin_center: 7.15,
        rate: 0.0034665444400161505,
        cumulative_rate: 0.02493257448077202,
      },
      {
        bin_center: 7.25,
        rate: 0.0030693504959344864,
        cumulative_rate: 0.021466029807925224,
      },
      {
        bin_center: 7.35,
        rate: 0.002702896250411868,
        cumulative_rate: 0.018396679311990738,
      },
      {
        bin_center: 7.45,
        rate: 0.0023518793750554323,
        cumulative_rate: 0.0156937837600708,
      },
      {
        bin_center: 7.55,
        rate: 0.002059431280940771,
        cumulative_rate: 0.013341903686523438,
      },
      {
        bin_center: 7.65,
        rate: 0.0018265388207510114,
        cumulative_rate: 0.011282472871243954,
      },
      {
        bin_center: 7.75,
        rate: 0.0015748224686831236,
        cumulative_rate: 0.009455934166908264,
      },
      {
        bin_center: 7.85,
        rate: 0.001271285698749125,
        cumulative_rate: 0.007881111465394497,
      },
      {
        bin_center: 7.95,
        rate: 0.0011120419949293137,
        cumulative_rate: 0.006609825883060694,
      },
      {
        bin_center: 8.05,
        rate: 0.0012462051818147302,
        cumulative_rate: 0.00549778388813138,
      },
      {
        bin_center: 8.149999999999999,
        rate: 0.0011417982168495655,
        cumulative_rate: 0.004251578822731972,
      },
      {
        bin_center: 8.25,
        rate: 0.0010627260198816657,
        cumulative_rate: 0.0031097806058824062,
      },
      {
        bin_center: 8.350000000000001,
        rate: 0.0008592091035097837,
        cumulative_rate: 0.0020470544695854187,
      },
      {
        bin_center: 8.45,
        rate: 0.0006798077374696732,
        cumulative_rate: 0.001187845366075635,
      },
      {
        bin_center: 8.55,
        rate: 0.0005080376868136227,
        cumulative_rate: 0.0005080376868136227,
      },
      {
        bin_center: 8.649999999999999,
        rate: 0,
        cumulative_rate: 0,
      },
      {
        bin_center: 8.75,
        rate: 0,
        cumulative_rate: 0,
      },
      {
        bin_center: 8.850000000000001,
        rate: 0,
        cumulative_rate: 0,
      },
      {
        bin_center: 8.95,
        rate: 0,
        cumulative_rate: 0,
      },
      {
        bin_center: 9.05,
        rate: 0,
        cumulative_rate: 0,
      },
      {
        bin_center: 9.149999999999999,
        rate: 0,
        cumulative_rate: 0,
      },
      {
        bin_center: 9.25,
        rate: 0,
        cumulative_rate: 0,
      },
      {
        bin_center: 9.350000000000001,
        rate: 0,
        cumulative_rate: 0,
      },
      {
        bin_center: 9.45,
        rate: 0,
        cumulative_rate: 0,
      },
    ],
  },
  SOLVIS_filter_ruptures: {
    total_count: 3884,
    pageInfo: {
      hasNextPage: true,
      endCursor: 'UnVwdHVyZURldGFpbENvbm5lY3Rpb25DdXJzb3I6NA==',
    },
    edges: [
      {
        node: {
          fault_surfaces:
            '{"type": "FeatureCollection", "features": [{"id": "(\'CRU\', 3)", "type": "Feature", "properties": {"section": 0.0, "FaultID": 0, "FaultName": "Acton, Subsection 0", "DipDeg": 60.0, "Rake": 110.0, "LowDepth": 27.12, "UpDepth": 0.0, "DipDir": 94.3, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 1.1875, "ParentID": 0, "ParentName": "Acton", "SlipRateStdDev": 0.50237, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[168.3711, -45.4444], [168.3553, -45.4761], [168.3417, -45.4898], [168.3074, -45.5328], [168.3034301196987, -45.53676048160008], [168.50393362443276, -45.547143121527654], [168.50788937948298, -45.543182664176115], [168.54203620747322, -45.50018292722928], [168.55558747899514, -45.48648301095484], [168.5712748623881, -45.45478320452878], [168.3711, -45.4444]]]}}, {"id": "(\'CRU\', 3)", "type": "Feature", "properties": {"section": 1.0, "FaultID": 1, "FaultName": "Acton, Subsection 1", "DipDeg": 60.0, "Rake": 110.0, "LowDepth": 27.12, "UpDepth": 0.0, "DipDir": 94.3, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 0.955, "ParentID": 0, "ParentName": "Acton", "SlipRateStdDev": 0.48141, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[168.3034301196987, -45.53676048160008], [168.2742, -45.5659], [168.2716, -45.5758], [168.2652, -45.6055], [168.2838, -45.6272], [168.2858805213966, -45.63022990589321], [168.486718247026, -45.64061197254851], [168.48462686566214, -45.637582085268484], [168.46594913796005, -45.61588221851612], [168.47224289898907, -45.58618240072025], [168.4748075229571, -45.576282461412106], [168.50393362443276, -45.547143121527654], [168.3034301196987, -45.53676048160008]]]}}, {"id": "(\'CRU\', 3)", "type": "Feature", "properties": {"section": 2.0, "FaultID": 2, "FaultName": "Acton, Subsection 2", "DipDeg": 60.0, "Rake": 110.0, "LowDepth": 27.12, "UpDepth": 0.0, "DipDir": 94.3, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 0.625, "ParentID": 0, "ParentName": "Acton", "SlipRateStdDev": 0.4233, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[168.2858805213966, -45.63022990589321], [168.3506, -45.7243], [168.5517757626979, -45.734681487764526], [168.486718247026, -45.64061197254851], [168.2858805213966, -45.63022990589321]]]}}]}',
          magnitude: 7.238,
          rate_weighted_mean: 0.000010125880180567037,
          area: 1090,
          length: 35,
          id: 'Q29tcG9zaXRlUnVwdHVyZURldGFpbDpDUlU6Mw==',
          __typename: 'CompositeRuptureDetail',
        },
        cursor: 'UnVwdHVyZURldGFpbENvbm5lY3Rpb25DdXJzb3I6MA==',
      },
      {
        node: {
          fault_surfaces:
            '{"type": "FeatureCollection", "features": [{"id": "(\'CRU\', 9)", "type": "Feature", "properties": {"section": 3.0, "FaultID": 3, "FaultName": "Aka Aka, Subsection 0", "DipDeg": 65.0, "Rake": -90.0, "LowDepth": 18.56, "UpDepth": 0.0, "DipDir": 160.7, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 0.295, "ParentID": 1, "ParentName": "Aka Aka", "SlipRateStdDev": 0.06518, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[174.8284, -37.2605], [174.8494, -37.2555], [174.8688, -37.2523], [174.8748529786847, -37.25034774563085], [174.90720244482776, -37.32380242434063], [174.90115030659854, -37.3257546783986], [174.88175168439054, -37.328954677888504], [174.8607538376275, -37.333954677091405], [174.8284, -37.2605]]]}}, {"id": "(\'CRU\', 9)", "type": "Feature", "properties": {"section": 4.0, "FaultID": 4, "FaultName": "Aka Aka, Subsection 1", "DipDeg": 65.0, "Rake": -90.0, "LowDepth": 18.56, "UpDepth": 0.0, "DipDir": 160.7, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 0.295, "ParentID": 1, "ParentName": "Aka Aka", "SlipRateStdDev": 0.06518, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[174.8748529786847, -37.25034774563085], [174.8843, -37.2473], [174.8938, -37.239], [174.9173, -37.2353], [174.9496429907373, -37.30875468110776], [174.92614458248883, -37.31245468051821], [174.91664815423547, -37.320754679195545], [174.90720244482776, -37.32380242434063], [174.8748529786847, -37.25034774563085]]]}}, {"id": "(\'CRU\', 9)", "type": "Feature", "properties": {"section": 1575.0, "FaultID": 1575, "FaultName": "Pokeno, Subsection 1", "DipDeg": 65.0, "Rake": -90.0, "LowDepth": 18.080000000000002, "UpDepth": 0.0, "DipDir": 157.5, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 0.49, "ParentID": 365, "ParentName": "Pokeno", "SlipRateStdDev": 0.2573, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[175.02668777454195, -37.22123262742281], [175.0135, -37.2253], [174.9986, -37.2319], [174.9812, -37.2429], [174.9562, -37.253], [174.932, -37.2665], [174.96849308002888, -37.336543227096705], [174.99268652326379, -37.32304322983451], [175.01768162069686, -37.31294323188214], [175.03507628405546, -37.30194323411162], [175.04997308346518, -37.29534323544898], [175.06315888610467, -37.29127586369586], [175.02668777454195, -37.22123262742281]]]}}, {"id": "(\'CRU\', 9)", "type": "Feature", "properties": {"section": 1574.0, "FaultID": 1574, "FaultName": "Pokeno, Subsection 0", "DipDeg": 65.0, "Rake": -90.0, "LowDepth": 18.080000000000002, "UpDepth": 0.0, "DipDir": 157.5, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 0.47, "ParentID": 365, "ParentName": "Pokeno", "SlipRateStdDev": 0.18133, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[175.1313, -37.1954], [175.1112, -37.196], [175.0721, -37.2118], [175.0336, -37.2191], [175.02668777454195, -37.22123262742281], [175.06315888610467, -37.29127586369586], [175.07007007780248, -37.28914323670508], [175.1085665400593, -37.28184323818378], [175.14765888740234, -37.266043241383265], [175.16775859691307, -37.26544324150474], [175.1313, -37.1954]]]}}, {"id": "(\'CRU\', 9)", "type": "Feature", "properties": {"section": 1102.0, "FaultID": 1102, "FaultName": "Mangatangi, Subsection 0", "DipDeg": 65.0, "Rake": -90.0, "LowDepth": 17.84, "UpDepth": 0.0, "DipDir": 130.0, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 1.095, "ParentID": 249, "ParentName": "Mangatangi", "SlipRateStdDev": 0.28412, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[175.145, -37.2193], [175.1629, -37.2092], [175.1804, -37.1843], [175.1901, -37.1595], [175.1941117608825, -37.15445838844542], [175.2660646659674, -37.20252605425871], [175.26205771186574, -37.20756766183753], [175.25238137418725, -37.23236764227283], [175.23490516115936, -37.25726762261625], [175.21701481805073, -37.26736761463938], [175.145, -37.2193]]]}}, {"id": "(\'CRU\', 9)", "type": "Feature", "properties": {"section": 1103.0, "FaultID": 1103, "FaultName": "Mangatangi, Subsection 1", "DipDeg": 65.0, "Rake": -90.0, "LowDepth": 17.84, "UpDepth": 0.0, "DipDir": 130.0, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 0.465, "ParentID": 249, "ParentName": "Mangatangi", "SlipRateStdDev": 0.22648, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[175.1941117608825, -37.15445838844542], [175.201, -37.1458], [175.2347, -37.1227], [175.2469, -37.1171], [175.272, -37.1106], [175.3439111401118, -37.15866770037713], [175.31881732413865, -37.16516769525716], [175.30662265351086, -37.17076769084539], [175.2729446527892, -37.19386767263995], [175.2660646659674, -37.20252605425871], [175.1941117608825, -37.15445838844542]]]}}, {"id": "(\'CRU\', 9)", "type": "Feature", "properties": {"section": 921.0, "FaultID": 921, "FaultName": "Kerepehi Offshore, Subsection 1", "DipDeg": 60.0, "Rake": -110.0, "LowDepth": 17.84, "UpDepth": 0.0, "DipDir": 259.9, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 0.77, "ParentID": 201, "ParentName": "Kerepehi Offshore", "SlipRateStdDev": 0.21023, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[175.43308507537145, -37.14560121390134], [175.4161, -37.07920000000001], [175.30176922230962, -37.095389246965055], [175.31865394062166, -37.16179032855175], [175.43308507537145, -37.14560121390134]]]}}, {"id": "(\'CRU\', 9)", "type": "Feature", "properties": {"section": 920.0, "FaultID": 920, "FaultName": "Kerepehi Offshore, Subsection 0", "DipDeg": 60.0, "Rake": -110.0, "LowDepth": 17.84, "UpDepth": 0.0, "DipDir": 259.9, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 0.63, "ParentID": 201, "ParentName": "Kerepehi Offshore", "SlipRateStdDev": 0.20987, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[175.4501, -37.212], [175.43308507537145, -37.14560121390134], [175.31865394062166, -37.16179032855175], [175.33556818157942, -37.228188982107966], [175.4501, -37.212]]]}}]}',
          magnitude: 7.286,
          rate_weighted_mean: 0.00003237532655475661,
          area: 1219,
          length: 61,
          id: 'Q29tcG9zaXRlUnVwdHVyZURldGFpbDpDUlU6OQ==',
          __typename: 'CompositeRuptureDetail',
        },
        cursor: 'UnVwdHVyZURldGFpbENvbm5lY3Rpb25DdXJzb3I6MQ==',
      },
      {
        node: {
          fault_surfaces:
            '{"type": "FeatureCollection", "features": [{"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 5.0, "FaultID": 5, "FaultName": "Akatarawa, Subsection 0", "DipDeg": 75.0, "Rake": 160.0, "LowDepth": 20.0, "UpDepth": 0.0, "DipDir": 299.6, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 1.525, "ParentID": 2, "ParentName": "Akatarawa", "SlipRateStdDev": 0.58208, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[175.0372, -41.1225], [175.0698, -41.1007], [175.08914675459422, -41.07156421641177], [175.03358204398168, -41.04774561448366], [175.0142106677956, -41.07688138436491], [174.9815922217239, -41.098681374101105], [175.0372, -41.1225]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 6.0, "FaultID": 6, "FaultName": "Akatarawa, Subsection 1", "DipDeg": 75.0, "Rake": 160.0, "LowDepth": 20.0, "UpDepth": 0.0, "DipDir": 299.6, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 1.525, "ParentID": 2, "ParentName": "Akatarawa", "SlipRateStdDev": 0.58208, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[175.08914675459422, -41.07156421641177], [175.1132, -41.0353], [175.1189, -41.010799999999996], [175.06338652275326, -40.98698142661951], [175.05766588445752, -41.011481415115504], [175.03358204398168, -41.04774561448366], [175.08914675459422, -41.07156421641177]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1469.0, "FaultID": 1469, "FaultName": "Otaki Forks: 1, Subsection 0", "DipDeg": 75.0, "Rake": 160.0, "LowDepth": 20.560000000000002, "UpDepth": 0.0, "DipDir": 301.6, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 2.975, "ParentID": 338, "ParentName": "Otaki Forks: 1", "SlipRateStdDev": 0.60991, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[175.1189, -41.0108], [175.1463, -40.9964], [175.17461037556177, -40.94956491647533], [175.1187623471888, -40.923591140226875], [175.09041234727022, -40.970426201486696], [175.06300014547898, -40.98482619463476], [175.1189, -41.0108]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1470.0, "FaultID": 1470, "FaultName": "Otaki Forks: 1, Subsection 1", "DipDeg": 75.0, "Rake": 160.0, "LowDepth": 20.560000000000002, "UpDepth": 0.0, "DipDir": 301.6, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 3.125, "ParentID": 338, "ParentName": "Otaki Forks: 1", "SlipRateStdDev": 0.70711, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[175.17461037556177, -40.94956491647533], [175.1927, -40.9196], [175.225, -40.8833], [175.1692078748817, -40.85732625519925], [175.13687727413017, -40.893626237979966], [175.1187623471888, -40.923591140226875], [175.17461037556177, -40.94956491647533]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1473.0, "FaultID": 1473, "FaultName": "Otaki Forks: 2, Subsection 2", "DipDeg": 90.0, "Rake": 180.0, "LowDepth": 19.28, "UpDepth": 0.0, "DipDir": 130.8, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 4.275, "ParentID": 339, "ParentName": "Otaki Forks: 2", "SlipRateStdDev": 0.60743, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "LineString", "coordinates": [[175.30861846572114, -40.827154653201475], [175.2823, -40.8508], [175.24, -40.8716], [175.22500000000002, -40.88329999999999]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1472.0, "FaultID": 1472, "FaultName": "Otaki Forks: 2, Subsection 1", "DipDeg": 90.0, "Rake": 180.0, "LowDepth": 19.28, "UpDepth": 0.0, "DipDir": 130.8, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 4.225, "ParentID": 339, "ParentName": "Otaki Forks: 2", "SlipRateStdDev": 0.62674, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "LineString", "coordinates": [[175.37311445715193, -40.757646209136226], [175.3497, -40.7902], [175.30861846572114, -40.827154653201475]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1471.0, "FaultID": 1471, "FaultName": "Otaki Forks: 2, Subsection 0", "DipDeg": 90.0, "Rake": 180.0, "LowDepth": 19.28, "UpDepth": 0.0, "DipDir": 130.8, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 4.175, "ParentID": 339, "ParentName": "Otaki Forks: 2", "SlipRateStdDev": 0.64605, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "LineString", "coordinates": [[175.4392, -40.6889], [175.3891, -40.7354], [175.37311445715193, -40.757646209136226]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 2214.0, "FaultID": 2214, "FaultName": "Wellington: Pahiatua, Subsection 4", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 20.880000000000003, "UpDepth": 0.0, "DipDir": 303.4, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 4.825, "ParentID": 533, "ParentName": "Wellington: Pahiatua", "SlipRateStdDev": 0.64129, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[175.58233806967502, -40.62567600891539], [175.52800000000002, -40.689999999999955], [175.4915547439819, -40.67176765774802], [175.54592791494318, -40.60744367966399], [175.58233806967502, -40.62567600891539]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 2213.0, "FaultID": 2213, "FaultName": "Wellington: Pahiatua, Subsection 3", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 20.880000000000003, "UpDepth": 0.0, "DipDir": 303.4, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 4.9917, "ParentID": 533, "ParentName": "Wellington: Pahiatua", "SlipRateStdDev": 0.65247, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[175.62795905160928, -40.557732853257555], [175.6148, -40.5761], [175.5932, -40.6128], [175.58233806967502, -40.62567600891539], [175.54592791494318, -40.60744367966399], [175.55679685801377, -40.59456767334796], [175.57841682128407, -40.55786768075136], [175.5915858500356, -40.539500537711], [175.62795905160928, -40.557732853257555]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 2212.0, "FaultID": 2212, "FaultName": "Wellington: Pahiatua, Subsection 2", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 20.880000000000003, "UpDepth": 0.0, "DipDir": 303.4, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 5.325, "ParentID": 533, "ParentName": "Wellington: Pahiatua", "SlipRateStdDev": 0.68404, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[175.68105161924245, -40.49297422187355], [175.6702, -40.5074], [175.6413, -40.5391], [175.62795905160928, -40.557732853257555], [175.5915858500356, -40.539500537711], [175.604936910495, -40.52086768820703], [175.63385409237515, -40.489167694588204], [175.64471352155158, -40.47474191936365], [175.68105161924245, -40.49297422187355]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 2211.0, "FaultID": 2211, "FaultName": "Wellington: Pahiatua, Subsection 1", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 20.880000000000003, "UpDepth": 0.0, "DipDir": 303.4, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 5.325, "ParentID": 533, "ParentName": "Wellington: Pahiatua", "SlipRateStdDev": 0.7025, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[175.73392509292535, -40.42817117416799], [175.7165, -40.4458], [175.68105161924245, -40.49297422187355], [175.64471352155158, -40.47474191936365], [175.68018740235587, -40.42756770697098], [175.69762200905322, -40.40993888467854], [175.73392509292535, -40.42817117416799]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 2210.0, "FaultID": 2210, "FaultName": "Wellington: Pahiatua, Subsection 0", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 20.880000000000003, "UpDepth": 0.0, "DipDir": 303.4, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 5.925, "ParentID": 533, "ParentName": "Wellington: Pahiatua", "SlipRateStdDev": 0.73378, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[175.7942, -40.3671], [175.73392509292535, -40.42817117416799], [175.69762200905322, -40.40993888467854], [175.75792980944306, -40.348867722758236], [175.7942, -40.3671]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1190.0, "FaultID": 1190, "FaultName": "Mohaka: South, Subsection 0", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 22.240000000000002, "UpDepth": 0.0, "DipDir": 301.5, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 6.05, "ParentID": 269, "ParentName": "Mohaka: South", "SlipRateStdDev": 1.0736, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[175.7942, -40.3671], [175.827, -40.3378], [175.87215100755003, -40.287526389272], [175.83274162756234, -40.26909276435021], [175.78756128965264, -40.31936636317711], [175.75474416143993, -40.34866635623284], [175.7942, -40.3671]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1191.0, "FaultID": 1191, "FaultName": "Mohaka: South, Subsection 1", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 22.240000000000002, "UpDepth": 0.0, "DipDir": 301.5, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 5.8167, "ParentID": 269, "ParentName": "Mohaka: South", "SlipRateStdDev": 1.0603, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[175.87215100755003, -40.287526389272], [175.8911, -40.2664], [175.9358, -40.2303], [175.95286581293553, -40.20993651817644], [175.91350155506902, -40.19150291158756], [175.8964239168121, -40.2118663886037], [175.8517029233953, -40.247966380074104], [175.83274162756234, -40.26909276435021], [175.87215100755003, -40.287526389272]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1192.0, "FaultID": 1192, "FaultName": "Mohaka: South, Subsection 2", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 22.240000000000002, "UpDepth": 0.0, "DipDir": 301.5, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 5.6, "ParentID": 269, "ParentName": "Mohaka: South", "SlipRateStdDev": 1.0639, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[175.95286581293553, -40.20993651817644], [175.9601, -40.2013], [175.9707, -40.181], [175.9866, -40.1621], [176.01778995227204, -40.12408889469149], [175.97847541462784, -40.10565530833782], [175.94726347392523, -40.143666404693015], [175.93135252516296, -40.16256640023748], [175.92074075381873, -40.18286639544915], [175.91350155506902, -40.19150291158756], [175.95286581293553, -40.20993651817644]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1193.0, "FaultID": 1193, "FaultName": "Mohaka: South, Subsection 3", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 22.240000000000002, "UpDepth": 0.0, "DipDir": 301.5, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 5.7, "ParentID": 269, "ParentName": "Mohaka: South", "SlipRateStdDev": 0.91433, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.01778995227204, -40.12408889469149], [176.0603, -40.0722], [176.0825839407859, -40.038008264965995], [176.0433190439643, -40.01957469885127], [176.0210154111799, -40.05376642585237], [175.97847541462784, -40.10565530833782], [176.01778995227204, -40.12408889469149]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1194.0, "FaultID": 1194, "FaultName": "Mohaka: South, Subsection 4", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 22.240000000000002, "UpDepth": 0.0, "DipDir": 301.5, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 5.8, "ParentID": 269, "ParentName": "Mohaka: South", "SlipRateStdDev": 0.89689, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.0825839407859, -40.038008264965995], [176.0975, -40.0151], [176.14996506295185, -39.95315213159975], [176.1107488917386, -39.93471858538615], [176.05824827784588, -39.99666643926277], [176.0433190439643, -40.01957469885127], [176.0825839407859, -40.038008264965995]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1195.0, "FaultID": 1195, "FaultName": "Mohaka: South, Subsection 5", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 22.240000000000002, "UpDepth": 0.0, "DipDir": 301.5, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 6.0167, "ParentID": 269, "ParentName": "Mohaka: South", "SlipRateStdDev": 0.86775, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.14996506295185, -39.95315213159975], [176.155, -39.9472], [176.1912, -39.8983], [176.21157449805304, -39.86573817978839], [176.17240830517372, -39.84730465402424], [176.1520152156746, -39.8798664666245], [176.11578723882107, -39.92876645518049], [176.1107488917386, -39.93471858538615], [176.14996506295185, -39.95315213159975]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1692.0, "FaultID": 1692, "FaultName": "Ruahine: Central, Subsection 0", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 24.880000000000003, "UpDepth": 0.0, "DipDir": 297.2, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 3.1, "ParentID": 406, "ParentName": "Ruahine: Central", "SlipRateStdDev": 1.1277, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.1543, -39.8986], [176.1807, -39.8154], [176.18905165275456, -39.80367374603999], [176.14338737713055, -39.78563075944201], [176.13502793949476, -39.797357009677135], [176.1085725729087, -39.880556983211946], [176.1543, -39.8986]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1693.0, "FaultID": 1693, "FaultName": "Ruahine: Central, Subsection 1", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 24.880000000000003, "UpDepth": 0.0, "DipDir": 297.2, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 3.6, "ParentID": 406, "ParentName": "Ruahine: Central", "SlipRateStdDev": 1.133, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.18905165275456, -39.80367374603999], [176.245, -39.725], [176.25076221482104, -39.716780783481894], [176.2051554840474, -39.698737824446155], [176.19938783675354, -39.70695703836013], [176.14338737713055, -39.78563075944201], [176.18905165275456, -39.80367374603999]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1694.0, "FaultID": 1694, "FaultName": "Ruahine: Central, Subsection 2", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 24.880000000000003, "UpDepth": 0.0, "DipDir": 297.2, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 3.85, "ParentID": 406, "ParentName": "Ruahine: Central", "SlipRateStdDev": 1.1396, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.25076221482104, -39.716780783481894], [176.31176718056497, -39.62962561916156], [176.26621791767454, -39.61158268770161], [176.2051554840474, -39.698737824446155], [176.25076221482104, -39.716780783481894]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1695.0, "FaultID": 1695, "FaultName": "Ruahine: Central, Subsection 3", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 24.880000000000003, "UpDepth": 0.0, "DipDir": 297.2, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 4.25, "ParentID": 406, "ParentName": "Ruahine: Central", "SlipRateStdDev": 1.0577, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.31176718056497, -39.62962561916156], [176.315, -39.625], [176.3622, -39.5386], [176.31671049042998, -39.52055709726643], [176.26945378013372, -39.60695707000166], [176.26621791767454, -39.61158268770161], [176.31176718056497, -39.62962561916156]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1700.0, "FaultID": 1700, "FaultName": "Ruahine: North, Subsection 4", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 26.0, "UpDepth": 0.0, "DipDir": 293.2, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 5.8125, "ParentID": 407, "ParentName": "Ruahine: North", "SlipRateStdDev": 0.78995, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.41410529741052, -39.43725873840457], [176.405, -39.46], [176.3622, -39.5386], [176.3130730534155, -39.522347683716205], [176.35592854370745, -39.44374771257618], [176.3650498554875, -39.42100645931861], [176.41410529741052, -39.43725873840457]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1699.0, "FaultID": 1699, "FaultName": "Ruahine: North, Subsection 3", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 26.0, "UpDepth": 0.0, "DipDir": 293.2, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 5.5625, "ParentID": 407, "ParentName": "Ruahine: North", "SlipRateStdDev": 0.84702, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.45313049590402, -39.3326236551515], [176.4513, -39.3442], [176.41410529741052, -39.43725873840457], [176.3650498554875, -39.42100645931861], [176.4023099008484, -39.32794775497659], [176.40414850407532, -39.31637141435909], [176.45313049590402, -39.3326236551515]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1698.0, "FaultID": 1698, "FaultName": "Ruahine: North, Subsection 2", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 26.0, "UpDepth": 0.0, "DipDir": 293.2, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 4.9417, "ParentID": 407, "ParentName": "Ruahine: North", "SlipRateStdDev": 0.83379, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.4965248101446, -39.22968423732109], [176.4596, -39.2978], [176.4556, -39.317], [176.45313049590402, -39.3326236551515], [176.40414850407532, -39.31637141435909], [176.40662894254584, -39.30074776491557], [176.4106423681934, -39.28154777192667], [176.4476147048543, -39.213432034090026], [176.4965248101446, -39.22968423732109]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1697.0, "FaultID": 1697, "FaultName": "Ruahine: North, Subsection 1", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 26.0, "UpDepth": 0.0, "DipDir": 293.2, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 4.2167, "ParentID": 407, "ParentName": "Ruahine: North", "SlipRateStdDev": 0.69511, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.55773515162926, -39.131588235359075], [176.5576, -39.1319], [176.516, -39.1937], [176.4965248101446, -39.22968423732109], [176.4476147048543, -39.213432034090026], [176.46711493694445, -39.17744780987317], [176.5087578402385, -39.11564783234736], [176.5088932079686, -39.11533606781971], [176.55773515162926, -39.131588235359075]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1696.0, "FaultID": 1696, "FaultName": "Ruahine: North, Subsection 0", "DipDeg": 80.0, "Rake": 160.0, "LowDepth": 26.0, "UpDepth": 0.0, "DipDir": 293.2, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 3.6, "ParentID": 407, "ParentName": "Ruahine: North", "SlipRateStdDev": 0.67752, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.6195, -39.0343], [176.5748, -39.0922], [176.55773515162926, -39.131588235359075], [176.5088932079686, -39.11533606781971], [176.5259853314487, -39.07594784676389], [176.57072532829756, -39.01804786776043], [176.6195, -39.0343]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1872.0, "FaultID": 1872, "FaultName": "Te Whaiti South, Subsection 0", "DipDeg": 80.0, "Rake": -160.0, "LowDepth": 22.480000000000004, "UpDepth": 0.0, "DipDir": 289.0, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 1.1, "ParentID": 450, "ParentName": "Te Whaiti South", "SlipRateStdDev": 0.80806, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.5969, -38.9521], [176.6325, -38.9252], [176.66092087207755, -38.88074922844935], [176.61763006141462, -38.86913553124328], [176.58918208910083, -38.91358629009792], [176.55356565985807, -38.94048628240703], [176.5969, -38.9521]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1873.0, "FaultID": 1873, "FaultName": "Te Whaiti South, Subsection 1", "DipDeg": 80.0, "Rake": -160.0, "LowDepth": 22.480000000000004, "UpDepth": 0.0, "DipDir": 289.0, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 1.2, "ParentID": 450, "ParentName": "Te Whaiti South", "SlipRateStdDev": 0.76656, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.66092087207755, -38.88074922844935], [176.6766, -38.8562], [176.68333638342415, -38.79558918994038], [176.64009732494185, -38.783975517013396], [176.63332413053917, -38.84458630979887], [176.61763006141462, -38.86913553124328], [176.66092087207755, -38.88074922844935]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1874.0, "FaultID": 1874, "FaultName": "Te Whaiti South, Subsection 2", "DipDeg": 80.0, "Rake": -160.0, "LowDepth": 22.480000000000004, "UpDepth": 0.0, "DipDir": 289.0, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 1.15, "ParentID": 450, "ParentName": "Te Whaiti South", "SlipRateStdDev": 0.78744, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.68333638342415, -38.79558918994038], [176.6855, -38.7761], [176.70640666650075, -38.70937097610474], [176.66321978028432, -38.69775732769952], [176.64227275438148, -38.764486332621225], [176.64009732494185, -38.783975517013396], [176.68333638342415, -38.79558918994038]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1875.0, "FaultID": 1875, "FaultName": "Te Whaiti South, Subsection 3", "DipDeg": 80.0, "Rake": -160.0, "LowDepth": 22.480000000000004, "UpDepth": 0.0, "DipDir": 289.0, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 0.9625, "ParentID": 450, "ParentName": "Te Whaiti South", "SlipRateStdDev": 0.74393, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.70640666650075, -38.70937097610474], [176.713, -38.6883], [176.75610141254708, -38.63087140557174], [176.71296183365797, -38.61925777944162], [176.66982583023238, -38.67668635757868], [176.66321978028432, -38.69775732769952], [176.70640666650075, -38.70937097610474]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1876.0, "FaultID": 1876, "FaultName": "Te Whaiti South, Subsection 4", "DipDeg": 80.0, "Rake": -160.0, "LowDepth": 22.480000000000004, "UpDepth": 0.0, "DipDir": 289.0, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 0.9625, "ParentID": 450, "ParentName": "Te Whaiti South", "SlipRateStdDev": 0.68448, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.75610141254708, -38.63087140557174], [176.788, -38.5883], [176.7916214400035, -38.549480445679855], [176.7485307162933, -38.537866842593864], [176.74488599939255, -38.57668638592959], [176.71296183365797, -38.61925777944162], [176.75610141254708, -38.63087140557174]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1877.0, "FaultID": 1877, "FaultName": "Te Whaiti South, Subsection 5", "DipDeg": 80.0, "Rake": -160.0, "LowDepth": 22.480000000000004, "UpDepth": 0.0, "DipDir": 289.0, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 1.6, "ParentID": 450, "ParentName": "Te Whaiti South", "SlipRateStdDev": 0.766, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.7916214400035, -38.549480445679855], [176.7934, -38.5304], [176.7762, -38.462600000000016], [176.73316120887435, -38.450986421454935], [176.7503207008088, -38.51878640230869], [176.7485307162933, -38.537866842593864], [176.7916214400035, -38.549480445679855]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1870.0, "FaultID": 1870, "FaultName": "Te Whaiti North, Subsection 0", "DipDeg": 65.0, "Rake": -110.0, "LowDepth": 16.080000000000002, "UpDepth": 0.0, "DipDir": 312.2, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 1.45, "ParentID": 449, "ParentName": "Te Whaiti North", "SlipRateStdDev": 0.72843, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.7762, -38.4626], [176.7869, -38.4412], [176.79856529287963, -38.43278672513382], [176.7348336190309, -38.38747325900749], [176.7231609106228, -38.39588652866832], [176.71244203451334, -38.4172865154225], [176.7762, -38.4626]]]}}, {"id": "(\'CRU\', 55)", "type": "Feature", "properties": {"section": 1871.0, "FaultID": 1871, "FaultName": "Te Whaiti North, Subsection 1", "DipDeg": 65.0, "Rake": -110.0, "LowDepth": 16.080000000000002, "UpDepth": 0.0, "DipDir": 312.2, "AseismicSlipFactor": 0.0, "CouplingCoeff": 1.0, "SlipRate": 1.45, "ParentID": 449, "ParentName": "Te Whaiti North", "SlipRateStdDev": 0.72843, "stroke-color": "black", "stroke-opacity": 1.0, "stroke-width": 1}, "geometry": {"type": "Polygon", "coordinates": [[[176.79856529287963, -38.43278672513382], [176.8318, -38.40880000000001], [176.76808945123582, -38.36348654870782], [176.7348336190309, -38.38747325900749], [176.79856529287963, -38.43278672513382]]]}}]}',
          magnitude: 8.093,
          rate_weighted_mean: 0.00001531651651021093,
          area: 7809,
          length: 340,
          id: 'Q29tcG9zaXRlUnVwdHVyZURldGFpbDpDUlU6NTU=',
          __typename: 'CompositeRuptureDetail',
        },
        cursor: 'UnVwdHVyZURldGFpbENvbm5lY3Rpb25DdXJzb3I6Mg==',
      },
      {
        node: {
          fault_surfaces:
          magnitude: 8.198,
          rate_weighted_mean: 1.8265446044551936e-8,
          area: 9947,
          length: 455,
          id: 'Q29tcG9zaXRlUnVwdHVyZURldGFpbDpDUlU6MTQw',
          __typename: 'CompositeRuptureDetail',
        },
        cursor: 'UnVwdHVyZURldGFpbENvbm5lY3Rpb25DdXJzb3I6Mw==',
      },
      {
        node: {
          fault_surfaces:
          magnitude: 8.225,
          rate_weighted_mean: 0.000005750140189775266,
          area: 10596,
          length: 483,
          id: 'Q29tcG9zaXRlUnVwdHVyZURldGFpbDpDUlU6MTQy',
          __typename: 'CompositeRuptureDetail',
        },
        cursor: 'UnVwdHVyZURldGFpbENvbm5lY3Rpb25DdXJzb3I6NA==',
      },
    ],
  },
};