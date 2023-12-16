password = ''
encrypted = input ("Enter the password you want to decrypt")
x = 0

for i in encrypted:
    password = password + chr (ord(i) - x)
    x = x + 1

print(password)


