<?php

fscanf(STDIN, "%d %d %d %d", $lightX, $lightY, $thorX, $thorY);

while (TRUE)
{
    fscanf(STDIN, "%d", $remainingTurns);

    $action = "";

    if ($thorY > $lightY) {
        $thorY++;
        $action .= "N";
    }

    if ($thorY < $lightY) {
        $thorY--;
        $action .= "S";
    }

    if ($thorX > $lightX) {
        $thorX--;
        $action .= "W";
    }

    if ($thorX < $lightX) {
        $thorX++;
        $action .= "E";
    }

    echo($action."\n");
}
?>
