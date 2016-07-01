var Slider =
{
	slides: undefined,
	current: 0,
	interval: undefined,
	ellapsed: 5000,

	right:  -1,

	init: function()
	{
		this.slides = document.getElementsByClassName("match");
		this.to_center(this.slides[0]);
		this.interval = setInterval(this.update, this.ellapsed);
	},

	update: function()
	{
		var self = Slider;

		if (self.right >= 0)
			self.to_left(self.slides[self.right]);

		self.to_right(self.slides[self.current]);
		self.right = self.current;

		self.current++;
		if (self.current == self.slides.length)
			self.current = 0;

		self.to_center(self.slides[self.current]);
	},

	to_center: function(dom)
	{
		dom.style.transition = "all 500ms ease";
		dom.style.right = "50%";
		dom.style.transform = "translateX(50%)";
	},

	to_right: function(dom)
	{
		dom.style.right = "-30%";
		dom.style.transform = "none";
	},

	to_left: function(dom)
	{
		dom.style.transition = "none";
		dom.style.right = "120%";
	}
}

window.addEventListener("load", function()
{
	Slider.init();
}, false);
