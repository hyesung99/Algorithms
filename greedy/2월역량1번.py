def solution(n,m):

  answer = 0
  
  v = [0] * 12

  for i in range(1, 1+n):
    v[i % m] += 1

  

n,m = int(input())
print(solution(n,m))