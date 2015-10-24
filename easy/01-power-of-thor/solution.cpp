#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
    int lightX, lightY, thorX, thorY;

    cin >> lightX >> lightY >> thorX >> thorY; cin.ignore();

    while (1) {

        int remainingTurns;
        cin >> remainingTurns; cin.ignore();

        string action = "";

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

        cout << action << endl;
    }
}
