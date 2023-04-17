def solution(sugar):

  n = 0
  m = 0

  while(sugar%5 != 0):
    n = n+1
    sugar = sugar - 3
    #print(sugar)

    if (sugar < 0):
      return -1

  m= sugar//5

  while(sugar-15 >= 0 and n-5 >= 0):
    m = m+3
    n = n-5
    sugar = sugar - 15

  #print(n,m)
  return (n+m)
  

sugar = int(input())
print(solution(sugar))



