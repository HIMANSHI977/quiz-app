### ⚙️ Functionality

* **Countdown Start:** The application begins with an animated countdown (3 → 1), after which the user is automatically redirected to the welcome page.

* **Welcome Page:** Displays an introduction and a “Start Quiz” button. On clicking, the quiz begins and initial values (score and question index) are stored using localStorage.

* **Quiz Section:**

  * Displays one question at a time with multiple options.
  * Each question has a timer (10 seconds).
  * A progress indicator shows the current question number.
  * On selecting an answer, buttons are disabled and feedback is shown:

    * Correct answer → highlighted in green
    * Incorrect answer → highlighted in red
  * Automatically moves to the next question after a short delay.

* **Timer Handling:**

  * Countdown decreases every second.
  * Visual warning appears when time is low.
  * If time runs out, the next question loads automatically.

* **Result Page:**

  * Displays the final score along with a performance message.
  * Includes a restart button to retake the quiz.

* **State Management:**

  * localStorage is used to store score and progress across pages.

* **UI/UX:**

  * Animated gradient background with 3D floating elements.
  * Glassmorphism design and smooth transitions for a modern experience.
