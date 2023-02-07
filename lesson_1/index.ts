type TObj = {
	name: string
}
interface IObj {
	name: string
	age: number
	fruits: (string | number)[]
}

const obj: IObj = {
	name: 'true',
	age: 55,
	fruits: ['hello', '5555', 5555],
}

const sayHi = (name: string): string => {
	return `hello ${name}`
}

sayHi('Arsen')

const sum = (num1: number, num2: number): number => {
	return num1 + num2
}

sum(6, 8)
