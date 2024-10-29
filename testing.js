//3,4,5,62,1,6

a = [3,4,5,52,6,2];

for(i=0;i<a.length;i++){
    if(a[i]<a[i+1]){
        console.log(a[i])
    }
    else{
       temp = a[i];
       a[i]=a[i+1];
       a[i+1] = temp;
    }
}
