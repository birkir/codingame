const [hair, cheek, eye, nose, mouth, chin] = readline().split(' ');
const width = 5;
const pad = ' '.repeat((width - chin.length) / 2);

print(hair.repeat(width));
print(cheek+eye+' '+eye+cheek)
print(cheek+' '+nose+' '+cheek);
print(cheek+' '+mouth+' '+cheek);
print(pad + chin);
