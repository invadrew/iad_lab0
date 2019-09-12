<!DOCTYPE html>
<html lang="ru">
<head>
    <meta content="text/html; charset=utf-8">
    <title>Лабораторная работа #1</title>

    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="script.js" defer></script>
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

        <?php
            session_start();
            if (sizeof($_SESSION['history'])){
                include 'gridder.php';
            }
        ?>
    </div>
</body>
</html>
