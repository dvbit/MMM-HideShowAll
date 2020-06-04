/* global Module */

/* Magic Mirror
 * Module: MM Pir Hide All
 * By josh mclaughlin
 */

Module.register("MMM-HideShowAll",{

        defaults: {
            fadeInTime: 1000,
			fadeOutTime: 1000,
        },

	getStyles: function() {
		return ["MMM-HideShowAll.css"];
	},

    notificationReceived: function(notification, sender) {
        if (notification === "SHOWALL") {
			this.hide(this.config.fadeOutTime);
		}
		if (notification === "HIDEALL") {
	        this.show(this.config.fadeInTime);
		}
    },
	
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.className = "global-scrim";
		this.hide(this.config.fadeOutTime);
		return wrapper;
	}

});
