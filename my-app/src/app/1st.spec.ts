describe("first tests", ()=>{
    /*注意：使用“toThrow()”匹配器的正确方法是为expect()提供一个函数，该函数执行的函数可能会或可能不会抛出错误。因此使用下列onlyOddNumbers(4)}，
    onlyOddNumbers(3)}可清晰的显示测试内容。
    it("should know that x is truthy for x=1", ()=>{
        // expect that if we have x=1 & check x - it should be truthy
        let x:number = 1;

        expect(x).toBeTruthy();
        expect(x).not.toBeFalsy();
    });*/

    it("should throw an error if the x parameter is even", ()=>{
        expect(()=>{onlyOddNumbers(4)}).toThrow();
        expect(()=>{onlyOddNumbers(3)}).not.toThrow();
    });

    it("should contain the string 'abc'", ()=>{
        let myArray = ["def","abc", "ghi", "jkl"];
        expect(myArray).toContain("abc");
        let myEmail = "asdf@asdf.com";
        expect(myEmail).toContain("@");
    });

    it("should recognize that 5.99 is close to 6.10 with 0 precision", ()=>{
        let x = 5.99;
        let y = 6.10;

        expect(x).toBeCloseTo(y,0);
        expect(x).not.toBeCloseTo(y,1);
    });

    function onlyOddNumbers(x:number){
        if(x%2 == 0){ // even number
            throw new Error("odd");
        }else{ // odd number
            console.log(x);
        }
    }

    var foo = function (x:boolean, callBack:any) {
        if (x) {
            callBack();
        }
    };

    it("should throw an error if the x parameter is even", ()=>{
        expect(()=>{onlyOddNumbers(4)}).toThrow();
        expect(()=>{onlyOddNumbers(3)}).not.toThrow();
    });

    it("should not call the callBack", function () {
        expect(foo).toBeTruthy();
        foo(false, function () {
            fail("Callback has been called");
        });
    });

})