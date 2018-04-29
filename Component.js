sap.ui.define(["sap/ui/core/UIComponent"], 

function(UIComponent) {
	"use strict";

	return UIComponent.extend("Varucon.OrgChart.Component", {
		metadata: {
			rootView: "Varucon.OrgChart.S1",
			dependencies: {
				libs: [
					"sap.m",
					"sap.suite.ui.commons"
				]
			},
			config: {
				sample: {
					stretch: true,
					files: [
						"S1.view.xml",
						"S1.controller.js"
					]
				}
			}
		}
	});
});