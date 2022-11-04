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
    theme: 'light',
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
            id: 'Goa Boundary',
            alignment: 'left',
            hidden: false,
            title: 'Goa',
            image: './path/to/image/source.png',
            description: 'Goa is home to a wealth of biodiversity, in its dense forests, meandering rivers and long coastal stretches. At the heart of Goa’s forests lie Mollem National Park and Bhagwan Mahavir Wildlife Sanctuary, together known  simply as Mollem. They are a vital piece connecting the other protected areas that comprise the UNESCO world heritage site that is the Western Ghats. ',
            location: {
                center: [73.971999, 15.574664],
                zoom: 8,
                pitch: 10,
                bearing: 5,
				dragPan: false
            },
            //mapAnimation: 'flyTo',
            //rotateAnimation: false,
            //mapInteractive: false,
            //callback: '',
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
                     layer: '3translines',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'sangod',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'goabounds',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'originalhighway',
                     opacity: 0,
                     //duration: 5000
                 }
			],
            onChapterExit: []
        },
        {
            id: 'NpBoundary',
            alignment: 'left',
            hidden: false,
            title: 'Welcome to Mollem, Goa',
            image: './path/to/image/source.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>LEGEND can be added here</em></span>',
			legend: '<span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #906837; "></span><span>  Proposed Transmission Lines</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #e4e021; "></span><span>  Railway Expansion</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #171d16; "></span><span>  Highway Expansion</span>',
            description: '<p>At the start of the pandemic, the Ministry of Environment, Forests and Climate Change (MoEF&CC) provided forest clearance permission to <a href="https://indianexpress.com/article/india/railway-line-to-road-centre-clears-3-projects-goa-board-says-we-were-used-as-puppets-6487716/" target="_blank">three distinct linear infrastructure projects in Goa</a> that cut through Mollem. These projects consisted of laying an additional track along an existing railway line, the widening of an existing highway and the laying of a new power transmission line through pristine forest. Together, these three projects would result in the fragmentation of this critically important part of the Western Ghats.</p><p> <a href = "https://www.thecitizen.in/index.php/en/NewsDetail/index/13/19098/Mollem:-Lawyers-Highlight-Illegalities-Contradictions-in-Clearances-to-Infra-Projects--" target="_blank">Over 147 scientists, lawyers, ecologists and artists wrote to the National Board for Wildlife (NBWL)  and the MoEF&CC</a>, expressing their concern about the individual and cumulative impact of these projects on Mollem, on Goa and on the Western Ghats. In addition, the provision of these clearances by the government sparked a public outcry which culminated in the formulation of the <a href="https://www.instagram.com/mymollem.goa/?hl=en" target="_blank">Amche Mollem</a> campaign, whose mission was to protect Goa’s forests, and Goa’s future, from these three ill-planned projects. Two years after the initiation of the campaign, the combined efforts of lawyers, ecologists, students, artists, planners, scientists, politicians and writers has resulted in a <a href="https://www.heraldgoa.in/News-Today/Supreme-Court-cancels-NBWL-clearance-for-Railway-Double-Tracking/189502" target="_blank">halt to these projects</a>.</p> ',
            location: {
                center: [74.219466, 15.361643], 
                zoom: 10.5,
                pitch: 15,
                bearing: 0
            },
            //mapAnimation: 'flyTo',
            //rotateAnimation: false,
            //spinGlobe: false,
            //mapInteractive: false,
            //callback: '',
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
                     layer: '3translines',
                     opacity: 1,
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
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'sangod',
                     opacity: 0,
                     //duration: 5000
                 }
            ],
            onChapterExit: [
				
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
            ]
        },
        
		{
            id: 'tlinesAll',
            alignment: 'left',
            hidden: false,
            title: 'Existing & Alternate Transmission Lines',
            image: 'D:/MollemMaps&Story/Mollem/mapbox-storytelling-upgraded-main/src/images/Sangod.png',
            legend: '<span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #171d16; "></span><span>  Existing Transmission Line</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #906837; "></span><span>  Proposed transmission Lines</span>',
			description: 'The first project of the three projects discovered by the people on ground in Goa was the 400k transmission line between Tamnar in Chhattisgarh and Goa. Sterlite had cut more than 16,000 trees at a place called Sangod, to make way for a substation, which is a node through which the 400k transmission line would decentralise into other power lines across Goa. <a href="http://epaper.heraldgoa.in/articlepage.php?articleid=OHERALDO_GOA_20211208_5_2&width=266px&edition=oHeraldo&curpage=5" target="_blank">Visuals of the trees being cut resulted in much public outrage and also led to a case against the project proponents for the illegal destruction of the trees.</a></p><p> Due to pressure from the citizen’s campaign as well as legal action by <a href="http://goafoundation.org/" target="_blank">The Goa Foundation, the Central Empowered Committee of the Supreme Court strongly recommended</a> that the new 400 k transmission line be constructed over the old 110 k and 220 k lines. This would mean that the new line would not cut through fresh forest but would instead be built on the old defunct lines as well as be built high enough so that they are above the forest canopy and therefore does not disturb the forest. <a href="https://timesofindia.indiatimes.com/city/goa/sc-quashes-railways-nod-for-mollem-double-tracking/articleshow/91452397.cms" target="_blank">SC verdict that accepted the CEC findings on the line.</a></p> ',
            location: {
                center: [74.219466, 15.361643], 
                zoom: 10.5,
                pitch: 10,
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
                     layer: 'sangod',
                     opacity: 1,
                     //duration: 5000
                 },
				{
                     layer: '3translines',
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
            image: '',
            description: '<p>The proposed project cuts through 30 villages in Goa, crossing 9 rivers, agricultural fields and mangroves. (info from this <a href="https://docs.google.com/document/d/1G3W7Wli9VXMppMcWlcoJdl2VP1G2k3im70b25YQIvBU/edit?usp=sharing" target="_blank">research report to CEC).</a></p><p> There is anecdotal evidence from villagers who live near the old 220 and 110 k transmission lines to say that the power lines were viewed as dangerous. On one account a villager stated that one of the local cattle was electrocuted as one power line snapped during a monsoon storm. Villagers who have their fields below the lines fear for their lives and often prefer to not work in the fields that are below the line.</p><p>The villagers fear that there will be an increase in risk with the development of the 400 k line which is also set to move through the villages bordering the sanctuary.</p><p>In another incident, an areca nut farmer stated that his entire farm as well as a few neighbouring farms will have to be cut down as the line would pass over their farms. The farmers would then have to apply for compensation from the government, however this compensation will not be able to support them financially as it does not compare to the value of their farms.</p> ',
            location: {
                center: [74.272112, 15.365910],
                zoom: 10,
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
                     opacity: 1,
                     //duration: 5000
                 },
				{
                     layer: '3translines',
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
                 },
				 {
                     layer: '3translines',
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
				 {
                     layer: 'sangod',
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
                     layer: 'originalhighway',
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
            description: 'Coal pollution, damage to properties, a lot of the houses that will be damaged for the line are heritage structures. Link to be included.',
            location: {
                center: [74.272112, 15.365910],
                zoom: 10,
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
                 },
				 {
                     layer: 'originalhighway',
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
            id: 'OriginalHighway',
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
				 {
                     layer: 'nh4a-expansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 
			],
            onChapterExit: [
				
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
                     layer: 'nh4a-expansion',
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
                     layer: 'railwayexpansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 
				 ]
        }
    ]
};
