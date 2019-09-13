## *How strong is your password?*
<p align="center">
  <a href="https://ibb.co/KLPszZK"><img src="https://i.ibb.co/CMc9sdP/Screenshot-2019-09-12-at-11-22-43.png" alt="Screenshot-2019-09-12-at-11-22-43" border="0" width=500 align="center"></a>
</p>

### A webpage testing the strength of your password.

By checking your inputted password against set regular expressions, the webpage highlights whether:

(a) your password is at least 6 alphanumeric characters long;
(b) your password contains an uppercase letter;
(c) your password contains an lowercase letter;
(d) and whether your password contains a number.

Based on the above criteria, the webpage returns a password strength score. A 'RESET FORM' button is born so that you can try to improve your password strength score.

Both HTML5 and vanilla JavaScript was used for the client-side validation. HTML5 was used to ensure th form was populated by adding a 'required' attribute to the 'input' HTML element. Once the user input exists, the user's password is validated using vanilla JavaScript to ensure the user's first and/or last names do not appear in the password. This limits the predictability of the user's inputted password.

After improvements, a Google a11y audit described the accessibility of the webpage with a score of 100. The initial accessibility of the webpage was scored at 94.

<a href="https://ibb.co/TwvFH4W"><img src="https://i.ibb.co/RgvVC3j/audit-screenshot-1.png" alt="audit-screenshot-1" border="0"></a>


##### Made by Beamery Graduates, Joao (@Joaoviana) and Thomas (@TKostrzewski).
