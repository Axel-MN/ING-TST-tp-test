describe("Interval - overlapping", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(8, 12),
        new Interval(15, 16),
        new Interval(17, 22),
        new Interval(10, 20),
        new Interval(8, 21)

    ].forEach(function (interval) {
        it("should overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22)

    ].forEach(function (interval) {
        it("should not overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeFalsy();
        });
    });

    it("overlaps(\"abc\") should return the error 'interval should be an Interval object'", function(){
        var result = (new Interval(0, 10)).overlaps.bind(null, "abc");
        expect(result).toThrow("interval should be an Interval object");
    });
});


describe("Interval - includes", function(){
    it("[0,10] should includes [2,5]", function(){
        var result = (new Interval(0, 10)).includes(new Interval(2, 5));
        expect(result).toBeTruthy();
    });

    it("[0,10] shouldn't includes [15,20]", function(){
        var result = (new Interval(0, 10)).includes(new Interval(15, 20));
        expect(result).toBeFalsy();
    });

    it("[0,10] shouldn't includes [5,15]", function(){
        var result = (new Interval(0, 10)).includes(new Interval(5, 15));
        expect(result).toBeFalsy();
    });

    it("includes(\"abc\") should return the error 'interval should be an Interval object'", function(){
        var result = (new Interval(0, 10)).includes.bind(null, "abc");
        expect(result).toThrow("interval should be an Interval object");
    });
});

describe("Interval - union", function(){
    it("[0,10] U [5,20] should return [0,20]", function(){
        var result = (new Interval(0, 10)).union(new Interval(5, 20));
        expect(result).toEqual([new Interval(0, 20)]);
    });

    it("[5,20] U [0,10] should return [0,20]", function(){
        var result = (new Interval(5, 20)).union(new Interval(0, 10));
        expect(result).toEqual([new Interval(0, 20)]);
    });

    it("[0,10] U [15,20] should return [[0,10], [15,20]]", function(){
        var result = (new Interval(0, 10)).union(new Interval(15, 20));
        expect(result).toEqual([new Interval(0, 10), new Interval(15, 20)]);
    });

    it("union(\"abc\") should return the error 'interval should be an Interval object'", function(){
        var result = (new Interval(0, 10)).union.bind(null, "abc");
        expect(result).toThrow("interval should be an Interval object");
    });
});

describe("Interval - intersection", function(){
    it("[0,10] ∩ [5,20] should return [5,10]", function(){
        var result = (new Interval(0, 10)).intersection(new Interval(5, 20));
        expect(result).toEqual(new Interval(5, 10));
    });

    it("[0,10] ∩ [15,20] should return null", function(){
        var result = (new Interval(0, 10)).intersection(new Interval(15, 20));
        expect(result).toBeNull();
    });

    it("intersection(\"abc\") should return the error 'interval should be an Interval object'", function(){
        var result = (new Interval(0, 10)).intersection.bind(null, "abc");
        expect(result).toThrow("interval should be an Interval object");
    });
});

describe("Interval - exclusion", function(){
    it("exclusion between [0,10] and [5,20] should return [[0,5], [10,20]]", function(){
        var result = (new Interval(0, 10)).exclusion(new Interval(5, 20));
        expect(result).toEqual([new Interval(0, 5), new Interval(10, 20)]);
    });

    it("exclusion between [0,10] and [0,10] should return []", function(){
        var result = (new Interval(0, 10)).exclusion(new Interval(0, 10));
        expect(result).toEqual([]);
    });

    it("exclusion between [0,10] and [5,10] should return [[0,5]]", function(){
        var result = (new Interval(0, 10)).exclusion(new Interval(5, 10));
        expect(result).toEqual([new Interval(0, 5)]);
    });

    it("exclusion between [0,10] and [15,20] should return [[0,10], [15,20]]", function(){
        var result = (new Interval(0, 10)).exclusion(new Interval(15, 20));
        expect(result).toEqual([new Interval(0, 10), new Interval(15, 20)]);
    });

    it("exclusion(\"abc\") should return the error 'interval should be an Interval object'", function(){
        var result = (new Interval(0, 10)).exclusion.bind(null, "abc");
        expect(result).toThrow("interval should be an Interval object");
    });
});