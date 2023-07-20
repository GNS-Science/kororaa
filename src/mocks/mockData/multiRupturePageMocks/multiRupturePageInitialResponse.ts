export const multiRupturePageInitialResponse = {
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
    section_count: null,
    fault_surfaces: null,
    fault_traces: null,
    color_scale: null,
    mfd_histogram: null,
  },
  SOLVIS_filter_ruptures: null,
};
