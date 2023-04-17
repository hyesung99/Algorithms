cost = int(input())
coins = [500,100,50,10,5,1]

change = 1000-cost

answer = 0

for i in coins:
  answer += change // i
  change = change % i

print(answer)