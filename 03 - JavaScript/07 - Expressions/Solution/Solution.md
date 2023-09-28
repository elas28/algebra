
### 1. Zadatak
```
var i = 3;

while (i < 21) {
	i++;
	if (i % 9 === 0) {
		continue;
	}
	console.log(i);
}
```

### 2. Zadatak
Odgovor: 16

DODATNO OBJAŠNJENJE

```
var varOne = 0;
for (i = 0; i < 4; i++){
    console.log('PRVA PETLJA (i): ' + i);
    for (j = 0; j < 4; j++){
        console.log('DRUGA PETLJA (j): ' + j);
        varOne++;
    }
    console.log(varOne);
}

console.log('Final output is: ' + varOne);
```