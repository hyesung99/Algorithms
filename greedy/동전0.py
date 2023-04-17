
def solution(n,k,type): 

  answer = 0

  for money in reversed(type):    
    answer = answer + k//money
    k = k%money

  return answer

n,k = map(int, input().split())
type = []

for i in range(n):
  type.append(int(input()))

print(solution(n,k,type))