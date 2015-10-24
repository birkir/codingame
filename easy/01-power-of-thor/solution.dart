import 'dart:io';
import 'dart:math';

void main() {
    List inputs;
    inputs = stdin.readLineSync().split(' ');
    int lightX = int.parse(inputs[0]);
    int lightY = int.parse(inputs[1]);
    int thorX = int.parse(inputs[2]);
    int thorY = int.parse(inputs[3]);

    while (true) {
        int remainingTurns = int.parse(stdin.readLineSync());
        var action = "";

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

        print(action);
    }
}
