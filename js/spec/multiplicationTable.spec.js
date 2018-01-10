/**
 * Created by Mahmoud on 09/01/2018.
 */


/**
 * Method that takes an Array of the size n and returns a two dimensional Array of the size [n+1][n+1]
 * @param arr is an Array of the size n
 * @returns {Array} of the size [n+1][n+1] that represent the multiplication matrix generated by multiplying the input array by itself
 */
function generateMultiplicationMatrix(arr){

    // Create variable n that holds the length of the input array
    var n = arr.length;

    // Create matrix Array, a multi dimensional Array of the size [n+1][n+1]
    var matrix = new Array(n+1);
    for (var i = 0; i < n+1; i++) {
        matrix[i] = new Array(n+1);
    }

    // Set the values of the multiplication matrix
    // The top row and left column hold the values from the input array
    for(var i = -1; i < n; i++) {
        for(var j = -1; j < n; j++) {
            if( i == -1 && j==-1 ) {
                matrix[i+1][j+1]= "*";
            }
            else if( i == -1 && j!=-1 ) {
                matrix[i+1][j+1]= arr[j];
            }
            else if(j==-1 && i!=-1) {
                matrix[i+1][j+1]= arr[i];
            }
            else {
                matrix[i+1][j+1] = arr[i] * arr[j];
            }
        }
    }
    return matrix;
}


describe("multiplication matrix generator",function () {
    it("should be defined", function () {
        var arr = [];
        expect(generateMultiplicationMatrix(arr)).toBeDefined;
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

    it("returns the multiplication matrix for the input array", function () {
        var arr1 = [5,4,3,2,1];
        var matrix = generateMultiplicationMatrix(arr1);
        var n = matrix.length;
        for(var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                if (i == 0 && j == 0) {
                    expect(matrix[i][j]).toEqual("*");
                }
                else if (i == 0 && j != 0) {
                    expect(matrix[i][j]).toEqual(arr1[j-1]);
                }
                else if (j == 0 && i != 0) {
                    expect(matrix[i][j]).toEqual(arr1[i-1]);
                }
                else {
                    expect(matrix[i][j]).toEqual(arr1[i-1] * arr1[j-1]);
                }
            }
        }

        var arr2 = [1,2,3,4,5,6,7,8,9,10];
        var matrix2 = generateMultiplicationMatrix(arr2);
        var n = matrix2.length;
        for(var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                if (i == 0 && j == 0) {
                    expect(matrix2[i][j]).toEqual("*");
                }
                else if (i == 0 && j != 0) {
                    expect(matrix2[i][j]).toEqual(arr2[j-1]);
                }
                else if (j == 0 && i != 0) {
                    expect(matrix2[i][j]).toEqual(arr2[i-1]);
                }
                else {
                    expect(matrix2[i][j]).toEqual(arr2[i-1] * arr2[j-1]);
                }
            }
        }

        var arr3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
        var matrix3 = generateMultiplicationMatrix(arr3);
        var n = matrix3.length;
        for(var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                if (i == 0 && j == 0) {
                    expect(matrix3[i][j]).toEqual("*");
                }
                else if (i == 0 && j != 0) {
                    expect(matrix3[i][j]).toEqual(arr3[j-1]);
                }
                else if (j == 0 && i != 0) {
                    expect(matrix3[i][j]).toEqual(arr3[i-1]);
                }
                else {
                    expect(matrix3[i][j]).toEqual(arr3[i-1] * arr3[j-1]);
                }
            }
        }
    });
});

