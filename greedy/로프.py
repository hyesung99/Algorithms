def solution(rope,n):
  rope.sort(reverse=True)
  max = 0
  w = 0

  for i in range(n):
    cut = rope[i]
    for j in range(i,n):
      if(cut >= rope[j]):
        w = cut*(j+1)
        break
    if(max < w):
      max = w
      
  return max

n = int(input())

rope = []

for i in range(n):
  rope.append(int(input()))

print(solution(rope,n))