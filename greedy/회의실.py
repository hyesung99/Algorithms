def solution(rooms):

  answer = 0

  rooms.sort(key=lambda x : x[0])
  rooms.sort(key=lambda x : x[1])

  start = rooms[0]
  end = rooms[1]

  for i in range(len(rooms)):
    if rooms[i][0] >= end:
      answer = answer + 1
      end = rooms[i][1]
      
  return answer

n = int(input())
rooms = []

for i in range(n):
  a,b = map(int,input().split())
  rooms.append((a,b))

