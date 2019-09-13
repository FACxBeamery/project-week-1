## *How strong is your password?*
<p align="center">
  <a href="https://ibb.co/KLPszZK"><img src="https://i.ibb.co/CMc9sdP/Screenshot-2019-09-12-at-11-22-43.png" alt="Screenshot-2019-09-12-at-11-22-43" border="0" width=500 align="center"></a>
</p>

### A webpage testing the strength of your password.

A user needs a way to test the strength of, and therefore, improve their password to achieve better security.

To achieve this:
1. The user needs a way to input their password into the webpage. This was fulfilled by including a form;
2. The user needs to understand what a 'strong' password looks like. Adding dynamic 'checkpoints' to their input reveals the strength criteria that the program is following. 
3. Filling out their first and last name points out the need to avoid using these data in their password. 

By checking the inputted password against set regular expxtressions, the webpage highlights whether:

* your password is at least 6 alphanumeric/diacritic characters long;
* your password contains an uppercase letter;
* your password contains an lowercase letter;
* and whether your password contains a number.


Based on the above criteria, the webpage returns a password strength score. If the first and/or last name are included in the password, the program will warn the user. 
A 'RESET FORM' button is born so that you can try to improve your password strength score.

Both HTML5 and vanilla JavaScript was used for the client-side validation. HTML5 was used to ensure the form was populated by adding a 'required' attribute to the 'input' HTML element. Once the user input exists, the user's password is validated using vanilla JavaScript to ensure the user's first and/or last names do not appear in the password. This limits the predictability of the user's inputted password.

After improvements, a Google a11y audit described the accessibility of the webpage with a score of 100. The initial accessibility of the webpage was scored at 94.

<a href="https://ibb.co/TwvFH4W"><img src="https://i.ibb.co/RgvVC3j/audit-screenshot-1.png" alt="audit-screenshot-1" border="0"></a>




##### Made by Beamery Graduates, Joao (@Joaoviana) and Thomas (@TKostrzewski).
