def find_missing_number(arr):
    n = len(arr) + 1
    total_sum = (n * (n + 1)) // 2
    arr_sum = sum(arr)
    return total_sum - arr_sum

arr = [1, 3, 4, 5, 6, 7, 8, 9, 10]
missing_number = find_missing_number(arr)
print("The missing number is:", missing_number)