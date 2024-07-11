 ## Explanation
prompt for input: the `prompt` function is used to get user input for the students marks


convert input: the input is converted from a string to a floating-point number using `parseFloat()`

input validation: check if the input is a valid number between 0 and 100 using `isNaN()`(isNaN check if a value is not-a-Number).if the input is invalid, display an alert and exit the function using the `return`statement


Grade calculate:
  .if the marks are greater than 79,the grade is 'A'
  .if the marks are between 60 and 79(inclusive),the grade is 'B'
  .if the marks are between 50  and 59(inclusive),the grade is 'C'
  .if the marks are between 40 and 49(inclusive),the grade is 'D'
  .if the marks are less than 40,the grade ia 'E'



Display Grade:display the calculated grade using an alert display

       #example usage
.if the user input '85',the function will output 'A'
.if the user input '62',the function will output 'B'
.if the user input '50',the function will output'C'
.if the user input '42',the function will output'D'
.if the user input '30' the function will output'E'



## speed detector

  ## explanation
  constants:
  `speedlimit`:defines the speed limit (70km/h in this case).
  `kmPerDemeritPoint`:determines how many km/h over the limit equate to one demerit point (5km/h per point).
  `pointsThreshold`:specifies the threshold for license (12demerit points)


  Function`calculateDemeritPoint(speed)`:
  .take the `speed` of the car as input 
  .calculate`overspeed` as the defference between `speed` and `speedLimit`


  condition checks :
  .if `speed` is less than or equal to `speedLimit`,prints `"OK"` and returns from the function.
  .otherwise,calculate `demerits` by dividing `overspeed` by `kmPerDemeritPoint` flooring the results to get the whole numbers of demerit point


  output:
  .prints `"points:<demeritPoints>"` if `demeritPoints` is greater than 0.
  .checks if `demeritPoints `exceed `pointsThreshold` (12points) and prints `"License suspended"` if so

  example usage:
  .Demonstrate how  the function works with different speeds:80km/h results in 2 demerits points ,while 150km/h leads to license suspension.

  This program effectively handles different scenarios based on the input speed and provides the appropriate output messages as specified


## Step-by-Step Program Outline:
Input Collection:

Prompt the user to input their basic salary and any benefits (such as allowances, overtime pay, etc.).
Tax Calculation (PAYE):

Use the tax brackets and rates provided by the KRA (Kenya Revenue Authority) to calculate the PAYE.
Determine which tax bracket the salary falls into and apply the corresponding tax rate and deductions.
NHIF Deduction:

Use the NHIF rates provided to calculate the deduction based on the gross salary.
NSSF Deduction:

Calculate the NSSF deduction based on the NSSF rates provided.
Gross Salary Calculation:

Sum up the basic salary and any benefits to get the gross salary.
Net Salary Calculation:

Subtract the total deductions (PAYE, NHIF, NSSF) from the gross salary to obtain the net salary.


## LINK
https://github.com/vantiger69/Toy-problems-Prerequisites