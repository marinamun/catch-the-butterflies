# 🦋Catching butterflies🦋

Your mission is simple: catch as many butterflies as you can. These graceful insects flutter through the forest, and it's your job to collect them and score points.

## Play now!

Click [here](https://marinamun.github.io/catch-the-butterflies/) to start playing.

## Main Functionalities


**Player Control:** The player can control their character's movement using the arrow keys (e.g., KeyA, KeyD, KeyW, KeyS) to navigate through the game world.

**Obstacles:** Mosquitos act as obstacles in the game. If the player's character collides with a mosquito, they lose a life.

**Defense Mechanism:** The player can defend themselves against mosquitos by pressing the spacebar to eliminate them and prevent losing lives.

**Extra Lives:** Hearts appear as collectible items in the game. When the player collects a heart, they gain an additional life.

**Score:** The player's score increases with each butterfly they successfully catch. The objective is to achieve the highest score possible.

**Game Over:** The game ends when the player runs out of lives. At this point, the game displays a "Game Over" screen, revealing the player's final score.

**Winning Condition:** A winning condition may exist, such as reaching a specific score (e.g., catching 50 butterflies) to win the game.

**Sound Effects:** The game includes various sound effects, such as background music, collision sounds, and shooting sounds, to enhance the gaming experience.

**Restart:** Players can restart the game after a game over by clicking the "Start Again" button.

**Favicon:** A custom favicon is set to enhance the game's branding and appearance in web browsers.


## Backlog functionalities:

**Levels:** Implement multiple levels with increasing difficulty, introducing new challenges, obstacles, and butterfly types as players progress.

**High Scores:** Add a high-score leaderboard to encourage competition among players.

**Mobile App:** Develop a mobile app version of the game for iOS and Android devices.


## Technologies Used:

- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Canvas
- JS Classes
- Local Storage
- JS Audio() and JS Image()

## States:

- Start screen
- Game screen
- Game over screen

# Project Structure:

## script.js
* function startGame()
* startBtn.addEventListener()
* restartBtn.addEventListener()
* document.addEventListener()

## game.js
* Game()
    * constructor()
    * start()
    * gameLoop()
    * update()
    * shoot()

## player.js
* Player()
    * constructor()
    * move()
    * updatePosition()
    * didCollide()
    
## obstacle.js
* Obstacle()
    * constructor()
    * move()
    * updatePosition()
    * didCollide()

## butterfly.js
* Butterfly()
    * constructor()
    * move()
    * updatePosition()

## heart.js
* Heart()
    * constructor()
    * move()
    * updatePosition()

## bullets.js
* Bullets()
    * constructor()
    * move()
    * updatePosition()
    

# Links
### Slides:
Click [here](https://www.canva.com/design/DAFuuY8gWC0/Xli6knLpfNmoYBOMM9275g/edit?utm_content=DAFuuY8gWC0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
### GitHub repository:
Click [here](https://github.com/marinamun/catch-the-butterflies)