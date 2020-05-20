class Solution:
    def decodeString(self, s: str) -> str:
        
        stack = []
        mult = 0
        currStr = ""
        
        #check each character is input string
        for char in s:
            if char == '[':
                stack.append(currStr)
                stack.append(mult)
                currStr = ""
                mult = 0
                
            elif char == ']':
                count = stack.pop()
                prevStr = stack.pop()
                currStr = prevStr + currStr * count 
            
            #allow for multi-digit numbers for the multiplier
            elif char.isdigit():
                mult = mult *10 + int(char)
                
            else: #char is alpha by default
            
                currStr += char  
                
        return currStr