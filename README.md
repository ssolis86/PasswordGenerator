# PasswordGenerator

## Description

https://ssolis86.github.io/PasswordGenerator/ is a web application that generates a random password between 8 - 128 characters  and four characteristics chosen by the user.

Supported Languages

English

## Technology Stack

### Frontend

- HTML 
- CSS

### Backend

- Javascript

# Phase 1

## Division of Labor

* Stephen
    * Established variables for upperCase option, lowerCase option, # of characters, and special characters.
    * Implimented if-statements check through every variable with the user to ask what options meet their needs.
    * Used a for-statement takes the users decisions and uses the Math.random function to generate the random characters for each character within the password.
    
## User Interface

Landing Page
![alt](Assets/Landing_Page.png)
Number of characters prompt
![alt](Assets/number_of_characters_prompt.png)
Error page if number of character parameter is not met
![alt](Assets/error_number_of_characters.png)
Upper case letter prompt
![alt](Assets/uppercase_prompt.png)
Lower case letter prompt
![alt](Assets/lowercase_prompt.png)
Special character prompt
![alt](Assets/specialcharacter_prompt.png)
Ask the user if they would like numbers in their password
![alt](Assets/numbers_prompt.png)
Randomly generated password example (8 character password chosen)
![alt](Assets/password_example.png)


### Testing
Unit and Integration tests 01/21/21

## Challenges
The main challenge of the development of this application was coming up with an efficient solution to take the users input and store it in a variable.  Initially I had far more variables.  I realized the complexity of my original design complicated the implimentation in terms of programming the solution.