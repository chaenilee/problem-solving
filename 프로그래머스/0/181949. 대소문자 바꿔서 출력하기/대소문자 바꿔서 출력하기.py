str = input()

original_str = list(str)
upper_str = list(str.upper())

for i in range(len(original_str)):
    if original_str[i] != upper_str[i]:
        original_str[i] = original_str[i].upper()
    else:
        original_str[i] = original_str[i].lower()
        
        
print(''.join(original_str))