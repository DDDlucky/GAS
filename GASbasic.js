function myFunction() {
  var a = 3;
  Logger.log(a);
}

function myFunction() {
  var a = 7;
  var b = 10;
  var c = a*b;
  Logger.log(c);
}

function myFunction() {
  var price = 100;
  var tax = 1.1;
  Logger.log(price*tax);
}

function myFunction() {
  var price;
  price = 100;
  price = 1000;
  const TAX = 1.1;
  Logger.log(price*TAX);
}

function myFunction() {
  var lastName = '今西';
  var firstName = '康平';
  var fullName = lastName + firstName;
  Logger.log(fullName);
}

function myFunction() {
  var lastName = '今西';
  Logger.log(typeof lastName);
}

function myFunction() {
  var price = 100;
  Logger.log(typeof price);
}

function myFunction() {
  var flg = true;
  Logger.log(typeof flg);
}

function myFunction() {
  var nums = [10, 20, 30];
  Logger.log(typeof nums);
}

# 配列
function myFunction() {
  var nums = [10, 20, 30];
  Logger.log(nums[0]);
}

function myFunction() {
  var nums = [10, 20, 30];
  nums[0] = 40;
  Logger.log(nums);
}

function myFunction() {
  var nums = [10, 20, 30];
  nums[3] = 40;
  Logger.log(nums);
}

## メソッド
function myFunction() {
  var nums = [10, 20, 30];
  nums.push(40);
  Logger.log(nums);
}

function myFunction() {
  var nums = [10, 20, 30];
  nums.push(40);
  Logger.log(nums.length);
}

function myFunction() {
  var nums = [[10, 20, 30],
              [40, 50, 60],
              [70, 80, 90],
              [100, 110, 120]
             ];
  Logger.log(nums);
}

function myFunction() {
  var nums = [[10, 20, 30],
              [40, 50, 60],
              [70, 80, 90],
              [100, 110, 120]
             ];
  Logger.log(nums[1][2]);
}

# オブジェクト（連想配列）
function myFunction() {
  // var scores = [50, 70, 90];
  var scores = {'国語':50, '数学':70, '英語':90};
  Logger.log(scores);
}

function myFunction() {
  // var scores = [50, 70, 90];
  var scores = {'japanese':50, 'math':70, 'english':90};
  Logger.log(scores['japanese']);
  Logger.log(scores.japanese);
}

function myFunction() {
  // var scores = [50, 70, 90];
  var scores = {'japanese':50, 'math':70, 'english':90};
  scores['science'] = 100;
  Logger.log(scores);
}

function myFunction() {
  // var scores = [50, 70, 90];
  var scores = {'japanese':50, 'math':70, 'english':90};
  scores['science'] = 100;
  Logger.log(scores.science);
}


function myFunction() {
  Logger.log(100==100);
}

function myFunction() {
  Logger.log(100!=100);
}

function myFunction() {
  Logger.log(100<101);
}

function myFunction() {
  Logger.log(100>=100);
}

function myFunction() {
  Logger.log(2==='2');
}

# if文
function myFunction() {
  if(3>2){
    Logger.log('条件が正しかったです');
  }

}

function myFunction() {
  if(2>3){
    // trueの時の処理
    Logger.log('条件が正しかったです');
  }else{
    // falseの時の処理
    Logger.log('条件が正しくなかったです')
  }
}


function myFunction() {
  var a = 1000;
  if(a <= 100){
    Logger.log('aは100以下です。');
  }else if(a <= 1000){
    Logger.log('aは1000以下です。');
  }else{
    Logger.log('aは1000より大きい');
  }
}


