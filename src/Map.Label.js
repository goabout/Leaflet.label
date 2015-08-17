L.Map.include({
	shownLabel: null,

	showLabel: function (label) {

		//Remember the last shown label to hide it on touch devices
		if (this.shownLabel) {
			this.shownLabel.close();
		}
		this.shownLabel = label;

		return this.addLayer(label);
	}
});
