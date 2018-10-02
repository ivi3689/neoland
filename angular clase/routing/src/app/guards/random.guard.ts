import{CanActivate} from '@angular/router'

export class RandomGuard implements CanActivate{

canActivate(){
	
	let num = Math.random()*100
	console.log(num)
	if(num > 70){
		return false
	}
	return true
}
}