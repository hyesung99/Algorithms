
n = int(input())
p = input().split()
p = list(map(int, p))

def solution(n,p):
  time_spend = 0

  p.sort()  
  time_spends = []

  for i in p:
    time_spend = time_spend + i
    time_spends.append(time_spend)  


  return sum(time_spends)

print(solution(n,p))
