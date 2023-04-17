def solution(n):
  sum = 0
  cnt = 0

  for i in range(1,n+1):
    sum += i
    if(n < sum):
      break
    cnt += 1
    
  return cnt

n = int(input())
print(solution(n))