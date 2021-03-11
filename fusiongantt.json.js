function myJSONData(){
	let json = {
		"chart": {
			"theme": "fusion",
			"dateformat": "mm/dd/yyyy",
			"caption": "Strategic Plan",
			"captionFontSize": "14",
			"subCaption": "Project Plan : Biocon",
			"subCaptionFontSize": "12"
		},
		"categories": [
			{
				"category": [
					{
						"start": "01/01/2021",
						"end": "06/30/2021",
						"label": "Q1 '21 - Q2 '21"
					},
					{
						"start": "06/30/2021",
						"end": "03/30/2022",
						"label": "Q3 '21 - Q1 '22"
					},
					{
						"start": "03/30/2022",
						"end": "06/30/2023",
						"label": "Q2 '22 - Q2 '23"
					},
					{
						"start": "06/30/2023",
						"end": "06/30/2024",
						"label": "Q3 '23 - Q2 '24"
					},
					{
						"start": "06/30/2024",
						"end": "12/30/2024",
						"label": "Q3 '24 - Q4 '24"
					},
					{
						"start": "12/30/2024",
						"end": "06/30/2025",
						"label": "Q1 '25 - Q2 '25"
					},
					{
						"start": "06/30/2025",
						"end": "09/30/2025",
						"label": "Q3 '25"
					},
					{
						"start": "09/30/2025",
						"end": "12/30/2025",
						"label": "Q4 '25"
					},
					{
						"start": "12/30/2025",
						"end": "02/27/2026",
						"label": "Q1 '26"
					},
					{
						"start": "02/27/2026",
						"end": "02/27/2026",
						"label": "Q1 '26"
					}
				]
			}
		],
		"processes": {
			"fontsize": "12",
			"isbold": "1",
			"align": "left",
			"process": [
				{
					"label": "1. Product selection - *",
					"id": "PSS"
				},
				{
					"label": "2. Development of mfg process -R&D",
					"id": "DRD"
				},
				{
					"label": "3. Development of analytical methods- R&D",
					"id": "ARD"
				},
				{
					"label": "4. Pivotal bio batch -R&D",
					"id": "PRD"
				},
				{
					"label": "5. Tech transfer to plant -R&D/Tech Transfer",
					"id": "TRF"
				},
				{
					"label": "6. Stability data generation-R&D/Tech Transfer",
					"id": "STT"
				},
				{
					"label": "7. Compilation of product development report-R&D",
					"id": "CRD"
				},
				{
					"label": "8 Filing regulatory -R&D *",
					"id": "FRD"
				},
				{
					"label": "9. FDA approval *",
					"id": "FDA"
				},
				{
					"label": "10.Commercial Launch *",
					"id": "CLA"
				}
			]
		},
		"tasks": {
			"showlabels": "0",
			"showenddate": "0",
			"task": [
				{
					"label": "Planned",
					"processid": "PSS",
					"start": "01/01/2021",
					"end": "06/30/2021",
					"id": "1-1",
					"color": "#4567aa",
					"height": "25%",
					"toppadding": "22%"
				},
				{
					"label": "Revised Plan",
					"processid": "PSS",
					"start": "01/15/2021",
					"end": "07/30/2021",
					"id": "1",
					"color": "#A9A9A9",
					"height": "25%",
					"toppadding": "70%"
				},
				{
					"label": "Planned",
					"processid": "DRD",
					"start": "06/30/2021",
					"end": "03/30/2022",
					"id": "2-1",
					"color": "#4567aa",
					"height": "25%",
					"toppadding": "22%"
				},
				{
					"label": "Revised Plan",
					"processid": "DRD",
					"start": "06/30/2021",
					"end": "04/15/2022",
					"id": "2",
					"color": "#A9A9A9",
					"height": "25%",
					"toppadding": "70%"
				},
				{
					"label": "Planned",
					"processid": "ARD",
					"start": "03/30/2022",
					"end": "06/30/2023",
					"id": "3-1",
					"color": "#4567aa",
					"height": "25%",
					"toppadding": "22%"
				},
				{
					"label": "Revised Plan",
					"processid": "ARD",
					"start": "03/30/2022",
					"end": "07/12/2023",
					"id": "3",
					"color": "#A9A9A9",
					"height": "25%",
					"toppadding": "70%"
				},
				{
					"label": "Planned",
					"processid": "PRD",
					"start": "06/30/2023",
					"end": "06/30/2024",
					"id": "4-1",
					"color": "#4567aa",
					"height": "25%",
					"toppadding": "22%"
				},
				{
					"label": "Revised Plan",
					"processid": "PRD",
					"start": "06/30/2023",
					"end": "07/13/2024",
					"id": "4",
					"color": "#A9A9A9",
					"height": "25%",
					"toppadding": "70%"
				},
				{
					"label": "Planned",
					"processid": "TRF",
					"start": "06/30/2024",
					"end": "12/30/2024",
					"id": "5-1",
					"color": "#4567aa",
					"height": "25%",
					"toppadding": "22%"
				},
				{
					"label": "Revised Plan",
					"processid": "TRF",
					"start": "06/30/2024",
					"end": "12/30/2024",
					"id": "5",
					"color": "#A9A9A9",
					"height": "25%",
					"toppadding": "70%"
				},
				{
					"label": "Planned",
					"processid": "STT",
					"start": "12/30/2024",
					"end": "06/30/2025",
					"id": "6-1",
					"color": "#4567aa",
					"height": "25%",
					"toppadding": "22%"
				},
				{
					"label": "Revised Plan",
					"processid": "STT",
					"start": "12/30/2024",
					"end": "07/30/2025",
					"id": "6",
					"color": "#A9A9A9",
					"height": "25%",
					"toppadding": "70%"
				},
				{
					"label": "Planned",
					"processid": "CRD",
					"start": "06/30/2025",
					"end": "09/30/2025",
					"id": "7-1",
					"color": "#4567aa",
					"height": "25%",
					"toppadding": "22%"
				},
				{
					"label": "Revised Plan",
					"processid": "CRD",
					"start": "06/30/2025",
					"end": "10/30/2025",
					"id": "7",
					"color": "#A9A9A9",
					"height": "25%",
					"toppadding": "70%"
				},
				{
					"label": "Planned",
					"processid": "FRD",
					"start": "09/30/2025",
					"end": "12/30/2025",
					"id": "8-1",
					"color": "#4567aa",
					"height": "25%",
					"toppadding": "22%"
				},
				{
					"label": "Revised Plan",
					"processid": "FRD",
					"start": "09/30/2025",
					"end": "12/30/2025",
					"id": "8",
					"color": "#A9A9A9",
					"height": "25%",
					"toppadding": "70%"
				},
				{
					"label": "Planned",
					"processid": "FDA",
					"start": "12/30/2025",
					"end": "02/27/2026",
					"id": "9-1",
					"color": "#4567aa",
					"height": "25%",
					"toppadding": "22%"
				},
				{
					"label": "Revised Plan",
					"processid": "FDA",
					"start": "12/30/2025",
					"end": "03/15/2026",
					"id": "9",
					"color": "#A9A9A9",
					"height": "25%",
					"toppadding": "70%"
				},
				{
					"label": "Planned",
					"processid": "CLA",
					"start": "02/27/2026",
					"end": "03/11/2026",
					"id": "10-1",
					"color": "#4567aa",
					"height": "25%",
					"toppadding": "22%"
				},
				{
					"label": "Revised Plan",
					"processid": "CLA",
					"start": "02/27/2026",
					"end": "04/11/2026",
					"id": "10",
					"color": "#A9A9A9",
					"height": "25%",
					"toppadding": "70%"
				}
			]
		},
		"milestones": {
			"milestone": [
				{
					"date": "06/30/2021",
					"taskid": "1",
					"color": "#f8bd19",
					"shape": "star",
					"tooltext": "Product Selection Complete"
				},
				{
					"date": "12/30/2025",
					"taskid": "8",
					"color": "#f8bd19",
					"shape": "star",
					"tooltext": "Successful Completion of Filing Regulatory"
				},
				{
					"date": "02/27/2026",
					"taskid": "9",
					"color": "#f8bd19",
					"shape": "star",
					"tooltext": "Successful Completion of FDA Approval"
				},
				{
					"date": "03/11/2026",
					"taskid": "10",
					"color": "#f8bd19",
					"shape": "star",
					"tooltext": "Successful Completion of Commercial Launch"
				}
			]
		}
	};

	return json;
}