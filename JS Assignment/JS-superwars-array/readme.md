![alt text](https://github.com/prasanthsteamA/images/blob/main/SteamA-BlackLogo%202%201.png)

## Superwars

Dustin and Lucus are best friends, they spend their weekends watching superhero series and playing superhero games. One Friday in school Mr.Hooper who is their computer science faculty member taught them HTML, CSS, and JavaScript. So what's next? It's Weekend! Lucus and Dustin will be on their laptops. Are they watching series or playing games? Lucus says, No we are building a new game.

Lucus always loves protagonists like most of us. But Dustin is quite crazy he likes antagonists. So now they are collecting a bunch of their favorite Super Heroes and Super-Villains names along with images. Did they tell you about the game that they are building? Uh no. Okay, lemme explain. They are going to facilitate the ultimate war between Super Heroes and Super-Villains. As they are new to these technologies, they need **YOU** to help them build this game. Go to the `src/app.js` file and complete all the unfinished code to propel both of these young champ's dreams.

## What should you do?

- Fork this repo
- Clone this repo
- Practice JavaScript Array Methods - _map, reduce, filter, join_

## How do you submit?

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "SteamA ID"
  git push origin master
  ```

- Create a pull request so your teaching mentors can check your work.

## Starter code

The `src/app.js` contains an array of 20 Super Heroes and Super-Villains. We are talking about the array of 20 _strings_ containing each Super Heroes and Super-Villains names. Here is one example of how the data is displayed:

```javascript
[
    "Spiderman"
]
```

### Tests

Ohh yes! We have our beloved tests, and you already know how this works. Open the `SpecRunner.html` file on your browser and start coding to pass the test. Remember to focus on one test at a time and read carefully the instructions to understand what you have to do.

## Trial 1: MAKE IT SIMPLE !

In `initPlayers()`, `map` the passed constant array and  create JSON Objects, such that each player contain name, strength, image url and type.  
* Use default `strength` as any number.  
* `image` can be sequential i.e. "images/super-"+(i+1)+".png"  
* `type` of player can alternating between hero and villain or your own logic
* It should _return an array_ of player objects.
    ```javascript
    [
        {
            name:"Super Man",
            strength:100,
            img:"images/hero-1.png",
            type:"hero|villain"
        }
    ]
    ```

## Trial 2: SHRINK DOWN !

In `buildPlayers()`, Instead of using for loop, use chaining of Array methods - filter, map and join to loop through the created JSON objects and accumulate HTML 
template as below and _return that HTML template_.
 ```JS
<div class="player">
    <img src="${players[i].image}">
    <div class="name">${players[i].name}</div>
    <div class="strength">${players[i].strength}</div>
</div>
```

## Expected Output

![Superwars](doc/superwars-array.png)
