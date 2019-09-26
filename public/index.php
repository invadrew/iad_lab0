<!DOCTYPE html>
<html lang="ru">
<head>
    <meta content="text/html; charset=utf-8">
    <title>Лабораторная работа #1</title>

    <link rel="stylesheet" href="static/style.css">
    <link rel="stylesheet" href="static/pokemon.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
    <script type="text/javascript" src="static/validater.js" defer></script>
    <script type="text/javascript" src="static/pokemonizer.js" defer></script>
</head>
<body>
    <header class="container">
        <h1>Группа: P3202</h1>
        <h1>Немов Андрей</h1>
        <h1>Вариант: 202014</h1>
    </header>

    <div id="content">
        <div class="blocks_wrapper">
            <div class="container content_block">
                <img src="assets/area.png">
            </div>

            <div id="user_in" class="container content_block">
                <h3>Введите координаты точки на проверку:</h3>
                <form name="coordinates" method="GET" action="validater.php" onsubmit="return validateForm()">
                    <span class="form_prop">X:</span><input type="text" name="xCoord" required placeholder="[-5:5]">
                        <span id="x_in_error" class="input_error" style="visibility: hidden;"></span>
                    <br>
                    <span class="form_prop">Y:</span><input type="text" name="yCoord" required placeholder="[-5:5]">
                        <span id="y_in_error" class="input_error" style="visibility: hidden;"></span>
                    <br>
                    <span class="form_prop">R:
                        <input id="r1" type="radio" name="radius" value="1"><label for="r1">1</label>
                        <input id="r2" type="radio" name="radius" value="1.5"><label for="r1">1.5</label>
                        <input id="r3" type="radio" name="radius" value="2" checked><label for="r1">2</label>
                        <input id="r4" type="radio" name="radius" value="2.5"><label for="r1">2.5</label>
                        <input id="r5" type="radio" name="radius" value="3"><label for="r1">3</label>
                    </span>
                    <br>
                    <input type="submit" value="Проверить!">
                </form>
            </div>
        </div>

        <div class="blocks_wrapper">
          <?php
              session_start();
              if (sizeof($_SESSION['history'])){
                  include 'gridder.php';
              }
          ?>

          <div id="pokemonizer-div" class="container content_block">
              <p style="display: none"></p>
              <div id="poke-grid" style="display: none">
                  <table>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Gained XP</th>
                    </tr>
                  </table>
                  <br>
              </div>

              <div id='poke-none' style="display: none">
                  <p>There are no pokemons found in this location(((</p>
                  <br>
              </div>

              <div id="loading-img" style="display: none">
                <img src="assets/psyduck.webp" width="70" height="70">
                <br>
              </div>

              <button id="pokemonizer-btn">По Покемонить?</button>
          </div>
        <div>
    </div>
</body>
</html>
