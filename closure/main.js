function makeCat(initial) {
    let obj= {}
    obj.tiredness=sleep,
    obj.hunger=feed,
    obj.lonliness= play,
    obj.happiness=pet
    
   return obj
}


let sleep=function(time){
    if (this.tiredness - time>=0){
        this.tiredness-=time
        return 'mimicha is tired '
    }
    return "not tired"
}
let play=function(time){
    if (this.lonliness - time>=0){
        this.lonliness-=time
        return 'mimicha want to play   '
    }
    return " dosen't want to play  "
}

let pet=function(time){
    if (this.happiness - time>=0){
        this.happiness-=time
        return 'mimicha is happy '
    }
    return "she is sad"  
}
let feed=function(amount){
    if (this.hinger - amount>=0){
        this.hinger-=amount
        return 'mimicha is hingry '
    }
    return "not hingry"
}