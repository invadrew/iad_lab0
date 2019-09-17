<div class="container" id="grid_div">
    <table id="res_grid">
        <caption>Результаты</caption>
        <tr>
            <th>X</th>
            <th>Y</th>
            <th>R</th>
            <th>Result</th>
            <th>Time</th>
            <th>Date</th>
        </tr>
        <?php
            foreach($_SESSION['history'] as $value) {
                echo '<tr>';
                foreach($value as $i) {
                    echo '<td>' . $i . '</td>';
                }
                echo '</tr>';
            }
        ?>
    </table>
</div>
