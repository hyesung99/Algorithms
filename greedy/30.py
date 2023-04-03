n = str(input())
n_list = []

for i in n:
  n_list.append(i)

int_n = list(map(int,n_list))
#print(int_n)
#print(sum(int_n))
n_list.sort(reverse=True)

if(sum(int_n)%3 != 0 or not '0' in n_list):
  print(-1)
else:
  #print(n_list)
  print(int(''.join(n_list)))