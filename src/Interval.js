Interval = function(start, end) {
    this.start = start;
    this.end = end
};

Interval.prototype.toString = function () {
    return "[" + this.start + "," + this.end + "]";
};

/**
 *
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.overlaps = function (interval) {
    return this.end > interval.start && this.start < interval.end;
};


/**
 * Retourne true si cet interval inclu le parametre interval
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.includes = function (interval) {
	return (this.start <= interval.start && interval.end <= this.end);
};

/**
 * Retourne l'union de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.union = function (interval) {
	var intervals = [];
	if(this.overlaps(interval)){
		var start = (this.start < interval.start) ? this.start : interval.start;
		var end = (this.end > interval.end) ? this.end : interval.end;
		intervals.push(new Interval(start, end));
	} else {
		intervals.push(this);
		intervals.push(interval);
	}
	
	return intervals;
};

/**
 * Retourne l'intersection de deux intervals
 * @param {Interval} interval
 * @returns {Interval|null}
 */
Interval.prototype.intersection = function (interval) {
	if(this.overlaps(interval)){
		var start = (this.start < interval.start) ? interval.start : this.start;
		var end = (this.end > interval.end) ? interval.end : this.end;
		return new Interval(start, end);
	} else {
		return null;
	}
};

/**
 * Retourne l'exclusion de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.exclusion = function (interval) {
	var intervals = [];
	if(!this.includes(interval) || !interval.includes(this)){
		// this and interval are not equal here
		var intersect = this.intersection(interval);
		if(intersect != null){
			if(this.start < intersect.start) intervals.push(new Interval(this.start, intersect.start));
			else if(interval.start < intersect.start) intervals.push(new Interval(interval.start, intersect.start));
			if(this.end > intersect.end) intervals.push(new Interval(intersect.end, this.end));
			else if(interval.end > intersect.end) intervals.push(new Interval(intersect.end, interval.end));
		} else {
			intervals.push(this);
			intervals.push(interval);
		}
	}
	
	return intervals;
};
