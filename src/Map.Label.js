L.Map.include({
	shownLabel: null,

	showLabel: function (label) {

		//Remember the last shown label to hide it on touch devices
		if (shownLabel) {
			shownLabel.close();
		}
		shownLabel = label;

		return this.addLayer(label);
	}
});
