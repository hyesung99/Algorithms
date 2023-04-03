n = int(input())

distance = list(map(int,input().split()))
distance.append(0)
station = list(map(int,input().split()))
min_price = min(station)
remain_distance = sum(distance)
spend = 0
price = 0
curr = 0
while(curr != n-1):
  #print("curr : " + str(curr))
  #print("remain : " + str(remain_distance))
  
  if(station[curr] == min_price):
    spend += remain_distance * min_price
    #print("min_price")
    break
  else:
    to_go = 0
    this_station = curr
    for i in range(curr,n):
      curr = i
      if(station[this_station] > station[i]):
        
        #print("find cheap station : " + str(price))
        break
      to_go += distance[i]
        
    spend += to_go * station[this_station]
    remain_distance -= to_go
    #print("spend : " + str(spend) + " remain : " + str(remain_distance))

print(spend)