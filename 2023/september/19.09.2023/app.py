print("Hello!")

'''

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
high_and_low("1 2 3 4 5")  # return "5 1"
high_and_low("1 2 -3 4 5") # return "5 -3"
high_and_low("1 9 3 4 -5") # return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.


'''


def high_and_low(numbers)
    number_list = numbers.split()

    # Convert each number to an intger 
    number_list = [int(num) for num in number_list]

    # Find the higest and lowest numbers 
    higest = max(number_list)
    lowest = min(number_list)


    # Return the result as a string 
    return f"{higest} {lowest}"


#Test 

import codewars_test as test
from solution import high_and_low

@test.describe("Example Tests")
def fixed_tests():
    @test.it('Test Case 1')
    def basic_test_cases():
        test.assert_equals(high_and_low("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
    @test.it('Test Case 2')
    def basic_test_cases():
        test.assert_equals(high_and_low("1 2 3"), "3 1");
