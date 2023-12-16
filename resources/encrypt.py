password = input("Enter the password you want to encrypt : ")
encrypted = ''
x=0

for i in password:
    encrypted = encrypted + chr(ord(i) + x)
    x = x + 1
print(encrypted)