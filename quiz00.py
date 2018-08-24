# coding＝utf-8

# steps to my quiz
# 1- ask levels
# 2- get levels phrase
# 3- for each blanks
# 4- show phrase and ask question
# 5- right answer? congrats or try again

# 3 options of phrases to be chosen by user
# easy, medium, hard
easy_phrase = '''All __0__ things __1__ come __2__ an __3__'''
medium_phrase = ''' A __0__ of a __1__ miles __2__ with a single __3__'''
hard_phrase = '''If you __0__ something __1__ right, you have to __3__ it __3__'''

# create a list with at least 4 blank spaces to be replaced by the right answer
# and the lists containing the answers for the blanks
blanks = ['__0__', '__1__', '__2__', '__3__']
easy_answer = ['good', 'must', 'to', 'end']
medium_answer = ['journey', 'thousand', 'begins', 'step']
hard_answer = ['want', 'done', 'do', 'yourself']


def select_level(input):
    """
    function that gets user input to choose which level to play 
    returns:
    """
    if(input.lower() == "easy"):
        quiz(easy_phrase, easy_answer)
    if(input.lower() == "medium"):
        quiz(medium_phrase, medium_answer)
    if(input.lower() == "hard"):
        quiz(hard_phrase, hard_answer)
    if(input.lower() == "exit"):
        print "GOODBYE"
        return ;

def quiz(phrase, answer):
    """This function shows the phrase according to the user's choice
    compare user answer with the correct answer
    than show if the answer is correct or not
    :param phrase: 
    :param answer: 
    :return: 
    """
    print phrase
    index = 0
    attemp = 0
    maxattemp = 5
    while len(blanks) > index:
        user_answer = raw_input("What is the answer for the " + blanks[index] + "?")
        if user_answer.lower() == answer[index]:
            phrase = nextblank(phrase, answer, index)
            index += 1
        else:
            attemp += 1
            print " Wrong answer, Please try again |Max Chances = 5|"+ str(attemp)+"|"
            if attemp == maxattemp:
                print " GAME OVER"
                level(raw_input("Please choose a level |Easy|Medium|Hard|"))

def nextblank(phrase, answer, index):
    print "Correct"
    phrase = phrase.replace(blanks[index],answer[index])
    print phrase
    index += 1
    maxBlanks = 4
    if index == maxBlanks:
        complete();
    return phrase

def complete():
    """
    display a message of congratulations
    :return: 
    """
    print "CONGRATULATIONS!!!   YOU WIN!!!"

#GREETINGS
print "WELCOME TO MY QUIZ"

level = raw_input("Select a level to play |Easy|Medium|Hard|Exit|").lower()
select_level(level)