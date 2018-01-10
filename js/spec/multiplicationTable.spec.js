/**
 * Created by Mahmoud on 09/01/2018.
 */


/**
 * Method that takes an input Array of the size n
 * @param arr is an Array of the size n
 */
function generateMultiplicationMatrix(arr){


}

describe("multiplication matrix generator",function () {
    it("should be defined", function () {
        expect(generateMultiplicationMatrix()).toBeDefined;
    });

    it("takes an Array of the size n and returns a two dimensional Array of the size [n+1][n+1]", function () {
        var arr1 = [1,2];
        var n = arr1.length;
        var m = generateMultiplicationMatrix(arr1);
        var l = m.length;
        var w = m[0].length;
        expect(l).toEqual(w);
        expect(l).toEqual(n+1);

        var arr2 = [1,2,3,4,5,6,7,8,9,10];
        var n = arr2.length;
        var m = generateMultiplicationMatrix(arr2);
        var l = m.length;
        var w = m[0].length;
        expect(l).toEqual(w);
        expect(l).toEqual(n+1);

        var arr3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        var n = arr2.length;
        var m = generateMultiplicationMatrix(arr2);
        var l = m.length;
        var w = m[0].length;
        expect(l).toEqual(w);
        expect(l).toEqual(n+1);

    });
});

