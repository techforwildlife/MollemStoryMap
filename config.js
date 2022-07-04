var config = {
    style: 'mapbox://styles/tfw-spatial/cl527ei6z000y14pnlfgi316e', //'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoidGZ3LXNwYXRpYWwiLCJhIjoiY2w0cGI4M2RnMGQzdzNkbXc0a2p2ajMzaCJ9.cQuQKFPJaSdwXxf44EIyPQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/  
    inset: true,
    legend: true, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    useCustomLayers: false, //set true for enabling custom layers from sources.js
    bookmarks: true,
    chapterReturn: true,
    title: 'The Story of Mollem, Goa',
    logo: '',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Source: source citations, etc.<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'NpBoundary',
            alignment: 'left',
            hidden: false,
            title: 'Intro to the Story of Mollem',
            image: './path/to/image/source.png',
            caption: 'Source image caption',
            website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            author: 'Rudo Kemper, Digital Democracy',
            legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: 'Lorem',
            location: {
                center: [74.272112, 15.365910],
                zoom: 10,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
			
                 {
                     layer: 'NPboundary',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'existingline',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate1',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate2',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate3',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railwayexpansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 
				 {
                     layer: 'proposedrailwayclearance',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railway-Impactedvillages',
                     opacity: 0.1,
                     //duration: 5000
                 },
				 {
                     layer: 'nh4a-expansion',
                     opacity: 0.1,
                     //duration: 5000
                 }
				 
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'existing Line',
            alignment: 'right',
            hidden: false,
            title: 'Existing Transmission Line',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [74.272112, 15.365910],
                zoom: 10,
                pitch: 30,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
			{
                     layer: 'NPboundary',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'existingline',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate1',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate2',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate3',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railwayexpansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'proposedrailwayclearance',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railway-Impactedvillages',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'nh4a-expansion',
                     opacity: 0,
                     //duration: 5000
                 }
			],
            onChapterExit: []
        },
		{
            id: 'tlinesAll',
            alignment: 'right',
            hidden: false,
            title: 'Alternate Transmission Lines',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [74.272112, 15.365910],
                zoom: 10,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
			{
                     layer: 'NPboundary',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'existingline',
                     opacity: 0.7,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate1',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate2',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate3',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'railwayexpansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'proposedrailwayclearance',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railway-Impactedvillages',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'nh4a-expansion',
                     opacity: 0,
                     //duration: 5000
                 }
			],
            onChapterExit: []
        },
		
		{
            id: 'railways',
            alignment: 'right',
            hidden: false,
            title: 'Railway Expansion',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [74.272112, 15.365910],
                zoom: 10,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
			{
                     layer: 'NPboundary',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'existingline',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate1',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate2',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate3',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railwayexpansion',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'proposedrailwayclearance',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railway-Impactedvillages',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'nh4a-expansion',
                     opacity: 0,
                     //duration: 5000
                 }
			],
            onChapterExit: []
        },
		
		{
            id: 'ProposedRailwayClearance',
            alignment: 'right',
            hidden: false,
            title: 'Proposed Railway Clearance',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [74.272112, 15.365910],
                zoom: 10,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
			{
                     layer: 'NPboundary',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'existingline',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate1',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate2',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate3',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railwayexpansion',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'proposedrailwayclearance',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'railway-Impactedvillages',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'nh4a-expansion',
                     opacity: 0,
                     //duration: 5000
                 }
			],
            onChapterExit: []
        },
		
		{
            id: 'Railway Imapacted Villages',
            alignment: 'right',
            hidden: false,
            title: 'Railway Impacted Villages',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [74.272112, 15.365910],
                zoom: 10,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
			{
                     layer: 'NPboundary',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'existingline',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate1',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate2',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate3',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railwayexpansion',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'proposedrailwayclearance',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'railway-Impactedvillages',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'nh4a-expansion',
                     opacity: 0,
                     //duration: 5000
                 }
			],
            onChapterExit: []
        }
    ]
};
