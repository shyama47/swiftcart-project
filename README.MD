1) What is the difference between null and undefined?
Answar : Undefind means a variable is declared but not assigned a value yet.Javascript sets it automatically. undefined type is undefind . 

Null :null হলো একটি javascript special value যা developer ইচ্ছা করে ব্যবহার করে এটা
বোঝাতে যে এখানে কোনো value নেই। Null type of object.


2) What is the use of the map() function in JavaScript? How is it different from forEach()?
solution : map() array এর প্রতিটা element এ loop চালায় এবং value return করে আর
 array প্রতিটা element নিয়ে নতুন array তৈরি করে।
forEach() শুধু loop চালায়, কোনো value return করে না এবং নতুন array তৈরি করে না ।


3) What is the difference between == and ===?
 solution : === strict equality (value + type  check করে) == Type conversion loose equality (value check করে)


 4) What is the significance of async/await in fetching API data?
 solution : Api fetch সহজ ও readable 
 হয় । .then chain লাগে না , promise  কে syanchonous style handle করতে দেয় । 


5) Explain the concept of Scope in JavaScript (Global, Function, Block).
solution : Global Scope এ
যে কোনো variable পুরো প্রোগ্রামের যেকোনো জায়গা থেকে access করা যায়।
Function Scope
Function এর ভিতরে declare করা variable শুধু ওই function এর ভিতরে access করা যায়।
Function এর বাইরে access করলে error হবে।
Block Scope
Block {} এর ভিতরে declare করা variable শুধু ওই block এর ভিতরে access করা যায়।
Block এর বাইরে access করলে error হবে।
( let / const → block scope
var → function scope )