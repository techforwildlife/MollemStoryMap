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
    useCustomLayers: true, //set true for enabling custom layers from sources.js
    bookmarks: true,
    chapterReturn: true,
    title: 'Saving Mollem (2020-22)',
    logo: '',
    subtitle: 'A storymap depicting the three linear infrastructure projects that threaten Mollem National Park',
    byline: 'by Technology for Wildlife Foundation',
    mobileview: '<div id="rotate-mobile"><em>To view this storymap on a mobile device, we recommend that you rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Source: OpenStreetMap.com, PARIVESH, DataMeet<br> Created using the <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
	
		{
            id: 'Goa Boundary',
            alignment: 'left',
            hidden: false,
            title: 'The forests of Goa',
            //image: './path/to/image/source.png',
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
                     layer: 'bounds',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'existingline',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'alternate',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'sangod',
                     opacity: 0,
                     //duration: 5000
                 },
				 
				 {
                     layer: 'originalhighway',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'towers',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'infralabels',
                     opacity: 0,
                     //duration: 5000
                 }
			],
            onChapterExit: []
        },
		{
            id: 'Only Mollem',
            alignment: 'left',
            hidden: false,
            title: 'Welcome to Mollem, Goa',
            //image: './path/to/image/source.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>LEGEND can be added here</em></span>',
			//legend: '<span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #906837; "></span><span>  Proposed Transmission Lines</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #e4e021; "></span><span>  Railway Expansion</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #171d16; "></span><span>  Highway Expansion</span>',
            //description: '<p>At the start of the pandemic, the Ministry of Environment, Forests and Climate Change (MoEF&CC) provided forest clearance permission to <a href="https://indianexpress.com/article/india/railway-line-to-road-centre-clears-3-projects-goa-board-says-we-were-used-as-puppets-6487716/" target="_blank">three distinct linear infrastructure projects in Goa</a> that cut through Mollem. These projects consisted of laying an additional track along an existing railway line, the widening of an existing highway and the laying of a new power transmission line through pristine forest. Together, these three projects would result in the fragmentation of this critically important part of the Western Ghats.</p><p> <a href = "https://www.thecitizen.in/index.php/en/NewsDetail/index/13/19098/Mollem:-Lawyers-Highlight-Illegalities-Contradictions-in-Clearances-to-Infra-Projects--" target="_blank">Over 147 scientists, lawyers, ecologists and artists wrote to the National Board for Wildlife (NBWL)  and the MoEF&CC</a>, expressing their concern about the individual and cumulative impact of these projects on Mollem, on Goa and on the Western Ghats. In addition, the provision of these clearances by the government sparked a public outcry which culminated in the formulation of the <a href="https://www.instagram.com/mymollem.goa/?hl=en" target="_blank">Amche Mollem</a> campaign, whose mission was to protect Goa’s forests, and Goa’s future, from these three ill-planned projects. Two years after the initiation of the campaign, the combined efforts of lawyers, ecologists, students, artists, planners, scientists, politicians and writers has resulted in a <a href="https://www.heraldgoa.in/News-Today/Supreme-Court-cancels-NBWL-clearance-for-Railway-Double-Tracking/189502" target="_blank">halt to these projects</a>.</p> ',
            description: '<p>At the start of the pandemic, the Ministry of Environment, Forests and Climate Change (MoEF&CC) provided forest clearance permission to <a href="https://indianexpress.com/article/india/railway-line-to-road-centre-clears-3-projects-goa-board-says-we-were-used-as-puppets-6487716/" target="_blank">three distinct linear infrastructure projects in Goa</a> that cut through Mollem.</p> ',
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
                     layer: 'bounds',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'existingline',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'alternate',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railexpansion',
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
                 },
				 {
                     layer: 'towers',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'infralabels',
                     opacity: 0,
                     //duration: 5000
                 }
            ],
            onChapterExit: [
				
            ]
        },
        {
            id: 'NpBoundary',
            alignment: 'left',
            hidden: false,
            title: 'Proposed infrastructure in Mollem',
            //image: './path/to/image/source.png',
            //caption: 'Source image caption',
            //website: '<a href="https://www.native-land.ca" target="_blank">Native Land website</a>',
            //author: 'Rudo Kemper, Digital Democracy',
            //legend: '<span style="font-size: 0.85em;"><em>LEGEND can be added here</em></span>',
			//legend: '<span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #906837; "></span><span>  Proposed Transmission Lines</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #e4e021; "></span><span>  Railway Expansion</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #171d16; "></span><span>  Highway Expansion</span>',
            description: '<p>These projects consisted of laying an additional track along an existing railway line, the widening of an existing highway and the laying of a new power transmission line through pristine forest. Together, these three projects would result in the fragmentation of this critically important part of the Western Ghats.</p><p> <a href = "https://www.thecitizen.in/index.php/en/NewsDetail/index/13/19098/Mollem:-Lawyers-Highlight-Illegalities-Contradictions-in-Clearances-to-Infra-Projects--" target="_blank">Over 147 scientists, lawyers, ecologists and artists wrote to the National Board for Wildlife (NBWL)  and the MoEF&CC</a>, expressing their concern about the individual and cumulative impact of these projects on Mollem, on Goa and on the Western Ghats. In addition, the provision of these clearances by the government sparked a public outcry which culminated in the formulation of the <a href="https://www.instagram.com/mymollem.goa/?hl=en" target="_blank">Amche Mollem</a> campaign, whose mission was to protect Goa’s forests, and Goa’s future, from these three ill-planned projects. Two years after the initiation of the campaign, the combined efforts of lawyers, ecologists, students, artists, planners, scientists, politicians and writers has resulted in a <a href="https://www.heraldgoa.in/News-Today/Supreme-Court-cancels-NBWL-clearance-for-Railway-Double-Tracking/189502" target="_blank">halt to these projects</a>.</p> ',
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
                     layer: 'existingline',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'alternate',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'railexpansion',
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
                 },
				 {
                     layer: 'towers',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'infralabels',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'bounds',
                     opacity: 0.5,
                     //duration: 5000
                 }
            ],
            onChapterExit: [
				
				 {
                     layer: 'railexpansion',
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
            alignment: 'right',
            hidden: false,
            title: 'Existing & Alternate Transmission Lines',
            image: 'images/Sangod.png',
            legend: '<span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #895b29; "></span><span>  Existing Transmission Line</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #ff0000; "></span><span>  Proposed transmission Lines</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #ecc14b; "></span><span> Proposed Transmission towers</span>',
			description: 'The first project of the three projects discovered by the people on ground in Goa was the 400k transmission line between Tamnar in Chhattisgarh and Goa. Sterlite had cut more than 16,000 trees at a place called Sangod, to make way for a substation, which is a node through which the 400k transmission line would decentralise into other power lines across Goa. <a href="http://epaper.heraldgoa.in/articlepage.php?articleid=OHERALDO_GOA_20211208_5_2&width=266px&edition=oHeraldo&curpage=5" target="_blank">Visuals of the trees being cut resulted in much public outrage and also led to a case against the project proponents for the illegal destruction of the trees.</a></p>',
            location: {
                center: [74.308042,15.369271],
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
                     layer: 'bounds',
                     opacity: 0.5,
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
                     layer: 'alternate',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'nh4a-expansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'towers',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'infralabels',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'transline-villages',
                     opacity: 0,
                     //duration: 5000
                 },
			],
            onChapterExit: [
			/*{
                     layer: 'sangod',
                     opacity: 0,
                     //duration: 5000
                 },*/]
        },
		
		{
            id: 'tlinesAll',
            alignment: 'right',
            hidden: false,
            //title: 'Existing & Alternate Transmission Lines',
            image: 'images/Sangod.png',
            legend: '<span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #895b29; "></span><span>  Existing Transmission Line</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #ff0000; "></span><span>  Proposed transmission Lines</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #ecc14b; "></span><span> Proposed Transmission towers</span>',
			description: '<p> Due to pressure from the citizen’s campaign as well as legal action by <a href="http://goafoundation.org/" target="_blank">The Goa Foundation</a>, the Central Empowered Committee of the Supreme Court strongly recommended that the new 400 k transmission line be constructed over the old 110 k and 220 k lines. This would mean that the new line would not cut through fresh forest but would instead be built on the old defunct lines as well as be built high enough so that they are above the forest canopy and therefore does not disturb the forest. <a href="https://timesofindia.indiatimes.com/city/goa/sc-quashes-railways-nod-for-mollem-double-tracking/articleshow/91452397.cms" target="_blank">SC verdict that accepted the CEC findings on the line.</a></p> ',
            location: {
                center: [74.308042,15.369271],
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
                     layer: 'bounds',
                     opacity: 0.5,
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
                     layer: 'alternate',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'transline-villages',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'nh4a-expansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'towers',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'infralabels',
                     opacity: 0,
                     //duration: 5000
                 }
			],
            onChapterExit: [
			{
                     layer: 'sangod',
                     opacity: 0,
                     //duration: 5000
                 },]
		},
		
		{
            id: 'tlinesImpact',
            alignment: 'right',
            hidden: false,
            title: 'Impact of Expansion',
            image: '',
            legend: '<span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #72f8ed; "></span><span> Impacted Villages</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #ecc14b; "></span><span> Proposed Transmission towers</span>',
			description: '<p>There are 18 communities with ten or more structures each, 13 houses of worship, including the ASI-protected Tambi Surla temple, at least 11 businesses, and one school within the defined boundary line of 150m from the transmission line. Based on these observations, the proposed project will cross 9 rivers, 30 settlements in Goa, as well as mangroves and agricultural regions. More information is available in the <a href="https://docs.google.com/document/d/1G3W7Wli9VXMppMcWlcoJdl2VP1G2k3im70b25YQIvBU/edit?usp=sharing" target="_blank">research report to CEC.</a></p></p><p> There is anecdotal evidence from villagers who live near the old 220 and 110 k transmission lines to say that the power lines were viewed as dangerous. On one account a villager stated that one of the local cattle was electrocuted as one power line snapped during a monsoon storm.</p> ',
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
                     layer: 'bounds',
                     opacity: 0.4,
                     //duration: 5000
                 },
				 {
                     layer: 'existingline',
                     opacity: 0,
                     //duration: 5000
                 },
				{
                     layer: 'alternate',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'transline-villages',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'transmission-expansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'sangod',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railexpansion',
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
				 {
                     layer: 'towers',
                     opacity: 1,
                     //duration: 5000
                 },
			],
            onChapterExit: [
				/*{
                     layer: 'transline-villages',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'transmission-expansion',
                     opacity: 0,
                     //duration: 5000
                 },*/
				{
                     layer: 'towers',
                     opacity: 0,
                     //duration: 5000
                 }, 
				
				 
				 ]
        },
		{
            id: 'tlinesImpact',
            alignment: 'right',
            hidden: false,
            //title: 'Impact of Expansion',
            image: '',
            legend: '<span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #72f8ed; "></span><span> Impacted Villages</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #ecc14b; "></span><span> Proposed Transmission towers</span>',
			description: '<p>Villagers who have their fields below the lines fear for their lives and often prefer to not work in the fields that are below the line.</p><p>The villagers fear that there will be an increase in risk with the development of the 400 k line which is also set to move through the villages bordering the sanctuary.</p><p>In another incident, an areca nut farmer stated that his entire farm as well as a few neighbouring farms will have to be cut down as the line would pass over their farms. The farmers would then have to apply for compensation from the government, however this compensation will not be able to support them financially as it does not compare to the value of their farms.</p> ',
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
                     layer: 'bounds',
                     opacity: 0.4,
                     //duration: 5000
                 },
				 {
                     layer: 'existingline',
                     opacity: 0,
                     //duration: 5000
                 },
				{
                     layer: 'alternate',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'transline-villages',
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'transmission-expansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'sangod',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railexpansion',
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
				 {
                     layer: 'towers',
                     opacity: 1,
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
				{
                     layer: 'towers',
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
            //image: './path/to/image/source.png',
            legend:'<span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #91732b; "></span><span> Existing Railway Line</span>',
			description: '<p>There has been severe criticism from the local population regarding the double-tracking of the Mormugao Port Trust (Goa) - Castlerock (Karnataka) railway line. The existing line passes through 36 villages in Goa, including one of the 3 main cities in the state, Margao.</p>',
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
                     layer: 'bounds',
                     opacity: 0.3,
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
                     layer: 'alternate',
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
                     layer: 'railexpansion',
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
                 },
				 {
                     layer: 'towers',
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
            title: 'Proposed Railway Double tracking',
            //image: './path/to/image/source.png',
			legend:'<span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #91732b; "></span><span> Existing Railway Line</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #e14141; "></span><span> Proposed Double tracking</span>',
            description: '<p>The state leadership cited increase in tourism as the primary purpose behind double-tracking but <a href="https://en.wikipedia.org/wiki/Sagar_Mala_project" target="_blank">The Sagarmala Programme</a> suggests that the expansion of Mormugao Port Trust’s coal handling capacity to be the real reason for the double tracking proposal. The issues raised by concerned citizens include health and pollution which will be a result of the transportation of coal in open carriages via the double tracks. </p>',
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
                     layer: 'bounds',
                     opacity: 0.3,
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
                     opacity: 1,
                     //duration: 5000
                 },
				 {
                     layer: 'railexpansion',
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
					{
                     layer: 'railexpansion',
                     opacity: 0,
                     //duration: 5000
                 },
			]
        },
		
		{
            id: 'Imapacted Villages',
            alignment: 'right',
            hidden: false,
            title: 'Impact of Railway Expansion',
            //image: './path/to/image/source.png',
			legend:'<span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #60f0e9 "></span><span> Impacted Villages \nfrom double tracking</span>',
            description: '<p>The railway lines are intended to travel through densely inhabited places like Margao, Vasco da Gama, Majorda, Cansaulim, as well as several villages, large forest areas, and waterfalls along the Zuari and Dudhsagar Rivers. This project could have an effect on 132 sites in all, and many more could be discovered with careful study. On the basis of the scientific literature and the research given, it can be determined that the double tracking will predominantly have a detrimental impact on the lives of the locals.</p><p><a href="https://www.thecitizen.in/index.php/en/NewsDetail/index/13/19577/Goa-Not-A-Coal-Hub:-Protestors-Block-Railway-Track-in-Midnight-Protests--" target="_blank">On November 1st, 2020, a large group gathered to oppose the South Western Railways\' double-tracking project at the railway track in Chandor, South Goa</a>.Demonstrators protested against the project alleging that it would endanger the lives and the biological variety of the state; while transforming Goa into a coal transportation hub, only in favour of large coal companies. <a href="https://docs.google.com/document/d/1yAkkxvMFBmd2i2vUICKQrL6pKkXxTCDO/edit?usp=sharing&ouid=111925923218539479916&rtpof=true&sd=true" target="_blank">Click here to learn more</a></p>',
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
                     layer: 'bounds',
                     opacity: 0.3,
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
                     layer: 'railexpansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'existingrail',
                     opacity: 0,
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
                     layer: 'railexpansion',
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
            title: 'NH748 - National Highway through Mollem',
            //image: './path/to/image/source.png',
            legend:'<span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #84621f; "></span><span> Existing Highway NH748</span>',
			description: '<p>The national highway extends from Panaji in North Goa to Belgaum in Karnataka and passes through the Mollem National Park. It is 153km long of which 71km lies in Goa. </p>',
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
                     layer: 'bounds',
                     opacity: 0.3,
                     //duration: 5000
                 },
				 {
                     layer: 'existingline',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railexpansion',
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
                     layer: 'railexpansion',
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
            //image: './path/to/image/source.png',
            legend:'<span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #91732b; "></span><span> Existing Highway</span></br><span style="width: 15px; height: 15px; margin:auto; display: inline-block; border: 1px solid gray; vertical-align: middle; border-radius: 2px; background: #e14141; "></span><span> Proposed Highway Expansion</span>',
			description: '<p>Approximately 13 km of the 153 km highway falls within the Mollem National Park and Bhagwan Mahaveer Wildlife Sanctuary. The programme translates to the removal of 12,097 trees and the diversion of around 31.015 ha. of protected forest land in Goa. A new highway is required to ’meet the increased demands of traffic in the area and to reduce travel time, fuel requirements and pollution.’ - according to the state, but this argument falls short. Environmentalists have emphasised the availability of other, shorter routes outside of the area with a high biodiversity and the absence of assessment of "induced demand," which would also result in increased transportation costs, in a letter to the CEC.</p>',
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
                     layer: 'bounds',
                     opacity: 0.3,
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
                     layer: 'railexpansion',
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
                     layer: 'railexpansion',
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
				 ]
        },
		
		
		{
            id: 'Conclusion',
            alignment: 'right',
            hidden: false,
            title: 'Conclusion',
            //image: './path/to/image/source.png',
            description: '<p>As of March 1st 2023, almost 3 years after the MoEF&CC first provided forest clearance permission to these three projects, the story of the projects through Mollem is not yet complete.</p><p>The transmission line: The Supreme Court decreed that the contractor must use the existing alignment through Mollem, from 1996, for the new 400kV line. They are not permitted to destroy the pristine undisturbed forest area within Mollem. The sub-station has also been relocated from Sangod, where the trees were felled illegally, to a site at Dharbondara.</p>',
            location: {
                center: [74.272112, 15.365910],
                zoom: 10.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
			{
                     layer: 'bounds',
                     opacity: 0.5,
                     //duration: 5000
                 },
				 {
                     layer: 'existingline',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railexpansion',
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
                     layer: 'railexpansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 
				 ]
        },
		
		{
            id: 'Conclusion',
            alignment: 'right',
            hidden: false,
            //title: 'Conclusion',
            //image: './path/to/image/source.png',
            description: '<p>The railway line: The Supreme Court cancelled the wildlife clearances provided to the Railways to construct the double-track through Mollem. The Railways have now commissioned the Wildlife Institute of India to conduct a new study. There will be no double-tracking through Mollem until that report is published, leading the way to further clearance applications and more legal action.</p><p>The highway: The Supreme Court is yet to decide on the matter.</p><p>We will create an updated version of this storymap once there are more updates. However, the citizens of Goa continue with their battle to save Mollem from destructive development. For more information, follow @mymollem.goa on Instagram or sign up for updates at this <a href="https://docs.google.com/forms/d/e/1FAIpQLSdkW7v-iYgqMW7-oZxTy9YXti2CKfJTScvu4zH09__QJbXkWA/viewform" target="_blank">link</a>. </p>',
            location: {
                center: [74.272112, 15.365910],
                zoom: 10.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
			{
                     layer: 'bounds',
                     opacity: 0.5,
                     //duration: 5000
                 },
				 {
                     layer: 'existingline',
                     opacity: 0,
                     //duration: 5000
                 },
				 {
                     layer: 'railexpansion',
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
                     layer: 'railexpansion',
                     opacity: 0,
                     //duration: 5000
                 },
				 
				 ]
        }
		
		
    ]
};
