# 1.| Insert a char between all letters of a word in a String :
# 	IptVar = "First Middle Last Name"
# 	OptVar =  "F-i-r-s-t M-i-d-d-l-e L-a-s-t N-a-m-e"

# IptVar = "First Middle Last Name"
# OptVar = " ".join("-".join(word) for word in IptVar.split())
# print(OptVar)
# ----------------------------------------------------------------------------------------------------
# 2.| Count the accurance of each char in string - Ignore Case and Ignore Space :
# 	IptVar = "Embedded Passward"
# 	OptVar = { e: 3, m: 1, b: 1, d: 4, p: 1, a: 2, s: 2, w: 1, r: 1 }

# IptVar = "Embedded Passward"
# IptVar= IptVar.replace(" ","").lower()
# OptVar={}
# for char in IptVar:
#     if char in OptVar:
#         OptVar[char]+=1
#     else:
#         OptVar[char]=1
# print(OptVar)
# ----------------------------------------------------------------------------------------------------
# 3.| Convert Coded Text to Proper Case :
# 	var IptVar = "tst_txt"   [O]   var IptVar = "TST_TXT"
# 	var OptVar = "Tst Txt"

IptVar="s"
print(IptVar.upper())
    # for char in IptVar:
    #     if (ord(char)>97):
    #         tempVar=ord(char)+32
    #         print(chr(tempVar))