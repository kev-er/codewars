print("Hello World!")

'''

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

'''
#1 first way to solve this challgenge 
def to_jaden_case(string):

    words = string.split() #Split the input into words 
    jaden_cased_words = [word.capitalize() for word in words] # Capitalize each word
    return ' '.join(jaden_cased_words)  # Join the words back together with spaces



#2nd way to solve 




#Test
from solution import to_jaden_case
import codewars_test as test


@test.describe('Sample test')
def basic_tests():
    @test.it('Simple text')
    def _():
        quote = "How can mirrors be real if our eyes aren't real"
        test.assert_equals(to_jaden_case(quote), "How Can Mirrors Be Real If Our Eyes Aren't Real")

