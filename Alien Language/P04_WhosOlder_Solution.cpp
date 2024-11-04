#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int a, b; //Declare the variables
    cin >> a >> b; //Read in the variables
    if(a > b) { //Check if Mark is older
        cout << "Mark";
    } else if(a < b) { //Check if Jerry is older
        cout << "Jerry"; 
    } else { //If neither is older, they are the same age
        cout << "You're the same age!";
    }
    return 0;
}
