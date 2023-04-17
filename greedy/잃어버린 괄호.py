ex = list(input().split('-'))
answer = 0

#숫자 다음 바로 -나오는 애들 분류
if(ex[0] != ''):
  answer = sum(list(map(int,ex[0].split('+'))))
else:
  ex[0] = 0
  
for i in range(1,len(ex)):
  answer -= sum(list(map(int,ex[i].split('+'))))

print(answer)