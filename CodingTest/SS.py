T = int(input())
for test_case in range(1, T + 1):
    answer = 0
    cnt = 0
    N, K =  map(int, input().split())
    num_array = [int(num) for num in input().split()]
    num_array.sort()
    num_list = []
    already_num = []
    for i in range(0, N):
        if num_list.count(num_array[i]) > 0 :
            already_num.append(num_array[i])
        else :
            num_list.append(num_array[i])
    num_list.sort()

    for i in range(0, len(num_list)):
        for j in range(0, len(num_list)):
            cnt_left = 1
            cnt_right = 1
            if already_num.count(num_array[i]) > 0:
                cnt_left = 2 ** already_num.count(num_array[i])
            elif already_num.count(num_array[j]) > 0:
                cnt_right = 2 ** already_num.count(num_array[j])     
            
            if cnt_left != 1 or cnt_right != 1:
                cnt += cnt_left * cnt_right
            else :
                cnt += 1
            if cnt == K:
                answer = num_array[i]+num_array[j]
                break

    print("%d" %answer )