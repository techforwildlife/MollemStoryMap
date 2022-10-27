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
            title: 'Welcome to Mollem, Goa',
            image: './path/to/image/source.png',
            caption: 'Source image caption',
            website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            author: 'Rudo Kemper, Digital Democracy',
            legend: '<span style="font-size: 0.85em;"><em>Indigenous community names on the map courtesy of Native Land Digital</em></span>',
            description: '<p>Goa is home to a wealth of biodiversity found in its dense forests, meandering rivers and long stretches of coast. At the heart of Goa’s forests lies Mollem National Park and Bhagwan Mahavir Wildlife Sanctuary that connect the other protected areas along the UNESCO world heritage site that is the Western Ghats.<p><p>During the pandemic when physical distancing was mandated, The Ministry of Environment, Forests and Climate Change (MoEF&CC) adapted to the restrictions by use of technology, moving to virtual platforms for clearances of large infrastructure projects. Among these clearances were 3 infrastructure projects in Goa namely widening of railway line, highway road widening and laying of a power transmission line through Goa’s primary protected areas, Mollem National Park and Bhagwan Mahavir Wildlife Sanctuary. Over 147 scientists, lawyers, ecologists and artists wrote to the NBWL ( National Board for Wildlife) and the MoEF&CC expressing concern that the NHA4 highway report was shoddily done, transmission line EIA was not accessible in public domain and that there was a need to conduct a cumulative Environmental Impact Assessment of the impact of all three projects, that could not be looked at in isolation. The clearances sparked public outcry which led to the formulation of a citizen led campaign called Amche Mollem which was aimed at protecting the forests from the three projects. Two years on, due to the efforts of lawyers, ecologists, students, artists, planners, scientists, politicians and writers, the campaign has managed to stall the projects and demand the Goa Government formulate policies for the increased protection of the forests.<p> ',
            location: {
                center: [74.200, 15.440], 
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
                     layer: 'nh4a-expansion',
                     opacity: 0,
                     //duration: 5000
                 }
            ],
            onChapterExit: [
            ]
        },
        /*{
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
                 }
			],
            onChapterExit: []
        },*/
		{
            id: 'tlinesAll',
            alignment: 'right',
            hidden: false,
            title: 'Existing & Alternate Transmission Lines',
            image: './path/to/image/source.png',
            description: 'The Second large infrastructure project that was cleared during the lockdown was the 400k transmission line between Tamnar in Chhattisgarh and Goa. This was one of the first projects discovered by people on ground as Sterlite had cut more than 16,000 trees at a place called Sangod, to make way for a substation, which is a node through which the 400k transmission line would decentralise into other power lines across Goa. ( we can include an image of the tree cutting at Sangod). Visuals of the trees being cut resulted in much public outrage and also led to a case against the project proponents for the illegal destruction of the trees. Due to pressure from the citizen campaign as well as legal action by The Goa Foundation, the Central Empowered Committee of the Supreme Court strongly recommended that the new 400 k transmission line be constructed over the old 110 k and 220 k lines. This would mean that the new line would not cut through fresh forest but would instead be built on the old defunct lines as well as be built high enough so that they are above the forest canopy and therefore does not disturb the forest.',
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
                     layer: 'nh4a-expansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 
			],
            onChapterExit: []
        },
		
		{
            id: 'tlinesImpact',
            alignment: 'right',
            hidden: false,
            title: 'Impact of Expansion',
            image: './path/to/image/source.png',
            description: 'There is anecdotal evidence from villagers who live near the old 220 and 110 k transmission lines to say that the power lines were viewed as dangerous. On one account a villager stated that one of the local cattle was electrocuted as one power line snapped during a monsoon storm.</p><p>Villagers who have their fields below the lines fear for their lies and often prefer to not work in the fields that are below the line.The villagers fear that there will be an increase in risk with the development of the 400 k line which is also set to move through the villages bordering the sanctuary.</p><p>In another incident, an areca nut farmer stated that his entire farm as well as a few neighbouring farms will have to be cut down as the line would pass over their farms. The farmers would then have to apply for compensation from the government, however this compensation will not be able to support them financially as it does not compare to the value of their farms.</p>',
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
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'tline-alternate2',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'transline-villages',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'transmission-expansion',
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
                     layer: 'existingrail',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'nh4a-expansion',
                     opacity: 0,
                     //duration: 5000
                 },
			],
            onChapterExit: [
				{
                     layer: 'transline-villages',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'transmission-expansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 
				
				 
				 ]
        },
		
		{
            id: 'railways',
            alignment: 'right',
            hidden: false,
            title: 'Existing Railway Line',
            image: './path/to/image/source.png',
            description: '<p>CEC - comments stating that the railway expansion does not benefit goa ;</p> <p>Locals perspective on coal and why the expansion will encourage more coal evacuation and create more issues for the public </p>',
            location: {
                center: [74.281697, 15.333313],
                zoom: 11,
                pitch: 20,
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
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'existingrail',
                     opacity: 1,
                     //duration: 5000
                 },{
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
                     layer: 'transline-villages',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'transmission-expansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'proposedrailwayclearance',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railwayexpansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'nh4a-expansion',
                     opacity: 0,
                     //duration: 5000
                 },
			],
            onChapterExit: []
        },
		
		{
            id: 'ProposedRailwayClearance',
            alignment: 'right',
            hidden: false,
            title: 'Proposed Railway Clearance',
            image: './path/to/image/source.png',
            description: '<p>Why is there a new railway line proposed when there is an existing line?</p><p>Why has work started on one section of the railway line when they have not got clearance for the section in the forest</p>',
            location: {
                center: [74.281697, 15.333313],
                zoom: 11,
                pitch: 20,
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
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'existingrail',
                     opacity: 0.5,
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
                     layer: 'nh4a-expansion',
                     opacity: 0,
                     //duration: 5000
                 }
				 
			],
            onChapterExit: [
					
			]
        },
		
		{
            id: 'Railway Imapacted Villages',
            alignment: 'right',
            hidden: false,
            title: 'Impact of Railway Expansion',
            image: './path/to/image/source.png',
            description: 'Coal pollution, damage to properties, a lot of the houses that will be damaged for the line are heritage structures',
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
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'originalhighway',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railwayexpansion',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'existingrail',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'proposedrailwayclearance',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'railwayimpactedvillages',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'nh4a-expansion',
                     opacity: 0,
                     //duration: 5000
                 }
			],
            onChapterExit: [
				{
                     layer: 'railwayimpactedvillages',
                     opacity: 0,
                     //duration: 5000
                 },
				 /*{
                     layer: 'railwayexpansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'existingrail',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'proposedrailwayclearance',
                     opacity: 0,
                     //duration: 5000
                 }*/
				 
				 ]
        },
		
		
		{
            id: 'HighwayExpansion',
            alignment: 'left',
            hidden: false,
            title: 'Original Highway',
            image: './path/to/image/source.png',
            description: '<p>The state’s argument is that there are accidents and increase in traffic therefore the highway needs to be expanded. However MPT has made statements to the public stating that the highway expansion will help move coal from MPT to Karnataka Conclusion : Court update, project status right now</p>',
            location: {
                center: [74.248283, 15.408438],
                zoom: 12.5,
                pitch: 15,
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
                     layer: 'originalhighway',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'existingrail',
                     opacity: 0,
                     //duration: 5000
                 },
				 
				 
			],
            onChapterExit: [
				{
                     layer: 'nh4a-expansion',
                     opacity: 0.7,
                     //duration: 5000
                 },
				 {
                     layer: 'railwayexpansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 
				 ]
        },
		
		
		{
            id: 'HighwayExpansion',
            alignment: 'left',
            hidden: false,
            title: 'Proposed Highway expansion',
            image: './path/to/image/source.png',
            description: '<p>The state’s argument is that there are accidents and increase in traffic therefore the highway needs to be expanded. However MPT has made statements to the public stating that the highway expansion will help move coal from MPT to Karnataka Conclusion : Court update, project status right now</p>',
            location: {
                center: [74.248283, 15.408438],
                zoom: 12.5,
                pitch: 15,
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
                     layer: 'nh4a-expansion',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'originalhighway',
                     opacity: 0.5,
                     //duration: 5000
                 },
				 {
                     layer: 'existingrail',
                     opacity: 0,
                     //duration: 5000
                 },
				 
			],
            onChapterExit: [
				 {
                     layer: 'nh4a-expansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railwayexpansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 
				 ]
        },
		
		
		{
            id: 'Conclusion',
            alignment: 'right',
            hidden: false,
            title: 'Closing thoughts',
            image: './path/to/image/source.png',
            description: '<p>What is happening at Mollem now ? </p>',
            location: {
                center: [74.272112, 15.365910],
                zoom: 11,
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
                     layer: 'nh4a-expansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'originalhighway',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'existingrail',
                     opacity: 0,
                     //duration: 5000
                 }
			],
            onChapterExit: [
				{
                     layer: 'nh4a-expansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railwayexpansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 
				 ]
        }
    ]
};
