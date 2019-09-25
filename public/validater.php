<!DOCTYPE html>
<html lang="ru">
<head>
    <meta content="text/html; charset=utf-8">
    <title>Лабораторная работа #1. Валидатор</title>

    <link rel="stylesheet" href="static/style.css">
</head>
<body>
    <div id="content">
        <?php
            function validate($x, $y, $r) {
                if (!in_array($r, array(1, 1.5, 2, 2.5, 3)) || !is_numeric($x) || $x < -5 || $x > 5 || !is_numeric($y) || $y < -5 || $y > 5) {
                    return "Bad input!";
                } else if (($y >= 0 && $x <= 0 && $y <= $r / 2 && $x >= -$r) || ($y <= 0 && $x <= 0 && $y >= -.5 * $x - $r) || ($y <= 0 && $x >= 0 && $x * $x + $y * $y <= $r * $r)) {
                    return "In";
                } else {
                    return "Out";
                }
            }

            session_start();

            $currentTime = date("H:i:s", strtotime('+3 hour'));
            $startTime = microtime(true);
            $r = (int) $_GET["radius"];
            $x = (float) str_replace(",", ".", $_GET["xCoord"]);
            $y = (float) str_replace(",", ".", $_GET["yCoord"]);

            $result = validate($x, $y, $r);
            $elapsedTime = number_format((microtime(true) - $startTime), 7) . ' sec';

            $resultRow = array($x, $y, $r, $result, $elapsedTime, $currentTime);

            if (!isset($_SESSION['history'])) {
                $_SESSION['history'] = array();
            }

            array_push($_SESSION['history'], $resultRow);

            include 'gridder.php'
        ?>

        <br>

        <a class="container" href="index.php">
            <button>Ввести заново</button>
        </a>

    </div>
</body>
</html>
