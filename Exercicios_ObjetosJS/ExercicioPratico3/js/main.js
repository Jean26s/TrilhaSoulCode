function  myDisplayer (some){
    document.getElementById("demo1").innerHTML= some;
}

function myCalculator(num1,num2){
    let sum = num1 + num2;
    return sum;
}

let result = myCalculator(5,5);
    myDisplayer(result);

    //---------------------------

    function  myDisplayer2 (something){
        document.getElementById("demo2").innerHTML = something;
    }

    function myCalculator2(num1,num2,myCallback){
        let sum2 = num1 + num2;
        myCallback(sum2);
    }

    myCalculator2(5,5, myDisplayer2);


    setTimeout(function() {myFunction("A mensagem sera exibida aqui ");},3000);

function myFunction(value){
    document.getElementById("demo").innerHTML = value;
}

function myDisplayer(some){
    document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve,myReject){
    let x = 1;

    if (x == 0){
        myResolve("Esta correto");
    }else {
        myReject("Deu erro");
    }
    })

    myPromise.then(
        function(value) {myDisplayer(value);},
        function(error) {myDisplayer(error);}
    );

    function myFunction(){
        return Promise.resolve ("Hello!");
    }
    
    async function myFunction (){
        return "hello";
    }
    
    async function myDisplay(){
        let myPromise = new Promise(function(resolve,reject){
            resolve("Mensagem");
        });
    
        document.getElementById("demo").innerHTML = await myPromise;
    }
    
    myDisplay();