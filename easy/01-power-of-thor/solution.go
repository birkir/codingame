package main

import "fmt"

func main() {
    var lightX, lightY, thorX, thorY int
    fmt.Scan(&lightX, &lightY, &thorX, &thorY)

    for {
        var remainingTurns int
        fmt.Scan(&remainingTurns)

        var action string;

        if (thorY > lightY) {
            thorY--;
            action += "N";
        }
        if (thorY < lightY) {
            thorY++;
            action += "S";
        }
        if (thorX > lightX) {
            thorX--;
            action += "W";
        }
        if (thorX < lightX) {
            thorX++;
            action += "E";
        }

        fmt.Println(action)
    }
}
