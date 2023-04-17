n = int(input())

timer = [300,60,10]
timer_count = [0]*3
cnt = 0

for i in range(len(timer)):
  timer_count[i] += n//timer[i]
  n = n%timer[i]
  
if(n != 0):
  print (-1)
else:
  print(' '.join(list(map(str,timer_count))))