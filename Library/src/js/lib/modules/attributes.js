import $ from '../core';

$.prototype.setAttr = function(attr, value = '') {
	for (let i = 0; i < this.length; i++) {
		if (!attr) {
			return this;
		}

		this[i].setAttribute(attr, value);
	}

	return this;
};

$.prototype.getAttr = function(attr) {
	for (let i = 0; i < this.length; i++) {
		return this[i].getAttribute(attr);
	}
};

$.prototype.removeAttr = function(attr) {
	for (let i = 0; i < this.length; i++) {
		if (!attr) {
			return this;
		}

		this[i].removeAttribute(attr);
	}

	return this;
};

$.prototype.toggleAttr = function(attr, value = '') {
	for (let i = 0; i < this.length; i++) {
		if (!attr) {
			return this;
		}
		
		if (this[i].hasAttribute(attr)) {
			this[i].removeAttribute(attr);
		} else {
			this[i].setAttribute(attr, value);
		}
	}

	return this;
};

$.prototype.getAllAttrs = function() {
	for (let i = 0; i < this.length; i++) {
		for (let attr of this[i].attributes) {
			console.log( `${attr.name} = "${attr.value}"` );
		}
	}

	return this;
};