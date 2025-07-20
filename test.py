
# run = True
# totalVariation = 0
# end = 1

# while run:
#     totalVariation += max(a[:end]) - min(a[:end])
#     if len(a) > end:
#         end += 1
#     else:
#         run = False

# print(totalVariation)

class Problem131:
    def orderElements(self, A):
        run = True
        totalVariation = 0
        end = 1

        while run:
            print(totalVariation, A[:end], max(A[:end]), min(A[:end]))
            totalVariation += max(A[:end]) - min(A[:end])
            if len(A) > end:
                end += 1
            else:
                run = False

    	# return totalVariation

        print(totalVariation)


# b =  [203, 201, 202]
b =  [3,1,2]
a = Problem131()
a.orderElements(b)