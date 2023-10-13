let num = [1, 2, 3, 34]
let b = num.toString()//b is now a string
console.log(b , typeof b)

let c =num.join("_")
console.log(c, typeof c)
let r = num.pop()
console.log(num ,r)

let r = num.push(17)//push returns the new array length
console.log(num,r)



let r = num.shift()
console.log(r,num)

let r = num.unshift()
console.log(r,num)

let num = [1, 2, 3, 4 , 5, 6 ,7]
let num_more = [11, 12, 13, 14, 15]
delete num[0]
console.log(num)
console.log(num.length)

let newArray = num.concat(num_more)
console.log(newArray)
console.log(num, num_more)

