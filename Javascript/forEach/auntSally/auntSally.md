### Directions:

My aunt Sally is a peculiar woman. She only likes things that have a double letter in them. She dislikes walking but loves running. She also doesn’t like driving but strangely has a passion for steering.

I will be spending some time with aunt Sally and want to make sure we have a good time. I need your help writing a programme that will help me determine if aunt Sally will like the activities that I have selected for her.

Remember, aunt Sally only likes activites that contain adjacent double letter in them (not single or tripple, or more).

She would like:

skiing
but she would not like:

skiiiing
Your task is to return a string of activities, if there are more than one seperate them by a space.

skiing running
If there are no activites that aunt Sally likes return an empty string.

### Examples:

```javascript
Test.assertEquals(myAuntSally('skiing'),'skiing', 'Aunt Sally loves skiing, since its got a double ll in it');
Test.assertEquals(myAuntSally('bowling dancing'), '', 'Aunt Sally does not like any of these');
Test.assertEquals(myAuntSally('walking running swimmming'),'running', 'Should only pick up activites with double letters');
Test.assertEquals(myAuntSally('walking!!!'), '', 'Should only work on double letters');
```