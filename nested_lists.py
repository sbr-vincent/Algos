if __name__ == '__main__':
    ordered_list = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        ordered_list.append([name, score])
    
    sorted_list = sorted(ordered_list, key=lambda ordered_list: ordered_list[1])
    
    final_list = []
    index = 1
    
    while sorted_list[0][1] == sorted_list[index][1]:
        index += 1
    
    final_list.append(sorted_list[index])
    
    for x in range(index + 1, len(sorted_list)):
        if sorted_list[x][1] == final_list[0][1]:
            final_list.append(sorted_list[x])
    
    for name in sorted(final_list):
        print(name[0])