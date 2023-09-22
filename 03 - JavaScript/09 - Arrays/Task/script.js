var names = ['John', 'Jane', 'Bob',, 'Mike'];

for(i=0;i<names.length;i++){
    console.log(names[i]);
}
names.push('Ela');

for(i=0;i<names.length;i++){
    console.log(names[i]);
    if(names[i]=='Jane'){
        break;
    }   
    }

for(i=0;i<names.length;i++){
    if(names[i]==''){
        const removed = names.splice([i],1);
    } 
}
console.log(names);

