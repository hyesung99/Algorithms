import math

def dist(x1,x2,y1,y2):
  return ((x2-x1)**2 + (y2-y1)**2)**0.5

def gcd(a,b):
  
  if (a < b):
    a,b = b,a

  while b > 0:
    a, b = b, a % b

  return a

def solution(w,h,x1,y1,x2,y2):  
  
  xs = [x2-2*w, -x2, x2, 2*w-x2, x2+2*w]
  ys = [y2-2*h, -y2, y2, 2*h-y2, y2+2*h]
  dists = []

  holes = [(xs[1],ys[0]), (xs[3],ys[0]),
           (xs[0],ys[1]), (xs[4],ys[1]),
           (xs[0],ys[3]), (xs[4],ys[3]),
           (xs[1],ys[4]), (xs[3],ys[4])
          ]

  obs = [
                             (xs[2],ys[0]),
                (xs[1],ys[1]),(xs[2],ys[1]),(xs[3],ys[1]),
  (xs[0],ys[2]),(xs[1],ys[2]),(xs[2],ys[2]),(xs[3],ys[2]),(xs[4],ys[2]),
                (xs[1],ys[3]),(xs[2],ys[3]),(xs[3],ys[3]),
                             (xs[2],ys[4])
  ]

  for hx,hy in holes   :
    gch = gcd(abs(hx-x1), abs(hy-y1))
    gradh = (hx-x1) // gch, hy-y1 // gch

    no_way = False
    for ox,oy in obs:
      gco = gcd(abs(ox-x1),abs(oy-y1))
      grado = (ox-x1)//gco, (oy-y1)//gco
      if gradh == grado:
        no_way = True
        break

    if(no_way == False):
      dists.append(round(dist(x1,y1,hx,hy)))

  return (dists)
  return min(dists)


print(solution(8,8,1,1,7,7))
