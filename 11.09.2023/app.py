"""
Task
Given a string, return if a given letter always appears immediately before another given letter.

Worked Example
("he headed to the store", "h", "e") ➞ True

# All occurences of "h": ["he", "headed", "the"]
# All occurences of "h" have an "e" after it.
# Return True

('abcdee', 'e', 'e') ➞ False

# For first "e" we can get "ee"
# For second "e" we cannot have "ee"
# Return False
Examples
("i found an ounce with my hound", "o", "u") ➞ True

("we found your dynamite", "d", "y") ➞ False
Notes
All sentences will be given in lowercase.
"""


def best_friend(sentence, first_letter, second_letter):
    first_indices = [i for i, letter in enumerate(sentence) if letter == first_letter]
    second_indices = [i for i, letter in enumerate(sentence) if letter == second_letter]

    for first_idx in first_indices:
        if first_idx + 1 not in second_indices:
            return False

    return True

# Shorter way for solving it 
#
#def best_friend(txt, a, b):
	return txt.count(a) == txt.count(a + b)

# Test 
#import codewars_test as test
#from solution import best_friend

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(best_friend('he headed to the store', 'h', 'e'), True)
        test.assert_equals(best_friend('i found an ounce with my hound', 'o', 'u'), True)
        test.assert_equals(best_friend('those were their thorns they said', 't', 'h'), True)
        test.assert_equals(best_friend('we found your dynamite', 'd', 'y'), False)
        test.assert_equals(best_friend('look they took the cookies', 'o', 'o'), False)
        test.assert_equals(best_friend('a test', 't', 'e'), False)
        test.assert_equals(best_friend('abcdee', 'e', 'e'), False)
        test.assert_equals(best_friend('abcde', 'e', 'e'), False)

