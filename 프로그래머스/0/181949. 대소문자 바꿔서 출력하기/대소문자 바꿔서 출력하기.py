str = input()
result = ''

for item in str:
    if item.islower():
        result += item.upper()
    else:
        result += item.lower()

        
        
print(result)